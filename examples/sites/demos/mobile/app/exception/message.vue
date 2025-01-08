<template>
  <div class="tiny-mobile-exception-demo">
    <tiny-exception type="nodata" message="自定义文本内容" @btn-click="test"></tiny-exception>
  </div>
</template>

<script lang="jsx">
import { TinyException } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyException
  },
  data() {
    return {}
  },
  methods: {
    test() {
      alert(11)
    }
  }
}
</script>
