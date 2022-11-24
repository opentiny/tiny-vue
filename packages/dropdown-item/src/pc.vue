<template>
  <li
    class="tiny-dropdown-menu__item"
    :class="{
      'is-disabled': disabled,
      'tiny-dropdown-menu__item--divided': divided
    }"
    @click.stop="handleClick"
    :aria-disabled="disabled"
    :tabindex="disabled ? null : -1"
  >
    <component v-if="icon" :is="icon" class="tiny-svg-size" />
    <slot></slot>
  </li>
</template>

<script>
import { props, setup } from '@opentiny/vue-common'
import '@opentiny/vue-theme/dropdown-item/index.css'

export default {
  props: [...props, 'command', 'disabled', 'divided', 'icon'],
  setup(props, context) {
    return setup({
      props,
      context,
      renderless(props, hooks, { dispatch, vm }) {
        return {
          handleClick() {
            dispatch('TinyDropdown', 'menu-item-click', [props.itemData, vm])
          }
        }
      },
      api: ['handleClick']
    })
  }
}
</script>
