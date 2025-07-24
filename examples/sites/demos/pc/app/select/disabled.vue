<template>
  <div>
    <br />
    <div>场景 1：下拉禁用</div>
    <br />
    <tiny-select v-model="value1" disabled autocomplete>
      <tiny-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <br />
    <br />
    <div>场景 2：多选 + 下拉某项禁用</div>
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
    <div>场景 3：单选 + 下拉某项禁用</div>
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
    <div>场景 4：多选 + 禁用项默认选中</div>
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
    <div>场景 5：多选 hover-expand 模式下禁用</div>
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
    <br />
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
      options1: [
        { value: '选项 1', label: '北京' },
        { value: '选项 2', label: '上海' },
        { value: '选项 3', label: '天津' },
        { value: '选项 4', label: '重庆重庆超长超长超长超长超长超长超长超长超长' },
        { value: '选项 5', label: '深圳' }
      ],
      options2: [
        { value: '选项 1', label: '北京' },
        { value: '选项 2', label: '上海', disabled: true },
        { value: '选项 3', label: '天津' },
        { value: '选项 4', label: '重庆', disabled: true },
        { value: '选项 5', label: '深圳' }
      ],
      value1: '',
      value2: ['选项 2'],
      value3: '',
      value4: ['选项 2', '选项 3'],
      value5: ['选项 1', '选项 2', '选项 3', '选项 4', '选项 5']
    }
  }
}
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
</style>
