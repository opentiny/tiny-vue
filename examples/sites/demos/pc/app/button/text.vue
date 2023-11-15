<template>
  <div>
    <div>
      <tiny-button type="text" :icon="TinyIconMail"> </tiny-button>
      <tiny-button type="text" :icon="TinyIconMail" disabled> </tiny-button>
    </div>
    <div>
      <tiny-button type="text" text="文本按钮"> </tiny-button>
      <tiny-button type="text" text="文本按钮" disabled></tiny-button>
    </div>
    <div>
      <tiny-button type="text" :icon="TinyIconMail" text="图标加文字"> </tiny-button>
      <tiny-button type="text" :icon="TinyIconMail" text="图标加文字" disabled> </tiny-button>
    </div>
  </div>
</template>

<script>
import { Button } from '@opentiny/vue'
import { iconMail } from '@opentiny/vue-icon'

export default {
  components: {
    TinyButton: Button
  },
  data() {
    return {
      TinyIconMail: iconMail()
    }
  }
}
</script>
