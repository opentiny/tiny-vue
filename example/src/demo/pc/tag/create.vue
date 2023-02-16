<template>
  <div class="demo-tag-create">
    <tiny-tag
      :key="'tiny-tag-' + tag + index"
      v-for="(tag, index) in dynamicTags"
      closable
      @close="closeTag(tag)"
      >{{ tag }}
    </tiny-tag>
    <tiny-input
      v-show="inputVisible"
      v-model="inputValue"
      ref="saveTagInput"
      size="small"
      @keyup.enter="handleInputConfirm"
      @blur="handleInputConfirm"
    >
    </tiny-input>
    <tiny-button
      v-show="!inputVisible"
      class="button-new-tag"
      size="small"
      @click="showInput"
    >
      + New Tag
    </tiny-button>
  </div>
</template>

<script>
import { Tag, Button, Input } from '@opentiny/vue'

export default {
  components: {
    TinyTag: Tag,
    TinyButton: Button,
    TinyInput: Input
  },
  data() {
    return {
      dynamicTags: ['标签1', '标签2', '标签3'],
      inputVisible: false,
      inputValue: ''
    }
  },
  methods: {
    closeTag(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },
    showInput() {
      this.inputVisible = true
      this.$nextTick(() => {
        this.$refs.saveTagInput.getInput().focus()
      })
    },
    handleInputConfirm() {
      const inputValue = this.inputValue

      if (inputValue) {
        this.dynamicTags.push(inputValue)
      }

      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>

<style>
.demo-tag-create .tiny-tag + .tiny-tag {
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
