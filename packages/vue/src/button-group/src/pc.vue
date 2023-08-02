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
  <div
    class="tiny-button-group"
    :class="[size ? 'tiny-button-group--' + size : '', border ? '' : 'tiny-button-group--borderless']"
  >
    <slot>
      <ul v-if="!(showMore && showMore > 0)" class="tiny-group-item">
        <li v-for="(node, index) in data" :key="index" :class="{ active: state.value === node[valueField] }">
          <button
            :class="state.attributeValue"
            :style="{
              height: size === 'medium' ? '42px' : size === 'small' ? '36px' : size === 'mini' ? '24px' : '',
              'line-height': size === 'medium' ? '40px' : size === 'small' ? '34px' : size === 'mini' ? '22px' : ''
            }"
            type="button"
            @click="handleClick(node)"
          >
            {{ node[textField] }}
          </button>

          <span
            v-if="node.sup"
            :class="[
              'tiny-group-item__sup',
              {
                'tiny-group-item__sup-text': !node.sup.slot && !node.sup.icon && node.sup.text,
                'tiny-group-item__sup-icon': !node.sup.slot && node.sup.icon,
              },
              typeof node.sup.class === 'string' ? node.sup.class : '',
              ...(Array.isArray(node.sup.class) ? node.sup.class : [])
            ]"
          >
            <slot v-if="node.sup.slot" :name="node.sup.slot" :sup="node.sup" />
            <component v-else-if="node.sup.icon" :is="node.sup.icon"></component>
            <span v-else-if="node.sup.text">{{ node.sup.text }}</span>
          </span>
        </li>
      </ul>
      <ul v-else class="tiny-group-item show-more">
        <li v-for="(node, index) in state.buttonData" :key="index" :class="{ active: state.value === node[valueField] }">
          <tiny-button :class="state.attributeValue" @click="handleClick(node)">
            {{ node[textField] }}
          </tiny-button>

          <span
            v-if="node.sup"
            :class="[
              'tiny-group-item__sup',
              {
                'tiny-group-item__sup-text': !node.sup.slot && !node.sup.icon && node.sup.text,
                'tiny-group-item__sup-icon': !node.sup.slot && node.sup.icon,
              },
              typeof node.sup.class === 'string' ? node.sup.class : '',
              ...(Array.isArray(node.sup.class) ? node.sup.class : [])
            ]"
          >
            <slot v-if="node.sup.slot" :name="node.sup.slot" :sup="node.sup" />
            <component v-else-if="node.sup.icon" :is="node.sup.icon"></component>
            <span v-else-if="node.sup.text">{{ node.sup.text }}</span>
          </span>
        </li>
        <li v-if="data.length > showMore" class="tiny-group-item__more">
          <tiny-popover :visible-arrow="false" width="200" popper-class="tiny-group-item__more-popover">
            <template #reference>
              <tiny-button class="more-button">
                <icon-popup></icon-popup>
              </tiny-button>
            </template>
            <ul class="more-list">
              <li
                v-for="(moreNode, index) in state.moreData" :key="index" :class="{
                  active: state.value === moreNode[valueField],
                  'more-item': true
                }" @click="moreNodeClick(moreNode)"
              >
                {{ moreNode[textField] }}
              </li>
            </ul>
          </tiny-popover>
        </li>
        <li v-if="showEdit" class="tiny-group-item__edit">
          <tiny-button @click="$emit('edit')" class="edit-button">
            <icon-writing></icon-writing>
          </tiny-button>
        </li>
      </ul>
    </slot>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/button-group/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import Popover from '@opentiny/vue-popover'
import Button from '@opentiny/vue-button'
import { iconPopup, iconWriting } from '@opentiny/vue-icon'

export default defineComponent({
  emits: ['change', 'edit', 'update:modelValue'],
  props: [...props, 'size', 'data', 'plain', 'modelValue', 'disabled', 'valueField', 'textField', 'showMore', 'showEdit', 'border'],
  components: {
    TinyPopover: Popover,
    TinyButton: Button,
    IconPopup: iconPopup(),
    IconWriting: iconWriting()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
