<template>
  <tiny-user-account>
    <tiny-radio v-model="value" label="1">研发</tiny-radio>
    <tiny-radio v-model="value" label="2">非研发</tiny-radio>
  </tiny-user-account>
</template>

<script lang="jsx">
import { UserAccount, Radio } from '@opentiny/vue'

export default {
  components: {
    TinyUserAccount: UserAccount,
    TinyRadio: Radio
  },
  data() {
    return {
      value: '1'
    }
  }
}
</script>
