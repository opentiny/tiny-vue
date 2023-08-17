<template>
  <label
    :class="
      m(
        gcls('radio-default'),
        gcls(
          state.isDisplayOnly
            ? state.model === label
              ? 'readonly-is-checked'
              : 'readonly-is-not-checked'
            : 'not-readonly-common'
        ),
        gcls({ 'verticalStyle': state.vertical })
      )
    "
    role="radio"
    :aria-checked="state.model === label"
    :aria-disabled="state.isDisabled"
    tabindex="-1"
    @keydown.space.stop.prevent="state.model = state.isDisabled ? state.model : label"
    v-bind="a($attrs, ['class', 'style', 'onClick'], true)"
  >
    <span
      :class="
        m(
          gcls('radio-label-common'),
          gcls(state.size === 'medium' ? 'radio-label-size-medium' : 'radio-label-size-common'),
          gcls(state.isDisplayOnly && state.model === label && 'hidden-radio')
        )
      "
    >
      <span :class="m(gcls('radio-label-circle'))" :tabindex="tabindex">
        <icon-radioselected
          v-if="state.model === label"
          :class="
            m(
              gcls('pc-show'),
              gcls({ 'radio-hover-selected': !state.isDisabled }),
              gcls({ 'radio-active-selected': !state.isDisabled }),
              gcls('icon-radioselected-common'),
              gcls({ 'icon-radioselected-disabled': state.isDisabled }),
              gcls({ 'icon-radioselected-default': !state.isDisabled }),
              gcls(state.size === 'medium' ? 'icon-radioselected-size-medium' : 'icon-radioselected-size-common')
            )
          "
        />
        <icon-radio
          v-else
          :class="
            m(
              gcls('pc-show'),
              gcls({ 'radio-active': !state.isDisabled }),
              gcls({ 'radio-hover': !state.isDisabled }),
              gcls({ 'icon-radio-disabled': state.isDisabled }),
              gcls({ 'icon-radio-default': !state.isDisabled }),
              gcls('icon-radio-common'),
              gcls(state.size === 'medium' ? 'icon-radio-size-medium' : 'icon-radio-size-common')
            )
          "
        />
        <icon-mobileRadioSelected
          v-if="state.model === label"
          :class="
            m(
              gcls('mobile-show'),
              gcls('icon-radioselected-common'),
              gcls({ 'mobile-icon-radioselected-disabled': state.isDisabled }),
              gcls({ 'mobile-icon-radioselected-default': !state.isDisabled })
            )
          "
        ></icon-mobileRadioSelected>
        <icon-mobileRadio
          v-else
          :class="
            m(
              gcls('mobile-show'),
              gcls({ 'mobile-icon-radio-disabled': state.isDisabled }),
              gcls({ 'mobile-icon-radio-default': !state.isDisabled }),
              gcls('icon-radio-common')
            )
          "
        ></icon-mobileRadio>
      </span>
      <input
        ref="radio"
        :class="m(gcls('radio-input'))"
        :value="label"
        type="radio"
        aria-hidden="true"
        v-model="state.model"
        @focus="state.focus = true"
        @blur="state.focus = false"
        @change="handleChange"
        :name="name"
        :disabled="state.isDisabled"
        @click.stop
      />
    </span>
    <span
      ref="label"
      :class="
        m(
          gcls('radio-text-common'),
          gcls(state.size === 'medium' ? 'radio-text-size-medium' : 'radio-text-size-common'),
          gcls({ 'label-disabled': state.isDisabled }),
          gcls(
            state.isDisplayOnly ? (state.model === label ? 'readonly-checked-label' : '') : 'not-readly-common-label'
          )
        )
      "
      @keydown.stop
    >
      <slot>{{ text || label }}</slot>
    </span>
  </label>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/radio/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { iconRadio, iconRadioselected, iconMobileRadio, iconMobileRadioSelected } from '@opentiny/vue-icon'
import { classes } from './token'

export default defineComponent({
  emits: ['change', 'update:modelValue'],
  props: [
    ...props,
    'modelValue',
    'events',
    'label',
    'text',
    'disabled',
    'name',
    'border',
    'size',
    'tabindex',
    'displayOnly'
  ],
  inheritAttrs: false,
  components: {
    IconRadio: iconRadio(),
    IconRadioselected: iconRadioselected(),
    IconMobileRadio: iconMobileRadio(),
    IconMobileRadioSelected: iconMobileRadioSelected()
  },
  setup(props, context): any {
    return setup({ props, context, renderless, api, classes })
  }
})
</script>
