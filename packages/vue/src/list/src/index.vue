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
  <div :class="{ 'is-show-prefix': slots.prefix, 'is-padding': list }" class="tiny-mobile-list" @click="clickList">
    <div class="tiny-mobile-list__prefix" v-if="slots.prefix">
      <slot name="prefix"></slot>
    </div>
    <div class="tiny-mobile-list__content">
      <div class="tiny-mobile-list__content-text">
        <slot>
          <span class="tiny-mobile-list__main-text">{{ content }}</span>
        </slot>
        <span v-if="subText" class="tiny-mobile-list__sub-text">{{ subText }}</span>
      </div>
      <div v-if="slots.description" class="tiny-mobile-list__content-des">
        <slot name="description"></slot>
      </div>
      <p v-if="contentDes" class="tiny-mobile-list__content-des">
        {{ contentDes }}
      </p>
    </div>
    <div v-if="slots.suffix" class="tiny-mobile-list__suffix">
      <slot name="suffix"></slot>
    </div>
  </div>
</template>

<script lang="tsx">
import { $prefix, setup, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/list/vue'

export default defineComponent({
  name: $prefix + 'List',
  props: {
    content: {
      type: String,
      default: ''
    },
    subText: {
      type: String,
      default: ''
    },
    contentDes: {
      type: String,
      default: ''
    },
    list: {
      type: Boolean,
      default: false
    },
    id: {
      type: [Number, String],
      default: ''
    }
  },
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true })
  }
})
</script>
