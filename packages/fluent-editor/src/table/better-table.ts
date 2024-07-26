import Quill from 'quill';
import {
  getEventComposedPath,
  insideTable,
  isNullOrUndefined,
  isPureIE
} from '../config/editor.utils';
import Header from './formats/header';
import List from './formats/list';
import {
  cellId,
  rowId,
  TableBody,
  TableCell,
  TableCellLine,
  TableCol,
  TableColGroup,
  TableContainer,
  TableRow,
  TableViewWrapper
} from './formats/table';
import TableColumnTool from './modules/table-column-tool';
import TableOperationMenu from './modules/table-operation-menu';
import TableScrollBar from './modules/table-scroll-bar';
import TableSelection from './modules/table-selection';
// import table node matchers
import {
  matchHeader,
  matchInline,
  matchList,
  matchMentionLink,
  matchTable,
  matchTableCell,
  matchTableHeader,
  matchTableRow,
  matchWordShapeImage
} from './utils/node-matchers';

const Block = Quill.imports['blots/block'];
const Delta = Quill.imports['delta'];
const Module = Quill.imports['core/module'];

// @dynamic
class BetterTable extends Module {
  static keyboardBindings: any;
  isComposition: boolean;
  quill: any;
  table: any;
  modulesContainer: any;
  tableSelection: any;
  subscriber: any;
  tableOperationMenu: any;
  columnTool: TableColumnTool;
  tableScrollBar: TableScrollBar;

  static register() {
    Quill.register(TableCol, true);
    Quill.register(TableColGroup, true);
    Quill.register(TableCellLine, true);
    Quill.register(TableCell, true);
    Quill.register(TableRow, true);
    Quill.register(TableBody, true);
    Quill.register(TableContainer, true);
    Quill.register(TableViewWrapper, true);
    // register customized Header, overwriting quill built-in Header
    Quill.register('formats/header', Header, true);
    // register customized List, overwriting quill built-in Header
    Quill.register('formats/list', List, true);
  }

