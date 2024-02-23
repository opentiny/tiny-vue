<template>
  <div>
    <div class="overview-layout pt48">
      <h1 class="mb20 f24 fw-600">组件总览</h1>
      <h1 class="f14 my20 lh21">TinyVue 为 Web 应用提供了丰富的基础 UI 组件，我们还将持续探索企业级应用的最佳 UI 实践，欢迎尝试使用 TinyVue。</h1>
      <!-- 搜索 -->
      <n-input placeholder="搜索组件" :v-model:value="value" class="mb10" :style="{ width: '100%', padding: '6px' }" @input="searchHandler">
        <template #suffix>
          <img class="h24 w24 cur-def" src="@/assets/images/search.svg" />
        </template>
      </n-input>
      <!--组件列表-->
      <div v-if="searchMenus?.length === 0" class="text-center py20">
        <img class="h150 w200 my-20" src="@/assets/images/no-data.svg" />
      </div>
      <div v-for="(menu, index) in searchMenus" :label="menu" :key="index">
        <div class="rel mt25">
          <h2 class="f16 d-ib fw-600 mr8">{{ menu.label }}</h2>
          <span v-if="searchMenus?.length !== 0" class="cell-title">{{ menu.children.length }}</span>
        </div>
        <div class="f-r f-wrap f-pos-between overview-card">
          <div v-for="(cell, cellIndex) in menu.children" :label="cell" :key="cellIndex" class="my10 text-center overview-card-container">
            <router-link :to="getTo(cell.key)" class="decoration-none">
              <n-card hoverable class="br-4">
                <img class="h125 w125" :src="$pub(`@demos/overviewimage/${cell.key}.svg`)" :onerror="`this.src='${$pub(`@demos/overviewimage/dev.svg`)}'`" />
                <h2 class="f16 overview-card-label">
                  {{ cell.name }}
                  <span>{{ cell.nameCn }}</span>
                </h2>
              </n-card>
            </router-link>
          </div>
          <!-- 解决space-between布局下，最后一行项目不够时，两端对齐问题 -->
          <div v-for="(menu, index) in palceMenus" :label="menu" :key="index" class="w320 h0"></div>
        </div>
      </div>
    </div>
    <div id="footer"></div>
  </div>
</template>

<script lang="js">
import { defineComponent, reactive, toRefs, onMounted } from 'vue';
import { $pub } from '@/tools';
import { cmpMenus } from '@demos/webdoc/menus.js';
export default defineComponent({
  name: 'Overview',
  setup() {
    let state = reactive({
      searchMenus: cmpMenus,
      menus: cmpMenus,
      value: '',
      palceMenus: new Array(14)
    });
    function debounce(fn, delay) {
      let timeout = 0;
      return (value) => {
        if (timeout) { clearTimeout(timeout); }
        timeout = setTimeout(() => {
          fn(value);
          timeout = 0;
        }, delay);
      };
    }
    function searchResultFn(value) {
      const currentValue = value.replaceAll(' ','').toLowerCase();
      const reg = new RegExp(currentValue, 'ig');
      const searchMenus = state.menus.map(item => {
        const label = item.label;
        const children = item.children.filter((child) => {
          const title = `${child.name?.toLowerCase()}${child.nameCn}`;
          return child.name?.match(reg) || child.nameCn?.match(reg) || title?.match(reg);
        });
        return { label, children };
      }).filter(item => item.children.length > 0);
      state.searchMenus = searchMenus;
    }
    let fn = {
      searchHandler: debounce(searchResultFn, 300),
      getTo: (key) => `${import.meta.env.VITE_CONTEXT}components/${key}`
    };
    onMounted(() => {
      const common = new window.TDCommon(['#footer'], {});
      common.renderFooter();
    });
    return { ...toRefs(state), ...fn };
  }
});
</script>

<style lang="less">
.overview-layout {
  padding-left: 10%;
  padding-right: 10%;
  min-height: 100%;
}

.cell-title {
  position: absolute;
  display: inline-block;
  top: 0px;
  width: 16px;
  height: 16px;
  line-height: 16px;
  font-size: 12px;
  color: #000000d9;
  background: #fafafa;
  text-align: center;
  border-radius: 2px;
  border: 1px solid #d9d9d9;
}

.n-card.n-card--hoverable {
  box-shadow: 1px 1px 4px 1px rgba(31, 52, 121, 0.1);
  &:hover {
    box-shadow: 1px 1px 6px 6px rgba(31, 52, 121, 0.08);
  }
}

.overview-card {
  justify-content: flex-start;
  gap: 1%;
}

.overview-card-container {
  width: 24.25%;
}

.overview-card-label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 1279px) {
  .overview-card {
    gap: 2%;
  }
  .overview-card-container {
    width: 49%;
  }
}
</style>
