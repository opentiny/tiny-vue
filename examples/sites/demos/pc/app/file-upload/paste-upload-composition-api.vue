<template>
  <tiny-file-upload drag accept=".png,.jpeg,.jpg" action="#" paste-upload :auto-upload="false" :max-name-length="3">
    <icon-fileupload class="tiny-svg-size icon-fileupload"></icon-fileupload>
  </tiny-file-upload>
</template>

<script setup lang="jsx">
import { FileUpload as TinyFileUpload } from '@opentiny/vue'
import { iconFileupload } from '@opentiny/vue-icon'

const IconFileupload = iconFileupload()
</script>
