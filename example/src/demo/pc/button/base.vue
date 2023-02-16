<template>
  <tiny-layout>
    <tiny-row>
      <tiny-button>默认按钮</tiny-button>
      <tiny-button type="primary" native-type="submit">主要按钮</tiny-button>
      <tiny-button type="success">成功按钮</tiny-button>
      <tiny-button type="info">信息按钮</tiny-button>
      <tiny-button type="warning">警告按钮</tiny-button>
      <tiny-button type="danger">危险按钮</tiny-button>
    </tiny-row>
    <tiny-row>
      <tiny-button plain>朴素按钮</tiny-button>
      <tiny-button type="primary" plain>主要按钮</tiny-button>
      <tiny-button type="success" plain>成功按钮</tiny-button>
      <tiny-button type="info" plain>信息按钮</tiny-button>
      <tiny-button type="warning" plain>警告按钮</tiny-button>
      <tiny-button type="danger" plain>危险按钮</tiny-button>
    </tiny-row>
    <tiny-row>
      <tiny-button round>圆角按钮</tiny-button>
      <tiny-button type="primary" round>主要按钮</tiny-button>
      <tiny-button type="success" round>成功按钮</tiny-button>
      <tiny-button type="info" round>信息按钮</tiny-button>
      <tiny-button type="warning" round>警告按钮</tiny-button>
      <tiny-button type="danger" round>危险按钮</tiny-button>
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
