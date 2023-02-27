<template>
  <div class="content">
    <tiny-button @click="baseClick1" :reset-time="0">单按钮无标题</tiny-button>
    <tiny-button @click="baseClick2" :reset-time="0">单按钮有标题</tiny-button>
    <tiny-button @click="baseClick3" :reset-time="0">单按钮有标题多行</tiny-button>
    <tiny-button @click="baseClick4" :reset-time="0">双按钮有标题</tiny-button>
    <tiny-button @click="baseClick5" :reset-time="0">双按钮无标题</tiny-button>
  </div>
</template>

<script>
import { Button, Modal, Notify } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    baseClick1() {
      Modal.alert({ message: '单行居中对齐，多行居左对齐', showHeader: false, tiny_mode: 'mobile' })
    },
    baseClick2() {
      Modal.alert({ message: '单行居中对齐，多行居左对齐', title: '标题', tiny_mode: 'mobile' })
    },
    baseClick3() {
      Modal.alert({
        message: '单行居中对齐，多行居左对齐,单行居中对齐，多行居左对齐单行居中对齐，多行居左对齐单行居中对齐，多行居左对齐',
        title: '标题',
        tiny_mode: 'mobile'
      })
    },
    baseClick4() {
      Modal.confirm({ message: '您确定要删除吗？', tiny_mode: 'mobile' }).then((res) => {
        Notify({
          type: 'info',
          title: '触发回调事件',
          message: `点击${res}按钮`
        })
      })
    },
    baseClick5() {
      Modal.confirm({ message: '您确定要删除吗？', showHeader: false, tiny_mode: 'mobile' }).then((res) => {
        Notify({
          type: 'info',
          title: '触发回调事件',
          message: `点击${res}按钮`
        })
      })
    }
  }
}
</script>
