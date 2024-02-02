<template>
  <div class="tiny-dept">
    <tiny-input
      tiny_mode="pc"
      :size="size"
      v-model="state.display"
      :disabled="disabled"
      readonly
      :display-only="displayOnly"
    >
      <template #suffix>
        <icon-popup class="tiny-input__icon tiny-svg-icon" @click="openDialog" />
      </template>
    </tiny-input>
    <tiny-dialog-box
      class="tiny-dept"
      :visible="state.open"
      @update:visible="state.open = $event"
      :close-on-click-modal="false"
      width="550px"
      append-to-body
      @close="closeDialog"
      :title="title"
    >
      <tiny-row class="tiny-dept__search">
        <tiny-col class="tiny-dept__label" :title="t('ui.dept.search')" :span="3">
          {{ t('ui.dept.search') }}
        </tiny-col>
        <tiny-col :span="5">
          <tiny-select
            class="tiny-detp__select"
            v-model="state.searchValue"
            placement="bottom-start"
            :loading="state.loading"
            :placeholder="t('ui.dept.input')"
            filterable
            clearable
            remote
            :remote-method="searchMethod"
            @change="searchChange"
          >
            <li
              class="tiny-option tiny-select-dropdown__item"
              style="
                background: #f1f1f1;
                cursor: auto;
                border-bottom: solid 1px #d9d9d9;
                box-shadow: rgb(241, 241, 241) 0px -6px 0px 6px;
              "
            >
              <span style="float: left; font-size: 12px">{{ t('ui.dept.code') }}</span>
              <span style="float: right">{{ t('ui.dept.name') }}</span>
            </li>
            <tiny-option
              v-for="(option, index) in state.searchOptions"
              :key="index"
              :label="option.hrName"
              :value="option.hrCode"
            >
              <span style="float: left; font-size: 12px">{{ option.hrCode }}</span>
              <span style="float: right; color: #8492a6; font-size: 12px">{{ option.hrName }}</span>
            </tiny-option>
          </tiny-select>
        </tiny-col>
      </tiny-row>

      <tiny-row class="tiny-dept__item" v-for="(dept, index) in deptState" :key="index">
        <tiny-col class="tiny-dept__label" :title="t('ui.dept.' + dept.title)" :span="3">
          {{ t('ui.dept.' + dept.title) }}
        </tiny-col>
        <tiny-col :span="9">
          <tiny-select
            class="tiny-detp__select"
            :ref="'select' + index"
            v-model="dept.value"
            :loading="state.loading"
            filterable
            default-first-option
            clearable
            :disabled="!!index && dept.disable"
            @visible-change="getCurrentList(index, $event)"
            @change="selectChange({ level: index, value: $event })"
          >
            <tiny-option
              v-for="option in dept.options"
              :key="option.hrCode"
              :label="option.hrName"
              :value="option.hrCode"
            ></tiny-option>
          </tiny-select>
        </tiny-col>
      </tiny-row>
      <tiny-row>
        <p class="tiny-dept__label is-selected">
          {{ t('ui.dept.selected') }}
        </p>
        <p class="tiny-dept__selected-info">
          {{ state.labels.join(' > ') }}
        </p>
        <slot name="hrapprover" :slot-scope="state"></slot>
      </tiny-row>
      <template #footer>
        <span class="tiny-toolbar">
          <button type="button" @click="confirm" class="tiny-button tiny-button--primary">
            <span>{{ t('ui.base.confirm') }}</span>
          </button>
          <button type="button" @click="cancel" class="tiny-button tiny-button--default">
            <span>{{ t('ui.base.cancel') }}</span>
          </button>
        </span>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/dept/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { IconPopup } from '@opentiny/vue-icon'
import Input from '@opentiny/vue-input'
import Row from '@opentiny/vue-row'
import Col from '@opentiny/vue-col'
import DialogBox from '@opentiny/vue-dialog-box'
import Select from '@opentiny/vue-select'
import Option from '@opentiny/vue-option'

export default defineComponent({
  components: {
    TinyInput: Input,
    TinyDialogBox: DialogBox,
    TinySelect: Select,
    TinyOption: Option,
    TinyRow: Row,
    TinyCol: Col,
    IconPopup: IconPopup()
  },
  emits: ['open', 'selected', 'cancel', 'change', 'update:modelValue', 'confirm'],
  props: [
    ...props,
    'size',
    'modelValue',
    'disabled',
    'fetchDeptList',
    'fetchDeptByValue',
    'fetchDept',
    'beforeConfirm',
    'autoSelect',
    'title',
    'displayOnly'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
