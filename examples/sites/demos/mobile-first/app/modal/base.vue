<template>
  <div class="content">
    <tiny-button @click="successClick" :reset-time="0">成功提示框</tiny-button>
    <tiny-button @click="errorClick" :reset-time="0">失败提示框</tiny-button>
    <tiny-button @click="confirmClick" :reset-time="0">确认提示框</tiny-button>
    <tiny-button @click="warnningClick" :reset-time="0">警告提示框</tiny-button>
    <br />
    <br />
    <tiny-button ref="popRef" @click="popClickRef" :reset-time="0">气泡确认框-Ref</tiny-button>
    <tiny-button @click="popClickTarget" :reset-time="0">气泡确认框-Target</tiny-button>
    <br />
    <br />
    <tiny-button ref="popRefInfo" @click="popInfoClick" :reset-time="0">信息气泡确认框</tiny-button>
    <tiny-button ref="popRefWarning" @click="popWarningClick" :reset-time="0">警告气泡确认框</tiny-button>
  </div>
</template>

<script>
import { Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    successClick() {
      Modal.alert({
        message: '密码已经修改成功，为保障信息安全，建议每30天修改1次密码。',
        title: '成功提示',
        status: 'success'
      })
    },
    errorClick() {
      Modal.alert({ message: '共提交12张表单，成功10张，失败2张。', title: '未完成', status: 'error' })
    },
    confirmClick() {
      Modal.confirm({ message: '更新大约需要30分钟，确定立即开始吗？', title: '更新确认' })
    },
    warnningClick() {
      Modal.alert({ message: '删除后数据不可恢复，确定删除吗？', title: '删除确认', status: 'warning' })
    },
    popClickRef() {
      Modal.popconfirm({
        title: '这是气泡标题',
        message: '这是气泡确认框提示内容文本描述，这是两行的样是两行的样式，内容很长很长',
        reference: this.$refs.popRef.$el,
        events: {
          show() {
            console.log('show')
          },
          hide() {
            console.log('hide')
          },
          confirm() {
            console.log('confirm')
          }
        }
      }).then((type) => {
        console.log('type', type)
      })
    },
    popClickTarget(event) {
      Modal.popconfirm({
        title: '这是气泡标题',
        message: '这是气泡确认框提示内容文本描述，这是两行的样是两行的样式，内容很长很长',
        reference: event.currentTarget,
        events: {
          show() {
            console.log('show')
          },
          hide() {
            console.log('hide')
          },
          confirm() {
            console.log('confirm')
          }
        }
      }).then((type) => {
        console.log('type', type)
      })
    },
    popInfoClick() {
      Modal.popconfirm({
        type: 'info',
        title: '这是提示气泡',
        message: '内容很短',
        reference: this.$refs.popRefInfo.$el,
        placement: 'right',
        cancelButton: false
      })
    },
    popWarningClick() {
      Modal.popconfirm({
        type: 'warning',
        title: '这是警告气泡',
        message: '内容很短',
        reference: this.$refs.popRefWarning.$el,
        placement: 'bottom'
      })
    }
  }
}
</script>
