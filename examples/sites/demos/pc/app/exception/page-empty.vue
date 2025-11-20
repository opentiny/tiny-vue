<template>
  <tiny-exception page-empty type="pageservererror" sub-message="服务器错误" />
</template>

<script>
import { TinyException } from '@opentiny/vue'

export default {
  components: {
    TinyException
  }
}
</script>
