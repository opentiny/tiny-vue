<template>
  <div>
    <Button @click="changeVisible">Show Color select panel</Button>
    <div style="position: relative">
      <tiny-color-select-panel v-model="color" :visible="visible" @confirm="hidden" @cancel="hidden" alpha />
    </div>
  </div>
</template>

<script lang="jsx">
import {ref} from 'vue';
import {ColorSelectPanel,Button} from '@opentiny/vue';
export default {
  components: {
    TinyColorSelectPanel: ColorSelectPanel,
    Button
  },
  setup(){
    const color = ref('#66ccff');
    const visible = ref(false);
    const changeVisible = () => visible.value = !visible.value;
    const hidden = () => visible.value = false;
    return {
      color,
      visible,
      changeVisible,
      hidden
    }
  }
}
</script>