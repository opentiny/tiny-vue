<template>
    <div>
        <tiny-button @click="changeVisible">ShowColorSelectPanel</tiny-button>
        <div style="position: relative;height: 200px; background: red;margin-top: 100px;">
            <tiny-color-select-panel :visible="visible" alpha @cancel="hidden" @confirm="hidden"/>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue';
import {ColorSelectPanel, Button} from '@opentiny/vue';
export default {
    components:{
        TinyColorSelectPanel: ColorSelectPanel,
        TinyButton: Button
    },
    setup(){
        const visible = ref(false);
        const changeVisible = () => visible.value = !visible.value;
        const hidden = ()=>visible.value = false;        
        return {
            visible,
            changeVisible,
            hidden
        }
    }
}
</script>