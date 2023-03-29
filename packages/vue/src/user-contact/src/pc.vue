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
  <div class="tiny-user-contact">
    <Popover
      placement="bottom-start"
      @show="show = true"
      @hide="show = false"
      trigger="hover"
      :popper-class="'tiny-user-contact' + (showArrow ? ' showArrow' : '') + (popperClass ? ' ' + popperClass : '')"
      :append-to-body="popperAppendToBody"
      :visible-arrow="showArrow"
    >
      <template #reference>
        <a :href="getUserHref()" class="dropdown-part">
          <user-head v-show="showImg" :min="true" :round="true" v-model="data.imgUrl" type="image"></user-head>
          <div class="tiny-user-contact__role">
            <span v-show="showName" class="tiny-user-contact__role-name">{{ data.userName }}</span>
            <span v-show="showDescription" class="tiny-user-contact__role-number">{{ data.userDescription }}</span>
          </div>
        </a>
        <component :is="show ? 'icon-chevron-up' : 'icon-chevron-down'" class="tiny-svg-size tiny-user-contact__arrow" />
      </template>
      <card-template v-if="slots.default" :tools="data.tools" class="tiny-user-contact__main">
        <slot></slot>
      </card-template>
      <card-template v-else :tools="data.tools" class="tiny-user-contact__main">
        <template #header>
          <div class="tiny-user-contact__header">
            <div class="tiny-user-contact__title">
              <user-head :round="true" v-model="data.imgUrl" type="image"></user-head>
              <div class="tiny-user-contact__role">
                <span v-show="showName" class="tiny-user-contact__role-name">{{ data.userName }}</span>
                <span v-show="showDescription" class="tiny-user-contact__role-number">{{ data.userDescription }}</span>
              </div>
            </div>
          </div>
        </template>
        <div>
          <div class="tiny-user-contact__message">
            <div v-for="item in data.values" :key="item.text" class="tiny-user-contact__state">
              <span class="tiny-user-contact__state-left">{{ item.text }}：</span>
              <span class="tiny-user-contact__state-right">{{ item.value }}</span>
            </div>
          </div>
        </div>
      </card-template>
    </Popover>
  </div>
</template>

<script lang="tsx">
import { renderless, api } from '@opentiny/vue-renderless/user-contact/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import UserHead from '@opentiny/vue-user-head'
import CardTemplate from '@opentiny/vue-card-template'

import Popover from '@opentiny/vue-popover'
import { iconChevronUp, iconChevronDown } from '@opentiny/vue-icon'

export default defineComponent({
  props: [...props, 'data', 'showArrow', 'showName', 'showDescription', 'showImg', 'placement', 'popperClass', 'popperAppendToBody', 'isNewImMode'],
  components: {
    UserHead,
    CardTemplate,
    Popover,
    IconChevronUp: iconChevronUp(),
    IconChevronDown: iconChevronDown()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
