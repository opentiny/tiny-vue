<template>
  <div class="tvp-search-box" @click.stop="showPopover(state, false)">
    <tiny-icon-search class="tvp-search-box__prefix" />
    <tiny-tag
      v-for="(tag, index) in modelValue"
      :key="tag.field + index"
      closable
      class="tvp-search-box__tag"
      :class="editable && tag.type !== 'map' ? 'tvp-search-box__tag-editor' : ''"
      :title="`${tag.label} ${tag.operator || ':'} ${tag.value}`"
      @close="deleteTag(tag)"
      @click.stop="editTag(tag, index, $event)"
    >
      <span class="tvp-search-box__tag-value"
        >{{ tag.label }} {{ tag.operator || ":" }} {{ tag.value }}
      </span>
    </tiny-tag>
    <span v-if="modelValue.length" class="tvp-search-box__placeholder"></span>
    <tiny-form
      ref="formRef"
      :model="state"
      :rules="state.formRules"
      :validate-type="state.validType"
      label-width="0px"
      message-type="block"
      class="tvp-search-box__form"
    >
      <div class="tvp-search-box__input-wrapper">
        <section class="tvp-search-box__prop">
          <span v-show="state.propItem.label"
            >{{ state.propItem.label }}&nbsp;{{
              `${state.operatorValue ? state.operatorValue : ""}&nbsp;`
            }}</span
          >
          <span v-show="state.propItem.value">{{ state.propItem.value }}</span>
        </section>
        <tiny-dropdown
          ref="dropdownRef"
          v-model:visible="state.visible"
          trigger="click"
          class="tvp-search-box__dropdown"
          :show-icon="false"
          lazy-show-popper
          :close-on-click-outside="true"
        >
          <tiny-input
            ref="inputRef"
            v-model="state.inputValue"
            class="tvp-search-box__input"
            :placeholder="state.placeholder"
            :maxlength="maxlength && maxlength + 1"
            @keydown.delete.stop="backspaceDeleteTag"
            @keydown.enter.stop="createTag"
            @input="handleInput"
            @click="handleClick"
          >
            <template #suffix>
              <tiny-icon-close
                v-show="isShowClose"
                class="tvp-search-box__input-close"
                @click.stop="clearTag"
              />
              <span v-show="isShowClose" class="tvp-search-box__input-separator"></span>
              <tiny-tooltip
                v-if="showHelp"
                effect="light"
                :content="t('tvp.tvpSearchbox.help')"
                placement="top"
              >
                <tiny-icon-help-query
                  class="tvp-search-box__input-help"
                  @click.stop="helpClick"
                />
              </tiny-tooltip>
              <tiny-icon-search
                class="tvp-search-box__input-search"
                @click.stop="createTag"
              />
            </template>
          </tiny-input>
          <template #dropdown>
            <tiny-dropdown-menu
              placement="bottom-start"
              popper-class="tvp-search-box__dropdown-menu"
              :style="{ 'max-height': panelMaxHeight }"
              @mouseup.stop="() => {}"
            >
              <div v-show="!state.propItem.label || state.inputValue.trim()">
                <slot
                  v-if="state.instance?.slots['first-panel']"
                  name="first-panel"
                  v-bind="{
                    state,
                    handleEvents,
                  }"
                  @click.stop
                ></slot>
                <TinySearchBoxFirstLevelPanel
                  v-else
                  :state="state"
                  :handleEvents="handleEvents"
                ></TinySearchBoxFirstLevelPanel>
              </div>
              <div v-show="state.propItem.label">
                <slot
                  v-if="state.instance?.slots['second-panel']"
                  name="second-panel"
                  v-bind="{
                    state,
                    pickerOptions,
                    handleEvents,
                    back: () => resetInput(state),
                  }"
                  @click.stop
                ></slot>
                <TinySearchBoxSecondLevelPanel
                  v-else-if="state.prevItem.type !== 'custom'"
                  :state="state"
                  :picker-options="pickerOptions"
                  @events="handleEvents"
                ></TinySearchBoxSecondLevelPanel>
                <div
                  v-else
                  class="tvp-search-box__panel-box"
                  @click="showDropdown(state)"
                >
                  <slot
                    :name="state.prevItem.slotName"
                    v-bind="{
                      showDropdown: () => showDropdown(state),
                      onConfirm: handleConfirm,
                    }"
                    @click.stop
                  ></slot>
                </div>
              </div>
            </tiny-dropdown-menu>
          </template>
        </tiny-dropdown>
      </div>

      <template v-if="editable">
        <tiny-popover
          ref="popoverRef"
          v-model="state.popoverVisible"
          placement="bottom-start"
          :visible-arrow="false"
          trigger="manual"
          popper-class="tvp-search-box__popover"
          class="tvp-search-box__form-popover"
        >
          <template v-if="state.prevItem.type !== 'custom'">
            <div class="tvp-search-box__date-wrap">
              <div class="tvp-search-box__dropdown-start">
                {{ t("tvp.tvpSearchbox.attributeType") }}
              </div>
              <tiny-form-item class="tvp-search-box__number-item">
                <tiny-select
                  v-model="state.selectValue"
                  searchable
                  :disabled="state.prevItem.editAttrDisabled"
                >
                  <tiny-option
                    :key="state.allTypeAttri.label"
                    :label="t('tvp.tvpSearchbox.allProperty')"
                    :value="state.allTypeAttri.label"
                    :disabled="selectItemIsDisable(state.allTypeAttri)"
                    @click="
                      selectPropChange(
                        state.allTypeAttri,
                        selectItemIsDisable(state.allTypeAttri)
                      )
                    "
                  >
                  </tiny-option>
                  <tiny-option
                    v-for="item in state.recordItems"
                    :key="item.label"
                    :label="item.label"
                    :value="item.label"
                    :disabled="selectItemIsDisable(item)"
                    @click="selectPropChange(item, selectItemIsDisable(item))"
                  >
                  </tiny-option>
                </tiny-select>
              </tiny-form-item>
              <div v-if="state.prevItem.operators" class="tvp-search-box__dropdown-end">
                {{ t("tvp.tvpSearchbox.operator") }}
              </div>
              <tiny-form-item
                v-if="state.prevItem.operators"
                class="tvp-search-box__number-item"
              >
                <tiny-select v-model="state.operatorValue">
                  <tiny-option
                    v-for="item in state.currentOperators"
                    :key="item"
                    :label="item"
                    :value="item"
                  >
                  </tiny-option>
                </tiny-select>
              </tiny-form-item>
              <div
                v-if="state.prevItem.type !== 'numRange'"
                class="tvp-search-box__dropdown-end"
              >
                {{ t("tvp.tvpSearchbox.tagValue") }}
              </div>
              <tiny-form-item
                v-if="
                  !['numRange', 'dateRange', 'datetimeRange', 'custom'].includes(
                    state.prevItem.type
                  )
                "
                prop="inputEditValue"
                class="tvp-search-box__number-item"
              >
                <tiny-select
                  v-if="state.currentEditValue?.length > 0"
                  v-model="state.inputEditValue"
                  class="tvp-search-box-select"
                  :multiple="Boolean(state.prevItem.mergeTag)"
                  :allow-create="state.prevItem?.allowCreate"
                  filterable
                  default-first-option
                  clearable
                >
                  <tiny-option
                    v-for="item in state.currentEditValue"
                    :key="item.label"
                    :label="item.label"
                    :value="item.label"
                  >
                  </tiny-option>
                </tiny-select>
                <tiny-input v-else v-model="state.inputEditValue" clearable></tiny-input>
              </tiny-form-item>
              <div
                v-if="state.prevItem.type === 'numRange'"
                class="tvp-search-box__number"
              >
                <div class="tvp-search-box__dropdown-start">
                  {{ t("tvp.tvpSearchbox.minValueText") }}({{ state.prevItem.unit }})
                </div>
                <tiny-form-item
                  :prop="state.curMinNumVar"
                  class="tvp-search-box__number-item"
                  :show-message="state.numberShowMessage"
                >
                  <tiny-input
                    v-model="state[state.curMinNumVar]"
                    type="number"
                    class="tvp-search-box__number-input"
                  ></tiny-input>
                </tiny-form-item>
                <div class="tvp-search-box__dropdown-end">
                  {{ t("tvp.tvpSearchbox.maxValueText") }}({{ state.prevItem.unit }})
                </div>
                <tiny-form-item
                  :prop="state.curMaxNumVar"
                  class="tvp-search-box__number-item"
                >
                  <tiny-input
                    v-model="state[state.curMaxNumVar]"
                    type="number"
                    class="tvp-search-box__number-input"
                  ></tiny-input>
                </tiny-form-item>
              </div>
              <div
                v-if="state.prevItem.type === 'dateRange'"
                class="tvp-search-box__date-wrap"
              >
                <div class="tvp-search-box__dropdown-title">
                  {{
                    state.prevItem.maxTimeLength > 0
                      ? t("tvp.tvpSearchbox.timeLengthTitle", {
                          value: (state.prevItem.maxTimeLength / 86400000).toFixed(1),
                        })
                      : t("tvp.tvpSearchbox.rangeDateTitle")
                  }}
                </div>
                <div class="tvp-search-box__dropdown-start">
                  {{ t("tvp.tvpSearchbox.rangeBeginLabel") }}
                </div>
                <tiny-form-item
                  prop="startDate"
                  :show-message="Boolean(state.prevItem.maxTimeLength)"
                  class="tvp-search-box__date-item"
                >
                  <tiny-date-picker
                    v-model="state.startDate"
                    :format="state.prevItem.format || state.dateRangeFormat"
                    :value-format="state.prevItem.format || state.dateRangeFormat"
                    :picker-options="pickerOptions(state.startDate, 'endDate')"
                    class="tvp-search-box__date-picker"
                  ></tiny-date-picker>
                </tiny-form-item>
                <div class="tvp-search-box__dropdown-end">
                  {{ t("tvp.tvpSearchbox.rangeEndLabel") }}
                </div>
                <tiny-form-item prop="endDate" class="tvp-search-box__date-item">
                  <tiny-date-picker
                    v-model="state.endDate"
                    :format="state.prevItem.format || state.dateRangeFormat"
                    :value-format="state.prevItem.format || state.dateRangeFormat"
                    :picker-options="pickerOptions(state.startDate)"
                    class="tvp-search-box__date-picker"
                  ></tiny-date-picker>
                </tiny-form-item>
              </div>
              <div
                v-if="state.prevItem.type === 'datetimeRange'"
                class="tvp-search-box__date-wrap"
              >
                <div class="tvp-search-box__dropdown-title">
                  {{
                    state.prevItem.maxTimeLength > 0
                      ? t("tvp.tvpSearchbox.timeLengthTitle", {
                          value: (state.prevItem.maxTimeLength / 86400000).toFixed(1),
                        })
                      : t("tvp.tvpSearchbox.rangeDateTitle")
                  }}
                </div>
                <div class="tvp-search-box__dropdown-start">
                  {{ t("tvp.tvpSearchbox.rangeBeginLabel") }}
                </div>
                <tiny-form-item
                  prop="startDateTime"
                  :show-message="Boolean(state.prevItem.maxTimeLength)"
                  class="tvp-search-box__date-item"
                >
                  <tiny-date-picker
                    v-model="state.startDateTime"
                    type="datetime"
                    :isutc8="true"
                    :format="state.prevItem.format || state.datetimeRangeFormat"
                    :value-format="state.prevItem.format || state.datetimeRangeFormat"
                    :picker-options="pickerOptions(state.startDateTime, 'endDateTime')"
                    class="tvp-search-box__date-picker"
                  ></tiny-date-picker>
                </tiny-form-item>
                <div class="tvp-search-box__dropdown-end">
                  {{ t("tvp.tvpSearchbox.rangeEndLabel") }}
                </div>
                <tiny-form-item prop="endDateTime" class="tvp-search-box__date-item">
                  <tiny-date-picker
                    v-model="state.endDateTime"
                    type="datetime"
                    :isutc8="true"
                    :format="state.prevItem.format || state.datetimeRangeFormat"
                    :value-format="state.prevItem.format || state.datetimeRangeFormat"
                    :picker-options="pickerOptions(state.startDateTime)"
                    class="tvp-search-box__date-picker"
                  ></tiny-date-picker>
                </tiny-form-item>
              </div>
            </div>
            <div class="tvp-search-box__bottom-btn">
              <tiny-button size="mini" @click="confirmEditTag(false)">
                {{ t("tvp.tvpSearchbox.cancel") }}
              </tiny-button>
              <tiny-button size="mini" @click="confirmEditTag(true)">
                {{ t("tvp.tvpSearchbox.confirm") }}
              </tiny-button>
            </div>
          </template>
          <div v-else class="tvp-search-box__panel-box">
            <slot
              :name="`${state.prevItem.slotName}-edit`"
              v-bind="{
                showDropdown: () => showPopover(state),
                onConfirm: handleEditConfirm,
              }"
              @click.stop
            ></slot>
          </div>
        </tiny-popover>
      </template>
    </tiny-form>
  </div>
