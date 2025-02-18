<template>
  <div>
    <p>场景 1：多选复制单个标签</p>
    <br />
    <tiny-select ref="selectTagSelectable" v-model="value1" multiple tag-selectable>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <br />
    <br />
    <p>场景 2：多选一键复制所有标签</p>
    <br />
    <tiny-select ref="selectCopyable" v-model="value2" multiple copyable>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <br />
    <br />
    <p>场景 3：多选设置复制文本分隔符</p>
    <br />
    <tiny-select ref="selectCopyable" v-model="value2" multiple copyable text-split="/">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <br />
    <br />
    <tiny-select
      ref="selectCopyable"
      v-model="value2"
      multiple
      copyable
      text-split="/"
      :multiple-limit="2"
      show-limit-text
    >
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <br />
    <br />
    <p>复制到此处：</p>
    <br />
    <tiny-input v-model="copyValue" class="copy-value" type="text"></tiny-input>
  </div>
</template>

<script>
import { TinySelect, TinyOption, TinyInput } from '@opentiny/vue'

export default {
  components: {
    TinySelect,
    TinyOption,
    TinyInput
  },
  data() {
    return {
      options: [
        { value: '选项 1', label: '北京' },
        { value: '选项 2', label: '上海' },
        { value: '选项 3', label: '天津' },
        { value: '选项 4', label: '重庆' },
        { value: '选项 5', label: '深圳' }
      ],
      value1: ['选项 1'],
      value2: ['选项 1', '选项 2'],
      copyValue: ''
    }
  }
}
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
p {
  font-size: 14px;
  line-height: 1.5;
}
</style>
