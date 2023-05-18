<template>
  <div id="boxeight"></div>
</template>

<script>
import { Loading } from '@opentiny/vue'

export default {
  data() {
    return {
      size: 'large'
    }
  },
  mounted() {
    Loading.service({
      lock: true,
      text: '加载中',
      target: '#boxeight', // 可传DOM节点对应ID名或类名字符串，也可以传入DOM对象，例如：domObj，let domObj = document.getElementById('boxeight')
      size: ''  //可设置large、medium、small、mini四种尺寸大小 
    })
  }
}
</script>

<style scoped>
#boxeight {
  height: 150px;
}
</style>
