<template>
  <div class="demo">
    <tiny-search-box v-model="tags" :items="items" editable @change="onChange">
      <!-- autocomplete对应的自定义二级面板 -->
      <template #autocomplete="scope">
        <div class="tvp-search-box__date-wrap">
          <div class="tvp-search-box__dropdown-title">选择人员</div>
          我是人员自定义面板
        </div>
      </template>
      <!-- other对应的自定义二级面板 -->
      <template #other="scope">
        <span @click.stop="scope.onConfirm({ value: 'other' })">other</span>
      </template>
      <!-- 编辑状态下：autocomplete对应的自定义面板 -->
      <template #autocomplete-edit="scope">
        <div class="tvp-search-box__date-wrap">
          <div class="tvp-search-box__dropdown-title">选择人员</div>
          我是人员自定义面板
        </div>
      </template>
      <!-- 编辑状态下：other对应的自定义二级面板 -->
      <template #other-edit="scope">
        <span @click="scope.onConfirm({ value: 'other' })">我是other对应的编辑态自定义面板</span>
      </template>
    </tiny-search-box>
  </div>
</template>

<script>
import TinySearchBox from "@opentiny/vue-search-box";

export default {
  components: {
    TinySearchBox
  },
  data() {
    return {
      tags: [
        {
          label: '选择人员',
          field: 'autocomplete',
          type: 'custom',
          replace: true,
          slotName: 'autocomplete',
          value: '5656'
        }
      ],
      items: [
        {
          label: '选择人员',
          field: 'autocomplete',
          type: 'custom',
          replace: true, // 支持单选
          slotName: 'autocomplete' // 定义此属性类型对应的插槽名，并在以下的模板层使用
        },
        {
          label: '其他自定义',
          field: 'other',
          type: 'custom',
          slotName: 'other' // 定义此属性类型对应的插槽名
        }
      ]
    }
  },
  methods: {
    onChange(newFilters, oldFilters) {
      console.log('changeEvent:', newFilters, oldFilters)
    }
  }
}
</script>
