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
  <div class="tiny-wizard">
    <div class="tiny-wizard__nomarl" v-if="!vertical">
      <ul class="tiny-wizard__steps">
        <li
          class="tiny-wizard__steps-item"
          v-for="(item, index) in state.datas"
          :key="index"
          :class="[
            {
              'is-ready': item.status === state.ready,
              'is-doing': item.status === state.doing
            }
          ]"
        >
          <div class="tiny-wizard__chart">
            <span class="tiny-wizard__chart-line"></span>
            <span v-if="pageGuide && item.status === state.doing" class="tiny-wizard__chart-svg">
              <tiny-icon-mark-on @click="nodeClick(item, index, $event)"></tiny-icon-mark-on>
            </span>
            <span v-else class="tiny-wizard__chart-icon statues" @click="nodeClick(item, index, $event)">{{ index + 1 }}</span>
            <span class="tiny-wizard__chart-line"></span>
          </div>
          <div class="tiny-wizard__name">
            <slot name="base" :slot-scope="item">
              <span class="name">{{ item.name }}</span>
            </slot>
          </div>
        </li>
      </ul>
      <div class="tiny-wizard__button" v-if="pageGuide">
        <slot name="stepbutton">
          <tiny-button :reset-time="0" @click="lastStepHandle">{{ t('ui.wizard.previousStep') }}</tiny-button>
          <tiny-button :reset-time="0" @click="btnSaveHandle">{{ t('ui.wizard.save') }}</tiny-button>
          <tiny-button :reset-time="0" @click="nextStepHandle">{{ t('ui.wizard.nextStep') }}</tiny-button>
          <tiny-button :reset-time="0" v-if="state.submitShow" @click="submitHandle">{{ t('ui.wizard.submit') }}</tiny-button>
        </slot>
      </div>
    </div>
    <div class="tiny-wizard__vertical" :class="{ 'is-time-line-flow': timeLineFlow }" v-if="vertical">
      <ul class="tiny-wizard__steps">
        <li
          class="tiny-wizard__steps-item"
          :class="[
            {
              'is-ready': item.status === state.ready,
              'is-doing': item.status === state.doing,
              'is-time-line-ready': timeLineFlow && item.nodeStatus === state.ready,
              'is-time-line-doing': timeLineFlow && item.nodeStatus === state.doing
            }
          ]"
          v-for="(item, index) in state.datas"
          :key="index"
        >
          <div class="tiny-wizard__node-wrapper">
            <div class="tiny-wizard__date" v-if="timeLineFlow" @click="showNode(item, index, $event)">
              <span>{{ item.date }}</span>
              <span class="tiny-wizard__date-wrapper">
                <tiny-icon-triangle-down class="date-icon"></tiny-icon-triangle-down>
              </span>
            </div>
            <div class="tiny-wizard__chart-line" :class="{ 'is-time-line': timeLineFlow }">
              <div class="tiny-wizard__chart-icon" v-if="!timeLineFlow" @click="showNode(item, index, $event)">
                {{ index + 1 }}
              </div>
              <span v-if="timeLineFlow" class="tiny-wizard__time-wrapper">
                <tiny-icon-successful @click="showNode(item, index, $event)"> </tiny-icon-successful>
              </span>
            </div>
            <div class="tiny-wizard__chart-name" v-if="!timeLineFlow" @click="showNode(item, index, $event)">
              <slot name="vertical" :slot-scope="item">
                <span class="name">{{ item.name }}</span>
                <span class="children-name" v-if="item.showNode && item.content">{{ item.content }}</span>
              </slot>
            </div>
          </div>
          <ul v-if="timeLineFlow">
            <template v-if="item.showNode">
              <li
                class="tiny-wizard__chart-children"
                :class="[
                  {
                    'is-ready': value.status === state.ready,
                    'is-doing': value.status === state.doing
                  }
                ]"
                v-for="(value, index) in item.value"
                :key="index"
              >
                <div class="tiny-wizard__date time-line-text">
                  {{ value.time }}
                </div>
                <div class="tiny-wizard__chart-line">
                  <div class="tiny-wizard__chart-icon time-line-icon" @click="nodeClick(value, index, $event)"></div>
                </div>
                <div class="tiny-wizard__chart-detail">
                  <div class="detail-title">{{ value.name }}</div>
                  <tiny-user-contact :data="value"></tiny-user-contact>
                </div>
              </li>
            </template>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/wizard/vue'
import { props, setup } from '@opentiny/vue-common'
import Button from '@opentiny/vue-button'
import UserContact from '@opentiny/vue-user-contact'
import { iconTriangleDown, iconMarkOn, iconSuccessful } from '@opentiny/vue-icon'

export default {
  props: [...props, 'data', 'pageGuide', 'timeLineFlow', 'vertical'],
  emits: ['btnPrev', 'btnNext', 'btnSave', 'btnSubmit', 'node-click'],
  components: {
    TinyButton: Button,
    TinyUserContact: UserContact,
    TinyIconSuccessful: iconSuccessful(),
    TinyIconMarkOn: iconMarkOn(),
    TinyIconTriangleDown: iconTriangleDown()
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
}
</script>
