<template>
  <div class="demo-collapse">
    <br />
    <div>场景 1：collapse-tags 折叠</div>
    <br />
    <tiny-select v-model="value1" :show-proportion="true" multiple collapse-tags>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <br />
    <br />
    <div>场景 2：hover-expand 折叠</div>
    <br />
    <tiny-select v-model="value2" multiple hover-expand>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <br />
    <br />
    <br />
    <div>场景 3：click-expand 折叠</div>
    <br />
    <tiny-select v-model="value3" :max-visible-rows="2" :options="options" multiple click-expand> </tiny-select>
  </div>
</template>

<script>
import { TinySelect, TinyOption } from '@opentiny/vue'

export default {
  components: {
    TinySelect,
    TinyOption
  },
  data() {
    return {
      options: [
        { value: '选项 1', label: '北京' },
        { value: '选项 2', label: '上海' },
        { value: '选项 3', label: '天津' },
        { value: '选项 4', label: '重庆超长超长超长超长超长超长超长超长超长' },
        { value: '选项 5', label: '深圳' },
        { value: '选项 6', label: '广州' },
        { value: '选项 7', label: '武汉' }
      ],
      value1: ['选项 1', '选项 2'],
      value2: ['选项 1', '选项 2', '选项 3', '选项 4'],
      value3: ['选项 1', '选项 2', '选项 3', '选项 4', '选项 5', '选项 6', '选项 7']
    }
  }
}
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
.demo-collapse {
  margin-bottom: 50px;
}
</style>
