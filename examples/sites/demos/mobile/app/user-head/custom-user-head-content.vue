<template>
  <tiny-user-head>
    <div class="content">
      <span>
        <icon-mail></icon-mail>
      </span>
      Mail
    </div>
  </tiny-user-head>
</template>

<script lang="jsx">
import { TinyUserHead } from '@opentiny/vue-mobile'
import { iconMail } from '@opentiny/vue-icon'

export default {
  components: {
    TinyUserHead,
    IconMail: iconMail()
  }
}
</script>

<style scoped>
.content {
  fill: var(--ti-common-color-line-active);
  display: flex;
  flex-direction: column;
  height: 100%;
  font-style: oblique;
  font-weight: 600;
  font-size: 2em;
}

.content svg {
  width: 1.5em;
  height: 1.5em;
}
</style>
