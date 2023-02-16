<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->
<template>
  <div class="tiny-detail-page">
    <div class="tiny-detail-page__header">
      <span>{{ state.title }}</span>
      <div class="tiny-detail-page__header-icon" @click="showDialog">
        <IconSetting class="setIconStyle" />
      </div>
    </div>
    <ul class="tiny-detail-page__content">
      <li class="tiny-detail-page__content-item" v-for="(item, index) in state.value" :key="index" v-show="!item.hidden">
        <span class="tiny-detail-page__content-item-span">{{ item.label }}{{ state.textSplit }}</span
        >{{ item.value }}
      </li>
    </ul>
    <tiny-modal v-model="state.isShowDialog" class="tiny-detail-dialog__wrapper" :lock-scroll="false" :title="state.dialogTitle">
      <div class="tiny-detail-dialog">
        <div class="tiny-detail-dialog__header">
          <span>{{ state.labelTitle }}</span>
          <div class="tiny-detail-dialog__header-check">
            <tiny-checkbox v-model="state.checkAll" @change="checkAllHander" :indeterminate="state.indeterminate">{{ state.valueTitle }}</tiny-checkbox>
          </div>
        </div>
        <ul class="tiny-detail-dialog__content">
          <li v-for="(item, index) in state.cloneValue" :key="index" :class="['tiny-detail-dialog__content-item', { active: item.hidden }]">
            <span>{{ item.label }}</span>
            <tiny-checkbox v-model="item.hidden" @click.prevent="checkValueHiddenItem(index)" style="margin-right: 113px"></tiny-checkbox>
          </li>
        </ul>
        <div class="tiny-detail-dialog__footer">
          <tiny-button type="primary" @click="saveHandler">{{ state.saveButton }}</tiny-button>
          <tiny-button @click="closeDialog">{{ state.cancelButton }}</tiny-button>
        </div>
      </div>
    </tiny-modal>
  </div>
</template>

<script>
import Button from '@opentiny/vue-button'
import { iconSetting } from '@opentiny/vue-icon'
import Checkbox from '@opentiny/vue-checkbox'
import Modal from '@opentiny/vue-modal'
import { renderless, api } from '@opentiny/vue-renderless/detail-page/vue'
import { props, setup } from '@opentiny/vue-common'

export default {
  components: {
    IconSetting: iconSetting(),
    TinyButton: Button,
    TinyModal: Modal,
    TinyCheckbox: Checkbox
  },
  props: [...props, 'modelValue', 'valueTitle', 'title', 'textSplit', 'dialogTitle', 'labelTitle', 'tips', 'saveButton', 'cancelButton'],
  emits: ['saveWarning'],
  setup(props, context) {
    return setup({
      props,
      context,
      renderless,
      api,
      extendOptions: { alert: Modal.alert }
    })
  }
}
</script>
