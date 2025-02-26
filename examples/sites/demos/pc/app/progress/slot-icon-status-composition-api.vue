<template>
  <div>
    <tiny-progress class="progress" :stroke-width="12" :percentage="100" status="success">
      <template #successIcon>
        <TinyIconSmile />
      </template>
    </tiny-progress>
    <br />
    <tiny-progress class="progress" :stroke-width="12" :percentage="80" status="warning">
      <template #warningIcon>
        <TinyIconMeh />
      </template>
    </tiny-progress>
    <br />
    <tiny-progress class="progress" :stroke-width="12" :percentage="50" status="exception">
      <template #exceptionIcon>
        <TinyIconFrown />
      </template>
    </tiny-progress>
  </div>
</template>

<script setup>
import { TinyProgress } from '@opentiny/vue'
import { IconFrown, IconMeh, IconSmile } from '@opentiny/vue-icon'

const TinyIconSmile = IconSmile()
const TinyIconMeh = IconMeh()
const TinyIconFrown = IconFrown()
</script>
