<template>
  <tiny-user v-model="user" multiple @change="change" @focus="handleFocus" @blur="handleBlur"></tiny-user>
</template>

<script>
import { TinyUser, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyUser
  },
  data() {
    return {
      user: '441047913162396,702973890055088,421000103624183'
    }
  },
  methods: {
    change(val) {
      TinyModal.message({ message: `${val}`, status: 'info' })
    },
    handleFocus() {
      TinyModal.message({
        message: '组件聚焦'
      })
    },
    handleBlur() {
      TinyModal.message({
        message: '组件失焦'
      })
    }
  }
}
</script>
