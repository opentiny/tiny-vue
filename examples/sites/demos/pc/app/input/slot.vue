<template>
  <div class="demo-input">
    <tiny-input placeholder="prepend" v-model="input">
      <template #prepend>Http://</template>
    </tiny-input>
    <tiny-input placeholder="append" v-model="input">
      <template #append>.com</template>
    </tiny-input>
    <tiny-input placeholder="prefix" v-model="input">
      <template #prefix>
        <tiny-icon-search/>
      </template>
    </tiny-input>
    <tiny-input placeholder="suffix" v-model="input">
      <template #suffix>
        <tiny-icon-calendar/>
      </template>
    </tiny-input>
  </div>
</template>

<script>
import { Input } from '@opentiny/vue'
import { IconSearch, IconCalendar } from '@opentiny/vue-icon'

export default {
  components: {
    TinyIconSearch: IconSearch(),
    TinyIconCalendar: IconCalendar(),
    TinyInput: Input
  },
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style scoped>
.demo-input .tiny-input {
  width: 250px;
  margin: 5px;
}
</style>
