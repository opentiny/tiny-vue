<template>
  <div class="preview">
    <tiny-nav-menu :before-skip="handleSkip" prevent>
      <template #logo>
        <icon-total></icon-total>
      </template>
    </tiny-nav-menu>
  </div>
</template>

<script>
import { NavMenu } from '@opentiny/vue'
import { iconTotal } from '@opentiny/vue-icon'

export default {
  components: {
    TinyNavMenu: NavMenu,
    IconTotal: iconTotal()
  },
  methods: {
    handleSkip() {
      return false
    }
  }
}
</script>

<style scoped>
.preview {
  min-height: 450px;
}

.preview .tiny-nav-menu a:hover {
  text-decoration: none;
}
</style>
