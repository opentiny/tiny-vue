<template>
  <div>
    <p>
      <tiny-button @click="data = ['change1', 'change2', 'change3']">点击改变文本内容</tiny-button> 当前列表：{{ data }}
    </p>
    <p><tiny-button @click="active = 1">点击选中第二个</tiny-button> 当前值：{{ active }}</p>
    <br />
    <tiny-filter-bar v-model="active" :data="data"></tiny-filter-bar>
  </div>
</template>

<script>
import { FilterBar, Button } from '@opentiny/vue'

export default {
  components: {
    TinyFilterBar: FilterBar,
    TinyButton: Button
  },
  data() {
    return {
      active: 0,
      data: ['类目一', '类目二', '类目三']
    }
  },
  methods: {}
}
</script>
