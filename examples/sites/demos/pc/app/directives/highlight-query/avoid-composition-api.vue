<template>
  <div>
    <div>
      关键字：<tiny-input v-model="query" placeholder="输入关键字，观察下面的高亮"></tiny-input> &nbsp;
      <tiny-button @click="changeList">修改内容</tiny-button>
    </div>

    <div>避免场景1： 直接包含文字节点</div>
    <div v-highlight-query="query">
      {{ list.join(',') }}
    </div>
    <br />
    <div>避免场景2：文字节点与其它组件混合</div>
    <div v-highlight-query="query">
      {{ list.join(',') }}
      <tiny-input></tiny-input>
    </div>
    <br />
    <div>正确的场景1</div>
    <div v-highlight-query="query">
      <span> {{ list.join(',') }}</span>
    </div>
    <br />
    <div>正确的场景2</div>
    <div v-highlight-query="query">
      <span> {{ list.join(',') }}</span>
      <tiny-input></tiny-input>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Input as TinyInput, Button as TinyButton } from '@opentiny/vue'
import { HighlightQuery as vHighlightQuery } from '@opentiny/vue-directive'

const query = ref('一片')
const list = ref(['一片一片又一片', '两片三片四五片', '六片七片八九片', '飞入芦花都不见'])

const changeList = () => (list.value = ['江上一笼统', '井上黑窟窿', '黄狗身上白', '白狗身上肿'])
</script>

<style scoped>
.tiny-input {
  width: 280px;
  margin-bottom: 20px;
}

div {
  line-height: 2;
}
</style>
