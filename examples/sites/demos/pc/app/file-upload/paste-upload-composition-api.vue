<template>
  <tiny-file-upload drag accept=".png,.jpeg,.jpg" action="#" paste-upload :auto-upload="false" :max-name-length="3">
    <icon-file-upload class="tiny-svg-size icon-fileupload"></icon-file-upload>
  </tiny-file-upload>
</template>

<script setup>
import { FileUpload as TinyFileUpload } from '@opentiny/vue'
import { iconFileupload } from '@opentiny/vue-icon'

const IconFileUpload = iconFileupload()
</script>
