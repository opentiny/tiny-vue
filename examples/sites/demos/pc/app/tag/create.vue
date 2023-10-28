<template>
  <div class="demo-tag-create">
    <span v-for="(tag, index) in dynamicTags" :key="'tiny-tag-' + tag + index">
      <tiny-tooltip v-if="tagIndex !== index" effect="dark" :content="tag" placement="top" :disabled="tag.length < 20">
        <tiny-tag closable @close="handleClose(index)" @dblclick="handleEdit(tag, index)">
          {{ tag.length > 20 ? `${tag.slice(0, 20)}...` : tag }}
        </tiny-tag>
      </tiny-tooltip>
      <tiny-input
        v-else
        v-model="inputValue1"
        ref="saveTagInput1"
        size="small"
        @keyup.enter="InputConfirm1(true)"
        @blur="InputConfirm1(false)"
      >
      </tiny-input>
    </span>
    <tiny-input
      v-show="inputVisible"
      v-model="inputValue2"
      ref="saveTagInput2"
      size="small"
      @keyup.enter="InputConfirm2"
      @blur="InputConfirm2"
    >
    </tiny-input>
    <tiny-button v-show="!inputVisible" class="button-new-tag" size="small" @click="showInput"> + New Tag </tiny-button>
  </div>
</template>

<script lang="jsx">
import { Tag, Button, Input, Tooltip } from '@opentiny/vue'

export default {
  components: {
    TinyTag: Tag,
    TinyButton: Button,
    TinyInput: Input,
    TinyTooltip: Tooltip
  },
  data() {
    return {
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue1: '',
      inputValue2: '',
      tagIndex: -1
    }
  },
  methods: {
    handleClose(index) {
      this.dynamicTags.splice(index, 1)
    },
    showInput() {
      this.inputVisible = true
      this.$nextTick(() => {
        this.$refs.saveTagInput2.focus()
      })
    },
    // 修改已有标签确认
    InputConfirm1(sure) {
      if (sure) {
        this.dynamicTags[this.tagIndex] = this.inputValue1
      }
      this.tagIndex = -1
    },
    // 增加新标签确认
    InputConfirm2() {
      const inputValue2 = this.inputValue2

      if (inputValue2) {
        this.dynamicTags.push(inputValue2)
      }

      this.inputVisible = false
      this.inputValue2 = ''
    },
    // 双击编辑标签
    handleEdit(tag, index) {
      this.tagIndex = index
      this.inputValue1 = tag
      this.$nextTick(() => {
        this.$refs.saveTagInput1[0].focus()
      })
    }
  }
}
</script>

<style>
.demo-tag-create .tiny-tag {
  margin-left: 10px;
}

.demo-tag-create .tiny-button.button-new-tag {
  margin-left: 10px;
  height: 22px;
  line-height: 20px;
  padding-top: 0;
  padding-bottom: 0;
}

.demo-tag-create .tiny-input {
  width: 90px;
  height: 22px;
  line-height: 20px;
  margin-left: 10px;
  vertical-align: middle;
}

.demo-tag-create .tiny-input .tiny-input__inner {
  height: 22px;
  line-height: 20px;
}
</style>
