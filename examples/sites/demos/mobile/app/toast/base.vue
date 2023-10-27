<template>
  <div>
    <button @click="showToast('text', 100)">show text toast</button>
    <button @click="showToast('correct', 101)">show correct toast</button>
    <button @click="showToast('error', 102)">show error toast</button>
  </div>
</template>

<script lang="jsx">
import { Toast } from '@opentiny/vue'

export default {
  methods: {
    showToast(type, zIndex) {
      Toast.service({
        text: 'loading...',
        type: type,
        time: 2000,
        zIndex
      })
    }
  }
}
</script>
