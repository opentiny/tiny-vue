<template>
  <div>
    <p>场景1：带标签和提示信息</p>
    <tiny-select v-model="value1" popper-class="slot-default">
      <template v-for="item in options1">
        <tiny-tooltip v-if="item.tip" :content="item.tip" placement="right" effect="light" :key="item.value">
          <tiny-option :label="item.label" :value="item.value">
            <span class="left">{{ item.label }}</span>
            <tiny-tag v-if="item.tag" type="danger" effect="light" size="small">{{ item.tag }}</tiny-tag>
          </tiny-option>
        </tiny-tooltip>
        <tiny-option v-if="!item.tip" :key="item.value" :label="item.label" :value="item.value">
          <span class="left">{{ item.label }}</span>
          <tiny-tag v-if="item.tag" type="danger" effect="light" size="small">{{ item.tag }}</tiny-tag>
        </tiny-option>
      </template>
    </tiny-select>

    <p>场景2：选项双行</p>
    <tiny-select v-model="value2" popper-class="double-row">
      <tiny-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
        <div>
          <p>
            {{ item.label }}
          </p>
          <p>{{ item.desc }}</p>
        </div>
      </tiny-option>
    </tiny-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Select as TinySelect, Option as TinyOption, Tag as TinyTag, Tooltip as TinyTooltip } from '@opentiny/vue'

const options1 = ref([
  { value: '选项1', label: '黄金糕', tag: 'New', tip: '自定义提示' },
  { value: '选项2', label: '双皮奶' },
  { value: '选项3', label: '蚵仔煎' },
  { value: '选项4', label: '龙须面' },
  { value: '选项5', label: '北京烤鸭' }
])

const options2 = ref([
  { value: '选项1', label: '子网1 （192.168.0.1/24）', desc: '可用 IP 数 250' },
  { value: '选项2', label: '子网2 （192.168.0.1/24）', desc: '可用 IP 数 250' },
  { value: '选项3', label: '子网3 （192.168.0.1/24）', desc: '可用 IP 数 250' },
  { value: '选项4', label: '子网4 （192.168.0.1/24）', desc: '可用 IP 数 250' },
  { value: '选项5', label: '子网5 （192.168.0.1/24）', desc: '可用 IP 数 250' }
])

const value1 = ref('选项1')
const value2 = ref('选项1')
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
.tiny-option {
  .left {
    margin-right: 8px;
  }

  p {
    height: 18px;
    line-height: 18px;
    margin: 6px;
  }
}
</style>

<style lang="less">
.double-row {
  &.tiny-select-dropdown .tiny-select-dropdown__wrap {
    max-height: 224px;
    .tiny-option {
      height: 54px;
    }
  }
}
</style>