  constructor(quill, options) {
    super(quill, options);

    // handle click on quill-better-table
    this.isComposition = false;
    this.quill.root.addEventListener('mousedown', event => this.handleMouseDown(event, quill), false);
    this.quill.root.addEventListener('compositionend', () => this.handleCompositionend(quill), false);
    this.quill.root.addEventListener('compositionstart', () => this.handleCompositionstart(quill), false);
    this.quill.root.addEventListener('keypress', event => this.handleKeyDown(event, quill), false);

    // handle right click on quill-better-table
    this.quill.root.addEventListener(
      'contextmenu',
      evt => {
        if (!this.table) { return true; }
        evt.preventDefault();

        // bugfix: evt.path is undefined in Safari, FF, Micro Edge
        const path = getEventComposedPath(evt);
        if (!path || path.length <= 0) { return; }

        const tableNode = path.filter(node => {
          return (
            node.tagName && node.tagName.toUpperCase() === 'TABLE' && node.classList.contains('quill-better-table')
          );
        })[0];

        const rowNode = path.filter(node => {
          return node.tagName && node.tagName.toUpperCase() === 'TR' && node.getAttribute('data-row');
        })[0];

        const cellNode = path.filter(node => {
          return node.tagName && node.tagName.toUpperCase() === 'TD' && node.getAttribute('data-row');
        })[0];

        const isTargetCellSelected = this.tableSelection.selectedTds
          .map(tableCell => tableCell.domNode)
          .includes(cellNode);

        if (this.tableSelection.selectedTds.length <= 0 || !isTargetCellSelected) {
          this.tableSelection.setSelection(cellNode.getBoundingClientRect(), cellNode.getBoundingClientRect());
        }

        if (this.tableOperationMenu) { this.tableOperationMenu = this.tableOperationMenu.destroy(); }

        if (tableNode) {
          this.tableOperationMenu = new TableOperationMenu(
            {
              table: tableNode,
              row: rowNode,
              cell: cellNode,
              left: evt.x + 15,
              top: evt.y
            },
            quill,
            options.operationMenu
          );
        }
      },
      false
    );

    // add keyboard binding：Backspace
    // prevent user hits backspace to delete table cell
    quill.keyboard.addBinding({ key: 'Backspace' }, {}, (range, context) => {
      if (range.index === 0 || this.quill.getLength() <= 1) { return true; }
      if (context.offset === 0 && range.length === 0) {
        const [prev] = this.quill.getLine(range.index - 1);
        const [line] = this.quill.getLine(range.index);
        if (!isNullOrUndefined(prev)) {
          if (prev.statics.blotName === 'table-cell-line' && line.statics.blotName !== 'table-cell-line') {
            const betterTableModule = this.quill.getModule('better-table');
            let tableBlot;
            try {
              tableBlot = prev.parent.parent.parent.parent;
            } catch (e) { }
            if (tableBlot && tableBlot.domNode !== betterTableModule.table) {
              betterTableModule.hideTableTools();
              tableBlot.remove();
              this.quill.update(Quill.sources.USER);
            }
            return false;
          }
        }
      }
      return true;
    });
    // since only one matched bindings callback will execute.
    // expected my binding callback execute first
    // I changed the order of binding callbacks
    const thisBinding = quill.keyboard.bindings['Backspace'].pop();
    quill.keyboard.bindings['Backspace'].splice(1, 0, thisBinding);

    // add Matchers to match and render quill-better-table for initialization
    // or pasting
    quill.clipboard.addMatcher('td', matchTableCell);
    quill.clipboard.addMatcher('th', matchTableHeader);
    quill.clipboard.addMatcher('table', matchTable);
    quill.clipboard.addMatcher('h1, h2, h3, h4, h5, h6', matchHeader);
    quill.clipboard.addMatcher('ol, ul', matchList);
    quill.clipboard.addMatcher('span', matchMentionLink);
    quill.clipboard.addMatcher('v:imageData', matchWordShapeImage);
    quill.clipboard.addMatcher(Node.ELEMENT_NODE, matchInline);

    // remove matcher for tr tag
    quill.clipboard.matchers = quill.clipboard.matchers.filter(matcher => {
      return matcher[0] !== 'tr';
    });

    // fix: 处理空<tr>标签被忽略的情况
    quill.clipboard.addMatcher('tr', matchTableRow);

    this.quill.on('editor-change', () => {
      const tableContainer = Quill.find(this.table);
      if (!tableContainer) { this.hideTableTools(); }
    });

    this.quill.on(Quill.events.SELECTION_CHANGE, (range, oldRange, source) => {
      if (!range) { return; }
      const selectionStart = range.index;
      const selectionEnd = range.index + range.length;
      if (source === Quill.sources.USER) {
        const tables = this.quill.root.getElementsByTagName('table');
        if (tables && tables.length) {
          [].forEach.call(tables, table => {
            const tableContainer = Quill.find(table);
            if (tableContainer) {
              const tableStart = tableContainer.offset(this.quill.scroll);
              const tableEnd = tableStart + tableContainer.length();
              // @ts-ignore
              const classes = Array.from(table.parentNode.classList);

              if (selectionStart <= tableStart && tableEnd <= selectionEnd) {
                // @ts-ignore
                table.parentNode.classList.add('quill-better-table-selected');
              } else if (classes.indexOf('quill-better-table-selected') >= 0) {
                // @ts-ignore
                table.parentNode.classList.remove('quill-better-table-selected');
              }
            }
          });
        }
      }
    });
  }

