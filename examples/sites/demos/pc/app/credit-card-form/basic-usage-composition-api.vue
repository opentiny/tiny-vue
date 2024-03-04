<template>
  <tiny-credit-card-form :form-data="formData"></tiny-credit-card-form>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { CreditCardForm as TinyCreditCardForm } from '@opentiny/vue'

const formData = ref({
  cardName: '',
  cardNumber: '',
  cardMonth: '',
  cardYear: '',
  cardCvv: ''
})
</script>
