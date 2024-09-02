<template>
  <div class="tiny-filter-panel-demo">
    <tiny-filter-panel
      :popper-append-to-body="false"
      ref="filterPanel"
      label="编码编码"
      :tip="tip"
      clearable
      @handle-clear="handleClear"
    >
      <div class="tiny-filter-panel-textarea">
        <div class="tiny-filter-panel-title">支持输入多个值，用分号区隔</div>
        <tiny-input type="textarea" resize="none" v-model="inputVal" @change="handleChange"></tiny-input>
      </div>
      <tiny-button size="small" type="primary" class="tiny-filter-panel-button" @click="hide">确定</tiny-button>
    </tiny-filter-panel>
    <tiny-tag v-for="(tag, index) in tags" :key="tag" closable @close="handleClose(index)">{{ tag }}</tiny-tag>
  </div>
</template>

<script>
import { FilterPanel, Input, Button, Tag } from '@opentiny/vue'

export default {
  components: {
    TinyFilterPanel: FilterPanel,
    TinyInput: Input,
    TinyButton: Button,
    TinyTag: Tag
  },
  data() {
    return {
      tip: '请选择物品数量',
      inputVal: '',
      radioVal: '',
      tags: []
    }
  },
  methods: {
    handleChange() {
      const newTags = this.inputVal.split(';')
      if (newTags.length) {
        this.tags.push(...newTags)
      }
    },
    handleClear() {
      this.radioVal = ''
      this.inputVal = ''
    },
    handleClose(i) {
      this.tags.splice(i, 1)
    },
    hide() {
      this.$refs.filterPanel.hide()
    }
  }
}
</script>

<style scoped>
.tiny-filter-panel-demo {
  display: flex;
  height: 194px;
}
.tiny-tag {
  margin-left: 4px;
}
:deep(.tiny-filter-panel__popover) > div {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.tiny-filter-panel-textarea :deep(.tiny-textarea__inner) {
  width: 276px;
  height: 112px;
  box-sizing: border-box;
  padding: 6px 10px;
}
.tiny-filter-panel-textarea :deep(.tiny-filter-panel-title) {
  font-size: 12px;
  line-height: 18px;
  color: #808080;
}
.tiny-filter-panel-textarea :deep(.tiny-textarea) {
  margin-top: 8px;
}
:deep(.tiny-filter-panel-button) {
  margin-top: 16px;
}
</style>
