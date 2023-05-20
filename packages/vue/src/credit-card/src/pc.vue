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
  <div class="credit-card-item" :class="{ '-active': state.isCardFlipped }">
    <div class="credit-card-item__side -front">
      <div class="credit-card-item__focus" :class="{ '-active': state.focusElementStyle }" :style="state.focusElementStyle" ref="focusElement"></div>
      <div class="credit-card-item__cover">
        <img class="credit-card-item__bg" :src="backgroundImage || images.background" />
      </div>
      <div class="credit-card-item__wrapper">
        <div class="credit-card-item__top">
          <img :src="images.chip" class="credit-card-item__chip" />
          <div class="credit-card-item__type">
            <transition name="slide-fade-up">
              <img v-if="state.cardType" class="credit-card-item__typeImg" :src="images[state.cardType]" :key="state.cardType" alt />
            </transition>
          </div>
        </div>
        <label :for="fields.cardNumber" class="credit-card-item__number" :ref="fields.cardNumber">
          <span v-for="(n, $index) in state.currentPlaceholder" :key="$index">
            <transition name="slide-fade-up">
              <div v-if="getIsNumberMasked($index, n)" class="credit-card-item__numberItem">*</div>
              <div
                v-else-if="labels.cardNumber.length > $index"
                class="credit-card-item__numberItem"
                :class="{ '-active': n.trim() === '' }"
                :key="state.currentPlaceholder"
              >
                {{ labels.cardNumber[$index] }}
              </div>
              <div v-else class="credit-card-item__numberItem" :class="{ '-active': n.trim() === '' }" :key="state.currentPlaceholder + 1">
                {{ n }}
              </div>
            </transition>
          </span>
        </label>
        <div class="credit-card-item__content">
          <label :for="fields.cardName" class="credit-card-item__info" :ref="fields.cardName">
            <div class="credit-card-item__holder">Card Holder</div>
            <transition name="slide-fade-up">
              <div class="credit-card-item__name" v-if="labels.cardName.length" key="1">
                <transition-group name="slide-fade-right">
                  <span class="credit-card-item__nameItem" v-for="(n, $index) in labels.cardName.replace(/\s\s+/g, ' ')" :key="$index + 1">{{ n }}</span>
                </transition-group>
              </div>
              <div class="credit-card-item__name" v-else key="2">Full Name</div>
            </transition>
          </label>
          <div class="credit-card-item__date" ref="cardDate">
            <label class="credit-card-item__dateTitle" :for="fields.cardMonth">Expires</label>
            <label class="credit-card-item__dateItem" :for="fields.cardMonth">
              <transition name="slide-fade-up">
                <span v-if="labels.cardMonth" :key="labels.cardMonth" v-text="labels.cardMonth"></span>
                <span v-else key="2" v-text="'MM'"></span>
              </transition>
            </label>
            <span>/</span>
            <label class="credit-card-item__dateItem" for="cardYear">
              <transition name="slide-fade-up">
                <span v-if="labels.cardYear" :key="labels.cardYear" v-text="String(labels.cardYear).slice(2, 4)"></span>
                <span v-else key="2" v-text="'YY'"></span>
              </transition>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="credit-card-item__side -back">
      <div class="credit-card-item__cover">
        <img :src="backgroundImage || images.background" class="credit-card-item__bg" />
      </div>
      <div class="credit-card-item__band"></div>
      <div class="credit-card-item__cvv">
        <div class="credit-card-item__cvvTitle">CVV</div>
        <div class="credit-card-item__cvvBand">
          <span v-for="(n, $index) in labels.cardCvv" :key="$index">*</span>
        </div>
        <div class="credit-card-item__type">
          <img :src="images[state.cardType]" v-if="state.cardType" class="credit-card-item__typeImg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/credit-card/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import jcb from '@opentiny/vue-theme/images/credit-jcb.png'
import amex from '@opentiny/vue-theme/images/credit-amex.png'
import chip from '@opentiny/vue-theme/images/credit-chip.png'
import troy from '@opentiny/vue-theme/images/credit-troy.png'
import visa from '@opentiny/vue-theme/images/credit-visa.png'
import discover from '@opentiny/vue-theme/images/credit-discover.png'
import unionpay from '@opentiny/vue-theme/images/credit-unionpay.png'
import mastercard from '@opentiny/vue-theme/images/credit-mastercard.png'
import dinersclub from '@opentiny/vue-theme/images/credit-dinersclub.png'
import background from '@opentiny/vue-theme/images/credit-background.jpeg'

export default defineComponent({
  props: [...props, 'labels', 'fields', 'isCardNumberMasked', 'backgroundImage'],
  setup(props, context) {
    return Object.assign(setup({ props, context, renderless, api }), {
      images: {
        jcb,
        amex,
        chip,
        troy,
        visa,
        discover,
        unionpay,
        background,
        dinersclub,
        mastercard
      }
    })
  }
})
</script>
