<template>
  <div class="demo-suffix-icon">
    <div class="demo-box">
      <div class="demo-title">默认显示前缀搜索图标</div>
      <tiny-search-box v-model="tags1" :items="items" :show-help="false" />
    </div>
    <div class="demo-box">
      <div class="demo-title">隐藏前缀搜索图标</div>
      <tiny-search-box v-model="tags2" :items="items" :show-prefix-icon="false" :show-help="false" />
    </div>
    <div class="demo-box">
      <div class="demo-title">使用自定义后缀图标插槽</div>
      <tiny-search-box v-model="tags3" :items="items" :show-prefix-icon="false" :show-help="false">
        <template #suffix-icon>
          <icon-del class="custom-suffix-icon" @click.stop="handleSuffixIconClick" />
        </template>
      </tiny-search-box>
    </div>
  </div>
</template>

<script>
import { dataSource } from './data-source'
import TinySearchBox from '@opentiny/vue-search-box-saas'
import { IconDel } from '@opentiny/vue-icon'

export default {
  components: {
    TinySearchBox,
    IconDel: IconDel()
  },
  data() {
    return {
      items: dataSource,
      tags1: [],
      tags2: [],
      tags3: []
    }
  },
  methods: {
    handleSuffixIconClick() {
      console.log('后缀图标被点击了')
    }
  }
}
</script>

<style scoped>
.demo-suffix-icon {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.demo-title {
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.custom-suffix-icon {
  cursor: pointer;
  color: var(--vp-c-text-2);
  transition: color 0.2s;
}

.custom-suffix-icon:hover {
  color: var(--vp-c-brand);
}
</style>
