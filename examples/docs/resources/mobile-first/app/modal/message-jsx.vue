<template>
  <div class="tiny-demo">
    <tiny-radio v-model="value" label="alert" text="alert"></tiny-radio>
    <tiny-radio v-model="value" label="confirm" text="confirm"></tiny-radio>
    <tiny-radio v-model="value" label="message" text="message"></tiny-radio>
    <div style="height: 16px"></div>
    <tiny-button @click="handleClick">点击打开 Modal 弹窗</tiny-button>
  </div>
</template>
<script lang="jsx">
import { Radio, Modal, Button } from '@opentiny/vue'

export default {
  components: {
    TinyRadio: Radio,
    TinyButton: Button
  },
  data() {
    return {
      value: 'alert',
      msgList: [
        {
          content: '文本信息1',
          label: '打开弹出框1',
          href: '/#/webnova/zh-CN/component/modal'
        },
        {
          content: '文本信息2',
          label: '打开弹出框2',
          href: '/#/webnova/zh-CN/component/modal'
        },
        {
          content: '文本信息3',
          label: '打开弹出框3',
          href: '/#/webnova/zh-CN/component/modal'
        }
      ]
    }
  },
  methods: {
    handleClick() {
      let method

      switch (this.value) {
        case 'message':
          method = Modal.message
          break
        case 'confirm':
          method = Modal.confirm
          break
        case 'alert':
          method = Modal.alert
          break
      }

      method({
        status: 'info',
        title: '普通提示框',
        message: (h) => [
          <div>
            {this.msgList.map((msg, i) => (
              <div style="display:flex;align-items:center;justify-content:space-around;margin-bottom:16px;">
                <span>{msg.content}</span>
                <Button onClick={this.showDialog}>{msg.label}</Button>
                <a target="_blank" href={msg.href}>
                  {'跳转链接' + (i + 1)}
                </a>
              </div>
            ))}
          </div>
        ],
        events: {
          show() {
            Modal.message('show')
          },
          hide() {
            Modal.message('hide')
          },
          close() {
            Modal.message('close')
          },
          confirm() {
            Modal.message('confirm')
          },
          cancel() {
            Modal.message('cancel')
          }
        }
      }).then((type) => {
        Modal.message('关闭就会触发，' + type)
      })
    },
    showDialog() {
      Modal.alert({
        status: 'error',
        title: '错误提示',
        message: '嵌套弹出框'
      })
    }
  }
}
</script>
