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
  <div class="tiny-float-bar tiny-toolbar" :style="position">
    <slot :slot-scope="{ data: state.data }">
      <ul class="navs">
        <li v-for="(item, index) in state.data" :key="index" class="nav-item">
          <a v-if="item.url" :href="item.url" :target="item.target" rel="noopener noreferrer" class="nav-link">{{
            item.title
          }}</a>
          <span v-else class="nav-text">{{ item.title }}</span>
        </li>
      </ul>
    </slot>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/floatbar/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  props: [...props, 'position', 'data'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
