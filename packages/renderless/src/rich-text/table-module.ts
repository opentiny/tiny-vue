import { random } from '../common/string'
import { isNull } from '../common/type'

function cellName() {
  return random().toString(36).slice(2)
}

function addMatcherTable({ _quill, oper }) {
  _quill.clipboard.addMatcher('TABLE', function (node, delta) {
    const id = cellName()

    oper.setTableId(id)

    return delta
  })
}

function addMatcherTr({ _quill, oper }) {
  _quill.clipboard.addMatcher('TR', function (node, delta) {
    const id = cellName()

    oper.setRowId(id)

    return delta
  })
}

function addMatcherTd({ _quill, oper, Delta }) {
  _quill.clipboard.addMatcher('TD', function (node, delta) {
    const tableId = oper.getTableId()
    const rowId = oper.getRowId()
    const cellId = cellName()

    if (delta.ops.length) {
      const lastOp = delta.ops[delta.ops.length - 1]

      if (typeof lastOp.insert === 'string' && !lastOp.insert.endsWith('\n')) {
        lastOp.insert += '\n'
      }
    } else {
      // td空内容也画出来
      delta.insert('\n')
    }

    const attributes = { td: tableId + '|' + rowId + '|' + cellId }

    if (node.rowSpan) {
      attributes.rowSpan = node.rowSpan
    }

    if (node.colSpan) {
      attributes.colSpan = node.colSpan
    }

    if (node.width) {
      attributes.width = node.width
    }

    if (node.height) {
      attributes.height = node.height
    }

    return delta.compose(new Delta().retain(delta.length(), attributes))
  })
}

function addMatcher3(_quill) {
  _quill.clipboard.addMatcher(3, function (node, delta) {
    if (['TABLE', 'TR'].includes(node.parentNode.tagName)) {
      return { ops: [] }
    } else {
      return delta
    }
  })
}

function addMatcherFont(_quill) {
  _quill.clipboard.addMatcher('FONT', function (node, delta) {
    if (node.innerText === '') {
      return { ops: [] }
    } else {
      return delta
    }
  })
}

function addMatcher({ qil: _quill, Delta }) {
  let tableId = cellName()
  let rowId = cellName()
  let oper = {
    getTableId() {
      return tableId
    },
    setTableId(id) {
      tableId = id
    },
    getRowId() {
      return rowId
    },
    setRowId(id) {
      rowId = id
    }
  }

  addMatcherTable({ _quill, oper })
  addMatcherTr({ _quill, oper })
  addMatcherTd({ _quill, oper, Delta })
  // 移除table/tr, tr/td间空白符
  addMatcher3(_quill)
  // word粘贴到IE里会出现几个空内容的font标签
  addMatcherFont(_quill)
}

let quill = Object.create(null)

function setQuill(q) {
  quill = q
}

function getQuill() {
  return quill
}

function getLeafFromQuill() {
  let q = getQuill()
  return q ? q.getLeaf(q.getSelection().index) : []
}

function provideTableTrick({ Parchment }) {
  class TableTrick {
    static findTd(what) {
      const leaf = getLeafFromQuill()
      let blot = leaf[0]

      while (!isNull(blot) && blot.statics.blotName !== what) {
        blot = blot.parent
      }

      // return TD or NULL
      return blot
    }

    static appendCol() {
      const td = TableTrick.findTd('td')

      if (td) {
        const table = td.parent.parent
        const tableId = table.domNode.getAttribute('table_id')

        td.parent.parent.children.forEach(function (tr) {
          const rowId = tr.domNode.getAttribute('row_id')
          const cellId = cellName()
          const tdNew = Parchment.create('td', tableId + '|' + rowId + '|' + cellId)

          tr.appendChild(tdNew)
        })
      }
    }

    static appendRow() {
      const td = TableTrick.findTd('td')

      if (td) {
        const colCount = td.parent.children.length
        const table = td.parent.parent
        const newRow = td.parent.clone()
        const tableId = table.domNode.getAttribute('table_id')
        const rowId = cellName()

        newRow.domNode.setAttribute('row_id', rowId)

        for (let i = colCount - 1; i >= 0; i--) {
          const cellId = cellName()
          const tdNew = Parchment.create('td', tableId + '|' + rowId + '|' + cellId)

          newRow.appendChild(tdNew)
        }

        table.appendChild(newRow)
      }
    }
  }

  return { TableTrick }
}

