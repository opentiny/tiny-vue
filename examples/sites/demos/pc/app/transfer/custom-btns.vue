<template>
  <span>功能控制：</span>
  <tiny-button @click="toggleAllBtn()">
    {{ showAllBtn ? '不显示all-btns' : '显示all-btns' }}
  </tiny-button>
  <tiny-button @click="toggleDisable()">
    {{ alwaysDisable ? '无选时禁用' : '无选时高亮' }}
  </tiny-button>
  <tiny-transfer
    v-model="value"
    :data="data"
    :show-all-btn="showAllBtn"
    :button-texts="['left', 'right']"
    :to-left-disable="alwaysDisable"
    :to-right-disable="alwaysDisable"
  ></tiny-transfer>
</template>

<script lang="jsx">
import { Transfer, Button } from '@opentiny/vue'

export default {
  components: {
    TinyTransfer: Transfer,
    TinyButton: Button
  },
  data() {
    const generateData = () => {
      const data = []

      for (let i = 0; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0
        })
      }

      return data
    }

    return {
      data: generateData(),
      value: [1, 4],
      showAllBtn: true,
      alwaysDisable: false
    }
  },
  methods: {
    toggleAllBtn() {
      this.showAllBtn = !this.showAllBtn
    },
    toggleDisable() {
      this.alwaysDisable = !this.alwaysDisable
    }
  }
}
</script>
