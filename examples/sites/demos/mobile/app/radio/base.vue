<template>
  <div class="demo">
    <p>默认</p>
    <tiny-radio v-model="value" label="1" @change="changeAction">男</tiny-radio>
    <tiny-radio v-model="value" label="2" @change="changeAction">女</tiny-radio>
    <p>禁用</p>
    <tiny-radio v-model="value" label="1" disabled>我同意</tiny-radio>
    <tiny-radio v-model="value" label="2" disabled>我拒绝</tiny-radio>
  </div>
</template>

<script lang="jsx">
import { Radio } from '@opentiny/vue'

export default {
  components: {
    TinyRadio: Radio
  },
  data() {
    return {
      value: '1'
    }
  },
  methods: {
    changeAction(value) {
      console.log(value)
    }
  }
}
</script>

<style>
.demo {
  height: 100%;
  overflow-y: scroll;
}
.demo-title {
  padding-right: 16px;
  padding-left: 16px;
  margin-top: 0.77em;
  margin-bottom: 0.3em;
  color: #666;
  font-size: 14px;
}
.demo-list {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 8px 16px;
}
.withlist {
  margin-top: 20px;
}
.demo .tiny-mobile-list__content-des {
  margin-top: 4px;
  color: #999;
  font-size: 12px;
  line-height: 1.6;
  text-align: justify;
}
</style>
