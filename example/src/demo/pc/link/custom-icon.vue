<template>
  <div>
    <tiny-link :underline="false" :icon="IconEdit">编辑</tiny-link>
    <tiny-link :underline="false">查看<icon-view class="tiny-svg-size"></icon-view> </tiny-link>
    <tiny-link :underline="false">
      <template #icon>
        <icon-del class="tiny-svg-size"></icon-del>
      </template>
      删除
    </tiny-link>
  </div>
</template>

<script>
import { Link } from '@opentiny/vue'
import { IconEdit, IconView, IconDel } from '@opentiny/vue-icon'

export default {
  components: {
    TinyLink: Link,
    IconView: IconView(),
    IconDel: IconDel()
  },
  data() {
    return {
      IconEdit: IconEdit()
    }
  }
}
</script>
