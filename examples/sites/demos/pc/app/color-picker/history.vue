<template>
  <div>
    <tiny-color-picker v-model="color" :history="history" />
    <Button @click="addHistoryColor">Append history color</Button>
    <Button @click="popHistoryColor">Pop history color</Button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { ColorPicker, Button } from '@opentiny/vue';
export default {
  components: {
    TinyColorPicker: ColorPicker,
    Button
  },
  setup() {
    const color = ref('#66ccff');
    const history = ref(['#66ccff25']);
    const randomHex = () => "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
    const addHistoryColor = () => {
      history.value.push(
        randomHex()
      );
    }
    const popHistoryColor = () => {
      history.value.pop();
    }
    return {
      color,
      history,
      addHistoryColor,
      popHistoryColor
    }
  }
}
</script>