/**
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
import { $props, $prefix, $setup, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc'

const $constants = {
  EMPTY_TEXT_LOCAL: 'ui.tree.emptyText'
}

export type TreeDropType = 'prev' | 'inner' | 'next'
export type TreeDropEndType = 'before' | 'after' | 'inner' | 'none'

/** Tree 组件用于展示树形数据，支持多选、懒加载、拖拽和编辑节点等功能 */
export default defineComponent({
  name: $prefix + 'Tree',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    /** 是否为手风琴模式，每次只打开一个同级树节点展开 */
    accordion: Boolean,
    /** 判断节点能否被拖拽  */
    allowDrag: {
      type: Function as PropType<(nodeObj: any) => boolean>
    },
    /** 判断节点能否被拖拽 */
    allowDrop: {
      type: Function as PropType<(srcNode: any, targetNode, type: TreeDropType) => boolean>
    },
    /** 展开子节点时，是否自动展开父节点，默认为 true */
    autoExpandParent: {
      type: Boolean,
      default: true
    },
    /** 未知属性 */
    checkDescendants: {
      type: Boolean,
      default: false
    },
    /** 是否点击节点时，自动勾选节点，默认为 false */
    checkOnClickNode: Boolean,
    /** 是否为父子严格模式，默认为 false */
    checkStrictly: Boolean,
    /** 设置当前选中节点 */
    currentNodeKey: [String, Number],
    /** 设置数据源, 默认通过数据项的 label , children 属性展示数据.
     *  当需要高亮，编辑时，必须指定 node-key 属性 */
    data: {
      type: Array
    },
    /** 未知属性 */
    dataset: Object,
    /** 默认勾选的节点的keys */
    defaultCheckedKeys: Array,
    /** 是否默认展开所有节点，默认为 false  */
    defaultExpandAll: Boolean,
    /** 默认展开节点的keys */
    defaultExpandedKeys: Array,
    /** 未知属性 */
    defaultExpandedKeysHighlight: [Number, String],
    /** 是否开启节点拖拽，默认为 false */
    draggable: {
      type: Boolean,
      default: false
    },
    /** 无数据的时候展示的文本 */
    emptyText: String,
    /** 指示展开的图标 */
    expandIcon: Object,
    /** 节点在点击内容时,是否展开 / 收起  */
    expandOnClickNode: {
      type: Boolean,
      default: true
    },
    /** 对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏 */
    filterNodeMethod: {
      type: Function as PropType<(value: any, nodeData: any, nodeObj: any) => boolean>
    },
    /** 是否高亮当前选中节点 默认为false */
    highlightCurrent: Boolean,
    /** 自定义节点图标 */
    icon: Object,
    /** 点击图标展开节点时是否触发 node-click 事件, 默认为true */
    iconTriggerClickNode: {
      type: Boolean,
      default: true
    },
    /** 设置相邻级节点间的水平缩进，单位为像素 */
    indent: {
      type: Number,
      default: 16
    },
    /** 是否为异步加载模，需要配置 load 属性使用。 */
    lazy: {
      type: Boolean,
      default: false
    },
    /** 加载子树数据的方法。点击节点后，组件开始调用load方法
     * 只有在load函数内调用resolve(data)，才表示返回下级的数据成功。  */
    load: {
      type: Function as PropType<(node: any, resolve: (data: any[]) => void) => void>
    },
    /** 节点唯一标识属性名称 */
    nodeKey: String,
    /** 未知属性 */
    parentKey: String,
    /** 用户传入非标准格式的数据时，指定映射属性的关系  */
    props: {
      type: Object as PropType<{ children?: string; label?: string; disabled?: string; isLeaf?: string }>,
      default() {
        return {
          children: 'children',
          label: 'label',
          disabled: 'disabled',
          isLeaf: 'isLeaf'
        }
      }
    },
    /** 是否在第一次展开某个树节点后才渲染其子节点, 默认值为true */
    renderAfterExpand: {
      type: Boolean,
      default: true
    },
    /** 树节点的内容区的渲染函数 */
    renderContent: {
      type: Function as PropType<(h: any, { node: any, data: any, store: any }) => VNode>
    },
    /** 是否为多选模式, 默认为 false  */
    showCheckbox: {
      type: Boolean,
      default: false
    },
    /** 是否启用右键菜单功能, 默认为 false  */
    showContextmenu: {
      type: Boolean,
      default: false
    },
    /** 是否为单选模式, 默认为 false  */
    showRadio: {
      type: Boolean,
      default: false
    },
    /** 未知属性, 该功能待移除 */
    showNumber: {
      type: Boolean,
      default: false
    },
    /** 未知属性, 该功能待移除 */
    collapsible: {
      type: Boolean,
      default: true
    },
    /** 在严格模式时，是否显示勾选父节点时，自动勾选子节点的功能区域  */
    showCheckEasily: {
      type: Boolean,
      default: false
    },
    /** 指定 tree-node的高度及文字行高， 一直未入文档，可移除  */
    nodeHeight: Number,
    /** 指示收缩的图标 */
    shrinkIcon: Object,
    /** 指示展开的图标色 */
    expandIconColor: String,
    /** 指示收缩的图标色  */
    shrinkIconColor: String,
    /** 组件的大小， 默认值为 medium, 可选值为 'medium'|'small' */
    size: {
      type: String,
      default: 'medium'
    },
    /** 删除时，禁止删除的节点 key 值列表 */
    deleteDisabledKeys: Array,
    /** 编辑时，禁止编辑的节点 key 值列表 */
    editDisabledKeys: Array,
    /** 添加时，禁止添加的节点 key 值列表 */
    addDisabledKeys: Array,
    /** 未知属性, 该功能待移除。 只是通过它 生成一个 isSaasTheme的类名  */
    theme: String,
    /** 视图模式,其中tree是普通视图，plain是平铺视图  */
    viewType: {
      type: String,
      default: 'tree',
      validator(value) {
        return ['tree', 'plain'].includes(value)
      }
    },
    /** 平铺视图时，是否显示下面的辅助信息 */
    showAuxi: {
      type: Boolean,
      default: true
    },
    /** 设置节点路径的分隔符，默认为 斜线 */
    pathSplit: {
      type: String,
      default: '/'
    },
    /** 未知属性,  */
    filterPlainMethod: {
      type: Function as PropType<(nodeData: any[]) => boolean>
    },
    /** 下级树节点数据加载完毕后的回调函数  */
    afterLoad: {
      type: Function as PropType<(nodes: any[]) => void>
    },
    /** 未知属性  */
    lazyCurrent: Boolean,
    /** 未知属性  */
    baseIndent: {
      type: Number,
      default: 0
    },
    /** 删除节点的装置钩子函数，若返回 false 或者返回 Promise 且被 reject，则停止删除。  */
    deleteNodeMethod: {
      type: Function as PropType<({ node: any, event: MouseEvent }) => boolean | Promise<boolean>>
    },
    /** 未知属性  */
    showCheckedMark: Boolean,
    /** 未知属性  */
    willChangeView: {
      type: Boolean,
      default: true
    },
    /** 是否只能选中叶子节点 */
    onlyCheckChildren: Boolean,
    /** 用于编辑模式下参数配置,指示新增节点的 id ,是否显示 id 重复的警告等 */
    editConfig: {
      type: Object as PropType<{
        /** 生成新节点的id */
        initNodeIdMethod: (node: any) => string
        /** 新节点id与其它id重复时，是否在控制台显示告警。 */
        noWarning: boolean
      }>,
      default: () => ({})
    },
    /** 是否显示连接线,默认为false  */
    showLine: Boolean,
    /** 是否显示树节点聚焦时的背景颜色 */
    isShowFocusBg: {
      type: Boolean,
      default: true
    },
    /** 是否在匹配的节点中，高亮搜索文字 */
    highlightQuery: {
      type: Boolean,
      default: false
    },
    /** 添加节点的事件 */
    onAddNode: {
      type: Function as PropType<(node: any) => void>
    },
    /** 勾选节点后的事件  */
    onCheck: {
      type: Function as PropType<(nodeData: any, currentChecked: boolean) => void>
    },
    /** 节点选中状态发生变化时的回调  */
    ohCheckChange: {
      type: Function as PropType<(nodeData: any, checked: boolean, indeterminate: boolean) => void>
    },
    /** 平铺模式下，勾选或取消勾选节点的事件，需要设置show-checkbox为true才生效 */
    onCheckPlain: {
      type: Function as PropType<(node: any, checked: boolean) => void>
    },
    /** 关闭编辑的事件 */
    onCloseEdit: {
      type: Function as PropType<() => void>
    },
    /** 关闭右键菜单的事件 */
    onCloseMenu: {
      type: Function as PropType<() => void>
    },
    /** 当前选中节点变化时触发的事件  */
    onCurrentChange: {
      type: Function as PropType<(nodeData: any, node: any) => void>
    },
    /** 删除节点的事件 */
    onDeleteNode: {
      type: Function as PropType<(node: any) => void>
    },
    /** 修改节点的事件 */
    onEditNode: {
      type: Function as PropType<(node: any) => void>
    },
    /** 平铺模式下，点击节点定位图标触发的事件 */
    onLeavePlainView: {
      type: Function as PropType<(node: any, event: MouseEvent) => void>
    },
    /** 懒加载时，加载数据成功的事件 */
    onLoadData: {
      type: Function as PropType<(data: any) => void>
    },
    /** 点击节点后的事件 */
    onNodeClick: {
      type: Function as PropType<(nodeData: any, node: any, vm: any) => void>
    },
    /** 收缩节点后的事件 */
    onNodeCollapse: {
      type: Function as PropType<(nodeData: any, node: any, vm: any) => void>
    },
    /** 当某一节点被鼠标右键点击时会触发该事件 */
    onNodeContextMenu: {
      type: Function as PropType<(event: MouseEvent, nodeData: any, node: any, vm: any) => void>
    },
    /** 拖拽结束时（可能未成功）触发的事件 */
    onNodeDragEnd: {
      type: Function as PropType<(srcNode: any, targetNode: any, dropType: TreeDropEndType, event: DragEvent) => void>
    },
    /** 拖拽进入其他节点时触发的事件  */
    onNodeDragEnter: {
      type: Function as PropType<(srcNode: any, targetNode: any, event: DragEvent) => void>
    },
    /** 拖拽离开某个节点时触发的事件 */
    onNodeDragLeave: {
      type: Function as PropType<(srcNode: any, targetNode: any, event: DragEvent) => void>
    },
    /** 在拖拽节点时触发的事件 */
    onNodeDragOver: {
      type: Function as PropType<(srcNode: any, targetNode: any, event: DragEvent) => void>
    },
    /** 节点开始拖拽时触发的事件 */
    onNodeDragStart: {
      type: Function as PropType<(node: any, event: DragEvent) => void>
    },
    /** 拖拽成功完成时触发的事件  */
    onNodeDrop: {
      type: Function as PropType<(srcNode: any, targetNode: any, dropType: TreeDropEndType, event: DragEvent) => void>
    },
    /** 展开节点后的事件 */
    onNodeExpand: {
      type: Function as PropType<(nodeData: any, node: any, vm: any) => void>
    },
    /** 进入编辑的事件  */
    onOpenEdit: {
      type: Function as PropType<() => void>
    },
    /** 保存编辑的事件 */
    onSaveEdit: {
      type: Function as PropType<(changeData: any, finalData: any) => void>
    }
  },
  slots: Object as SlotsType<{
    /** 自定义树节点的右键菜单内容 */
    contextmenu: { node: any }
    /** 自定义树节点的内容 */
    default: { node: any; data: any }
    /** 自定义空数据的元素 */
    empty: { node: any }
    /** 节点内容靠右对齐的元素 */
    operation: { node: any }
    /** 节点内容前置元素 */
    prefix: { node: any }
    /** 节点内容后置元素 */
    suffix: { node: any }
    /** 在严格模式显示自动勾选子节点的功能时，自定义开关右侧的内容  */
    'switch-text': {}
  }>,
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
