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
  <div class="tiny-fall-menu">
    <div class="tiny-fall-menu__wrap">
      <div class="tiny-fall-menu__nav">
        <div class="tiny-fall-menu__subnav">
          <div v-show="state.pager != 1" class="icon-slot-left" @click="arrowClick(-1)">
            <slot name="left">
              <icon-chevron-left class="tiny-svg-size" />
            </slot>
          </div>
          <div ref="list" :style="{ left: state.left }" class="tiny-fall-menu__list">
            <ul>
              <li
                v-for="(level1, index) in state.data"
                :key="index"
                @mouseover="mouseover(index)"
                @mouseout="mouseout"
                :class="{
                  'fall-hide': index >= state.pagerData.index[state.pager - 1] && state.pager !== state.pagerData.size
                }"
              >
                <slot name="level1" :slot-scope="level1">
                  <a :href="level1.url" :class="{ now: index === state.activeNode }">{{ level1.title }} </a>
                </slot>
              </li>
            </ul>
          </div>
          <div v-show="state.pager !== state.pagerData.size" class="icon-slot-right" @click="arrowClick(1)">
            <slot name="right">
              <icon-chevron-right class="tiny-svg-size" />
            </slot>
          </div>
        </div>
        <tiny-row>
          <div
            ref="fall"
            v-show="state.isActive"
            :class="{ active: state.isActive }"
            class="tiny-fall-menu__box"
            @mouseover="overContent(true)"
            @mouseout="overContent(false)"
          >
            <div class="contbox">
              <tiny-col v-for="(level2, index) in state.level2data" :key="index" :xs="6" :sm="3" :md="3" :lg="3" :xl="2" class="cont">
                <ul class="sublist clearfix">
                  <li>
                    <h3 class="mcate-item-hd">
                      <slot name="level2" :slot-scope="level2">
                        <span>{{ level2.title }}</span>
                      </slot>
                    </h3>
                    <p class="mcate-item-bd">
                      <slot name="level3" :slot-scope="level2.children">
                        <a v-for="(level3, index) in level2.children" :href="level3.url" :key="index">{{ level3.title }}</a>
                      </slot>
                    </p>
                  </li>
                </ul>
              </tiny-col>
            </div>
          </div>
        </tiny-row>
      </div>
    </div>
  </div>
</template>

<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/fall-menu/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import Row from '@opentiny/vue-row'
import Col from '@opentiny/vue-col'
import { iconChevronLeft, iconChevronRight } from '@opentiny/vue-icon'

export default defineComponent({
  emits: ['hook-updated'],
  props: [...props, 'data'],
  components: {
    TinyRow: Row,
    TinyCol: Col,
    IconChevronLeft: iconChevronLeft(),
    IconChevronRight: iconChevronRight()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
