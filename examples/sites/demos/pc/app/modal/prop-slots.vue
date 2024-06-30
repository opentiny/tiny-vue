<template>
  <tiny-button @click="baseClick" :reset-time="0">打开提示框</tiny-button>
</template>

<script>
import { Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    baseClick() {
      Modal.alert({
        status: 'info',
        title: '普通提示框',
        events: {
          confirm: () => Modal.message('确定'),
          cancel: () => Modal.message('取消')
        },
        // 通过属性 slots 设置插槽
        slots: {
          default: (params, h) => [h('span', '使用默认插槽')],
          footer: (params, h) => [
            h(
              Button,
              {
                on: {
                  click: (e) => {
                    params.footerSlotParams.confirm(e)
                  }
                }
              },
              '点我确定'
            ),
            h(Button, { on: { click: (e) => params.footerSlotParams.cancel(e) } }, '点我取消')
          ]
        }
      })
    }
  }
}
</script>
