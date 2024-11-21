<template>
  <div class="tiny-mobile-mini-picker-demo">
    <tiny-form label-width="60px">
      <tiny-form-item label="时间：">
        <tiny-input v-model="val" @focus="fn" placeholder="请选择" type="form" readonly vertical></tiny-input>
      </tiny-form-item>
    </tiny-form>
    <tiny-mini-picker
      @confirm="getVal"
      title="我是两列选择器"
      :columns="columns2"
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
    ></tiny-mini-picker>
  </div>
</template>

<script lang="jsx">
import { TinyForm, TinyFormItem, TinyInput, TinyMiniPicker } from '@opentiny/vue'

export default {
  components: {
    TinyMiniPicker,
    TinyForm,
    TinyFormItem,
    TinyInput
  },
  data() {
    return {
      boxVisibility: false,
      val: '',
      columns2: [
        {
          values: ['周一', '周二', '周三', '周四', '周五'],
          defaultIndex: 2
        },
        {
          values: ['上午', '下午', '晚上'],
          defaultIndex: 1
        }
      ]
    }
  },
  methods: {
    fn() {
      this.boxVisibility = true
    },
    getVal(val) {
      this.val = val.join(',')
    }
  }
}
</script>
