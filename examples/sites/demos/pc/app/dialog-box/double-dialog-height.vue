<template>
  <div>
    <tiny-button @click="changModdeFn" type="primary">当前为 {{ flag }} 模式</tiny-button>
    <tiny-button @click="changFn">双层抽屉 </tiny-button>
    <tiny-dialog-box
      :visible="boxVisibility"
      right-slide
      @update:visible="boxVisibility = $event"
      title="父弹窗"
      width="30%"
      :custom-style="customStyle1"
    >
      <span>父弹窗内容</span>
      <tiny-dialog-box
        append-to-body
        right-slide
        :modal="false"
        :close-on-click-modal="false"
        no-animation
        :visible="boxVisibility2"
        :custom-style="customStyle2"
        @close="dialogClose"
        @update:visible="boxVisibility2 = $event"
        title="子弹窗"
        width="300px"
      >
        <span>子弹窗内容</span>
        <template #footer>
          <tiny-button type="primary" @click="boxVisibility2 = false"> 确定 </tiny-button>
        </template>
      </tiny-dialog-box>
      <template #footer>
        <tiny-button @click="boxVisibility = false">取消</tiny-button>
        <tiny-button type="primary" @click="openDialog"> 子弹窗 </tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script>
import { Button, DialogBox } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button,
    TinyDialogBox: DialogBox
  },
  data() {
    return {
      flag: 'auto',
      boxVisibility: false,
      customStyle1: {},
      customStyle2: {},
      boxVisibility2: false
    }
  },
  methods: {
    changFn() {
      this.boxVisibility = true
    },
    changModdeFn() {
      this.flag = this.flag === 'full' ? 'auto' : 'full'
    },
    openDialog() {
      if (this.flag === 'full') {
        this.customStyle1 = {
          right: '8px',
          bottom: '8px',
          top: '8px',
          height: 'auto',
          borderRadius: '8px',
          transition: 'right 0.2s ease-in-out'
        }
        this.customStyle2 = {
          bottom: '8px',
          top: '8px',
          height: 'auto',
          borderRadius: '8px',
          opacity: 0
        }
        const rightW = document.body.offsetWidth * 0.3
        this.customStyle1.right = -rightW + 80 + 'px'
        this.customStyle2.right = rightW + 'px'
        this.customStyle2.transition = 'right 200ms ease-in-out opacity 100ms linear'
        this.boxVisibility2 = true

        setTimeout(() => {
          this.customStyle2.right = '85px'
        }, 10)

        setTimeout(() => {
          this.customStyle2.opacity = 1
        }, 100)
      } else {
        this.customStyle1 = {
          right: '8px',
          bottom: '8px',
          top: '8px',
          height: 'auto',
          borderRadius: '8px',
          transition: 'right 0.2s ease-in-out'
        }
        this.customStyle2 = {
          bottom: '8px',
          top: 'unset',
          height: 'auto',
          borderRadius: '8px',
          opacity: 0
        }
        const rightW = document.body.offsetWidth * 0.3
        this.customStyle2.right = rightW + 46 + 'px'
        this.customStyle2.transition = 'opacity 100ms linear'
        this.boxVisibility2 = true

        setTimeout(() => {
          this.customStyle2.opacity = 1
        }, 100)
      }
    },
    dialogClose() {
      setTimeout(() => {
        this.customStyle1.right = '8px'
        this.customStyle2.opacity = 0
      }, 50)
    }
  }
}
</script>
