<template>
  <div>
    <tiny-steps ref="steps" advanced :data="data" :visible-num="4" :active="advancedActive" @click="advancedClick"></tiny-steps>

    <tiny-popover ref="popover" :reference="referenceElm" width="200" trigger="click">
      <div>
        <p>名称：{{ node.name }}</p>
        <p>状态：{{ node.status }}</p>
        <p>描述：{{ node.description }}</p>
        <p>自定义字段4：{{ node.field4 }}</p>
        <p>自定义字段5：{{ node.field5 }}</p>
      </div>
    </tiny-popover>
  </div>
</template>

<script>
import { Steps, Popover } from '@opentiny/vue'

export default {
  components: {
    TinyPopover: Popover,
    TinySteps: Steps
  },
  data() {
    return {
      advancedActive: 1,
      data: [
        {
          name: '默认 Basic Info',
          status: '',
          description:
            'Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional Optional ',
          field4: '信息4说明',
          field5: '信息5说明'
        },
        {
          name: '已完成 BOQ Info',
          status: 'done',
          description: 'done 已完成',
          field4: '信息4说明1',
          field5: '信息5说明1'
        },
        { name: '错误 BBQ Info', status: 'error', description: 'error 错误', field4: '信息4说明2', field5: '信息5说明2' },
        {
          name: '已禁用 Involved Parties Involved Parties Involved Parties',
          status: 'disabled',
          description:
            'disabled 已禁用，描述内容描述内容，超出部分隐藏，描述内容，超出部分隐藏，描述内容，超出部分隐藏，描述内容，超出部分隐藏',
          field4: '信息4说明3',
          field5: '信息5说明3'
        },
        { name: '默认 Billing1', status: '', description: '默认无状态', field4: '信息4说明4', field5: '信息5说明4' },
        { name: '默认 Billing2', status: '', description: '默认无状态', field4: '信息4说明5', field5: '信息5说明5' },
        { name: '默认 Billing3', status: '', description: '默认无状态', field4: '信息4说明6', field5: '信息5说明6' },
        { name: '默认 Billing4', status: '', description: '默认无状态', field4: '信息4说明7', field5: '信息5说明7' },
        { name: '默认 Billing5', status: '', description: '默认无状态', field4: '信息4说明8', field5: '信息5说明8' }
      ],
      referenceElm: null,
      node: {}
    }
  },
  methods: {
    advancedClick(index, node, event) {
      if (this.advancedActive === index) {
        return
      }

      this.advancedActive = index
      this.referenceElm = event.currentTarget
      const popoverRef = this.$refs.popover
      popoverRef.close()

      setTimeout(() => {
        this.node = node
        popoverRef.show()
      }, 300)
    }
  }
}
</script>
