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

<script setup lang="jsx">
import { ref } from 'vue'
import { CreditCardForm as TinyCreditCardForm, Modal } from '@opentiny/vue'

const formData = ref({
  cardName: '',
  cardNumber: '',
  cardMonth: '',
  cardYear: '',
  cardCvv: ''
})

function inputCardCvv(val) {
  Modal.message({ message: 'CCV 输入的值:' + val, status: 'info' })
}

function inputCardYear(val) {
  Modal.message({ message: '选择的年份:' + val, status: 'info' })
}

function inputCardMonth(val) {
  Modal.message({ message: '选择的月份:' + val, status: 'info' })
}

function inputCardName(val) {
  Modal.message({ message: '输入的持卡者:' + val, status: 'info' })
}

function inputCardNumber(val) {
  Modal.message({ message: '输入的卡号:' + val, status: 'info' })
}

function submit(val) {
  Modal.message({
    message: `已提交的信息为：${JSON.stringify(val)}`,
    status: 'info'
  })
}
</script>
