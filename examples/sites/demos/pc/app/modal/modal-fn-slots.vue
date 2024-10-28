<template>
  <div>
    <h2>函数式调用</h2>
    <div class="content">
      <tiny-button @click="btnClick">打开带插槽弹窗</tiny-button>
    </div>
    <h2>标签式调用</h2>
    <div class="content">
      <tiny-button @click="openModal">打开带插槽弹窗</tiny-button>
      <tiny-modal v-model="show" type="confirm" title="自定义弹窗标题" show-header show-footer>
        <span style="color: red">使用默认插槽</span>
        <template #footer="scopeData">
          <tiny-link style="margin-right: 8px">记录最近事项</tiny-link>
          <tiny-button @click="scopeData.cancel()">取消</tiny-button>
          <tiny-button type="primary" @click="scopeData.confirm()">保存</tiny-button>
        </template>
      </tiny-modal>
    </div>
  </div>
</template>

<script lang="jsx">
import { Button, Modal, Link } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button,
    TinyModal: Modal,
    TinyLink: Link
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    btnClick() {
      Modal.confirm({
        title: '自定义弹窗标题',
        showHeader: true,
        showFooter: true,
        slots: {
          default: () => <span style="color: red">使用默认插槽</span>,
          footer: (scopeData) => (
            <div>
              <Link style="margin-right: 8px">记录最近事项</Link>
              <Button onClick={() => scopeData.cancel()}>取消</Button>
              <Button type="primary" onClick={() => scopeData.confirm()}>
                保存
              </Button>
            </div>
          )
        }
      })
    },
    openModal() {
      this.show = true
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 16px;
  font-weight: bold;
  margin: 20px 0 12px;
}
.content {
  margin: 8px;
}
</style>
