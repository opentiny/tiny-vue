<template>
  <div class="tiny-mobile-exception-demo">
    <tiny-exception type="nodata" exception-class="excepCls"></tiny-exception>
  </div>
</template>

<script lang="jsx">
import { Exception } from '@opentiny/vue'

export default {
  components: {
    TinyException: Exception
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
