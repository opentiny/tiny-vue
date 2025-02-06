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

<script setup lang="jsx">
import { ref, nextTick } from 'vue'
import { TinyButton, TinyDialogBox } from '@opentiny/vue'

const boxVisibility = ref(false)

const boxVisibility2 = ref(false)

const flag = ref('auto')

const customStyle1 = ref({})

const customStyle2 = ref({})

function changFn() {
  boxVisibility.value = true
}

function changModdeFn() {
  flag.value = flag.value === 'full' ? 'auto' : 'full'
}

function openDialog() {
  if (flag.value === 'full') {
    customStyle1.value = {
      right: '8px',
      bottom: '8px',
      top: '8px',
      height: 'auto',
      borderRadius: '8px',
      transition: 'right 0.2s ease-in-out'
    }
    customStyle2.value = {
      bottom: '8px',
      top: '8px',
      height: 'auto',
      borderRadius: '8px',
      opacity: 0
    }
    const rightW = document.body.offsetWidth * 0.3

    customStyle1.value.right = -rightW + 80 + 'px'
    customStyle2.value.right = rightW + 'px'
    customStyle2.value.transition = 'right 200ms ease-in-out opacity 100ms linear'
    boxVisibility2.value = true
    nextTick(() => {
      customStyle2.value.right = '85px'
    }, 10)

    nextTick(() => {
      customStyle2.value.opacity = 1
    }, 100)
  } else {
    customStyle1.value = {
      right: '8px',
      bottom: '8px',
      top: '8px',
      height: 'auto',
      borderRadius: '8px',
      transition: 'right 0.2s ease-in-out'
    }
    customStyle2.value = {
      bottom: '8px',
      top: 'unset',
      height: 'auto',
      borderRadius: '8px',
      opacity: 0
    }
    const rightW = document.body.offsetWidth * 0.3
    customStyle2.value.right = rightW + 46 + 'px'
    customStyle2.value.transition = 'opacity 100ms linear'
    boxVisibility2.value = true

    setTimeout(() => {
      customStyle2.value.opacity = 1
    }, 100)
  }
}

function dialogClose() {
  if (flag.value === 'full') {
    nextTick(() => {
      customStyle1.value.right = '8px'
      customStyle2.value.opacity = 0
    }, 50)
  } else {
    customStyle2.value.opacity = 0
  }
}
</script>
