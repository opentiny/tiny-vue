<template>
  <div>
    <div>
      关键字：<tiny-input v-model="query" placeholder="输入关键字，观察下面的高亮"></tiny-input> &nbsp;
      <tiny-button @click="changeList">修改诗的内容</tiny-button>
    </div>

    <div class="title">避免场景 1：直接包含文字节点，无法动态更新</div>
    <div v-highlight-query="query">
      {{ list.join(',') }}
    </div>
    <br />
    <div class="title">避免场景 2：文字节点与其它组件混合，无法动态更新</div>
    <div v-highlight-query="query">
      {{ list.join(',') }}
      <tiny-button>混入的按钮</tiny-button>
    </div>
    <br />
    <div class="title">正确的场景 1</div>
    <div v-highlight-query="query">
      <span> {{ list.join(',') }}</span>
    </div>
    <br />
    <div class="title">正确的场景 2</div>
    <div v-highlight-query="query">
      <span> {{ list.join(',') }}</span>
      <tiny-button>混入的按钮</tiny-button>
    </div>
  </div>
</template>

<script>
import { HighlightQuery } from '@opentiny/vue-directive'
import { TinyInput, TinyButton } from '@opentiny/vue'

export default {
  directives: { HighlightQuery },
  components: {
    TinyInput,
    TinyButton
  },
  data() {
    return {
      query: '一片',
      list: ['一片一片又一片', '两片三片四五片', '六片七片八九片', '飞入芦花都不见']
    }
  },
  methods: {
    changeList() {
      this.list = ['江上一笼统', '井上黑窟窿', '黄狗身上白', '白狗身上肿']
    }
  }
}
</script>

<style scoped>
.tiny-input {
  width: 280px;
  margin-bottom: 20px;
}

div {
  line-height: 2;
}

.title {
  font-size: 18px;
  font-weight: bold;
}

.tiny-button {
  margin-left: 20px;
}
</style>
