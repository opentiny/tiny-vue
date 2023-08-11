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
  <div class="credit-card-form">
    <div class="credit-card-list">
      <tiny-credit-card
        :fields="state.fields"
        :labels="formData"
        :isCardNumberMasked="state.isCardNumberMasked"
        :backgroundImage="backgroundImage"
      />
    </div>
    <div class="credit-card-form__inner">
      <div class="credit-card-input">
        <label for="cardNumber" class="credit-card-input__label">Card Number</label>
        <input
          type="tel"
          :id="state.fields.cardNumber"
          @input="changeNumber"
          @focus="focusCardNumber"
          @blur="blurCardNumber"
          class="credit-card-input__input"
          :value="state.formData.cardNumber"
          :maxlength="state.cardNumberMaxLength"
          data-credit-card-field
          autocomplete="off"
        />
        <button
          type="button"
          class="credit-card-input__eye"
          :class="{ '-active': !state.isCardNumberMasked }"
          title="Show/Hide card number"
          tabindex="-1"
          :disabled="formData.cardNumber === ''"
          @click="toggleMask"
        ></button>
      </div>
      <div class="credit-card-input">
        <label for="cardName" class="credit-card-input__label">Card Holder</label>
        <input
          type="text"
          :id="state.fields.cardName"
          v-letter-only
          @input="changeName"
          class="credit-card-input__input"
          :value="state.formData.cardName"
          data-credit-card-field
          autocomplete="off"
        />
      </div>
      <div class="credit-card-form__row">
        <div class="credit-card-form__col">
          <div class="credit-card-form__group">
            <label for="cardMonth" class="credit-card-input__label">Expiration Date</label>
            <select
              class="credit-card-input__input -select"
              :id="state.fields.cardMonth"
              v-model="state.cardMonth"
              @change="changeMonth"
              data-credit-card-field
            >
              <option value disabled selected>Month</option>
              <option
                v-bind:value="n < 10 ? '0' + n : n"
                v-for="n in 12"
                v-bind:disabled="n < state.minCardMonth"
                v-bind:key="n"
              >
                {{ generateMonthValue(n) }}
              </option>
            </select>
            <select
              class="credit-card-input__input -select"
              :id="state.fields.cardYear"
              v-model="state.cardYear"
              @change="changeYear"
              data-credit-card-field
            >
              <option value disabled selected>Year</option>
              <option v-bind:value="$index + state.minCardYear" v-for="(n, $index) in 12" v-bind:key="n">
                {{ $index + state.minCardYear }}
              </option>
            </select>
          </div>
        </div>
        <div class="credit-card-form__col -cvv">
          <div class="credit-card-input">
            <label for="cardCvv" class="credit-card-input__label">CVV</label>
            <input
              type="tel"
              class="credit-card-input__input"
              v-number-only
              :id="state.fields.cardCvv"
              maxlength="4"
              :value="state.formData.cardCvv"
              @input="changeCvv"
              data-credit-card-field
              autocomplete="off"
            />
          </div>
        </div>
      </div>
      <button type="button" class="credit-card-form__button" @click="handleSubmit">
        {{ t('ui.creditCardForm.submit') }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { renderless, api } from '@opentiny/vue-renderless/credit-card-form/vue'
import { props, setup, directive, defineComponent } from '@opentiny/vue-common'
import LetterOnly from '@opentiny/vue-renderless/common/deps/letter-only'
import NumberOnly from '@opentiny/vue-renderless/common/deps/number-only'
import CreditCard from '@opentiny/vue-credit-card'

export default defineComponent({
  components: {
    TinyCreditCard: CreditCard
  },
  directives: directive({
    LetterOnly,
    NumberOnly
  }),
  props: [...props, 'formData', 'backgroundImage'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
