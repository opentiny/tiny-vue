<template>
  <tiny-badge is-dot>小圆点显示</tiny-badge>
  <br /><br />
  <tiny-badge is-dot>
    <template #default>
      <tiny-button type="text" :icon="TinyIconMail"> </tiny-button>
    </template>
  </tiny-badge>
</template>

<script setup>
import { Badge as TinyBadge } from '@opentiny/vue'
import { iconMail } from '@opentiny/vue-icon'
import { Button as TinyButton } from '@opentiny/vue'

const TinyIconMail = iconMail()
</script>
