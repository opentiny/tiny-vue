<template>
  <div class="input-wrap">
    <div class="page__hd">
      <h1 class="page__title">Input</h1>
      <p class="page__desc">表单输入</p>
    </div>
    <div>
      <p class="page__text">打开autocomplete</p>
      <tiny-input v-model="input" placeholder="请输入内容" clearable autocomplete="on"></tiny-input>
    </div>
    <div>
      <p class="page__text">普通可关闭</p>
      <tiny-input v-model="input" placeholder="请输入内容" clearable></tiny-input>
    </div>
    <div>
      <p class="page__text">文本域</p>
      <tiny-input v-model="input" type="textarea" counter show-word-limit :maxlength="20"></tiny-input>
    </div>
  </div>
</template>

<script>
import { Input } from '@opentiny/vue'

export default {
  components: {
    TinyInput: Input
  },
  data() {
    return {
      input: ''
    }
  }
}
</script>
<style>
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
.page__text {
  padding-right: 16px;
  padding-left: 16px;
  margin-top: 0.77em;
  margin-bottom: 0.3em;
  color: #666;
  font-size: 14px;
}
.input-wrap {
  height: 100%;
  background: #f4f4f4;
}
</style>