</template>

<script lang="ts">
// Vue2 版本，使用 tiny-vue 的 renderless 架构
import { defineComponent, setup, $props, isVue2 } from "@opentiny/vue-common";
import { renderless, api } from "./renderless.ts";
// 导入组件
import TinyTag from "@opentiny/vue-tag";
import TinyInput from "@opentiny/vue-input";
import TinyDropdown from "@opentiny/vue-dropdown";
import TinyDropdownMenu from "@opentiny/vue-dropdown-menu";
import TinyButton from "@opentiny/vue-button";
import TinyButtonGroup from "@opentiny/vue-button-group";
import TinyTooltip from "@opentiny/vue-tooltip";
import TinyDatePicker from "@opentiny/vue-date-picker";
import TinyForm from "@opentiny/vue-form";
import TinyFormItem from "@opentiny/vue-form-item";
import TinyPopover from "@opentiny/vue-popover";
import TinySelect from "@opentiny/vue-select";
import TinyOption from "@opentiny/vue-option";

import { iconSearch, iconClose, iconHelpQuery } from "@opentiny/vue-icon";

import TinySearchBoxFirstLevelPanel from "./components/first-level-panel.vue";
import TinySearchBoxSecondLevelPanel from "./components/second-level-panel.vue";
import '@opentiny/vue-theme/search-box/index.less'


