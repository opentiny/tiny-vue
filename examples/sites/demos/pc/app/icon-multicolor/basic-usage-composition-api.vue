<template>
  <div class="icon-demo">
    <color-administrative-fees
      first-color="#2070F3"
      second-color="#715AFB"
      class="tiny-svg-size"
    ></color-administrative-fees>
    <color-express-delivery first-color="#2070F3" second-color="#715AFB" class="tiny-svg-size"></color-express-delivery>
    <color-meal-allowance first-color="#2070F3" second-color="#715AFB" class="tiny-svg-size"></color-meal-allowance>
    <color-lodging-fees first-color="#2070F3" second-color="#715AFB" class="tiny-svg-size"></color-lodging-fees>
  </div>
</template>

<script setup>
import {
  ColorIconAdministrativeFees,
  ColorIconExpressDelivery,
  ColorIconMealAllowance,
  ColorIconLodgingFees
} from '@opentiny/vue-icon-multicolor'

const ColorAdministrativeFees = ColorIconAdministrativeFees()
const ColorExpressDelivery = ColorIconExpressDelivery()
const ColorMealAllowance = ColorIconMealAllowance()
const ColorLodgingFees = ColorIconLodgingFees()
</script>

<style scoped>
.icon-demo .tiny-svg-size {
  fill: #8994aa;
  margin: 20px 50px;
  vertical-align: middle;
}

.icon-demo {
  font-size: 2em;
}
</style>
