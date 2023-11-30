<template>
  <div class="tiny-steps">
    <ul class="tiny-steps-advanced">
      <li
        v-for="(node, index) in data"
        :key="index"
        :style="{ width: space ? state.computedSpace : 100 / data.length + '%' }"
        :class="{
          current: index === active,
          [node[statusField]]: node[statusField]
        }"
        @click="$emit('click', index, node)"
      >
        <slot name="item" :slot-scope="node" :index="index">
          <a class="label" :title="node[nameField]"
            ><span>{{ node[nameField] }}</span></a
          >
          <div v-if="node[countField]" class="count">
            {{ node[countField] }}
          </div>
          <div v-if="node[statusField]" :class="['dot', node[statusField]]">
            <icon-refres v-if="node[statusField] === 'doing'"></icon-refres>
            <icon-yes v-else-if="node[statusField] === 'done'"></icon-yes>
          </div>
        </slot>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/steps/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconRefres, iconYes } from '@opentiny/vue-icon'
import '@opentiny/vue-theme/steps/index.less'

export default defineComponent({
  emits: ['click'],
  components: {
    IconRefres: iconRefres(),
    IconYes: iconYes()
  },
  props: [
    ...props,
    'vertical',
    'showNumber',
    'nameField',
    'statusField',
    'countField',
    'start',
    'data',
    'space',
    'active',
    'reverse'
  ],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