  handleMouseDown(evt, quill) {
    // bugfix: evt.path is undefined in Safari, FF, Micro Edge
    const path = getEventComposedPath(evt);
    if (!path || path.length <= 0) { return; }
    const tableNode = path.filter(node => {
      return node.tagName && node.tagName.toUpperCase() === 'TABLE' && node.classList.contains('quill-better-table');
    })[0];
    if (tableNode) {
      tableNode.parentNode.classList.remove('quill-better-table-selected');
      // current table clicked
      if (this.table === tableNode) { return; }
      // other table clicked
      if (this.table) { this.hideTableTools(); }
      if (!quill.options.readOnly) {// not show table tool in readonly mode
        this.showTableTools(tableNode, quill);
      }
    } else if (this.table) {
      // other clicked
      this.hideTableTools();
    }
  }

  handleKeyDown(evt, quill) {
    const key = evt.key;
    const range = quill.getSelection();
    if (this.isComposition || !range) { return; }
    const [col] = quill.getLine(range.index);
    const [td] = quill.getLine(range.index - 1);
    if (key && key !== 'Delete' && col && range) {
      if (col.statics.blotName === 'table-col') {
        const betterTableModule = this.quill.getModule('better-table');
        betterTableModule.hideTableTools();
        quill.insertText(range.index - 1, '\n', Quill.sources.USER);
        quill.setSelection(range.index, 0, Quill.sources.USER);
      } else if (td && td.statics.blotName === 'table-cell-line' && col.statics.blotName === 'block') {
        quill.insertText(range.index, '\n', Quill.sources.USER);
        quill.setSelection(range.index, 0, Quill.sources.USER);
      }
    }
  }

  handleCompositionstart(quill) {
    this.isComposition = true;
    const range = quill.getSelection();
    const [col] = quill.getLine(range.index);
    const [td] = quill.getLine(range.index - 1);
    if (col && range) {
      if (col.statics.blotName === 'table-col') {
        const betterTableModule = this.quill.getModule('better-table');
        betterTableModule.hideTableTools();
        quill.insertText(range.index - 1, '\n\t', Quill.sources.USER);
        quill.setSelection(range.index, 0, Quill.sources.USER);
      } else if (td && td.statics.blotName === 'table-cell-line' && col.statics.blotName === 'block') {
        quill.setSelection(range.index, 0, Quill.sources.USER);
      }
    }
  }

  handleCompositionend(quill) {
    // fix: 解决在空行行首用中文输入法输入字符，然后按退格导致插入多余空行的问题
    const range = quill.getSelection();
    const [line] = quill.getLine(range.index);
    const domNode = line.domNode;
    const isInParagraph = domNode.nodeName === 'P';
    const isInTableCell = line.statics.blotName === 'table-cell-line';
    if ((isInParagraph || isInTableCell) &&
      domNode.childNodes.length > 1 &&
      domNode.childNodes[0].nodeName === 'BR') {
      domNode.childNodes[0].remove();
    }

    if (isPureIE && line instanceof Block) {
      // 设置光标位置防止跳入下一行
      quill.setSelection(range.index, 0, Quill.sources.SILENT);
    }

    this.isComposition = false;
  }

  getTable(range = this.quill.getSelection()) {
    if (isNullOrUndefined(range)) { return [null, null, null, -1]; }
    const [cellLine, offset] = this.quill.getLine(range.index);
    if (isNullOrUndefined(cellLine) || cellLine.statics.blotName !== TableCellLine.blotName) {
      return [null, null, null, -1];
    }
    const cell = cellLine.tableCell();
    const row = cell.row();
    const table = row.table();
    return [table, row, cell, offset];
  }

