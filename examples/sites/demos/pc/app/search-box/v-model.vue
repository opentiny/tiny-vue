<template>
  <div class="demo">
    <tiny-search-box :items="dataSource" v-model="tags" default-field="ip" />
  </div>
</template>

<script>
import TinySearchBox from "@opentiny/vue-search-box";
import { dataSource } from './data-source'

export default {
  components: {
    TinySearchBox
  },
  data() {
    return {
      dataSource,
      tags: [
        {
          field: 'ip',
          label: '个人IP地址',
          value: '192.168.66.88'
        },
        {
          field: 'testName',
          label: '名称',
          value: 'ecs-1',
          type: 'radio'
        }
      ]
    }
  }
}
</script>
