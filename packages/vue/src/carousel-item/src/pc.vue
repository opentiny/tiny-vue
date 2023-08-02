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
    v-show="state.ready"
    :class="{
      'is-active': state.active,
      'tiny-carousel__item--card': state.carouselParent.type === 'card',
      'is-in-stage': state.inStage,
      'is-hover': state.hover,
      'is-animating': state.animating,
      'tiny-oblique': state.carouselParent.type === 'card' && state.carouselParent.setUserCls
    }"
    :style="state.getTransform"
    class="tiny-carousel__item"
    @click="handleItemClick"
  >
    <div v-if="state.carouselParent.type === 'card'" v-show="!state.active" class="tiny-carousel__mask"></div>
    <slot></slot>
    <div v-if="state.hasTitle" class="item-title">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/carousel-item/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  props: [...props, 'name', 'title', 'label'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
