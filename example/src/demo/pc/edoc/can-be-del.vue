<template>
  <tiny-edoc class="tiny-edoc-demo" :can-be-del="false" :direct-download="true"></tiny-edoc>
</template>

<script>
import { Edoc } from '@opentiny/vue'

export default {
  components: {
    TinyEdoc: Edoc
  }
}
</script>

<style>
.tiny-edoc-demo .tiny-edoc__download-file a,
.tiny-edoc-demo .tiny-edoc__download-file a:hover {
  color: #333;
  text-decoration: none;
}
</style>
