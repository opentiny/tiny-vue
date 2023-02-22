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

<script>
import { UserHead } from '@opentiny/vue'
import { IconMail } from '@opentiny/vue-icon'

export default {
  components: {
    TinyUserHead: UserHead,
    IconMail: IconMail()
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
