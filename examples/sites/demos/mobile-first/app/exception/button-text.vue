<template>
  <tiny-exception type="pagenoperm">
    <tiny-button type="primary" @click="test">立即新建</tiny-button>
  </tiny-exception>
</template>

<script>
import { Exception, Modal, Button } from '@opentiny/vue'

export default {
  components: {
    TinyException: Exception,
    TinyButton: Button
  },
  methods: {
    test() {
      Modal.alert('111')
    }
  }
}
</script>
