<template>
  <div style="width: 270px">
    <tiny-date-picker
      v-model="value"
      type="datetime"
      name="mypicker"
      :show-timezone="true"
      :timezone-data="tzData"
      @select-change="selsxr"
      default-timezone="Etc/GMT+12"
    ></tiny-date-picker>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DatePicker as TinyDatePicker, Modal } from '@opentiny/vue'
import tzData from '@opentiny/vue-renderless/picker/timezone'

const value = ref('')

function selsxr(tz) {
  Modal.message({ message: `当前值为 ${tz.tz.name}`, status: 'info' })
}
</script>
