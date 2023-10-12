<template>
  <div class="flex">
    <tiny-tag
      :key="'tiny-tag-' + tag + index"
      v-for="(tag, index) in dynamicTags"
      :size="size"
      closable
      @close="closeHandler(tag)"
    >
      {{ tag }}
    </tiny-tag>
    <tiny-input
      v-show="inputVisible"
      v-model="inputValue"
      ref="saveTagInput"
      :class="[getClass()]"
      @keyup.enter.native="inputConfirm"
      @blur="inputConfirm"
    >
    </tiny-input>
    <div
      v-show="!inputVisible"
      class="flex justify-center items-center cursor-pointer border border-color-border border-dashed hover:bg-color-bg-2"
      :class="[getClass()]"
      @click="showInput"
    >
      <icon-plus class="mr-1 fill-color-icon-secondary"></icon-plus> 添加标签
    </div>
  </div>
</template>

<script>
import { Tag, Input } from '@opentiny/vue'
import { IconPlus } from '@opentiny/vue-icon'

export default {
  components: {
    TinyTag: Tag,
    TinyInput: Input,
    IconPlus: IconPlus()
  },
  data() {
    return {
      size: 'medium',
      inputVisible: false,
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputValue: '',
      inputClass: 'h-[1.75rem]'
    }
  },
  methods: {
    getClass() {
      const defaultClasses = 'h-[1.75rem] w-[5.625rem]'
      const classes = {
        mini: 'h-5 w-[4.75rem]',
        small: 'h-6 w-[5.25rem]',
        medium: 'h-[1.75rem] w-[5.625rem]'
      }
      const result = this.size && classes[this.size] ? classes[this.size] : 'h-[1.75rem] w-[5.625rem]'
      this.inputClass = result.split(' ')[0]
      return result
    },
    showInput() {
      this.inputVisible = true
      this.$nextTick(() => {
        this.$refs.saveTagInput.getInput().focus()
        this.$refs.saveTagInput.$el.querySelector('input').classList.add(this.inputClass)
      })
    },
    closeHandler(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },
    inputConfirm() {
      this.inputValue && this.dynamicTags.push(this.inputValue)

      this.inputVisible = false
      this.inputValue = ''
    }
  }
}
</script>
