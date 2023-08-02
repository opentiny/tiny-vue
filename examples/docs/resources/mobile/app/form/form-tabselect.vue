<template>
  <div id="demo" class="demo-form">
    <div class="page__hd">
      <h1 class="page__title">Form</h1>
      <p class="page__desc">表单（分段器）</p>
    </div>
    <div class="btb box">
      <div class="titleSingle">左右结构单行</div>
      <tiny-button type="primary" size="small" :plain="active != 0" @click="change(0)">Small</tiny-button>
      <tiny-button type="primary" size="small" :plain="active != 1" @click="change(1)">Default</tiny-button>
    </div>
    <div class="btb box">
      <div class="title">左右结构多行左右结构多行左右结构多行左右结构多行</div>
      <tiny-button type="primary" size="small" :plain="active != 0" @click="change(0)">Small</tiny-button>
      <tiny-button type="primary" size="small" :plain="active != 1" @click="change(1)">Default</tiny-button>
      <tiny-button type="primary" size="small" :plain="active != 2" @click="change(2)">Large</tiny-button>
    </div>
    <div class="box">
      <div class="singleTitle">上下结构单行</div>
      <div class="btb">
        <tiny-button type="primary" size="small" :plain="active != 0" @click="change(0)">Small</tiny-button>
        <tiny-button type="primary" size="small" :plain="active != 1" @click="change(1)">Default</tiny-button>
        <tiny-button type="primary" size="small" :plain="active != 2" @click="change(2)">Large</tiny-button>
        <tiny-button type="primary" size="small" :plain="active != 3" @click="change(3)">Large2</tiny-button>
      </div>
    </div>
    <div class="box">
      <div class="mutilTitle">
        上下结构多行上下结构多行上下结构多行上下结构多行上下结构多行上下结构多行上下结构多行上下结构多行上下结构多行上下结构多行上下结构多行上下结构多行上下结构多行上下结构多行上下结构多行上下结构多行上下结构多行上下结构多行上下结构多行上下结构多行
      </div>
      <div class="btb">
        <tiny-button type="primary" size="small" :plain="active != 0" @click="change(0)">Small</tiny-button>
        <tiny-button type="primary" size="small" :plain="active != 1" @click="change(1)">Default</tiny-button>
        <tiny-button type="primary" size="small" :plain="active != 2" @click="change(2)">Large</tiny-button>
        <tiny-button type="primary" size="small" :plain="active != 3" @click="change(3)">Large2</tiny-button>
      </div>
    </div>
  </div>
</template>

<script lang="jsx">
import { Button } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  data() {
    return {
      dat: 0,
      active: 0
    }
  },
  methods: {
    change(activeVal) {
      this.active = activeVal
    }
  }
}
</script>

<style scoped>
.page__hd {
  padding: 40px;
}
.page__title {
  font-weight: 400;
  font-size: 21px;
  text-align: left;
}
.demo-form {
  height: 100%;
  overflow: auto;
  padding-left: 16px;
  padding-right: 15px;
  background: #f4f4f4;
}
.btb {
  display: flex;
  justify-content: left;
  align-items: center;
  padding-top: 8px;
  background: white;
}
.titleSingle {
  padding-right: 10px;
}
.title {
  width: 100px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-inline-box;
  padding-right: 10px;
}
.mutilTitle {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-inline-box;
}
.box {
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
  background: white;
}
#demo button {
  height: 24px;
  line-height: 24px;
}
.btb button:not(:last-child) {
  border-right: 0px;
  border-radius: 2px 0 0 2px;
}
.btb button:last-child {
  border-radius: 0px 2px 2px 0px;
}
</style>