function createTable({ value, Container, Parchment, Scroll }) {
  let node = null
  const sizes = value.split('_')
  const rowCount = Number.parseInt(sizes[1])
  const colCount = Number.parseInt(sizes[2])
  const tableId = cellName()
  const table = Parchment.create('table', tableId)

  for (let ri = 0; ri < rowCount; ri++) {
    const rowId = cellName()
    const tr = Parchment.create('tr', rowId)

    table.appendChild(tr)

    for (let ci = 0; ci < colCount; ci++) {
      const cellId = cellName()

      value = tableId + '|' + rowId + '|' + cellId

      const td = Parchment.create('td', value)
      const p = Parchment.create('block')
      const br = Parchment.create('break')

      tr.appendChild(td)
      td.appendChild(p)
      p.appendChild(br)

      node = p
    }
  }

  const leaf = getLeafFromQuill()
  let blot = leaf[0]
  let topBranch = null

  while (!isNull(blot) && !(blot instanceof Container || blot instanceof Scroll)) {
    topBranch = blot
    blot = blot.parent
  }

  blot && blot.insertBefore(table, topBranch)

  return node
}

function provideTable({ Container, Parchment, Scroll, TableTrick, TableRow }) {
  // CONTAINER TABLE
  class Table extends Container {
    static create(value) {
      // special adding commands - belongs somewhere else out of constructor
      if (value === 'append-row') {
        return TableTrick.appendRow()
      } else if (value === 'append-col') {
        return TableTrick.appendCol()
      } else if (value.includes('newtable_')) {
        return createTable({ value, Container, Parchment, Scroll })
      } else {
        // normal table
        const tagName = 'table'
        const node = super.create(tagName)

        node.setAttribute('table_id', value)

        return node
      }
    }

    optimize() {
      super.optimize()

      const next = this.next

      if (
        !isNull(next) &&
        next.prev === this &&
        next.statics.blotName === this.statics.blotName &&
        next.domNode.tagName === this.domNode.tagName &&
        next.domNode.getAttribute('table_id') === this.domNode.getAttribute('table_id')
      ) {
        next.moveChildren(this)
        next.remove()
      }
    }
  }

  Table.blotName = 'table'
  Table.tagName = 'table'
  Table.scope = Parchment.Scope.BLOCK_BLOT
  Table.defaultChild = 'tr'
  Table.allowedChildren = [TableRow]

  return { Table }
}

function provideTableModule({ Container, Parchment, Module, Quill, Scroll, Delta, ContainBlot, TableRow, TableCell }) {
  const { TableTrick } = provideTableTrick({ Parchment })
  const { Table } = provideTable({
    Container,
    Parchment,
    Scroll,
    TableTrick,
    TableRow
  })

  class TableModule extends Module {
    constructor(qil, opt) {
      super(qil, opt)
      addMatcher({ qil, Delta })
      setQuill(qil)
    }

    static register() {
      Quill.register(ContainBlot, true)
      Quill.register(TableRow, true)
      Quill.register(Table, true)
      Quill.register(TableCell, true)
    }
  }

  return { TableModule }
}

function provideContainBlot({ Container, Parchment, Block, BlockEmbed }) {
  class ContainBlot extends Container {
    static create() {
      return super.create('contain')
    }

    static formats(domNode) {
      return domNode.tagName
    }

    insertBefore(blot, ref) {
      if (blot.statics.blotName === this.statics.blotName) {
        super.insertBefore(blot.children.head, ref)
      } else {
        super.insertBefore(blot, ref)
      }
    }

    formats() {
      // We don't inherit from FormatBlot
      return { [this.statics.blotName]: this.statics.formats(this.domNode) }
    }

    replace(target) {
      if (target.statics.blotName !== this.statics.blotName) {
        const item = Parchment.create(this.statics.defaultChild)

        target.moveChildren(item)
        this.appendChild(item)
      }

      if (isNull(target.parent)) return

      super.replace(target)
    }
  }

  ContainBlot.blotName = 'contain'
  ContainBlot.tagName = 'contain'
  ContainBlot.scope = Parchment.Scope.BLOCK_BLOT
  ContainBlot.defaultChild = 'block'
  ContainBlot.allowedChildren = [Block, BlockEmbed, Container]

  return { ContainBlot }
}

