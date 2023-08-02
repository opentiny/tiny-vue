import { mountPcMode } from '@opentiny-internal/vue-test-utils'
import { describe, expect, test, vi } from 'vitest'
import Grid from '@opentiny/vue-grid'
import GridColumn from '@opentiny/vue-grid-column'
import { reactive, nextTick } from 'vue'

const tableData = [
  {
    id: '1',
    name: 'GFD科技YX公司',
    city: '福州',
    employees: 800,
    createdDate: '2014-04-30 00:56:00',
    boole: false
  },
  {
    id: '2',
    name: 'WWW科技YX公司',
    city: '深圳',
    employees: 300,
    createdDate: '2016-07-08 12:36:22',
    boole: true
  }
]

const columns = [
  {
    type: 'index',
    width: 60
  },
  {
    type: 'selection',
    width: 60
  },
  {
    field: 'employees',
    title: '员工数'
  },
  {
    field: 'createdDate',
    title: '创建日期'
  },
  {
    field: 'city',
    title: '城市'
  }
]

describe('PC Mode', () => {
  const mount = mountPcMode

  // props
  test('columns & data', async () => {
    const data = reactive(tableData)
    const col = reactive(columns)
    const wrapper = mount(() => <Grid data={data} columns={col} />)
    await nextTick()
    expect(wrapper.find('.tiny-grid-cell').exists()).toBeTruthy()
  })

  // events
  test('cell-click', async () => {
    const data = reactive(tableData)
    const col = reactive(columns)
    const handleClick = vi.fn()
    const wrapper = mount(() => <Grid data={data} onCellClick={handleClick} columns={col} />)
    await nextTick()
    await wrapper.find('.tiny-grid-body__column ').trigger('click')
    await nextTick()
    expect(handleClick).toBeCalled()
  })

  // slots
  test('default-slot', async () => {
    const data = reactive(tableData)
    const handleClick = vi.fn()
    const wrapper = mount(() => (
      <Grid data={data} onCellClick={handleClick}>
        <GridColumn type="index" titile="序号" width="100"></GridColumn>
        <GridColumn
          field="name"
          titile="名称"
          width="100"
          v-slots={{
            default: (data) => (
              <span class="pink-cell" style="color:pink">
                {data.row.name}
              </span>
            )
          }}></GridColumn>
        <GridColumn field="city" titile="城市" width="100"></GridColumn>
      </Grid>
    ))
    await nextTick()
    expect(wrapper.find('.pink-cell').exists()).toBeTruthy()
  })

  // gridattrs
  test.todo('pager 设置分页配置项')

  test.todo('fetch-data 服务端数据查询方法')

  test.todo('save-data 服务端数据保存方法')

  test.todo('delete-data 服务端数据删除方法')

  test.todo('row-group row-group 属性可以配置行分组，行分组会将具有相同值的列进行分组展示。')

  test.todo('toolbar 工具栏配置')

  test.todo('align 所有的列对齐方式')

  test.todo('auto-resize 父元素响应式监听（对于父元素可能存在动态变化的场景可能会用到）')

  test.todo('border 是否带有纵向边框')

  test.todo('is-before-page-change 是否打开页面改变时的前置处理特性')

  test.todo('cell-class-name 给单元格附加 className，也可以是函数')

  test.todo('column-key 是否需要为每一列的 VNode 设置 key 属性（非特殊情况下不需要使用）')

  test.todo('column-min-width 设置可以调整到的最小宽度')

  test.todo('column-width 所有列宽度;该属性的可选值为 整数, px，%')

  test.todo('context-menu 快捷菜单配置项')

  test.todo('edit-rules 校验规则配置项')

  test.todo('expand-config 展开行配置项')

  test.todo('fit 所有列的宽度是否自撑开')

  test.todo('footer-align 所有的表尾列的对齐方式;该属性的可选值为 left（左对齐）, center（居中对齐）, right（右对齐）')

  test.todo('optimization 优化配置项')

  test.todo('params 额外的参数')

  test.todo('footer-cell-class-name 给表尾的单元格附加 className，也可以是函数')

  test.todo('footer-method 表尾合计的计算方法')

  test.todo('footer-row-class-name 给表尾的行附加 className，也可以是函数')

  test.todo('footer-span-method 表尾合并行或列')

  test.todo('header-align 所有的表头列的对齐方式;该属性的可选值为 left（左对齐）, center（居中对齐）, right（右对齐）')

  test.todo('header-cell-class-name 给表头的单元格附加 className，也可以是函数')

  test.todo('header-row-class-name 表头的行附加 className，也可以是函数 ')

  test.todo('height 设置表格内容区域（不含表格头部，底部）的高度。')

  test.todo('highlight-cell 只对 editConfig 配置时有效，是否在编辑时高亮单元格边框')

  test.todo('highlight-current-column 是否要高亮当前列')

  test.todo('highlight-current-row 是否要高亮当前行')

  test.todo('highlight-hover-column 鼠标移到列是否要高亮显示')

  test.todo('highlight-hover-row 鼠标移到行是否要高亮显示')

  test.todo('keyboard-config 按键配置项')

  test.todo('loading 表格是否显示加载中')

  test.todo('max-height 设置表格内容区域（不含表格头部，底部）的最大高度。;该属性的可选值为 整数, px，%')

  test.todo('mouse-config 鼠标配置项')

  test.todo('radio-config 单选框配置项')

  test.todo('remote-filter 所有列是否使用服务端筛选，如果设置为 true 则不会对数据进行处理')

  test.todo('remote-sort 是否将服务端的全部数据进行排序。默认为 false 不进行服务端排序。')

  test.todo('resizable 设置是否允许调整列宽')

  test.todo('row-class-name 自定义表格行类名，用于自定义表格的行样式的场景。可以直接设置字符串类名，也可以是用函数')

  test.todo('row-id 自定义行数据唯一主键的字段名（行数据必须要有唯一主键，默认自动生成）')

  test.todo('row-key 是否需要为每一行的 VNode 设置 key 属性（非特殊情况下没必要设置）')

  test.todo('select-config 复选框配置项')

  test.todo('show-footer 是否显示表尾合计')

  test.todo('show-header 是否显示表头')

  test.todo('show-header-overflow 设置表头所有内容过长时显示为省略号')

  test.todo('show-overflow 设置所有内容过长时显示为省略号（如果是固定列建议设置该值，提升渲染速度）')

  test.todo('size 表格的尺寸;该属性的可选值为 medium, small, mini')

  test.todo('sort-config 排序配置项')

  test.todo('sort-method 自定义所有列的排序方法')

  test.todo('span-method 合并行或列')

  test.todo('start-index 只对 type=index 的列有效，动态索引的起始值')

  test.todo('stripe 是否带有斑马纹')

  test.todo('sync-resize 响应式跟随某个属性')

  test.todo('tree-config 树形结构配置项')

  test.todo('valid-config 校验配置项')

  test.todo('summary-config 表格统计功能配置项')

  test.todo('sortable 设置是否允许列数据排序。默认为 true 可排序')

  test.todo('auto-load ')

  test.todo('is-async-column 设置表格的列是否延迟加载;是否开启异步列功能，配合 scrollLoad 一起使用')

  test.todo('columns 表格列的配置信息，具体参考列配置项')

  test.todo('scroll-load 滚动加载配置')

  test.todo('row-span 设置行合并,该属性仅适用于普通表格，不可与 tree-config 同时使用')

  test.todo('render-empty 空数据渲染')

  test.todo('events 事件对象')

  test.todo('data 设置表格的数据;')

  test.todo('min-height 设置表格内容区域（不含表格头部，底部）的最小高度。')

  test.todo('drop-config 表格拖拽配置项')

  test.todo('edit-config 表格编辑配置项')

  test.todo('seq-serial 设置行序号是否连续，seqSerial 当 showSeq 为 true 时有效。')

  test.todo('show-save-msg 切换分页时有未保存的数据时是否进行提示')

  test.todo('tooltip-config Grid 内置 tooltip 配置项，请参考 Tooltip 组件属性说明')

  // gridslots
  test.todo('default 默认插槽（表格列 <grid-column> ）')

  test.todo('toolbar 工具栏，（包含：缩放、个性化、刷新表格、自定义按钮）<grid-toolbar>')

  test.todo('pager 分页插件，<pager>')

  test.todo('empty 空数据时显示的文本内容')

  // gridmethods
  test.todo('clearActived() 手动清除单元格激活状态')

  test.todo(
    'clearAll() 手动清除表格所有条件，还原到初始状态（对于增删改查的场景中可能会用到，比如在数据保存之后清除表格缓存）'
  )

  test.todo('clearCurrentColumn() 用于当前列，手动清空当前高亮的状态')

  test.todo('clearCurrentRow() 用于当前行，手动清空当前高亮的状态')

  test.todo(
    'clearData(rows, field) 手动清空单元格内容，如果不传参数，则清空整个表格内容，如果传了行则清空指定行内容，如果传了指定字段，则清空该字段内容'
  )

  test.todo('clearFilter(field) 手动清空筛选条件（如果不传 field 则清空所有筛选条件），数据会恢复成未筛选的状态')

  test.todo('clearRadioRow() 用于单选行，手动清空用户的选择')

  test.todo('clearRowExpand() 手动清空展开行状态，数据会恢复成未展开的状态')

  test.todo('clearScroll() 手动清除滚动相关信息，还原到初始状态')

  test.todo('clearSelected() 手动清除单元格选中状态')

  test.todo('clearSelection() 用于多选行，手动清空用户的选择')

  test.todo('clearSort() 手动清空排序条件，数据会恢复成未排序的状态')

  test.todo('clearTreeExpand() 手动清空树形节点的展开状态，数据会恢复成未展开的状态')

  test.todo('closeFilter() 手动关闭筛选面板（某些特殊场景可能会用到）')

  test.todo('closeMenu() 手动关闭快捷菜单（某些特殊场景可能会用到）')

  test.todo(
    'createData(records) 创建 data 对象（对于某些特殊场景可能会用到，会自动对数据的字段名进行检测，如果不存在就自动定义）'
  )

  test.todo('createRow(records) 创建 Row|Rows 对象（对于某些特殊场景需要对数据进行手动插入时可能会用到）')

  test.todo('exportCsv(options) 将表格数据导出为 .csv 文件（支持所有主流的浏览器，不支持合并行或列）')

  test.todo('fullValidate(rows, callback) 表格完整校验函数，和 validate 的区别就是会对全量数据的所有规则进行完整校验')

  test.todo('getActiveRow() 获取已激活的行数据')

  test.todo('getColumnByField(field) 根据列的字段名获取列')

  test.todo('getColumnById(colid) 根据列的唯一主键获取列')

  test.todo('getColumnIndex(column) 根据 column 获取相对于 columns 中的索引')

  test.todo('getColumnNode(cell) 根据 th/td 元素获取对应的 column 信息')

  test.todo('getColumns(columnIndex) 获取表格的可视列，也可以指定索引获取列')

  test.todo('getCurrentRow() 用于当前行，获取当前行的数据')

  test.todo('getData(rowIndex) 获取数据，和 data 的行为一致，也可以指定索引获取数据')

  test.todo('getInsertRecords() 获取新增的数据')

  test.todo('getRadioRow() 用于单选行，获取当已选中的数据')

  test.todo('getRecordset() 获取表格数据集（获取新增、删除、更改的数据，对于增删改查表格非常方便）')

  test.todo('getRemoveRecords() 获取已删除的数据')

  test.todo('getRowById(rowid) 根据行的唯一主键获取行')

  test.todo('getRowIndex(row:Object) 根据 row 获取相对于 data 中的索引')

  test.todo('getRowNode(tr) 根据 tr 元素获取对应的 row 信息')

  test.todo('getSelectRecords() 用于多选行，获取已选中的数据')

  test.todo('getTableColumn() 获取当前表格的列（完整的全量表头列、处理条件之后的全量表头列、当前渲染中的表头列）')

  test.todo('getTableData() 获取当前表格的数据')

  test.todo('getUpdateRecords() 获取已修改的数据')

  test.todo('handleFetch() 触发表格的fetch-data')

  test.todo('hasActiveRow(row) 检查行是否已激活为编辑状态')

  test.todo('hasRowChange(row, field) 检查行或列数据是否发生改变')

  test.todo('hasRowExpand(row) 检查行是否已展开')

  test.todo('hasTreeExpand(row) 检查树节点是否已展开')

  test.todo('hideColumn(column) 隐藏指定列')

  test.todo('insert(records) 在表格中新增数据。 ;往表格插入数据，从第一行新增一行或多行新数据')

  test.todo(
    'insertAt(records, row) 往表格插入数据，从指定位置插入一行或多行；第二个参数：row 指定位置（不支持树表格）、null从第一行插入、-1 从最后插入'
  )

  test.todo('loadColumn(columns) 加载列配置（对于表格列需要重载、局部递增场景下可能会用到）')

  test.todo('loadData(data) 加载数据（对于表格数据需要重载、局部递增场景下可能会用到）')

  test.todo('recalculate() 重新计算表格（对于某些特殊场景可能会用到，比如隐藏的表格、更新列宽...等）')

  test.todo('refreshColumn() 刷新列配置（对于显示/隐藏列场景下可能会用到）')

  test.todo(
    'refreshData() 同步刷新 data 数据；如果用了该方法，那么组件将不再记录增删改的状态，只能自行实现对应逻辑（对于某些特殊的场景，比如深层树节点元素发生变动时可能会用到）'
  )

  test.todo('reloadCustoms(customs) 初始化加载显示/隐藏列（对于异步更新的场景下可能会用到）')

  test.todo('remove(rows) 删除指定行数据，指定 row 或 [row, ...] 删除多条数据，如果为空则删除所有数据')

  test.todo('removeSelecteds() 删除已选中的所有行数据')

  test.todo('resetAll() 手动重置列的所有操作，还原到初始状态（如果已关联工具栏，则会同步更新）')

  test.todo('resetCustoms() 手动重置列的显示/隐藏操作，还原到初始状态（如果已关联工具栏，则会同步更新）')

  test.todo('resetResizable() 手动重置列宽拖动的操作，还原到初始状态（如果已关联工具栏，则会同步更新）')

  test.todo('revertData(rows, field) 还原更改，还原指定行 row 或者整个表格的数据')

  test.todo('scrollTo(scrollLeft, scrollTop) 如果有滚动条，则滚动到对应的位置')

  test.todo('scrollToColumn(column) 如果有滚动条，则滚动到对应的列')

  test.todo('scrollToRow(row) 如果有滚动条，则滚动到对应的行')

  test.todo('setActiveCell(row, field) 激活单元格编辑')

  test.todo('setActiveRow(row) 激活行编辑，如果是 mode=cell 则默认激活第一个单元格')

  test.todo('setAllRowExpansion(checked) 设置所有行的展开与否')

  test.todo('setAllSelection(checked) 入参为boolean,用于多选行，设置所有行的选中状态,')

  test.todo('setAllTreeExpansion(checked) 设置所有树节点的展开与否')

  test.todo('setCurrentRow(row) 用于当前行，设置某一行为高亮状态')

  test.todo('setRadioRow(row) 用于单选行，设置某一行为选中状态')

  test.todo('setRowExpansion(rows, checked) 设置展开行，二个参数设置这一行展开与否')

  test.todo('setSelection(rows, checked) 用于多选行，设置行为选中状态，第二个参数为选中与否')

  test.todo('setTreeExpansion(rows, checked) 设置展开树形节点，二个参数设置这一行展开与否')

  test.todo('showColumn(column) 显示指定列')

  test.todo('sort(field, order) 手动对表格进行排序（如果 order 为空则自动切换排序）')

  test.todo('toggleAllSelection() 用于多选行，切换所有行的选中状态')

  test.todo('toggleRowExpansion(row) 用于可展开表格，切换展开行')

  test.todo('toggleRowSelection(row) 用于多选行，切换某一行的选中状态')

  test.todo('toggleTreeExpansion(row) 用于可树形表格，切换展开树形节点')

  test.todo('validate(rows, callback) 表格校验函数')

  // gridevents
  test.todo('page-change 只对 pager-config 配置时有效，分页发生改变时会触发该事件')

  test.todo('before-page-change 在打开页面改变时的前置处理特性，并且进行翻页操作或者改变页大小操作时触发;')

  test.todo('toolbar-button-click 只对 toolbar.buttons 配置时有效，当工具栏的按钮被点击时会后触发该事件;')

  test.todo('cell-click 单元格被点击时会触发该事件')

  test.todo('cancel-page-change 切换分页时有未保存的数据时，提示框确定按钮事件')

  test.todo('cell-context-menu 单元格被鼠标右键点击时触发该事件,arg:{row：当前行}')

  test.todo('cell-dblclick 单元格被双击时会触发该事件')

  test.todo('cell-mouseenter 当单元格 hover 进入时会触发该事件')

  test.todo('cell-mouseleave 当单元格 hover 退出时会触发该事件')

  test.todo('context-menu-click 只对 context-menu 配置时有效，当点击快捷菜单时会触发该事件')

  test.todo('current-change 只对 highlightCurrentRow 有效，当手动选中行并且值发生改变时触发的事件')

  test.todo('edit-actived 单元格被激活编辑时会触发该事件')

  test.todo('edit-closed 单元格编辑状态下被关闭时会触发该事件')

  test.todo('edit-disabled 当单元格激活时如果是禁用状态时会触发该事件')

  test.todo('filter-change 当筛选条件发生变化时会触发该事件')

  test.todo('footer-cell-click 表尾单元格被点击时会触发该事件')

  test.todo('footer-cell-context-menu 表尾单元格被鼠标右键点击时触发该事件')

  test.todo('footer-cell-dblclick 表尾单元格被双击时会触发该事件')

  test.todo('header-cell-click 表头单元格被点击时会触发该事件')

  test.todo('header-cell-context-menu 表头单元格被鼠标右键点击时触发该事件')

  test.todo('header-cell-dblclick 表头单元格被双击时会触发该事件')

  test.todo('radio-change 只对 type=radio 有效，当手动勾选并且值发生改变时触发的事件')

  test.todo('scroll 表格滚动时会触发该事件')

  test.todo('select-all 只对 type=selection 有效，当手动勾选全选时触发的事件')

  test.todo('select-change 只对 type=selection 有效，当手动勾选并且值发生改变时触发的事件')

  test.todo('toggle-expand-change 当行展开或收起时会触发该事件')

  test.todo('toggle-tree-change 当树节点展开或收起时会触发该事件')

  test.todo('valid-error 当数据校验不通过时会触发该事件')

  test.todo('BeforeEdit 点击单元格，显示编辑组件前触发的事件')

  test.todo('CellClick 点击单元格触发的事件')

  test.todo('sort-change 点击列头，执行数据排序前触发的事件')

  test.todo('fullscreen 全屏时或关闭全屏时触发的时间')

  // columnattrs
  test.todo('align 列对其方式')

  test.todo('class-name 给单元格附加 className，也可以是函数')

  test.todo(
    'multi 是 filter 对象内置的属性，筛选是否允许多选;设置选择列是否显示复选框。当 columnType 为 select 时有效。'
  )

  test.todo('method 是 filter 对象内置的自定义筛选方法')

  test.todo('fixed 将列固定在左侧')

  test.todo('footer-align 表尾列的对齐方式')

  test.todo('footer-class-name 给表尾的单元格附加 className，也可以是函数')

  test.todo('header-align 表头列的对齐方式')

  test.todo('header-class-name 设置列头样式名称;给表头的单元格附加 className，也可以是函数')

  test.todo('index-method 只对 type=index 有效，自定义索引方法')

  test.todo('min-width 最小列宽度；会自动将剩余空间按比例分配;该属性的可选值为 整数, px，%')

  test.todo('show-icon 是否显示列头编辑图标，在编辑时有效')

  test.todo('params 额外的参数（自定义一些数据参数，对于某些特殊的场景可能会用到）')

  test.todo('remote-sort 是否使用服务端排序，如果设置为 true 则不会对数据进行处理')

  test.todo('resizable 设置该列是否可以调整列宽;列是否允许拖动列宽调整大小')

  test.todo('show-header-overflow 当表头内容过长时显示为省略号')

  test.todo('show-overflow 当内容过长时显示为省略号')

  test.todo('sort-by 只对 sortable 有效，自定义排序的属性')

  test.todo('rules 表单的验证功能')

  test.todo('required 是否必填，如不设置，则会根据校验规则自动生成')

  test.todo('sort-method 自定义所有列的排序方法')

  test.todo('sortable 设置该列数据是否可以排序')

  test.todo('title 列标题（支持开启国际化），可以是函数')

  test.todo('tree-node 只对 tree-config 配置时有效，指定为树节点')

  test.todo('format-value 格式化单元格编辑器组件的传入值')

  test.todo('format-text 设置当前表格列的显示获取编辑类型')

  test.todo('type 设置内置列的类型;设置内置列的类型')

  test.todo('width 设置列的宽度')

  test.todo('format-config 开启该列数据异步渲染')

  test.todo('class-name 给单元格附加 className，也可以是函数 ')

  test.todo('editor 单元格编辑渲染配置项，也可以是函数。')

  test.todo('filter 设置表格列的筛选配置信息。默认值为 false 不配置筛选信息。')

  test.todo('renderer 设置表格列的渲染类型')

  test.todo('show-tip 表格列单元格是否需要提示')

  test.todo('show-header-tip 表格列头是否需要提示')

  // columnslots
  test.todo('default 自定义显示内容模板')

  test.todo('edit 自定义可编辑组件模板')

  test.todo('filter 自定义筛选模板')

  test.todo('header 自定义表头内容的模板')

  // toolbarattrs
  test.todo('buttons 按钮列表')

  test.todo('id 唯一 ID 标识')

  test.todo('loading 是否加载中')

  test.todo('refresh 工具栏组件开启表格刷新功能。')

  test.todo('resizable 列宽拖动配置（需要设置 id）')

  test.todo(
    'setting 设置表格属性是否显示个性化面板，当设置表格的name属性时有效;设置工具栏属性是否显示个性化配置（需要设置 id）'
  )

  test.todo('full-screen 设置表格是否可以全屏，或者需要全屏的容器。;设置工具栏属性是否显示全屏按钮')

  test.todo('size 尺寸;该属性的可选值为 medium,small,mini')

  test.todo('before-open-full-screen 全屏前的拦截方法 Function():Boolean，返回 false 则阻止全屏，返回 true 则不阻止')

  test.todo(
    'before-close-full-screen 关闭全屏前的拦截方法 Function():Boolean，返回 false 则阻止关闭全屏，返回 true 则不阻止'
  )

  // toolbarslots
  test.todo('toolbar 工具栏插槽')

  test.todo('buttons 按钮列表')

  test.todo('tools 右侧工具列表')

  // toolbarevents
  test.todo('button-click 当工具栏的按钮被点击时会后触发该事件')

  test.todo('on-before-move 个性化面板拖拽前事件')
})
