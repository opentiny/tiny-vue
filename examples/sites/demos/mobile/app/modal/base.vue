<template>
  <div class="content">
    <tiny-button @click="baseClick1" :reset-time="0">单按钮无标题</tiny-button>
    <tiny-button @click="baseClick2" :reset-time="0">单按钮有标题</tiny-button>
    <tiny-button @click="baseClick3" :reset-time="0">单按钮有标题多行</tiny-button>
    <tiny-button @click="baseClick4" :reset-time="0">双按钮有标题</tiny-button>
    <tiny-button @click="baseClick5" :reset-time="0">双按钮无标题</tiny-button>
  </div>
</template>

<script lang="jsx">
import { TinyButton, TinyModal, TinyNotify } from '@opentiny/vue'

export default {
  components: {
    TinyButton
  },
  methods: {
    baseClick1() {
      TinyModal.alert({ message: '单行居中对齐，多行居左对齐', showHeader: false, tiny_mode: 'mobile' })
    },
    baseClick2() {
      TinyModal.alert({ message: '单行居中对齐，多行居左对齐', title: '标题', tiny_mode: 'mobile' })
    },
    baseClick3() {
      TinyModal.alert({
        message:
          '单行居中对齐，多行居左对齐,单行居中对齐，多行居左对齐单行居中对齐，多行居左对齐单行居中对齐，多行居左对齐',
        title: '标题',
        tiny_mode: 'mobile'
      })
    },
    baseClick4() {
      TinyModal.confirm({ message: '您确定要删除吗？', tiny_mode: 'mobile' }).then((res) => {
        TinyNotify({
          type: 'info',
          title: '触发回调事件',
          message: `点击${res}按钮`
        })
      })
    },
    baseClick5() {
      TinyModal.confirm({ message: '您确定要删除吗？', showHeader: false, tiny_mode: 'mobile' }).then((res) => {
        TinyNotify({
          type: 'info',
          title: '触发回调事件',
          message: `点击${res}按钮`
        })
      })
    }
  }
}
</script>
