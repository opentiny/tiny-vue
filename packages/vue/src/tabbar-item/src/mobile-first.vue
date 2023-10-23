<template>
  <div
    data-tag="tiny-tabbar-item"
    v-if="state.showVm"
    :class="
      m(
        'flex flex-1 flex-col items-center justify-center cursor-pointer my-1 mx-0.5 [&:first-of-type]:ml-1 [&:last-of-type]:mr-1'
      )
    "
    :style="{ color: state.renderColor }"
    @click="onClick"
  >
    <div data-tag="tiny-tabbar-item-icon" class="relative mt-1 pointer-events-none w-6 h-6 [&_svg]:w-6 [&_svg]:h-6">
      <slot name="icon" :active="state.renderActive">
        <tiny-badge type="icon" :value="badge" v-if="badge">
          <component
            :is="icon"
            :class="{ 'fill-color-brand': state.renderActive }"
            :style="{ fill: state.renderColor }"
          ></component>
        </tiny-badge>
        <tiny-badge type="icon" :is-dot="dot" v-else-if="dot">
          <component
            :is="icon"
            :class="{ 'fill-color-brand': state.renderActive }"
            :style="{ fill: state.renderColor }"
          ></component>
        </tiny-badge>
        <component
          v-else
          :is="icon"
          :class="{ 'fill-color-brand': state.renderActive }"
          :style="{ fill: state.renderColor }"
        ></component>
      </slot>
    </div>
    <div
      data-tag="tiny-tabbar-item-title"
      :class="[
        'my-1 pointer-events-none overflow-hidden whitespace-nowrap text-ellipsis text-xs text-center leading-3',
        { 'text-color-brand': state.renderActive }
      ]"
      :style="{ color: state.renderColor, width: state.itemWidth }"
    >
      <slot>{{ text || name }}</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { $props, $prefix, setup, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/tabbar-item/vue'
import Badge from '@opentiny/vue-badge'

export default defineComponent({
  name: $prefix + 'TabbarItem',
  componentName: 'TabbarItem',
  props: {
    ...$props,
    dot: Boolean,
    icon: Object,
    name: [Number, String],
    badge: [Number, String],
    text: String
  },
  components: {
    TinyBadge: Badge
  },
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