  insertTable(rows, columns) {
    const range = this.quill.getSelection(true);
    const isInsideTable = insideTable(range, this.quill);
    if (isNullOrUndefined(range) || isInsideTable) { return; }
    // let currentBlot = this.quill.getLeaf(range.index)[0]
    // let nextBlot = this.quill.getLeaf(range.index + 1)[0]
    let delta = new Delta().retain(range.index);

    delta.insert('\n');
    // insert table column
    delta = new Array(columns).fill('\n').reduce((memo, text) => {
      memo.insert(text, { 'table-col': true });
      return memo;
    }, delta);
    // insert table cell line with empty line
    delta = new Array(rows).fill(0).reduce(memo => {
      const tableRowId = rowId();
      return new Array(columns).fill('\n').reduce((op, text) => {
        op.insert(text, { 'table-cell-line': { row: tableRowId, cell: cellId() } });
        return op;
      }, memo);
    }, delta);

    const [col] = this.quill.getLine(range.index);
    if (col && col.statics.blotName === 'table-col') {
      delta.insert('\n');
    }

    this.quill.updateContents(delta, Quill.sources.USER);

    // feature: 新增表格后首格自动激活编辑状态，initEvent兼容IE
    const [cellLine] = this.quill.getLine(range.index + columns + 1);
    if (cellLine) {
      const cell = cellLine.tableCell();
      const td = cell.domNode;
      const mousedownEvent = document.createEvent('MouseEvent');
      const mouseupEvent = document.createEvent('MouseEvent');
      const keyEvent = document.createEvent('Event');
      mousedownEvent.initEvent('mousedown', true, false);
      mouseupEvent.initEvent('mouseup', true, false);
      keyEvent.initEvent('keypress', true, false);
      td.dispatchEvent(mousedownEvent);
      td.dispatchEvent(mouseupEvent);
      td.dispatchEvent(keyEvent);
      this.tableSelection.endTd = td;
    }
  }

  showTableTools(table, quill) {
    this.table = table;
    this.modulesContainer = document.createElement('div');
    this.modulesContainer.classList.add('qlbt-modules-container');
    // fix:表格容器插入时获取ql-tooltip容器，用insertBefore插入到它前面，避免遮挡链接浮窗
    const linkContainer = this.quill.root.parentNode.querySelector('.ql-tooltip ');
    this.quill.root.parentNode.insertBefore(this.modulesContainer, linkContainer);
    this.tableSelection = new TableSelection(table, quill, this.modulesContainer);
    this.columnTool = new TableColumnTool(table, quill, this.modulesContainer);
    this.tableScrollBar = new TableScrollBar(table, quill, this.modulesContainer);
    let timeoutID
    this.subscriber = () => { 
      clearTimeout(timeoutID)
      timeoutID = setTimeout(this.hideTableTools,300)
     }
    window.addEventListener('resize', this.subscriber, false)
  }

  hideTableTools() {
    if (this.columnTool) { this.columnTool.destroy(); }
    if (this.tableSelection) { this.tableSelection.destroy(); }
    if (this.tableOperationMenu) { this.tableOperationMenu.destroy(); }
    if (this.tableScrollBar) { this.tableScrollBar.destroy(); }
    if (this.modulesContainer) { this.modulesContainer.remove(); }
    this.columnTool = null;
    this.tableSelection = null;
    this.tableOperationMenu = null;
    this.tableScrollBar = null;
    this.modulesContainer = null;
    this.table = null;
    if (this.subscriber) {
      window.removeEventListener('resize', this.subscriber)
    }
  }
}

