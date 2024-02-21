<template>
  <div>
    <br />
    <div>场景1：多选</div>
    <br />
    <tiny-select v-model="value1" multiple>
      <tiny-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <br />
    <br />
    <br />
    <div>场景2：必选</div>
    <br />
    <tiny-select v-model="value2" multiple>
      <tiny-option
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :required="item.required"
      >
      </tiny-option>
    </tiny-select>
    <br />
    <br />
    <br />
    <div>场景3：配置式必选</div>
    <br />
    <tiny-select v-model="value3" multiple :options="options2"> </tiny-select>
    <br />
    <br />
    <br />
    <div>场景4：多选个数限制</div>
    <br />
    <tiny-select v-model="value4" multiple :multiple-limit="2">
      <tiny-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <br />
    <br />
    <br />
    <div>场景5：自定义图标 + 自定义样式</div>
    <br />
    <tiny-select
      v-model="value4"
      multiple
      :dropdown-icon="tinyIconPopup"
      :drop-style="{ width: '200px', 'min-width': '200px' }"
    >
      <tiny-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
    <br />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Select as TinySelect, Option as TinyOption } from '@opentiny/vue'
import { iconPopup } from '@opentiny/vue-icon'

const options1 = ref([
  { value: '选项1', label: '黄金糕' },
  { value: '选项2', label: '双皮奶' },
  { value: '选项3', label: '蚵仔煎' },
  { value: '选项4', label: '龙须面' },
  { value: '选项5', label: '北京烤鸭' },
  { value: '选项6', label: '螺蛳粉' },
  { value: '选项7', label: '小龙虾' }
])

const options2 = ref([
  { value: '选项1', label: '黄金糕' },
  { value: '选项2', label: '双皮奶' },
  { value: '选项3', label: '蚵仔煎' },
  { value: '选项4', label: '龙须面' },
  { value: '选项5', label: '北京烤鸭', required: true },
  { value: '选项6', label: '螺蛳粉' },
  { value: '选项7', label: '小龙虾' }
])

const value1 = ref(['选项1', '选项2'])
const value2 = ref(['选项1', '选项2'])
const value3 = ref([])
const value4 = ref([])
const tinyIconPopup = iconPopup()
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
</style>
