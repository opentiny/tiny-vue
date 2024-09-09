<template>
  <div class="demo-button">
    <p>原生及插槽</p>
    <div class="sup">
      <tiny-button-group :data="groupData" v-model="checkedVal">
        <template #button4="{ sup }">
          <tiny-icon-plus-circle></tiny-icon-plus-circle>
          <span>
            {{ sup.text }}
          </span>
        </template>
      </tiny-button-group>
    </div>
    <br /><br />
    <p>插槽引用tag角标</p>
    <div class="tag">
      <tiny-button-group :data="groupDataTag" v-model="checkedVal">
        <template #btn="{ sup }">
          <tiny-tag type="warning" size="small" hit>
            <component :is="sup.icon" class="tiny-svg-size"></component>
            {{ sup.text }}
          </tiny-tag>
        </template>
      </tiny-button-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ButtonGroup as TinyButtonGroup } from '@opentiny/vue'
import { Tag as TinyTag } from '@opentiny/vue'
import { iconSearch, iconPlusCircle } from '@opentiny/vue-icon'

const TinyIconPlusCircle = iconPlusCircle()
const checkedVal = ref('Button1')
const groupData = ref([
  {
    text: '文字',
    value: 'Button1',
    sup: {
      class: ['success-bg'],
      text: '特惠'
    }
  },
  {
    text: '图标',
    value: 'Button2',
    sup: {
      class: 'sup-icon',
      icon: iconSearch()
    }
  },
  {
    text: '文字',
    value: 'Button3',
    sup: {
      class: 'sup-text',
      text: '8折'
    }
  },
  {
    text: '组合',
    value: 'Button4',
    sup: {
      slot: 'button4',
      class: 'sup-slot',
      text: '8折'
    }
  }
])
const groupDataTag = ref([
  {
    text: '文本',
    value: 'Button1',
    sup: {
      slot: 'btn',
      class: 'sup-tag',
      text: '特惠'
    }
  },
  {
    text: '图标',
    value: 'Button2',
    sup: {
      slot: 'btn',
      class: 'sup-tag',
      icon: iconSearch()
    }
  },
  {
    text: '图标',
    value: 'Button3',
    sup: {
      slot: 'btn',
      class: 'sup-tag',
      icon: iconPlusCircle()
    }
  },
  {
    text: '组合',
    value: 'Button4',
    sup: {
      slot: 'btn',
      class: 'sup-tag',
      icon: iconPlusCircle(),
      text: '8折'
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

<style>
.demo-button .sup button {
  width: 84px;
}
.demo-button .sup li:nth-of-type(4) button {
  width: 124px;
}
.demo-button .tag button {
  width: 84px;
}
.demo-button .tag li:last-child button {
  width: 120px;
}
.demo-button p {
  margin-bottom: 8px;
}
.demo-button .tiny-tag {
  border-radius: 0px 5px 0 8px;
}
.demo-button .tiny-svg-size {
  margin-right: 4px;
}
</style>
