<template>
  <div>
    <p>场景1：带标签和提示信息</p>
    <tiny-select v-model="value1" popper-class="slot-default">
      <template v-for="item in options1" :key="item.value">
        <tiny-tooltip :content="item.tip" placement="right" effect="light">
          <tiny-option :label="item.label" :value="item.value">
            <span class="left">{{ item.label }}</span>
            <tiny-tag v-if="item.tag" type="danger" effect="light" size="small">{{ item.tag }}</tiny-tag>
          </tiny-option>
        </tiny-tooltip>
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

<script>
import { Select, Option, Tag, Tooltip } from '@opentiny/vue'

export default {
  components: {
    TinySelect: Select,
    TinyOption: Option,
    TinyTag: Tag,
    TinyTooltip: Tooltip
  },
  data() {
    return {
      options1: [
        { value: '选项1', label: '黄金糕', tag: 'New', tip: '自定义提示' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭' }
      ],
      options2: [
        { value: '选项1', label: '子网1 （192.168.0.1/24）', desc: '可用 IP 数 250' },
        { value: '选项2', label: '子网2 （192.168.0.1/24）', desc: '可用 IP 数 250' },
        { value: '选项3', label: '子网3 （192.168.0.1/24）', desc: '可用 IP 数 250' },
        { value: '选项4', label: '子网4 （192.168.0.1/24）', desc: '可用 IP 数 250' },
        { value: '选项5', label: '子网5 （192.168.0.1/24）', desc: '可用 IP 数 250' }
      ],
      value1: '选项1',
      value2: '选项1'
    }
  }
}
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
.tiny-option {
  .left {
    margin-right: 8px;
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
