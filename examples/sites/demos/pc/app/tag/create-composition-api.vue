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
        ref="saveTagInput1Ref"
        size="small"
        @keyup.enter="InputConfirm1(true)"
        @blur="InputConfirm1(false)"
      >
      </tiny-input>
    </span>
    <tiny-input
      v-show="inputVisible"
      v-model="inputValue2"
      ref="saveTagInput2Ref"
      size="small"
      @keyup.enter="InputConfirm2"
      @blur="InputConfirm2"
    >
    </tiny-input>
    <tiny-button v-show="!inputVisible" class="button-new-tag" size="small" @click="showInput"> + New Tag </tiny-button>
  </div>
</template>

<script setup lang="jsx">
import { ref, nextTick } from 'vue'
import { Tag as TinyTag, Button as TinyButton, Input as TinyInput, Tooltip as TinyTooltip } from '@opentiny/vue'

const dynamicTags = ref(['标签一', '标签二', '标签三'])
const inputVisible = ref(false)
const inputValue1 = ref('')
const inputValue2 = ref('')
const tagIndex = ref(-1)
const saveTagInput2Ref = ref()
const saveTagInput1Ref = ref()

function handleClose(index) {
  dynamicTags.value.splice(index, 1)
}

function showInput() {
  inputVisible.value = true
  nextTick(() => {
    saveTagInput2Ref.value.focus()
  })
}

// 修改已有标签确认
function InputConfirm1(sure) {
  if (sure) {
    dynamicTags.value[tagIndex.value] = inputValue1.value
  }
  tagIndex.value = -1
}

// 增加新标签确认
function InputConfirm2() {
  if (inputValue2.value) {
    dynamicTags.value.push(inputValue2.value)
  }

  inputVisible.value = false
  inputValue2.value = ''
}

// 双击编辑标签
function handleEdit(tag, index) {
  tagIndex.value = index
  inputValue1.value = tag
  nextTick(() => {
    saveTagInput1Ref.value[0].focus()
  })
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
