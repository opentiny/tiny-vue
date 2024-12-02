<template>
  <div class="checkbox-group-wrap">
    <tiny-checkbox-group v-model="checkboxGroup" vertical>
      <tiny-checkbox v-for="(city, index) in cities" :label="city" :key="index">{{ city }}</tiny-checkbox>
    </tiny-checkbox-group>
  </div>
</template>

<script lang="jsx">
import { TinyCheckbox, TinyCheckboxGroup } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyCheckbox,
    TinyCheckboxGroup
  },
  data() {
    return {
      checkboxGroup: ['北京'],
      cities: ['上海', '北京', '广州', '深圳']
    }
  }
}
</script>

<style scoped>
.checkbox-group-wrap {
  padding: 20px;
}
</style>
