<template>
  <tiny-layout>
    <tiny-row>
      <tiny-button circle>C</tiny-button>
      <tiny-button type="primary" circle>C</tiny-button>
      <tiny-button type="success" circle>C</tiny-button>
      <tiny-button type="info" circle>C</tiny-button>
      <tiny-button type="warning" circle>C</tiny-button>
      <tiny-button type="danger" circle>C</tiny-button>
    </tiny-row>
    <tiny-row>
      <tiny-button :icon="IconSearch" circle></tiny-button>
      <tiny-button type="primary" :icon="IconEdit" circle></tiny-button>
      <tiny-button type="success" :icon="IconYes" circle></tiny-button>
      <tiny-button type="info" :icon="IconMail" circle></tiny-button>
      <tiny-button type="warning" :icon="IconStarO" circle></tiny-button>
      <tiny-button type="danger" :icon="IconDel" circle></tiny-button>
    </tiny-row>
  </tiny-layout>
</template>

<script>
import { Button, Layout, Row } from '@opentiny/vue'
import {
  iconDel,
  iconYes,
  iconEdit,
  iconMail,
  iconStarO,
  iconSearch
} from '@opentiny/vue-icon'

export default {
  components: {
    TinyButton: Button,
    TinyLayout: Layout,
    TinyRow: Row
  },
  data() {
    return {
      IconDel: iconDel(),
      IconYes: iconYes(),
      IconEdit: iconEdit(),
      IconMail: iconMail(),
      IconStarO: iconStarO(),
      IconSearch: iconSearch()
    }
  }
}
</script>

<style scoped>
.tiny-row {
  margin-bottom: 20px;
}
</style>
