<template>
  <tiny-exception>
    <template #icon>
      <IconSuccess />
    </template>
    <template #content>
      <div>content插槽</div>
    </template>
    <tiny-button type="primary">立即新建</tiny-button>
  </tiny-exception>
</template>

<script>
import { TinyException } from '@opentiny/vue'
import { IconSuccess } from '@opentiny/vue-icon'

export default {
  components: {
    TinyException,
    IconSuccess: IconSuccess()
  }
}
</script>
