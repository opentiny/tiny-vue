<template>
  <div class="checkbox-wrap">
    <div class="page__hd">
      <h1 class="page__title">Checkbox</h1>
      <p class="page__desc">勾选框-多选</p>
    </div>
    <p class="padds">样例1：</p>
    <div class="padds">
      <tiny-radio v-model="value" label="1" border>主文本 1</tiny-radio>
    </div>
    <div class="borders"></div>
    <div class="padds">
      <tiny-radio v-model="value1" label="3" border>主文本 2</tiny-radio>
    </div>

    <p class="padds">样例2：</p>
    <div class="padds">
      <tiny-checkbox v-model="checked.a">A、非常喜欢</tiny-checkbox>
    </div>
    <div class="padds">
      <tiny-checkbox v-model="checked.b">B、喜欢</tiny-checkbox>
    </div>
    <div class="padds">
      <tiny-checkbox v-model="checked.c">C、一般</tiny-checkbox>
    </div>
    <div class="padds">
      <tiny-checkbox v-model="checked.d">D、不喜欢</tiny-checkbox>
    </div>
  </div>
</template>

<script>
import { Checkbox, Radio } from '@opentiny/vue'

export default {
  components: {
    TinyCheckbox: Checkbox,
    TinyRadio: Radio
  },
  data() {
    return {
      value: '1',
      value1: '2',
      checked: {
        a: true,
        b: false,
        c: false,
        d: false,
        e: false,
        f: false,
        g: false,
        h: false
      },
      dataList: [
        {
          id: 1,
          content: '主文本1',
          subtext: '次文本1',
          contentdes: '这是描述文本'
        }
      ]
    }
  },
  methods: {}
}
</script>
<style>
.borders {
  height: 1px;
  width: calc(100% - 52px);
  margin-left: 52px;
  background: #ddd;
}
.padds {
  padding: 8px 16px;
}
.page__hd {
  padding: 40px;
}
.page__title {
  font-weight: 400;
  font-size: 21px;
  text-align: left;
}
.page__desc {
  margin-top: 5px;
  color: #888;
  font-size: 14px;
  text-align: left;
}
.checkbox-wrap {
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 356px;
  height: calc(100% - 0px);
  overflow: auto;
}
</style>
