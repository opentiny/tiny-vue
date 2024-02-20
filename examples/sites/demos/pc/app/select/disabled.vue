<template>
  <div>
    <br />
    <div>场景1： 下拉禁用</div>
    <br />
    <tiny-select v-model="value1" disabled autocomplete>
      <tiny-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <br />
    <br />
    <div>场景2：多选 + 下拉某项禁用</div>
    <br />
    <tiny-select v-model="value2" multiple>
      <tiny-option
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      >
      </tiny-option>
    </tiny-select>
    <br />
    <br />
    <div>场景3：单选 + 下拉某项禁用</div>
    <br />
    <tiny-select v-model="value3">
      <tiny-option
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      >
      </tiny-option>
    </tiny-select>
    <br />
    <br />
    <div>场景4：多选 + 禁用项默认选中</div>
    <br />
    <tiny-select v-model="value4" multiple>
      <tiny-option
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      >
      </tiny-option>
    </tiny-select>
    <br />
    <br />
    <div>场景5：多选 hover-expand 模式下禁用</div>
    <br />
    <tiny-select
      v-model="value5"
      placeholder="请选择"
      multiple
      disabled
      hover-expand
      disabled-tooltip-content="我是自定义内容"
    >
      <tiny-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <br />
  </div>
</template>

<script>
import { Select, Option } from '@opentiny/vue'

export default {
  components: {
    TinySelect: Select,
    TinyOption: Option
  },
  data() {
    return {
      options1: [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面龙须面超长超长超长超长超长超长超长超长超长' },
        { value: '选项5', label: '北京烤鸭' }
      ],
      options2: [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶', disabled: true },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭' }
      ],
      value1: '',
      value2: [],
      value3: '',
      value4: ['选项2', '选项3'],
      value5: ['选项1', '选项2', '选项3', '选项4', '选项5']
    }
  }
}
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
</style>
