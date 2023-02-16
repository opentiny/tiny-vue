<template>
  <div class="demo-form">
    <div class="page__hd">
      <h1 class="page__title">Form</h1>
      <p class="page__desc">表单（文本域）</p>
    </div>
    <div class="padds">
      <div class="demo-form-readonly">
        <p>普通-可清除输入框</p>
        <tiny-input
          v-model="createData.text1"
          placeholder="请输入内容"
          clearable
        ></tiny-input>
      </div>
      <div>
        <tiny-input v-model="createData.title1" readonly></tiny-input>
        <tiny-input
          v-model="createData.text2"
          type="textarea"
          placeholder="请输入内容"
          show-word-limit
          :maxlength="20"
        ></tiny-input>
      </div>
      <div class="demo-form-textarea">
        <p>文本域</p>
        <tiny-input
          v-model="createData.text3"
          type="textarea"
          placeholder="请输入内容"
          counter
          show-word-limit
          :maxlength="20"
        >
          <template #content>
            <span
              class="content-class"
              v-for="item in createData.arr"
              :key="item"
              @click="check(item)"
              >{{ item }}</span
            >
          </template>
        </tiny-input>
      </div>
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
      createData: {
        title1: '标题',
        text1: '',
        ttext2: '已填写有内容',
        text3: '',
        title4: '',
        arr: ['常用', '备用', '常用3']
      }
    }
  },
  methods: {
    check(val) {
      this.createData.text3 += val
    }
  }
}
</script>

<style scoped>
.padds {
  padding-right: 15px;
  padding-left: 15px;
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
.demo-form {
  width: 356px;
  height: calc(100% - 0px);
  overflow: auto;
  background: #f4f4f4;
}

.btns button {
  background-color: #eee;
  color: rgb(102, 102, 102);
  border-color: #eee;
}
.content-class {
  width: auto;
  cursor: pointer;
  padding: 0px 5px;
  display: inline-block;
  margin-right: 10px;
  background: #f5f5f5;
  font-size: 13px;
}
.demo-form-readonly {
  margin-bottom: 24px;
}
.demo-form-textarea {
  padding-bottom: 24px;
}
</style>