export default defineComponent({
  model: {
    prop: 'modelValue',
    event: 'update:modelValue'
  },
  props: {
    ...$props,
    tiny_mode: {
      type: String,
      default: "pc",
    },
    modelValue: {
      type: Array,
      default: () => [],
    },
    items: {
      type: Array,
      default: () => [],
    },
    emptyPlaceholder: {
      type: String,
      default: "",
    },
    potentialOptions: {
      type: Object,
      default: () => null,
    },
    showHelp: {
      type: Boolean,
      default: true,
    },
    idMapKey: {
      type: String,
      default: "id",
    },
    defaultField: {
      type: String,
      default: "",
    },
    editable: {
      type: Boolean,
      default: false,
    },
    maxlength: {
      type: Number,
      default: undefined,
    },
    panelMaxHeight: {
      type: String,
      default: "999px",
    },
    splitInputValue: {
      type: String,
      default: ",",
    },
  },
  emits: [
    "update:modelValue",
    "change",
    "search",
    "exceed",
    "first-level-select",
    "clear",
  ],
  components: {
    TinyTag,
    TinyInput,
    TinyDropdown,
    TinyDropdownMenu,
    TinyButton,
    TinyButtonGroup,
    TinyTooltip,
    TinyDatePicker,
    TinyForm,
    TinyFormItem,
    TinyPopover,
    TinySelect,
    TinyOption,
    TinySearchBoxFirstLevelPanel,
    TinySearchBoxSecondLevelPanel,
    // 图标组件
    TinyIconSearch: iconSearch(),
    TinyIconClose: iconClose(),
    TinyIconHelpQuery: iconHelpQuery(),
  },
  setup(props, context) {
    return setup({ props, context, renderless, api });
  },
});
</script>
