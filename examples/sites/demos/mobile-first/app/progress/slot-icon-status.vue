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

<script lang="jsx">
import { TinyProgress } from '@opentiny/vue'
import { IconFrown, IconMeh, IconSmile } from '@opentiny/vue-icon'

export default {
  components: {
    TinyProgress,
    TinyIconSmile: IconSmile(),
    TinyIconMeh: IconMeh(),
    TinyIconFrown: IconFrown()
  }
}
</script>
