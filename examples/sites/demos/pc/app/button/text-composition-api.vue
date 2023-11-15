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

<script setup>
import { iconMail } from '@opentiny/vue-icon'
import { Button as TinyButton } from '@opentiny/vue'

const TinyIconMail = iconMail()
</script>
