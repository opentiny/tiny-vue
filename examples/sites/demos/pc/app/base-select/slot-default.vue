<template>
  <div>
    <p>场景 1：带标签和提示信息</p>
    <br />
    <tiny-base-select v-model="value1" popper-class="slot-default">
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
    </tiny-base-select>
    <br /><br />

    <p>场景 2：选项双行</p>
    <br />
    <tiny-base-select v-model="value2" popper-class="double-row">
      <tiny-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
        <div>
          <p>
            {{ item.label }}
          </p>
          <p>{{ item.desc }}</p>
        </div>
      </tiny-option>
    </tiny-base-select>
  </div>
</template>

<script>
import { TinyBaseSelect, TinyOption, TinyTag, TinyTooltip } from '@opentiny/vue'

export default {
  components: {
    TinyBaseSelect,
    TinyOption,
    TinyTag,
    TinyTooltip
  },
  data() {
    return {
      options1: [
        { value: '选项 1', label: '北京', tag: 'New', tip: '自定义提示' },
        { value: '选项 2', label: '上海' },
        { value: '选项 3', label: '天津' },
        { value: '选项 4', label: '重庆' },
        { value: '选项 5', label: '深圳' }
      ],
      options2: [
        { value: '选项 1', label: '子网 1（192.168.0.1/24）', desc: '可用 IP 数 250' },
        { value: '选项 2', label: '子网 2（192.168.0.1/24）', desc: '可用 IP 数 250' },
        { value: '选项 3', label: '子网 3（192.168.0.1/24）', desc: '可用 IP 数 250' },
        { value: '选项 4', label: '子网 4（192.168.0.1/24）', desc: '可用 IP 数 250' },
        { value: '选项 5', label: '子网 5（192.168.0.1/24）', desc: '可用 IP 数 250' }
      ],
      value1: '选项 1',
      value2: '选项 1'
    }
  }
}
</script>

<style lang="less" scoped>
.tiny-base-select {
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
