<template>
  <div>
    <p>
      场景1：单选，val 找不到匹配值，val为： ,<span class="val">{{ val }}</span>
    </p>
    <tiny-select v-model="val" :clear-no-match-value="true">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>

    <p>
      场景2：多选，multiVal 找不到匹配值，multiVal 为：<span class="multi-val">{{ multiVal }}</span>
    </p>
    <tiny-select v-model="multiVal" :clear-no-match-value="true" multiple>
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
  </div>
</template>

<script>
import { Select, Option } from '@opentiny/vue'

export default {
  components: {
    TinySelect: Select,
    TinyOption: Option
  },
  data() {
    return {
      options: [
        { value: '选项1', label: '黄金糕' },
        { value: '选项2', label: '双皮奶' },
        { value: '选项3', label: '蚵仔煎' },
        { value: '选项4', label: '龙须面' },
        { value: '选项5', label: '北京烤鸭' }
      ],
      val: '11',
      multiVal: ['选项2', '11']
    }
  }
}
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
p {
  font-size: 14px;
  line-height: 1.5;
}
</style>
