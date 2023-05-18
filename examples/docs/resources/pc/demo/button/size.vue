<template>
  <tiny-layout>
    <tiny-row>
      <tiny-button size="large">
        超大按钮
      </tiny-button>
      <tiny-button size="medium">
        中等按钮
      </tiny-button>
      <tiny-button>
        默认按钮
      </tiny-button>
      <tiny-button size="small">
        小型按钮
      </tiny-button>
      <tiny-button size="mini">
        超小按钮
      </tiny-button>
    </tiny-row>
    <tiny-row>
      <tiny-button type="primary" size="large">
        超大按钮
      </tiny-button>
      <tiny-button type="success" size="medium">
        中等按钮
      </tiny-button>
      <tiny-button type="danger">
        默认按钮
      </tiny-button>
      <tiny-button type="info" size="small">
        小型按钮
      </tiny-button>
      <tiny-button type="warning" size="mini">
        超小按钮
      </tiny-button>
    </tiny-row>
    <tiny-row>
      <tiny-button plain size="large">
        超大按钮
      </tiny-button>
      <tiny-button type="primary" plain size="medium">
        中等按钮
      </tiny-button>
      <tiny-button type="warning" plain>
        默认朴素警告按钮
      </tiny-button>
      <tiny-button type="success" plain size="small">
        小型朴素成功按钮
      </tiny-button>
      <tiny-button type="info" plain size="mini">
        超小朴素信息按钮
      </tiny-button>
    </tiny-row>

    <tiny-row>
      <tiny-button type="primary" size="large">
        超大按钮
      </tiny-button>
      <tiny-button type="primary" plain size="large">
        超大按钮
      </tiny-button>
    </tiny-row>

    <tiny-row>
      <tiny-button type="primary" size="medium">
        中等按钮
      </tiny-button>
      <tiny-button type="primary" plain size="medium">
        中等按钮
      </tiny-button>
    </tiny-row>

    <tiny-row>
      <tiny-button type="primary">
        默认按钮
      </tiny-button>
      <tiny-button type="primary" plain>
        默认按钮
      </tiny-button>
    </tiny-row>

    <tiny-row>
      <tiny-button type="primary" size="small">
        小型按钮
      </tiny-button>
      <tiny-button type="primary" plain size="small">
        小型按钮
      </tiny-button>
    </tiny-row>
  </tiny-layout>
</template>

<script>
import { Button, Layout, Row } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button,
    TinyLayout: Layout,
    TinyRow: Row
  },
  data() { }
}
</script>

<style scoped>
.tiny-row {
  margin-bottom: 20px;
}
</style>
