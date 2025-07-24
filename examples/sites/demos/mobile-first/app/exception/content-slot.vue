<template>
  <tiny-exception type="pagenoperm">
    <template #content>
      <div>content插槽</div>
    </template>
  </tiny-exception>
</template>

<script>
import { TinyException } from '@opentiny/vue'

export default {
  components: {
    TinyException
  }
}
</script>
