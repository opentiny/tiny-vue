<template>
  <div>
    <div class="api-list">
      <!-- apis 是一个数组 {name,type,properties:[原table内容],events:[] ...........} -->
      <div class="mt20 wp100" v-for="oneGroup in props.currentJson.apis" :key="oneGroup.name">
        <div class="ti-f-r ti-f-pos-start ti-fw-bold">
          <h2 :id="`cmp-${oneGroup.name}`" class="api-groupname ti-f18">
            {{ oneGroup.name }}
          </h2>
          <div class="api-groupname-tag ti-ml12 ti-px8 ti-py4">
            {{ oneGroup.type }}
          </div>
        </div>
        <div v-for="(oneApiArr, key) in oneGroup" :key="key">
          <template v-if="!['name', 'type'].includes(key) && oneApiArr.length > 0">
            <h3 class="ti-f18 ti-py28 api-groupname-key" :id="`${oneGroup.name}--${key}`">
              {{ key }}
            </h3>
            <div class="api-table-box">
              <tiny-grid
                ref="apiTableRef"
                class="api-table"
                :data="props.tableData[oneGroup.name][key]"
                :expand-config="apiExpandConf"
                row-id="name"
              >
                <tiny-grid-column class-name="api-table-expand-col" type="expand" width="32">
                  <template #default="{ row }">
                    <async-highlight
                      v-if="row.code"
                      :code="row.code.trim()"
                      :types="props.chartCode ? 'html' : 'ts'"
                    ></async-highlight>
                    <div v-if="row.depTypes">
                      <async-highlight
                        v-for="(k, i) in row.depTypes"
                        :key="i"
                        :code="props.currentJson.types[k]?.code"
                        types="ts"
                      ></async-highlight>
                    </div>
                  </template>
                </tiny-grid-column>
                <tiny-grid-column field="name" :title="i18nByKey('name')" :width="columnWidth[key][0]">
                  <template #default="{ row }">
                    <span class="api-table-name">
                      <a v-if="row.demoId" @click="jumpToDemo(row.demoId)">{{ row.name }}</a>
                      <span v-else>{{ row.name }}</span>
                    </span>
                    <version-tip
                      v-if="row.meta || row.versionTipOption"
                      :meta="row.meta"
                      v-bind="row.versionTipOption"
                      render-type="tag"
                      tip-subject="api"
                    >
                    </version-tip>
                  </template>
                </tiny-grid-column>
                <tiny-grid-column
                  v-if="props.tableData[oneGroup.name][key].find((i) => i.type)"
                  field="type"
                  :title="i18nByKey('propType')"
                  :width="columnWidth[key][1]"
                >
                  <template #default="{ row }">
                    <span
                      :class="{ 'type-link': row.typeAnchorName || row.linkTo }"
                      :id="row.typeAnchorName ? row.type : ''"
                      @click="toOuterType(row)"
                      >{{ row.type }} <OuterLink v-if="row.linkTo"></OuterLink
                    ></span>
                  </template>
                </tiny-grid-column>
                <tiny-grid-column
                  v-if="key === 'props' || key === 'options'"
                  field="defaultValue"
                  :title="i18nByKey('defValue')"
                  :width="columnWidth[key][2]"
                ></tiny-grid-column>
                <tiny-grid-column field="desc" :title="i18nByKey('desc')">
                  <template #default="data">
                    <span v-html="data.row.desc"></span>
                  </template>
                </tiny-grid-column>
              </tiny-grid>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyGrid, TinyGridColumn } from '@opentiny/vue'
import { iconOuterLink } from '@opentiny/vue-icon'
import { i18nByKey } from '@/tools'
import { router } from '@/router.js'
import AsyncHighlight from './async-highlight.vue'
import VersionTip from './version-tip.vue'

const props = defineProps({ currentJson: {}, chartCode: {}, tableData: {} })

const emit = defineEmits(['jump-to-demo'])

const OuterLink = iconOuterLink()

const columnWidth = {
  props: ['15%', '20%', '15%'],
  options: ['15%', '20%', '15%'],
  events: ['15%', '25%', 0],
  methods: ['15%', '20%', 0],
  slots: ['15%', 0, 0],
  format: ['15%', 0, 0]
}

const apiExpandConf = {
  expandAll: false,
  trigger: 'row',
  expandRowKeys: [],
  accordion: false,
  activeMethod: (row) => row.typeAnchorName,
  showIcon: true // 配置是否显示展开图标
}

// 点击 api区域的 name列时
const jumpToDemo = (demoId) => {
  emit('jump-to-demo', demoId)
}

// 跳转到其他组件的api
const toOuterType = (row) => {
  if (!row.linkTo) {
    return
  }
  router.push(row.linkTo)
}

const getRowData = (type) => {
  const tableData = props.tableData
  let rowData
  for (const comp of Object.values(tableData)) {
    for (const apiGroup of Object.values(comp)) {
      rowData = apiGroup.find((i) => i.type === type)
      if (rowData) {
        return rowData
      }
    }
  }
}

const apiTableRef = ref()
const jumpToApi = (hash) => {
  const rowData = getRowData(hash)
  const row = document.getElementById(hash).closest('.tiny-grid-body__row')
  if (row) {
    apiTableRef.value.forEach((i) => {
      i.setCurrentRow(rowData)
      i.setRowExpansion(rowData, true)
    })
  }
}

defineExpose({ jumpToApi })
</script>

<style scoped lang="less">
.api-list {
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
}

.api-groupname {
  color: var(--tv-color-text);
}
.api-groupname-key {
  color: var(--tv-color-text-secondary);
}

.api-groupname-tag {
  color: var(--primary);
  border: 1px solid var(--primary);
}
.dark .api-groupname-tag {
  color: var(--tv-color-text-secondary);
  background-color: var(--tv-color-bg-header);
  border: none;
}
.api-table-box {
  overflow-x: auto;
  width: 100%;
}

.api-table {
  width: 100%;
  min-width: 640px;
  table-layout: fixed;
  border-collapse: collapse;

  a,
  .type-link {
    text-decoration: none;
    color: #5e7ce0;
    cursor: pointer;
    word-wrap: break-word;

    .tiny-svg {
      fill: #5e7ce0;
    }
  }

  &-name:has(+ .version-tip) {
    margin-right: 4px;
  }

  :deep(.api-table-expand-col) {
    padding-left: 16px;
  }

  :deep(.tiny-grid-body__expanded-cell) {
    background-color: #fafafa;
  }

  :deep(code) {
    color: #476582;
    padding: 4px 8px;
    margin: 0 4px;
    font-size: 0.85em;
    color: var(--tv-color-text-secondary);
    background-color: var(--tv-color-bg-header);
    border-radius: 3px;
  }
}
</style>