BetterTable.keyboardBindings = {
  'line delete': {
    key: 'Delete',
    shiftKey: null,
    format: { 'table-col': false, 'table-cell-line': false },
    collapsed: true,
    offset: 0,
    handler(range, context) {
      // fix: 当光标在编辑器最前且之后为表格时按delete不执行操作
      if (range.index === 0 && context.line.next && context.line.next.statics.blotName === 'table-view') {
        const [p] = this.quill.getLine(range.index - 1);
        const [col] = this.quill.getLine(range.index + 1);
        if (p && p.statics.blotName === 'block' && col && col.statics.blotName === 'table-col') {
          return false;
        }
      }
      return true;
    }
  },
  'table-col enter': {
    key: 'Enter',
    shiftKey: null,
    format: ['table-col'],
    collapsed: true,
    offset: 0,
    handler(range, context) {
      if (context.offset === 0 && range.length === 0) {
        const [col] = this.quill.getLine(range.index);
        if (col && col.statics.blotName === 'table-col') {
          const betterTableModule = this.quill.getModule('better-table');
          betterTableModule.hideTableTools();
          this.quill.insertText(range.index - 1, '\n', Quill.sources.USER);
          this.quill.setSelection(range.index, 0, Quill.sources.USER);
        }
      }
    }
  },
  'table-col delete': {
    key: 'Delete',
    shiftKey: null,
    format: ['table-col'],
    collapsed: true,
    offset: 0,
    handler(range, context) {
      if (context.offset === 0 && range.length === 0) {
        const [col] = this.quill.getLine(range.index);
        if (col && col.statics.blotName === 'table-col') {
          const betterTableModule = this.quill.getModule('better-table');
          let tableBlot;
          try {
            tableBlot = col.parent.parent.parent;
          } catch (e) { }
          if (tableBlot && tableBlot.domNode !== betterTableModule.table) {
            betterTableModule.hideTableTools();
            tableBlot.remove();
            this.quill.update(Quill.sources.USER);
          }
        }
      }
    }
  },
  'table-col backspace': {
    key: 'Backspace',
    shiftKey: null,
    format: ['table-col'],
    collapsed: true,
    offset: 0,
    handler() { }
  },
  'table-cell-line backspace': {
    key: 'Backspace',
    format: ['table-cell-line'],
    collapsed: true,
    offset: 0,
    handler(range) {
      const [line] = this.quill.getLine(range.index);
      // 移除原有对非table-cell-line的阻止条件，使table-cell-line前的list等内容可以被删除
      if (!line.prev) {
        return false;
      }
      return true;
    }
  },
  'table-cell-line delete': {
    key: 'Delete',
    format: ['table-cell-line'],
    handler(range, context) {
      // 获取table-cell-line的索引和长度
      const [line] = this.quill.getLine(range.index);
      const index = this.quill.getIndex(line);
      const length = line.length();
      if (!line.next && // 当无下一个元素且满足以下情况阻止删除操作
        ((!line.prev && length === 1) || // 单元格内只有一个table-cell-line且无内容
          (range.index !== index && range.index + 1 >= index + length))) {// 光标在有内容的table-cell-line最后
        return false;
      }
      return true;
    }
  },
  'table-cell-line enter': {
    key: 'Enter',
    shiftKey: null,
    format: ['table-cell-line'],
    handler(range, context) {
      // fix：通过window的光标选区当前指向判断，如果为HTMLElement且为表格容器则定位至下一行
      const node = window.getSelection().anchorNode;
      if (node instanceof HTMLDivElement && node.classList.contains('quill-better-table-wrapper')) {
        this.quill.setSelection(range.index + 1, 0, Quill.sources.USER);
        this.quill.focus();
        return;
      }
      // bugfix: a unexpected new line inserted when user compositionend with hitting Enter
      if (this.quill.selection && this.quill.selection.composing) { return; }
      const Scope = Quill.imports.parchment.Scope;
      if (range.length > 0) {
        this.quill.scroll.deleteAt(range.index, range.length); // So we do not trigger text-change
      }
      const lineFormats = Object.keys(context.format).reduce((formats, format) => {
        if (this.quill.scroll.query(format, Scope.BLOCK) && !Array.isArray(context.format[format])) {
          formats[format] = context.format[format];
        }
        return formats;
      }, {});
      // insert new cellLine with lineFormats
      this.quill.insertText(range.index, '\n', lineFormats['table-cell-line'], Quill.sources.USER);
      // Earlier scroll.deleteAt might have messed up our selection,
      // so insertText's built in selection preservation is not reliable
      this.quill.setSelection(range.index + 1, Quill.sources.SILENT);
      this.quill.focus();
      Object.keys(context.format).forEach(name => {
        if (!isNullOrUndefined(lineFormats[name])) { return; }
        if (Array.isArray(context.format[name])) { return; }
        if (name === 'link') { return; }
        this.quill.format(name, context.format[name], Quill.sources.USER);
      });
    }
  }
};

export default BetterTable;
