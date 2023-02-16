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
  <div class="tiny-ip-address">
    <ul
      :class="{
        active: state.active,
        disabled: state.disabled,
        'tiny-ip-address__input': true
      }"
      :style="state.heightStyle"
    >
      <li v-for="(item, index) of state.address" :key="index" :style="state.lineHeightStyle">
        <input
          :style="state.allHeightStyle"
          ref="inputs"
          :readonly="readonly"
          :disabled="state.disabled"
          v-model="item.value"
          type="text"
          @select="select({ value: item, index, event: $event })"
          @focus="focus({ index, event: $event })"
          @input="inputEvent({ item, index })"
          @change="change"
          @blur="blur({ item, index })"
          @keyup="keyup({ item, index, event: $event })"
          @keydown="keydown({ item, index, event: $event })"
          tabindex="1"
        />
        <template v-if="index < state.address.length - 1">
          <slot :slot-scope="{ state, index, item }">
            <component :is="delimiter" class="tiny-svg-size" />
          </slot>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/ip-address/vue'
import { props, setup } from '@opentiny/vue-common'
import { iconDotIpv4 } from '@opentiny/vue-icon'

export default {
  props: [...props, 'size', 'modelValue', 'type', 'readonly', 'disabled', 'delimiter'],
  emits: ['update:modelValue', 'change', 'blur', 'focus', 'select', 'input'],
  components: {
    IconDotIpv4: iconDotIpv4()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
