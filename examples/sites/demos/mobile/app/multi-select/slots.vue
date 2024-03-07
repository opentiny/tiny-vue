<template>
  <div class="demo-multi-select">
    <tiny-multi-select :data-source="data" v-model="value">
      <template #footer>
        <div class="my-footer">
          <p>自定义底部插槽</p>
        </div>
      </template>
    </tiny-multi-select>
    <p>value: {{ value }}</p>
  </div>
</template>

<script>
import { MultiSelect } from '@opentiny/vue'

export default {
  components: {
    TinyMultiSelect: MultiSelect
  },
  data() {
    return {
      data: [
        {
          title: '云类型',
          options: [
            {
              label: '公有云',
              value: '公有云'
            },
            {
              label: '私有云',
              value: '私有云'
            },
            {
              label: '伙伴云',
              value: '伙伴云'
            },
            {
              label: '公有云1',
              value: '公有云1'
            },
            {
              label: '公有云2',
              value: '公有云2'
            }
          ]
        }
      ],
      value: []
    }
  }
}
</script>

<style scoped>
.demo-multi-select {
  position: relative;
  height: 100%;
  background-color: #f5f5f5;
}

.my-footer {
  text-align: center;
}
</style>
