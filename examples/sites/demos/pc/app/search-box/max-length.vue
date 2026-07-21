<template>
  <div class="demo">
    <tiny-search-box v-model="tags" :items="dataSource" :maxlength="maxlength" @exceed="handleExceed" />
  </div>
</template>

<script>
import TinySearchBox from '@opentiny/vue-search-box'

export default {
  components: {
    TinySearchBox
  },
  data() {
    return {
      tags: [],
      maxlength: 8,
      dataSource: [
        {
          label: '名称',
          field: 'testName',
          replace: true,
          options: [
            {
              label: '不能超过8个字符'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleExceed(number) {
      alert(`不能超过${number}个字符`)
    }
  }
}
</script>
