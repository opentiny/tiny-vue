<template>
  <div>
    <Button @click="changeVisible">Show Color select panel</Button>
    <div style="position: relative">
      <tiny-color-select-panel v-model="color" :visible="visible" @confirm="onConfirm" @cancel="onCancel" />
    </div>
  </div>
</template>

<script lang="jsx">
import {ref} from 'vue';
import {ColorSelectPanel,Button,Notify} from '@opentiny/vue';
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
    const onConfirm = (hex) => {
      Notify({
        type: 'success',
        position: 'top-right',
        title: '用户点击了选择',
        message: hex
      });
      hidden();
    }
    const onCancel = (hex) => {
      Notify({
        type: 'success',
        position: 'top-right',
        title: '用户点击了取消',
      });
      hidden();
    }
    
    return {
      color,
      visible,
      changeVisible,
      onCancel,
      onConfirm
    }
  }
}
</script>