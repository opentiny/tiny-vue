<template>
  <div class="tiny-tag-demo">
    <tiny-tag color="default" text="" type="round" cycleColor="#ff2956"> 默认 </tiny-tag>
    <tiny-tag color="default" text="红色" type="round" />
    <tiny-tag color="default" text="蓝色" type="round"> </tiny-tag>
    <tiny-tag color="default" text="黄色" type="round"> </tiny-tag>
    <tiny-tag color="default" text="绿色" type="round"> </tiny-tag>
  </div>
</template>

<script>
import { Tag } from '@opentiny/vue'

export default {
  components: {
    TinyTag: Tag
  }
}
</script>

<style>
.tiny-tag-demo {
  padding: 10px;
}

.tiny-mobile-tag {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
