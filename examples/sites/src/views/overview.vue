<template>
  <div>
    <div class="overview-layout">
      <h1 class="ti-mb20 ti-f24 ti-fw-600">
        {{ i18nByKey('overview') }}
        <span class="ti-f18">({{ getTotalComponentsNum() }})</span>
      </h1>

      <h1 class="ti-f14 ti-my20 ti-lh21">
        {{ i18nByKey('overviewDesc') }}
      </h1>
      <!-- 搜索 -->
      <tiny-input
        :placeholder="i18nByKey('searchComponents')"
        :modelValue="value"
        class="ti-mb10 search-input"
        :style="{ width: '100%', padding: '6px' }"
        @update:modelValue="searchHandler"
      >
        <template #suffix>
          <img class="ti-h24 ti-w24 cur-def" :src="searchSvg" />
        </template>
      </tiny-input>
      <!-- 组件列表 -->
      <div v-if="searchMenus?.length === 0" class="text-center py60">
        <img class="ti-h150 ti-w200" :src="noDataSvg" />
        <p class="no-data-text">{{ i18nByKey('noData') }}</p>
      </div>
      <div v-for="(menu, index) in searchMenus" :label="menu" :key="index">
        <div class="ti-rel ti-mt25">
          <h2 class="ti-f16 ti-d-ib ti-fw-600 ti-mr8">{{ getWord(menu.label, menu.labelEn) }}</h2>
          <span v-if="searchMenus?.length !== 0" class="cell-title">{{ menu.children.length }}</span>
        </div>
        <div class="ti-f-r ti-f-wrap ti-f-pos-between overview-card">
          <div
            v-for="(cell, cellIndex) in menu.children"
            :label="cell"
            :key="cellIndex"
            class="ti-my10 ti-text-center overview-card-container"
          >
            <router-link :to="getTo(cell.key)" class="decoration-none">
              <div class="ti-br-4 component-card">
                <img
                  class="ti-h125 ti-w125 inline-block"
                  :src="pubUrl(`@demos/overviewimage/${getSvg(cell.key)}.svg`)"
                  :onerror="`this.src='${pubUrl(
                    `@demos/overviewimage/${cell.key.includes('chart') ? 'dev-chart' : 'dev'}.svg`
                  )}'`"
                />
                <h2 class="ti-f16 overview-card-label">
                  {{ cell.name }}
                  <span v-if="isZhCn">{{ cell.nameCn }}</span>
                </h2>
              </div>
            </router-link>
          </div>
          <!-- 解决space-between布局下，最后一行项目不够时，两端对齐问题 -->
          <div v-for="(menu, index) in palceMenus" :label="menu" :key="index" class="ti-w320 ti-h0"></div>
        </div>
      </div>
    </div>
    <div id="footer"></div>
  </div>
</template>

<script lang="js">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { cmpMenus } from '@menu/menus.js'
import TinyInput from '@opentiny/vue-input'
import noDataSvg from '@/assets/images/no-data.svg?url'
import searchSvg from '@/assets/images/search.svg?url'
import { getWord, i18nByKey, isZhCn, pubUrl } from '@/tools'
import useTheme from '@/tools/useTheme'

export default defineComponent({
  name: 'Overview',
  components: {
    TinyInput
  },
  setup() {
    let state = reactive({
      searchMenus: cmpMenus,
      menus: cmpMenus,
      value: '',
      palceMenus: new Array(14)
    })
    function debounce(fn, delay) {
      let timeout = 0
      return (value) => {
        if (timeout) {
          clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
          fn(value)
          timeout = 0
        }, delay)
      }
    }
    function searchResultFn(val) {
      const value = val
      const trimValue = value.replaceAll(' ', '').toLowerCase()
      const currentValue = trimValue
      const reg = new RegExp(currentValue, 'ig')
      const isGrid = trimValue === 'grid' || trimValue === '表格'
      const searchMenus = state.menus
        .map((item) => {
          const label = item.label
          // 对表格特殊处理
          if (isGrid && item.key === 'cmp_table_components') {
            return { label, children: item.children }
          }
          const children = item.children.filter((child) => {
            const title = `${child.name?.toLowerCase()}${child.nameCn}`
            return child.name?.match(reg) || child.nameCn?.match(reg) || title?.match(reg)
          })
          return { label, children }
        })
        .filter((item) => item.children.length > 0)
      state.searchMenus = searchMenus
    }
    const lang = getWord('zh-CN', 'en-US')
    const { defaultTheme } = useTheme()
    const { all: allPathParam, theme = defaultTheme } = useRoute().params
    const allPath = allPathParam ? allPathParam + '/' : ''
    const debounceSearch = debounce(searchResultFn, 300)

    let fn = {
      searchHandler: (val) => {
        state.value = val
        debounceSearch(val)
      },
      getTo: (key) => `${import.meta.env.VITE_CONTEXT}${allPath}${lang}/${theme}/components/${key}`,
      getSvg: (key) => {
        // 表格示例单独另起了许多路由，统一使用表格组件图标
        if (key.startsWith('grid-')) {
          return 'grid'
        } else {
          return key
        }
      },
      getTotalComponentsNum: () => {
        let total = 0
        cmpMenus.forEach((cmpCategory) => {
          if (cmpCategory.key === 'cmp_frame_style') {
            total += 2
          } else if (cmpCategory.key === 'cmp_table_components') {
            total += 1
          } else {
            total += cmpCategory.children.length
          }
        })
        return total
      }
    }

    onMounted(() => {
      const common = new window.TDCommon(['#footer'], {})
      common.renderFooter()
    })
    return { ...toRefs(state), ...fn, TinyInput, noDataSvg, searchSvg, isZhCn, getWord, i18nByKey, pubUrl }
  }
})
</script>

<style lang="less">
.overview-layout {
  padding: 48px 10% 10%;
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

.component-card {
  box-shadow: 1px 1px 4px 1px rgba(31, 52, 121, 0.1);
  transition:
    color 0.3s,
    background-color 0.3s,
    box-shadow 0.3s,
    border-color 0.3s;
  padding: 24px;
  font-size: 14px;
  color: rgb(51, 54, 57);
  line-height: 1.6;
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

.search-input {
  .tiny-input__inner {
    height: 46px;
    font-size: 14px;
    padding-left: 18px;
  }
  .tiny-input__suffix {
    right: 20px;
  }
}

.no-data-text {
  color: var(--ti-common-color-text-secondary);
  margin-top: var(--ti-common-size-5x);
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
