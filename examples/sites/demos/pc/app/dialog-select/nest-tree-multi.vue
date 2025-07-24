<template>
  <div class="tiny-demo">
    <tiny-button @click="visible = !visible">{{ `${visible ? '关闭' : '打开'}窗口` }}</tiny-button>
    <tiny-button @click="visible1 = !visible1">
      {{ `${visible1 ? '关闭' : '打开'}窗口 (插槽自定义场景)` }}
    </tiny-button>
    <tiny-dialog-select
      ref="dialogSelect"
      class="tiny-demo-tree-multi"
      :visible="visible"
      @update:visible="visible = $event"
      popseletor="tree"
      multi
      :dialog-op="dialogOp"
      :tree-op="treeOp"
      :selected-box-op="selectedBoxOp"
      :lookup-method="lookupMethod"
      :before-close="beforeClose"
      @change="onDialogSelectChange"
      value-field="id"
      text-field="label"
      :main-height="290"
    >
    </tiny-dialog-select>
    <tiny-dialog-select
      ref="dialogSelect"
      class="tiny-demo-tree-multi"
      :visible="visible1"
      @update:visible="visible1 = $event"
      popseletor="tree"
      multi
      :dialog-op="dialogOp"
      :tree-op="treeOp"
      :selected-box-op="selectedBoxOp"
      :lookup-method="lookupMethod"
      :before-close="beforeClose"
      @change="onDialogSelectChange"
      value-field="id"
      text-field="label"
      :main-height="290"
    >
      <template #option="{ option, mouseenter, mouseleave }">
        <div class="tiny-demo-tree-multi-option" @mouseenter="mouseenter" @mouseleave="mouseleave">
          <span class="title">{{ option._$title }}</span>
          <span class="sub-text" v-if="option._$auxi">({{ option._$auxi }})</span>
        </div>
      </template>
      <template #close="{ option, close }">
        <div class="tiny-demo-tree-multi-close">
          <span @click="close(option)">
            <tiny-icon-close></tiny-icon-close>
          </span>
        </div>
      </template>
    </tiny-dialog-select>
  </div>
</template>

<script>
import { TinyDialogSelect, TinyButton } from '@opentiny/vue'
import { iconClose } from '@opentiny/vue-icon'
import Sortable from 'sortablejs'

// 模拟服务侧数据
const datas = [
  { id: 1, pid: null, label: '一级 1' },
  { id: 2, pid: null, label: '一级 2' },
  { id: 3, pid: null, label: '一级 3', isLeaf: true, children: [] },
  { id: 4, pid: 1, label: '二级 4' },
  { id: 5, pid: 1, label: '二级 5', isLeaf: true, children: [] },
  { id: 6, pid: 2, label: '二级 6', isLeaf: true, children: [] },
  { id: 7, pid: 2, label: '二级 7', isLeaf: true, children: [] },
  { id: 8, pid: 4, label: '三级 8', isLeaf: true, children: [] },
  { id: 9, pid: 4, label: '三级 9', isLeaf: true, children: [] }
]

// 接口 1：根据 pid 查询直接子节点
const queryChildrenByPid = (pid) => datas.filter((record) => record.pid === pid)

// 接口 2：根据搜索文本找到匹配节点的所有父级节点 id
// （支持通过节点 id 搜索只是为了简化示例代码，业务使用时不必支持，可把接口 3 实现为批量接口提高查询效率）
const queryPidsBySearchFn = (search) => {
  const ids = []

  // 递归记录节点 id
  const ff = (node, path) => {
    path.unshift(node.id)

    if (!node.pid) return

    const p = datas.find((record) => record.id === node.pid)

    ff(p, path)
  }

  if (search) {
    datas
      .filter(
        (record) =>
          (typeof search === 'string' && ~record.label.indexOf(search)) ||
          (typeof search === 'number' && record.id === search)
      )
      .forEach((node) => {
        const path = []

        ff(node, path)

        ids.splice(ids.length, 0, ...path.slice(0, path.length - 1))
      })
  }

  return dedup(ids)
}

// 接口 3：根据一组节点 id 找到匹配节点的所有父级节点 id
// （使用了接口 2 只是为了简化示例代码，实现为批量接口可提高查询效率）
const queryPidsByIdsFn = (ids, pids = []) => {
  let allPids = [...pids]

  ids.forEach((id) => {
    allPids = allPids.concat(queryPidsBySearchFn(id))
  })

  return dedup(allPids)
}

// 接口 4：根据一组节点 id 查询这组节点
const queryNodesByIds = (ids) => datas.filter((row) => ~ids.indexOf(row.id))

// 去重
const dedup = (ids, tmp = []) => {
  const res = [...tmp, ...ids]

  return Array.from(new Set(res))
}

export default {
  components: {
    TinyDialogSelect,
    TinyButton,
    TinyIconClose: iconClose()
  },
  data() {
    return {
      visible: false,
      visible1: false,
      dialogOp: {
        top: '20vh',
        width: '800px',
        title: '选择公司',
        beforeClose: this.beforeClose,
        dialogClass: 'custom-dialog-class'
      },
      selectedBoxOp: {
        config: {
          pkField: 'id',
          pkFieldType: 'number',
          showField: ['label'],
          plugin: Sortable
        }
      },
      treeOp: {
        nodeKey: 'id',
        pathSplit: '/',
        props: { children: 'children', label: 'label', isLeaf: 'isLeaf' },
        checkStrictly: true,
        baseIndent: 0,
        load: this.remoteSearch,
        queryPidsBySearch: this.queryPidsBySearch,
        queryPidsByIds: this.queryPidsByIds,
        defaultCheckedKeys: [1, 4, 8],
        showLine: true
      }
    }
  },
  methods: {
    beforeClose() {
      return true
    },
    remoteSearch(node, callback) {
      setTimeout(() => {
        const res = queryChildrenByPid(node.level === 0 ? null : node.data.id)

        callback(res)
      }, 300)
    },
    queryPidsBySearch(search, callback) {
      setTimeout(() => {
        const res = queryPidsBySearchFn(search)
        callback(res)
      }, 300)
    },
    queryPidsByIds(ids, callback) {
      setTimeout(() => {
        const res = queryPidsByIdsFn(ids)
        callback(res)
      }, 300)
    },
    lookupMethod(values) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const res = queryNodesByIds(values)
          // 序列化是为了模拟每次返回的都是新对象
          const copy = JSON.parse(JSON.stringify(res))
          // 已选栏在插槽中使用字段_$title 和_$auxi 做定制显示，所以要在 lookup 接口内设置；如果使用其它字段，就不用设置
          copy.forEach((row) => {
            row._$title = row.label
            row._$auxi = '辅助文本'
          })
          resolve(copy)
        }, 300)
      })
    },
    onDialogSelectChange(values, texts, selectedDatas) {
      // 打印 change 回调数据，控制台查看
      console.log({ values, texts, selectedDatas })
    }
  }
}
</script>

<style scoped>
.tiny-demo-tree-multi .tiny-demo-tree-multi-option {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 28px;
  line-height: 28px;
}

.tiny-demo-tree-multi .tiny-demo-tree-multi-option .title {
  color: #161e26;
  font-size: 14px;
}

.tiny-demo-tree-multi .tiny-demo-tree-multi-option .sub-text {
  color: #8d959e;
  margin-left: 8px;
}

.tiny-demo-tree-multi-close {
  height: 28px;
  line-height: 28px;
  svg {
    fill: #808080;
  }
}

.tiny-demo-tree-multi-close > span {
  position: relative;
  left: 12px;
}
</style>
