<template>
  <div class="icon-demo">
    <color-icon-administrative-fees
      first-color="#2070F3"
      second-color="#715AFB"
      class="tiny-svg-size"
    ></color-icon-administrative-fees>
    <color-icon-express-delivery
      first-color="#2070F3"
      second-color="#715AFB"
      class="tiny-svg-size"
    ></color-icon-express-delivery>
    <color-icon-meal-allowance
      first-color="#2070F3"
      second-color="#715AFB"
      class="tiny-svg-size"
    ></color-icon-meal-allowance>
    <color-icon-lodging-fees
      first-color="#2070F3"
      second-color="#715AFB"
      class="tiny-svg-size"
    ></color-icon-lodging-fees>
  </div>
</template>

<script>
import {
  ColorIconAdministrativeFees,
  ColorIconExpressDelivery,
  ColorIconMealAllowance,
  ColorIconLodgingFees
} from '@opentiny/vue-icon-multicolor'

export default {
  components: {
    ColorIconAdministrativeFees: ColorIconAdministrativeFees(),
    ColorIconExpressDelivery: ColorIconExpressDelivery(),
    ColorIconMealAllowance: ColorIconMealAllowance(),
    ColorIconLodgingFees: ColorIconLodgingFees()
  }
}
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
