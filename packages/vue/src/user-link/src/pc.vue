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
  <div class="tiny-userlink">
    <li v-for="(user, index) in state.options" :key="index">
      <span v-if="!card">{{ user[state.textField] + (index !== state.options.length - 1 ? textSplit : '') }}</span>
      <tiny-popover
        v-else
        trigger="click"
        :visible-arrow="false"
        placement="bottom-start"
        popper-class="tiny-user-card"
        :append-to-body="popperAppendToBody"
      >
        <template #reference>
          <a @click="showCard($event, user)"
            >{{ user[state.textField] + (index !== state.options.length - 1 ? textSplit : '') }}
          </a>
        </template>
        <div class="card-box" v-loading="state.spinner">
          <div class="card-box__header"></div>
          <div class="card-box__body">
            <div class="card-top-img">
              <img :src="state.imgUrl" />
            </div>
            <div class="card-top-text">
              <span>{{ state.data.english_Name }}</span>
              <span>({{ state.data.last_Name }})</span>
              <p>{{ t('ui.usercard.empno') }}:{{ state.data.employee_Number }}</p>
              <p>{{ state.data.l4_Name }}({{ state.data.l1_Name }})</p>
            </div>
            <div class="card-center">
              <p>
                <strong>{{ t('ui.usercard.phone') }}</strong
                >：{{ state.data.person_Phone_Code }}
              </p>
              <p>
                <strong>{{ t('ui.usercard.internal') }}</strong
                >：{{ state.data.person_Internal_Code }}
              </p>
              <p>
                <strong>{{ t('ui.usercard.mobile') }}</strong
                >：{{ state.data.person_Mobile_Code }}
              </p>
              <p>
                <strong>{{ t('ui.usercard.email') }}</strong
                >：<a :href="`mailto:${state.data.person_Mail}`">{{ state.data.person_Mail }}</a>
              </p>
              <p>
                <strong>{{ t('ui.usercard.address') }}</strong
                >：{{ state.data.person_Location }}
              </p>
            </div>
            <div class="card-center" v-show="state.expand">
              <p>
                <strong>{{ t('ui.usercard.manager') }}</strong
                >：{{ state.data.organization_manager }}
              </p>
              <p>
                <strong>{{ t('ui.usercard.viop') }}</strong
                >：{{ state.data.person_Viop }}
              </p>
              <p>
                <strong>{{ t('ui.usercard.fax') }}</strong
                >：{{ state.data.person_Fax_Code }}
              </p>
              <p>
                <strong>{{ t('ui.usercard.travelcode') }}</strong
                >：{{ state.data.person_Travel_Code }}
              </p>
              <p>
                <strong>{{ t('ui.usercard.timezone') }}</strong
                >：{{ state.data.person_Difference_Time }}
              </p>
              <p>
                <strong>{{ t('ui.usercard.other') }}</strong
                >：{{ state.data.person_Other }}
              </p>
            </div>
          </div>
          <div class="box__footer" @click="showDetail">
            <div v-show="!state.expand">{{ t('ui.usercard.expand') }} <IconChevronDown /></div>
            <div v-show="state.expand">{{ t('ui.usercard.collapse') }} <IconChevronUp /></div>
          </div>
        </div>
      </tiny-popover>
    </li>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/user-link/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import TinyPopover from '@opentiny/vue-popover'
import Loading from '@opentiny/vue-loading'
import { IconChevronDown, IconChevronUp } from '@opentiny/vue-icon'

export default defineComponent({
  props: [
    ...props,
    'fetchUser',
    'fetchW3Accounts',
    'getUserImageUrl',
    'fetchUserByUserId',
    'userCache',
    'valueSplit',
    'card',
    'textSplit',
    'textField',
    'valueField',
    'modelValue',
    'service',
    'cache',
    'cacheKey',
    'cacheFields',
    'batch',
    'popperAppendToBody'
  ],
  components: {
    TinyPopover,
    IconChevronDown: IconChevronDown(),
    IconChevronUp: IconChevronUp()
  },
  directives: {
    loading: Loading.directive
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
