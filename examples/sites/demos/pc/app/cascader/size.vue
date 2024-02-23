<template>
  <div class="tiny-demo-cascader-size">
    <tiny-cascader v-model="value" :options="options" size="mini"></tiny-cascader>
    <tiny-cascader v-model="value" :options="options" size="small"></tiny-cascader>
    <tiny-cascader v-model="value" :options="options" size="medium"></tiny-cascader>
  </div>
</template>

<script>
import { Cascader } from '@opentiny/vue'

export default {
  components: {
    TinyCascader: Cascader
  },
  data() {
    return {
      value: ['zhinan', 'anzhuang', 'xiangmudengji'],
      options: [
        {
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'anzhuang',
              label: '安装',
              children: [
                {
                  value: 'xiangmudengji',
                  label: '项目登记'
                },
                {
                  value: 'huanjingzhunbei',
                  label: '环境准备'
                },
                {
                  value: 'anzhuangcli',
                  label: '安装 CLI'
                },
                {
                  value: 'chuangjianxiangmu',
                  label: '创建项目'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.tiny-demo-cascader-size {
  display: flex;
  gap: 12px;
}
</style>
