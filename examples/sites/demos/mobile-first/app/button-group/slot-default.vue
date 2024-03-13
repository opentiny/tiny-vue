<template>
  <tiny-button-group>
    <tiny-button type="primary">Button1</tiny-button>
    <tiny-button type="success">Button2</tiny-button>
    <tiny-button disabled>Button3</tiny-button>
  </tiny-button-group>
</template>

<script>
import { Button, ButtonGroup } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button,
    TinyButtonGroup: ButtonGroup
  }
}
</script>
