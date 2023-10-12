<template>
  <tiny-pop-upload :action="action" :data="requestData"></tiny-pop-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { PopUpload as TinyPopUpload } from '@opentiny/vue'

const requestData = ref({
  id: 123
})
const action = ref('http://localhost:3000/api/upload')
</script>
