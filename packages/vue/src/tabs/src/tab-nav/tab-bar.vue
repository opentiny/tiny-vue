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
    :style="state.barStyle"
    :class="[`is-${state.rootTabs.position}`, state.separator ? '' : 'tiny-tabs__active-bar']"
  ></div>
</template>

<script lang="tsx">
import { $prefix, setup } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/tab-bar/vue'
import type { ITabBarPcApi } from '@opentiny/vue-renderless/types/tab-bar.type'
import { tabBarProps } from './index'

export default {
  name: $prefix + 'TabBar',
  props: tabBarProps,
  setup(props, context) {
    return setup({ props, context, renderless, api, mono: true }) as unknown as ITabBarPcApi
  }
}
</script>
