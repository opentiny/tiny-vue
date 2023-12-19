<template>
  <tiny-pop-upload :action="action" :headers="headers" with-credentials></tiny-pop-upload>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { PopUpload as TinyPopUpload } from '@opentiny/vue'

const action = ref('http://localhost:3000/api/upload')
const headers = ref({
  'Accept-Language': 'en,zh',
  Authorization: 'Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ=='
})
</script>
