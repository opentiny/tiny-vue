<template>
  <div class="tiny-statistic">
    <div
      class="tiny-statistic__title"
      v-if="!(title instanceof Object) || (title instanceof Object && title.position !== 'bottom')"
    >
      <div v-if="$slots.title">
        <slot name="title"> </slot>
      </div>
      <div v-else-if="typeof title === 'string'">{{ title }}</div>
      <div v-else-if="title instanceof Object">
        {{ title.value }}
      </div>
    </div>
    <div class="tiny-statistic__slots">
      <div v-if="$slots.prefix || prefix" class="tiny-statistic__prefix">
        <slot name="prefix">
          <span>{{ prefix }}</span>
        </slot>
      </div>
      <span
        :class="[
          'tiny-statistic__description',
          title && title.position === 'bottom' ? 'tiny-statistic__description-margin' : ''
        ]"
        :style="valueStyle"
      >
        {{ state.value }}
      </span>
      <div v-if="$slots.suffix || suffix" class="tiny-statistic__suffix">
        <slot name="suffix">
          <span>{{ suffix }}</span>
        </slot>
      </div>
    </div>
    <div v-if="title && title instanceof Object && title.position === 'bottom'" :class="['tiny-statistic__title']">
      <div v-if="$slots.title">
        <slot name="title"> </slot>
      </div>
      <div v-else>
        <span>{{ title.value }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/statistic/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  components: {},
  emits: [],
  props: [...props, 'formatter', 'precision', 'prefix', 'suffix', 'title', 'value', 'valueStyle', 'groupSeparator'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
