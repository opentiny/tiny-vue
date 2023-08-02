<template>
  <div>
    <tiny-button round>
      默认按钮
    </tiny-button>
    <tiny-button type="primary" round>
      主要按钮
    </tiny-button>
    <tiny-button type="success" round>
      成功按钮
    </tiny-button>
    <tiny-button type="info" round>
      信息按钮
    </tiny-button>
    <tiny-button type="warning" round>
      警告按钮
    </tiny-button>
    <tiny-button type="danger" round>
      危险按钮
    </tiny-button>
  </div>
</template>

<script>
import { Button } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  }
}
</script>
