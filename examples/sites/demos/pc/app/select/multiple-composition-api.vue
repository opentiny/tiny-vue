<template>
  <div>
    <div>场景1：多选</div>
    <br />
    <tiny-select v-model="value1" multiple searchable>
      <tiny-option
        v-for="item in options1"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
        :required="item.required"
      >
      </tiny-option>
    </tiny-select>
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
        :disabled="item.disabled"
        :required="item.required"
      >
      </tiny-option>
    </tiny-select>
    <br />
    <br />
    <div>场景3：配置式必选</div>
    <br />
    <tiny-select v-model="value3" multiple :options="options2"> </tiny-select>
    <br />
    <br />
    <div>场景4：多选个数限制</div>
    <br />
    <tiny-select v-model="value4" :options="options1" multiple :multiple-limit="2" show-limit-text> </tiny-select>
    <br />
    <br />
    <div>场景5：自定义图标 + 自定义样式</div>
    <br />
    <tiny-select
      v-model="value4"
      multiple
      :options="options1"
      :dropdown-icon="tinyIconPopup"
      :drop-style="{ width: '200px', 'min-width': '200px' }"
    >
    </tiny-select>
    <br />
    <br />
    <div>场景6：禁用</div>
    <br />
    <tiny-select v-model="value5" multiple :options="options1" disabled> </tiny-select>
    <br />
    <br />
    <div>场景7：只展示</div>
    <br />
    <tiny-select v-model="value5" multiple :options="options1" display-only> </tiny-select>
    <br />
    <br />
    <div>场景8：显示全选文本</div>
    <br />
    <tiny-select v-model="value5" multiple :options="options1" show-all-text-tag> </tiny-select>
    <br />
    <br />
    <tiny-select v-model="value5" multiple :options="options1" show-all-text-tag disabled> </tiny-select>
    <br />
    <br />
    <div>场景9：折叠tag + 必选项 + 禁用项</div>
    <br />
    <tiny-select v-model="value5" multiple :options="options1" collapse-tags> </tiny-select>
    <br />
    <br />
    <div>场景10：悬浮展开 + 必选项 + 禁用项</div>
    <br />
    <tiny-select v-model="value5" multiple :options="options1" hover-expand> </tiny-select>
    <br />
    <br />
    <br />
    <div>场景11：点击展开 + 必选项 + 禁用项</div>
    <br />
    <tiny-select v-model="value5" multiple :options="options1" click-expand> </tiny-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Select as TinySelect, Option as TinyOption } from '@opentiny/vue'
import { iconPopup } from '@opentiny/vue-icon'

const options1 = ref([
  { value: '选项1', label: '北京(禁用)', disabled: true }, // 禁用项
  { value: '选项2', label: '上海(必选)', required: true }, // 必选项
  { value: '选项3', label: '天津' },
  { value: '选项4', label: '重庆' },
  { value: '选项5', label: '深圳' },
  { value: '选项6', label: '南京' },
  { value: '选项7', label: '成都' }
])

const options2 = ref([
  { value: '选项1', label: '北京' },
  { value: '选项2', label: '上海' },
  { value: '选项3', label: '天津' },
  { value: '选项4', label: '重庆' },
  { value: '选项5', label: '深圳(必选)', required: true },
  { value: '选项6', label: '南京' },
  { value: '选项7', label: '成都' }
])

const value1 = ref(['选项1', '选项2'])
const value2 = ref(['选项1', '选项2'])
const value3 = ref(['选项1', '选项2'])
const value4 = ref([])
const value5 = ref(['选项1', '选项2', '选项3', '选项4', '选项5', '选项6', '选项7'])
const tinyIconPopup = iconPopup()
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
</style>
