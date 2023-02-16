<template>
  <tiny-credit-card-form :form-data="formData"></tiny-credit-card-form>
</template>

<script>
import { CreditCardForm } from '@opentiny/vue'

export default {
  components: {
    TinyCreditCardForm: CreditCardForm
  },
  data() {
    return {
      formData: {
        cardName: '',
        cardNumber: '',
        cardMonth: '',
        cardYear: '',
        cardCvv: ''
      }
    }
  }
}
</script>
