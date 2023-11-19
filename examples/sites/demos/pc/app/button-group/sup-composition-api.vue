<template>
  <div>
    <tiny-button-group :data="groupData" v-model="checkedVal">
      <template #button4="{ sup }">
        <tiny-icon-plus-circle></tiny-icon-plus-circle>
        <span>
          {{ sup.text }}
        </span>
      </template>
    </tiny-button-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ButtonGroup as TinyButtonGroup } from '@opentiny/vue'
import { iconSearch, iconPlusCircle } from '@opentiny/vue-icon'

const TinyIconPlusCircle = iconPlusCircle()
const checkedVal = ref('Button1')
const groupData = ref([
  {
    text: 'Button1',
    value: 'Button1',
    sup: {
      class: ['success-bg'],
      text: '特惠'
    }
  },
  {
    text: 'Button2',
    value: 'Button2',
    sup: {
      class: 'sup-icon',
      icon: iconSearch()
    }
  },
  {
    text: 'Button3',
    value: 'Button3',
    sup: {
      class: 'sup-text',
      text: '8.8折'
    }
  },
  {
    text: 'Button4',
    value: 'Button4',
    sup: {
      slot: 'button4',
      class: 'sup-slot',
      text: '8.8折'
    }
  }
])
</script>

<style scoped>
.tiny-button-group :deep(.success-bg) {
  background-color: #52c41a;
}

.tiny-button-group :deep(.sup-slot) {
  line-height: 1;
  padding: 0 4px;
  border-top-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.tiny-button-group :deep(.sup-slot) .tiny-svg {
  margin-right: 4px;
  vertical-align: middle;
  fill: #fff;
}
.tiny-button-group :deep(.sup-slot) span {
  vertical-align: middle;
}
</style>
