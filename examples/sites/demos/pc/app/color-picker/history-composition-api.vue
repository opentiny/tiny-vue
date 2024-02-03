<template>
  <div>
    <ColorPicker v-model="color" :history="history" />
    <Button @click="addHistoryColor">Append history color</Button>
    <Button @click="popHistoryColor">Pop history color</Button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ColorPicker, Button } from '@opentiny/vue';
const color = ref('#66ccff');
const history = ref(['#66ccff']);
const randomHex = () => "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
const addHistoryColor = () => {
  history.value.push(
    randomHex()
  );
}
const popHistoryColor = () => {
  history.value.pop();
}
</script>