function provideTableRow({ Container, Parchment }) {
  // CONTAINER TR
  class TableRow extends Container {
    static create(value) {
      const node = super.create('tr')

      node.setAttribute('row_id', value)

      return node
    }

    optimize() {
      super.optimize()

      const next = this.next

      if (
        !isNull(next) &&
        next.prev === this &&
        next.statics.blotName === this.statics.blotName &&
        next.domNode.tagName === this.domNode.tagName &&
        next.domNode.getAttribute('row_id') === this.domNode.getAttribute('row_id')
      ) {
        next.moveChildren(this)
        next.remove()
      }
    }
  }

  TableRow.blotName = 'tr'
  TableRow.tagName = 'tr'
  TableRow.scope = Parchment.Scope.BLOCK_BLOT
  TableRow.defaultChild = 'td'

  return { TableRow }
}

function setAttrs({ node, value }) {
  const ids = value.split('|')

  node.setAttribute('table_id', ids[0])
  node.setAttribute('row_id', ids[1])
  node.setAttribute('cell_id', ids[2])

  return node
}

function provideTableCell({ Container, Parchment, Block, BlockEmbed, ContainBlot }) {
  // CONTAINER TD
  class TableCell extends ContainBlot {
    static create(value) {
      return setAttrs({ node: super.create('td'), value })
    }

    formatAt(index, length, name, value) {
      super.formatAt(index, length, name, value)
      const attrWhitelist = ['colSpan', 'rowSpan', 'width', 'height']
      attrWhitelist.includes(name) && this.domNode.setAttribute(name, value)
    }

    formats() {
      // We don't inherit from FormatBlot
      const domNode = this.domNode
      const blotName = this.statics.blotName
      const attr = (domNode, attr) => domNode.getAttribute(attr)

      return {
        [blotName]: `${attr(domNode, 'table_id')}|${attr(domNode, 'row_id')}|${attr(domNode, 'row_id')}`
      }
    }

    optimize() {
      super.optimize()
      // Add parent TR and TABLE when missing
      if (!isNull(this.parent) && this.parent.statics.blotName !== 'tr') {
        // we will mark td position, put in table and replace mark
        const mark = Parchment.create('block')

        this.parent.insertBefore(mark, this.next)

        const table = Parchment.create('table', this.domNode.getAttribute('table_id'))
        const tr = Parchment.create('tr', this.domNode.getAttribute('row_id'))

        table.appendChild(tr)
        tr.appendChild(this)
        table.replace(mark)
      }
      // merge same TD id
      if (
        !isNull(this.next) &&
        this.next.prev === this &&
        this.next.statics.blotName === this.statics.blotName &&
        this.next.domNode.tagName === this.domNode.tagName &&
        this.next.domNode.getAttribute('cell_id') === this.domNode.getAttribute('cell_id')
      ) {
        this.next.moveChildren(this)
        this.next.remove()
      }
    }
  }

  TableCell.blotName = 'td'
  TableCell.tagName = 'td'
  TableCell.scope = Parchment.Scope.BLOCK_BLOT
  TableCell.defaultChild = 'block'
  TableCell.allowedChildren = [Block, BlockEmbed, Container]

  return { TableCell }
}

function tableModule(Quill) {
  const Container = Quill.import('blots/container')
  const Scroll = Quill.import('blots/scroll')
  const Module = Quill.import('core/module')
  const Block = Quill.import('blots/block')
  const Delta = Quill.import('delta')
  const Parchment = Quill.import('parchment')
  const BlockEmbed = Quill.import('blots/block/embed')

  const { ContainBlot } = provideContainBlot({
    Container,
    Parchment,
    Block,
    BlockEmbed
  })
  const { TableRow } = provideTableRow({ Container, Parchment })
  const { TableCell } = provideTableCell({
    Container,
    Parchment,
    Block,
    BlockEmbed,
    ContainBlot
  })
  const params = {
    Container,
    Parchment,
    Module,
    Quill,
    Scroll,
    Delta,
    ContainBlot,
    TableRow,
    TableCell
  }
  const { TableModule } = provideTableModule(params)

  TableRow.allowedChildren = [TableCell]
  // 'contain' Must be lower, 'table' Must be higher
  Container.order = ['list', 'contain', 'td', 'tr', 'table']

  Quill.register('modules/tableModule', TableModule, true)
}

export default tableModule
