<template>
  <tiny-credit-card-form :form-data="formData" :background-image="backgroundImage"></tiny-credit-card-form>
</template>

<script>
import { CreditCardForm } from '@opentiny/vue'

export default {
  components: {
    TinyCreditCardForm: CreditCardForm
  },
  data() {
    return {
      backgroundImage: 'static/images/mountain.png',
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
