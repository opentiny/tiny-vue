<template>
  <div date-tag="tiny-demo">
    <tiny-button @click="visible2 = true">级联选择配置 (树形数据)</tiny-button>值: {{ value2 }}
    <tiny-cascader-select
      v-model="value2"
      type="cascade"
      value-type="string"
      :options="options2"
      text-field="text"
      value-field="value"
      children-field="children"
      :visible="visible2"
      @update:visible="visible2 = $event"
    ></tiny-cascader-select>
  </div>
</template>

<script>
import { CascaderSelect, Button } from '@opentiny/vue'

export default {
  components: {
    TinyCascaderSelect: CascaderSelect,
    TinyButton: Button
  },
  data() {
    return {
      visible2: false,
      value2: [null, null],
      options2: [
        {
          text: '浙江',
          value: 'ZheJiang',
          children: [
            {
              text: '杭州',
              value: 'HangZhou',
              children: [
                { text: '西湖区', value: 'XiHu' },
                { text: '余杭区', value: 'YuHang' }
              ]
            },
            {
              text: '温州',
              value: 'WenZhou',
              children: [
                { text: '鹿城区', value: 'LuCheng' },
                { text: '瓯海区', value: 'OuHai' }
              ]
            }
          ]
        },
        {
          text: '福建',
          value: 'FuJian',
          children: [
            {
              text: '福州',
              value: 'FuZhou',
              children: [
                { text: '鼓楼区', value: 'GuLou' },
                { text: '台江区', value: 'TaiJiang' }
              ]
            },
            {
              text: '厦门',
              value: 'XiaMen',
              children: [
                { text: '思明区', value: 'SiMing' },
                { text: '海沧区', value: 'HaiCang' }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {}
}
</script>
