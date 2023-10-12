<template>
  <div>
    <div class="flex text-base mb-3">
      <div class="mx-0 sm:mx-3 relative top-0.5">
        <tiny-checkbox v-model="checkAll" :indeterminate="isIndeterminate"></tiny-checkbox>
      </div>
      <span class="self-center">列表组标题</span>
    </div>
    <tiny-column-list-group v-model="value" :show-checkbox="true" @change="change">
      <tiny-column-list-item label="1">
        <template #column1>
          <ul>
            <li class="text-sm mb-1 sm:mb-1.5">智能手机智能手机</li>
            <li class="mb-1 sm:mb-1.5 text-color-text-secondary"><span>品牌：</span><span>手机</span></li>
            <li class="text-color-text-secondary"><span>编码：</span><span>HYFVFHJGG1354</span></li>
          </ul>
        </template>
        <template #column2>
          <ul class="text-color-text-secondary">
            <li class="mb-1 sm:mb-1.5"><span>规格型号：</span><span>256G</span></li>
            <li class="mb-1 sm:mb-1.5"><span>计量单位：</span><span>1</span></li>
            <li><span>尺寸：</span><span>6.5英寸</span></li>
          </ul>
        </template>
      </tiny-column-list-item>
      <tiny-column-list-item label="2">
        <template #column1>
          <ul>
            <li class="text-sm mb-1 sm:mb-1.5">智能手机智能手机</li>
            <li class="mb-1 sm:mb-1.5 text-color-text-secondary"><span>品牌：</span><span>手机</span></li>
            <li class="text-color-text-secondary"><span>编码：</span><span>HYFVFHJGG1354</span></li>
          </ul>
        </template>
        <template #column2>
          <ul class="text-color-text-secondary">
            <li class="mb-1 sm:mb-1.5"><span>规格型号：</span><span>256G</span></li>
            <li class="mb-1 sm:mb-1.5"><span>计量单位：</span><span>1</span></li>
            <li><span>尺寸：</span><span>6.5英寸</span></li>
          </ul>
        </template>
      </tiny-column-list-item>
    </tiny-column-list-group>
  </div>
</template>

<script>
import { ColumnListItem, ColumnListGroup, Checkbox } from '@opentiny/vue'

export default {
  components: {
    TinyColumnListItem: ColumnListItem,
    TinyColumnListGroup: ColumnListGroup,
    TinyCheckbox: Checkbox
  },
  data() {
    return {
      value: []
    }
  },
  computed: {
    isIndeterminate: {
      get() {
        return !(this.value.length === 0 || this.value.length === 2)
      }
    },
    checkAll: {
      get() {
        return this.value.length === 2
      },
      set(val) {
        if (val) {
          this.value = ['1', '2']
        } else {
          this.value = []
        }
      }
    }
  },
  methods: {
    change(val) {
      console.log(val)
    }
  }
}
</script>
