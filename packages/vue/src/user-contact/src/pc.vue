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
        <a :href="getUserHref()" @click="doUserAction" class="dropdown-part">
          <user-head v-show="showImg" :min="true" :round="true" v-model="data.imgUrl" type="image"></user-head>
          <div class="tiny-user-contact__role">
            <span v-show="showName" class="tiny-user-contact__role-name">{{ data.userName }}</span>
            <span v-show="showNumber" class="tiny-user-contact__role-number">{{ data.roleNumber }}</span>
          </div>
        </a>
        <component
          :is="show ? 'icon-chevron-up' : 'icon-chevron-down'"
          class="tiny-svg-size tiny-user-contact__arrow"
        />
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
                <span v-show="showNumber" class="tiny-user-contact__role-number"
                  >{{ t('ui.usercard.empno') }}：{{ data.roleNumber }}</span
                >
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
          <espace v-if="espace && espace.length" :data="espace" />
        </div>
      </card-template>
    </Popover>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/user-contact/vue'
import { props, setup } from '@opentiny/vue-common'
import UserHead from '@opentiny/vue-user-head'
import CardTemplate from '@opentiny/vue-card-template'
import Espace from '@opentiny/vue-espace'
import Popover from '@opentiny/vue-popover'
import { IconChevronUp, IconChevronDown } from '@opentiny/vue-icon'

import { defineComponent } from '@opentiny/vue-common'

export default defineComponent({
  props: [
    ...props,
    'data',
    'showArrow',
    'espace',
    'showName',
    'showNumber',
    'showImg',
    'placement',
    'popperClass',
    'popperAppendToBody',
    'isNewImMode'
  ],
  components: {
    UserHead,
    CardTemplate,
    Espace,
    Popover,
    IconChevronUp: IconChevronUp(),
    IconChevronDown: IconChevronDown()
  },
  setup(props, context): any {
    return setup({ props, context, renderless, api })
  }
})
</script>
