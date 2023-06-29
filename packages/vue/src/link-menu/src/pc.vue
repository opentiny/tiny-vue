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
  <div class="tiny-link-menu">
    <div class="tiny-link-menu__nav">
      <a class="tiny-link-menu__nav-item" :href="item.url" v-for="(item, index) in state.listItem" :key="index">
        <slot name="navicon" :slot-scope="item.icon">
          <component :is="item.icon"></component>
        </slot>
        <span>{{ item.label }}</span>
      </a>
      <button type="button" class="tiny-link-menu__btn" @click="showDialog">
        <icon-setting />
      </button>
    </div>
    <tiny-dialog-box
      :visible="state.boxVisibility"
      @update:visible="state.boxVisibility = $event"
      :title="state.titles"
      width="30%"
      :close-on-click-modal="false"
    >
      <div class="tiny-link-menu__filert">
        <tiny-input
          :placeholder="t('ui.linkMenu.placeholder')"
          v-model="state.filterText"
          :suffix-icon="searchIcon"
        ></tiny-input>
      </div>
      <tiny-tree
        :data="state.datas"
        :icon="icon"
        :class="{
          'tiny-link-menu__wrap': wrap,
          'tiny-link-menu__overflow': !wrap ? ellipsis : false
        }"
        :default-expand-all="defaultExpandAll"
        show-checkbox
        node-key="id"
        :filter-node-method="filterNode"
        @check="getValue"
        ref="tree"
      >
        <template #default="{ data }">
          <div class="tree-node">
            <div class="tree-menus-link">
              <a class="tree-node-body" :title="data.label" :href="data.disabled ? void 0 : data.url || void 0">
                <slot name="nodeicon" :slot-scope="data.icon">
                  <component :is="data.icon"></component>
                </slot>
                <span class="tree-node-name">
                  <slot name="node" :label="data.label">
                    {{ data.label }}
                  </slot>
                </span>
              </a>
            </div>
          </div>
        </template>
      </tiny-tree>
      <template #footer>
        <div class="tiny-link-menu__dialog-btn">
          <slot name="foot">
            <tiny-button type="primary" :disabled="state.disabled" :reset-time="0" @click="sureNodevalue">{{
              t('ui.linkMenu.sure')
            }}</tiny-button>
            <tiny-button :disabled="state.disabled" :reset-time="0" @click="hideDialog">{{
              t('ui.linkMenu.cancel')
            }}</tiny-button>
          </slot>
        </div>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/link-menu/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconSetting } from '@opentiny/vue-icon'
import Tree from '@opentiny/vue-tree'
import Input from '@opentiny/vue-input'
import Button from '@opentiny/vue-button'
import DialogBox from '@opentiny/vue-dialog-box'

export default defineComponent({
  props: [
    ...props,
    'data',
    'maxItem',
    'icon',
    'props',
    'title',
    'defaultExpandAll',
    'searchIcon',
    'ellipsis',
    'wrap',
    'getMenuDataSync',
    'keepSelectedNodes'
  ],
  components: {
    TinyTree: Tree,
    TinyInput: Input,
    TinyButton: Button,
    TinyDialogBox: DialogBox,
    IconSetting: iconSetting()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
