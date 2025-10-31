<template>
  <div tiny_mode="pc">
    <tiny-dropdown-item
      v-show="state.inputValue.trim()"
      class="tvp-search-box__filter-item tvp-search-box__dropdown-item tvp-search-box__dropdown-item-init"
      :item-data="{ label: state.inputValue }"
      @item-click="() => selectInputValue(state.inputValue)"
    >
      <span> {{ t("tvp.tvpSearchbox.initUse") }}＂{{ state.inputValue }}＂</span>
    </tiny-dropdown-item>
    <div v-show="!state.propItem.label && state.inputValue.trim()">
      <div v-for="(value, key) in state.matchItems" :key="key">
        <div v-if="value['attr'].length">
          <span class="tvp-search-box__filter-type">{{
            key === "0" ? t("tvp.tvpSearchbox.attributeType") : key
          }}</span>
          <tiny-dropdown-item
            v-for="(item, index) in value['attr']"
            :key="item.label + index"
            class="tvp-search-box__filter-item tvp-search-box__dropdown-item"
            :item-data="item"
            @item-click="() => selectPropItem(item)"
          >
            <span>
              <span v-for="text in item.match" :key="text">
                <span
                  v-if="text.toLowerCase() === item.hightlighStr"
                  class="tvp-search-box__text-highlight"
                  >{{ text }}</span
                >
                <span v-else>{{ text }}</span>
              </span>
            </span>
          </tiny-dropdown-item>
        </div>
        <template v-if="value['attrValue'].length">
          <span class="tvp-search-box__filter-type">{{
            t("tvp.tvpSearchbox.propertyValue", [
              key === "0" ? t("tvp.tvpSearchbox.attributeType") : key,
            ])
          }}</span>
          <tiny-dropdown-item
            v-for="(item, index) in value['attrValue']"
            :key="item.label + index"
            :disabled="item.isChecked"
            class="tvp-search-box__filter-item tvp-search-box__dropdown-item"
            :item-data="item"
            @item-click="() => selectRadioItem(item, true)"
          >
            <span>
              <span v-for="text in item.match" :key="text">
                <span
                  v-if="text.toLowerCase() === item.hightlighStr"
                  class="tvp-search-box__text-highlight"
                  >{{ text }}</span
                >
                <span v-else>{{ text }}</span>
              </span>
            </span>
          </tiny-dropdown-item>
        </template>
      </div>
      <div v-show="state.potentialOptions">
        <span class="tvp-search-box__filter-type">{{
          t("tvp.tvpSearchbox.matched")
        }}</span>
        <div id="potential-loading" class="tvp-search-box__potential-box">
          <div v-if="state.potentialOptions">
            <tiny-dropdown-item
              v-for="(item, index) in state.potentialOptions"
              :key="item.label + index"
              class="tvp-search-box__filter-item tvp-search-box__dropdown-item"
              :item-data="item"
              @item-click="() => selectRadioItem(item, true)"
            >
              {{ item.label }}：
              <span class="tvp-search-box__text-highlight">{{ item.value }}</span>
            </tiny-dropdown-item>
          </div>
        </div>
      </div>
    </div>
    <div
      v-show="state.visible && !state.propItem.label && !state.inputValue.trim()"
      class="tvp-search-box__first-panel"
    >
      <div v-for="(group, key) in state.groupItems" :key="key">
        <span v-if="group.length" class="tvp-search-box__filter-type">{{
          key === "0" ? t("tvp.tvpSearchbox.attributeType") : key
        }}</span>
        <tiny-dropdown-item
          v-for="(item, index) in group"
          :key="(item.field || item.label) + index"
          class="tvp-search-box__dropdown-item"
          :item-data="item"
          @item-click="() => selectPropItem(item)"
        >
          <span :title="item.label">{{ item.label }}</span>
        </tiny-dropdown-item>
      </div>
    </div>
  </div>
</template>

<script>
// Vue2 版本，使用 tiny-vue 的 renderless 架构
import { defineComponent, setup, $props, $prefix } from "@opentiny/vue-common";
import TinyDropdownItem from "@opentiny/vue-dropdown-item";
import { t } from "../utils/i18n.ts";

// 简单的 renderless 函数
const renderless = (
  props,
  hooks,
  { emit }
) => {
  // 优先使用传入的 events/handleEvents 函数，如果没有则使用 emit
  const handleEvents = props.handleEvents || props.events || ((eventName, p1, p2) => {
    emit("events", eventName, p1, p2);
  });

  const selectInputValue = (e) => {
    handleEvents("selectInputValue", e);
  };

  const selectPropItem = (e) => {
    handleEvents("selectPropItem", e);
  };

  const selectRadioItem = (e, v) => {
    handleEvents("selectRadioItem", e, v);
  };

  return {
    selectInputValue,
    selectPropItem,
    selectRadioItem,
    t,
  };
};

const api = ["selectInputValue", "selectPropItem", "selectRadioItem", "t"];

export default defineComponent({
  name: $prefix + "SearchBoxFirstLevelPanel",
  components: {
    TinyDropdownItem,
  },
  props: {
    ...$props,
    state: {
      type: Object,
      default: () => ({}),
    },
    potentialOptions: {
      type: Array,
      default: () => [],
    },
    events: {
      type: Function,
      default: null,
    },
    handleEvents: {
      type: Function,
      default: null,
    },
  },
  emits: ['events'],
  setup(props, context) {
    
    return setup({ props, context, renderless, api });
  },
});
</script>
