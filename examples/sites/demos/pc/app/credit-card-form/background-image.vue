<template>
  <tiny-credit-card-form :form-data="formData" :background-image="backgroundImage"></tiny-credit-card-form>
</template>

<script lang="jsx">
import { CreditCardForm } from '@opentiny/vue'

export default {
  components: {
    TinyCreditCardForm: CreditCardForm
  },
  data() {
    return {
      backgroundImage: `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`,
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
