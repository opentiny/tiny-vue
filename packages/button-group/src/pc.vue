<template>
  <div class="tiny-button-group">
    <slot>
      <ul v-if="!(showMore && showMore > 0)" class="tiny-group-item">
        <li
          v-for="(node, index) in data"
          :key="index"
          :class="{ active: state.value === node[valueField] }"
        >
          <button
            :class="state.attributeValue"
            :style="{
              height:
                size == 'medium'
                  ? '42px'
                  : size == 'small'
                  ? '36px'
                  : size == 'mini'
                  ? '24px'
                  : '',
              'line-height':
                size == 'medium'
                  ? '40px'
                  : size == 'small'
                  ? '34px'
                  : size == 'mini'
                  ? '22px'
                  : ''
            }"
            type="button"
            @click="handleClick(node)"
          >
            {{ node[textField] }}
          </button>
        </li>
      </ul>
      <ul v-else class="tiny-group-item show-more">
        <li
          v-for="(node, index) in state.buttonData"
          :key="index"
          :class="{ active: state.value === node[valueField] }"
        >
          <tiny-button :class="state.attributeValue" @click="handleClick(node)">
            {{ node[textField] }}
          </tiny-button>
        </li>
        <li v-if="data.length > showMore" class="tiny-group-item__more">
          <tiny-popover
            :visible-arrow="false"
            width="200"
            popper-class="tiny-group-item__more-popover"
          >
            <template #reference>
              <tiny-button class="more-button">
                <icon-popup></icon-popup>
              </tiny-button>
            </template>
            <ul class="more-list">
              <li
                v-for="(moreNode, index) in state.moreData"
                :key="index"
                :class="{
                  active: state.value === moreNode[valueField],
                  'more-item': true
                }"
                @click="moreNodeClick(moreNode)"
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

<script>
import {
  renderless,
  api
} from '@opentiny/vue-renderless/button-group/vue'
import { props, setup } from '@opentiny/vue-common'
import Popover from '@opentiny/vue-popover'
import Button from '@opentiny/vue-button'
import { iconPopup,iconWriting } from '@opentiny/vue-icon'

export default {
  props: [
    ...props,
    'size',
    'data',
    'plain',
    'modelValue',
    'disabled',
    'valueField',
    'textField',
    'showMore',
    'showEdit'
  ],
  components: {
    TinyPopover: Popover,
    TinyButton: Button,
    IconPopup: iconPopup(),
    IconWriting: iconWriting()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
