<template>
  <tiny-credit-card-form :form-data="formData" :background-image="backgroundImage"></tiny-credit-card-form>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { CreditCardForm as TinyCreditCardForm } from '@opentiny/vue'

const backgroundImage = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`)
const formData = ref({
  cardName: '',
  cardNumber: '',
  cardMonth: '',
  cardYear: '',
  cardCvv: ''
})
</script>
