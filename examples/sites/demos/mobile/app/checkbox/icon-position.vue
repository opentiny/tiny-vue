<template>
  <div class="checkbox-wrap">
    <p>
      1. 给 <code>checkbox-group</code> 设置 <code>icon-position</code>属性，指定其中所有
      <code>checkbox</code> 子选项的同名属性。
    </p>
    <tiny-checkbox-group v-model="checked1" icon-position="top">
      <tiny-checkbox label="复选框1">
        <span style="display: block;margin-bottom: 10px;"
          >第1个选项内容。。。第1个选项内容。。。第1个选项内容。。。第1个选项内容。。。第1个选项内容。。。第1个选项内容。。。</span
        >
      </tiny-checkbox>
      <tiny-checkbox label="复选框2">
          <span
            >第2个选项内容。。。第2个选项内容。。。第2个选项内容。。。第2个选项内容。。。第2个选项内容。。。</span
          >
      </tiny-checkbox>
    </tiny-checkbox-group>
    <br />

    <p>2. 也可以给单个 <code>checkbox</code> 复选框设置 <code>icon-position</code>属性。</p>
    <tiny-checkbox v-model="checked2" icon-position="top">
      <span>很长的label。。。很长的label。。。很长的label。。。很长的label。。。很长的label。。。</span>
    </tiny-checkbox>
  </div>
</template>

<script>
import { Checkbox, CheckboxGroup } from '@opentiny/vue'

export default {
  components: {
    TinyCheckbox: Checkbox,
    TinyCheckboxGroup: CheckboxGroup
  },
  data() {
    return {
      checked1: ['复选框1'],
      checked2: false
    }
  }
}
</script>

<style scoped>
.checkbox-wrap {
  padding: 20px;
}
</style>
