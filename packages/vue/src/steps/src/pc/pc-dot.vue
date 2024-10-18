<template>
  <div data-tag="tiny-steps" :class="['tiny-steps tiny-steps-dot', size, { vertical }]">
    <div
      v-for="(node, index) in data"
      :key="index"
      :class="[
        'tiny-steps-block',
        size,
        node[statusField] === 'error' ? 'fault' : node[statusField],
        { 'active': index === active },
        { 'not-vertical': !vertical },
        { 'flex-non': index === data.length - 1 && !vertical }
      ]"
      @click="$emit('click', index, node, $event)"
    >
      <div :class="['block-left', { 'active': index === active }]">
        <div :class="['left-dot', { 'not-vertical': !vertical }]"></div>

        <div
          :class="[
            'left-line',
            { 'hide': !vertical && index === data.length - 1 },
            { 'acetate': index === data.length - 1 },
            { 'not-vertical': !vertical }
          ]"
        ></div>
      </div>

      <slot name="item" :slot-scope="node" :index="index">
        <div class="block-right">
          <!-- title -->
          <div :title="node[nameField]" :class="['title-vertical', { 'not-vertical': !vertical }]">
            {{ node[nameField] }}
          </div>
          <!-- description -->
          <div v-if="node[descriptionField]" :class="['description', { 'not-vertical': !vertical }]">
            {{ node[descriptionField] }}
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/steps/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  emits: ['click'],
  props: [...props, 'vertical', 'nameField', 'statusField', 'data', 'active', 'descriptionField', 'size'],
  setup(props: any, context: any) {
    return setup({ props, context, renderless, api })
  }
})
</script>
