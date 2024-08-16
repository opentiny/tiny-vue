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
  <div class="tiny-bulletin-board">
    <p class="tiny-bulletin-board__title">{{ title }}</p>
    <tabs v-model="state.actName">
      <tab-item v-for="(item, index) of tabTitle" :key="index" :name="(index + 1).toString()">
        <template #title>
          <span>{{ item }}</span>
        </template>
        <div class="tiny-bulletin-board__contain">
          <div v-for="(subItem, subIndex) in state.dataList" :key="subIndex" class="tiny-bulletin-board__item">
            <a
              v-if="subItem.url || subItem.route"
              :href="subItem.url || getRoute(subItem.route)"
              :target="subItem.target"
              class="tiny-bulletin-board__textTitle"
              rel="noopener noreferrer"
            >
              {{ subItem.text }}
              <span v-if="subIndex === 0" class="tiny-bulletin-board__new">
                <component :is="icon" class="tiny-svg-size" />{{ icon ? '' : 'NEW' }}
              </span>
            </a>
            <span v-else class="tiny-bulletin-board__textTitle">
              {{ subItem.text }}
              <span v-if="subIndex === 0" class="tiny-bulletin-board__new">
                <component :is="icon" class="tiny-svg-size" />{{ icon ? '' : 'NEW' }}
              </span>
            </span>
            <p class="tiny-bulletin-board__textDate">{{ subItem.date }}</p>
          </div>
          <div v-if="showMore" class="tiny-bulletin-board__more">
            <a
              v-if="showMore && state.moreLink && (state.moreLink.url || state.moreLink.route)"
              :href="state.moreLink.url || getRoute(state.moreLink.route)"
              class="tiny-bulletin-board__more-link"
              :target="state.moreLink.target"
              rel="noopener noreferrer"
            >
              <span>{{ state.moreLink.text || 'more' }}</span>
              <icon-chevron-right class="tiny-svg-size" />
            </a>
          </div>
        </div>
      </tab-item>
    </tabs>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/bulletin-board/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import Tabs from '@opentiny/vue-tabs'
import TabItem from '@opentiny/vue-tab-item'
import { iconChevronRight } from '@opentiny/vue-icon'

export default defineComponent({
  props: [...props, 'title', 'icon', 'showMore', 'moreLink', 'tabTitle', 'activeName', 'data'],
  components: { Tabs, TabItem, IconChevronRight: iconChevronRight() },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
