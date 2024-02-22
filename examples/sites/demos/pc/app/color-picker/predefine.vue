<template>
  <div>
    <tiny-color-picker v-model="color" :predefine="predefine" />
    <Button @click="addPredefineColor">Append predefine color</Button>
    <Button @click="popPredefineColor">Pop predefine color</Button>
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
    const randomHex = () => "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
    const predefine = ref(new Array(8).fill(0).map(() => randomHex()))
    const addPredefineColor = () => {
      predefine.value.push(
        randomHex()
      );
    }
    const popPredefineColor = () => {
      predefine.value.pop();
    }
    return {
      color,
      predefine,
      addPredefineColor,
      popPredefineColor
    }
  }
}
</script>