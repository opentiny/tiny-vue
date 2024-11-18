<template>
  <tiny-exception type="pagenoperm">
    <tiny-button type="primary" @click="test">立即新建</tiny-button>
  </tiny-exception>
</template>

<script>
import { TinyException, TinyModal, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyException,
    TinyButton
  },
  methods: {
    test() {
      TinyModal.alert('111')
    }
  }
}
</script>
