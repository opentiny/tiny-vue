<template>
  <tiny-credit-card-form
    :form-data="formData"
    @submit="submit"
    @input-card-cvv="inputCardCvv"
    @input-card-month="inputCardMonth"
    @input-card-name="inputCardName"
    @input-card-number="inputCardNumber"
    @input-card-year="inputCardYear"
  ></tiny-credit-card-form>
</template>

<script lang="jsx">
import { CreditCardForm, Modal } from '@opentiny/vue'

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
  },
  methods: {
    inputCardCvv(val) {
      Modal.message({ message: 'CCV 输入的值:' + val, status: 'info' })
    },
    inputCardYear(val) {
      Modal.message({ message: '选择的年份:' + val, status: 'info' })
    },
    inputCardMonth(val) {
      Modal.message({ message: '选择的月份:' + val, status: 'info' })
    },
    inputCardName(val) {
      Modal.message({ message: '输入的持卡者:' + val, status: 'info' })
    },
    inputCardNumber(val) {
      Modal.message({ message: '输入的卡号:' + val, status: 'info' })
    },
    submit(val) {
      Modal.message({
        message: `已提交的信息为：${JSON.stringify(val)}`,
        status: 'info'
      })
    }
  }
}
</script>
