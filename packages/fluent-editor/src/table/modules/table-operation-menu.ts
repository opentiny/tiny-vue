import Quill from 'quill';
import { LANG_CONF } from '../../config/editor.config'
import { elementRemove, arrayFrom, css, getRelativeRect } from '../utils';
import {
  OPERATE_MENU_ITEM_CLASS, 
  OPERATE_MENU_COLORPICKER_ITEM_CLASS,
  OPERATE_MENU_DIVIDING_CLASS,
  OPERATE_MENU_SUBTITLE_CLASS,
  OPERATE_MENU_COLORPICKER_CLASS,
} from '../table-config'

import {
  ERROR_LIMIT,
  MENU_ITEM_HEIGHT,
  MENU_MIN_HEIGHT,
  MENU_WIDTH
} from '../table-config';

const MENU_ITEMS_DEFAULT = {
  copyCells: {
    text: 'Copy Cells',
    handler() {
      this.onCopy('copy');
    }
  },
  copyTable: {
    text: 'Copy Table',
    handler() {
      this.tableColumnTool.destroy();
      this.tableScrollBar.destroy();
      this.tableSelection.clearSelection();
      const dom = this.table.cloneNode(true);
      const trArr = dom.querySelectorAll('tr[data-row]');
      trArr.forEach(tr => tr.removeAttribute('data-row'));
      dom.style.position = 'fixed';
      dom.style.top = 0;
      dom.style.left = 0;
      dom.style.clip = 'rect(0,0,0,0)';
      document.body.appendChild(dom);
      this.setCopyRange(dom);
      document.execCommand('copy');
      dom.remove();
    }
  },
  cutCells: {
    text: 'Cut Cells',
    handler() {
      this.onCopy('cut');
    }
  },
  emptyCells: {
    text: 'Empty Cells',
    handler() {
      const tableContainer = Quill.find(this.table);
      const { selectedTds } = this.tableSelection;
      tableContainer.emptyCells(selectedTds);
    }
  },
  insertColumnRight: {
    text: 'Insert Column After',
    handler() {
      const tableContainer = Quill.find(this.table);
      const colIndex = getColToolCellIndexByBoundary(
        this.columnToolCells,
        this.boundary,
        (cellRect, boundary) => {
          return Math.abs(cellRect.x + cellRect.width - boundary.x1) <= ERROR_LIMIT;
        },
        this.quill.root.parentNode
      );

      const newColumn = tableContainer.insertColumn(this.boundary, colIndex, true, this.quill.root.parentNode);

      this.tableColumnTool.updateColToolCells();
      this.quill.update(Quill.sources.USER);
      // fix: the scroll bar will go to the top when insert row/column to the table
      // this.quill.setSelection(
      //   this.quill.getIndex(newColumn[0]),
      //   0,
      //   Quill.sources.SILENT
      // )
      this.tableSelection.setSelection(
        newColumn[0].domNode.getBoundingClientRect(),
        newColumn[0].domNode.getBoundingClientRect()
      );

      setTimeout(() => this.tableScrollBar.updateScrollBar());
    }
  },

  insertColumnLeft: {
    text: 'Insert Column Before',
    handler() {
      const tableContainer = Quill.find(this.table);
      const colIndex = getColToolCellIndexByBoundary(
        this.columnToolCells,
        this.boundary,
        (cellRect, boundary) => {
          return Math.abs(cellRect.x - boundary.x) <= ERROR_LIMIT;
        },
        this.quill.root.parentNode
      );

      const newColumn = tableContainer.insertColumn(this.boundary, colIndex, false, this.quill.root.parentNode);

      this.tableColumnTool.updateColToolCells();
      this.quill.update(Quill.sources.USER);
      // this.quill.setSelection(
      //   this.quill.getIndex(newColumn[0]),
      //   0,
      //   Quill.sources.SILENT
      // )
      this.tableSelection.setSelection(
        newColumn[0].domNode.getBoundingClientRect(),
        newColumn[0].domNode.getBoundingClientRect()
      );

      setTimeout(() => this.tableScrollBar.updateScrollBar());
    }
  },

  insertRowUp: {
    text: 'Insert Row Above',
    handler() {
      const tableContainer = Quill.find(this.table);
      const affectedCells = tableContainer.insertRow(this.boundary, false, this.quill.root.parentNode);

      this.tableColumnTool.updateRowToolCells();
      this.quill.update(Quill.sources.USER);
      // this.quill.setSelection(
      //   this.quill.getIndex(affectedCells[0]),
      //   0,
      //   Quill.sources.SILENT
      // )
      this.tableSelection.setSelection(
        affectedCells[0].domNode.getBoundingClientRect(),
        affectedCells[0].domNode.getBoundingClientRect()
      );

      setTimeout(() => this.tableScrollBar.resetTableHeight(this.table));
    }
  },

  insertRowDown: {
    text: 'Insert Row Below',
    handler() {
      const tableContainer = Quill.find(this.table);
      const affectedCells = tableContainer.insertRow(this.boundary, true, this.quill.root.parentNode);

      this.tableColumnTool.updateRowToolCells();
      this.quill.update(Quill.sources.USER);
      // this.quill.setSelection(
      //   this.quill.getIndex(affectedCells[0]),
      //   0,
      //   Quill.sources.SILENT
      // )
      this.tableSelection.setSelection(
        affectedCells[0].domNode.getBoundingClientRect(),
        affectedCells[0].domNode.getBoundingClientRect()
      );

      setTimeout(() => this.tableScrollBar.resetTableHeight(this.table));
    }
  },

  mergeCells: {
    text: 'Merge Cells',
    handler() {
      const tableContainer = Quill.find(this.table);
      // compute merged Cell rowspan, equal to length of selected rows
      const rowspan = tableContainer.rows().reduce((sum, row) => {
        const rowRect = getRelativeRect(row.domNode.getBoundingClientRect(), this.quill.root.parentNode);
        if (
          rowRect.y > this.boundary.y - ERROR_LIMIT &&
          rowRect.y + rowRect.height < this.boundary.y + this.boundary.height + ERROR_LIMIT
        ) {
          sum += 1;
        }
        return sum;
      }, 0);

      // compute merged cell colspan, equal to length of selected cols
      const colspan = this.columnToolCells.reduce((sum, cell) => {
        const cellRect = getRelativeRect(cell.getBoundingClientRect(), this.quill.root.parentNode);
        if (
          cellRect.x > this.boundary.x - ERROR_LIMIT &&
          cellRect.x + cellRect.width < this.boundary.x + this.boundary.width + ERROR_LIMIT
        ) {
          sum += 1;
        }
        return sum;
      }, 0);

      const mergedCell = tableContainer.mergeCells(
        this.boundary,
        this.selectedTds,
        rowspan,
        colspan,
        this.quill.root.parentNode
      );
      this.quill.update(Quill.sources.USER);
      this.tableSelection.setSelection(
        mergedCell.domNode.getBoundingClientRect(),
        mergedCell.domNode.getBoundingClientRect()
      );
    }
  },

  unmergeCells: {
    text: 'Split Cells',
    handler() {
      const tableContainer = Quill.find(this.table);
      tableContainer.unmergeCells(this.selectedTds, this.quill.root.parentNode);
      this.quill.update(Quill.sources.USER);
      this.tableSelection.clearSelection();
    }
  },

  deleteColumn: {
    text: 'Delete Columns',
    handler() {
      const tableContainer = Quill.find(this.table);
      const colIndexes = getColToolCellIndexesByBoundary(
        this.columnToolCells,
        this.boundary,
        (cellRect, boundary) => {
          return cellRect.x + ERROR_LIMIT > boundary.x && cellRect.x + cellRect.width - ERROR_LIMIT < boundary.x1;
        },
        this.quill.root.parentNode
      );

      const isDeleteTable = tableContainer.deleteColumns(this.boundary, colIndexes, this.quill.root.parentNode);
      if (!isDeleteTable) {
        this.tableColumnTool.updateColToolCells();
        this.quill.update(Quill.sources.USER);
        this.tableSelection.clearSelection();
      }

      setTimeout(() => this.tableScrollBar.updateScrollBar());
    }
  },

  deleteRow: {
    text: 'Delete Rows',
    handler() {
      const tableContainer = Quill.find(this.table);
      const isDeleteTable = tableContainer.deleteRow(this.boundary, this.quill.root.parentNode);
      if (!isDeleteTable) {
        this.tableColumnTool.updateRowToolCells();
        this.quill.update(Quill.sources.USER);
        this.tableSelection.clearSelection();
      }
    }
  },

  deleteTable: {
    text: 'Remove Table',
    handler() {
      const betterTableModule = this.quill.getModule('better-table');
      const tableContainer = Quill.find(this.table);
      betterTableModule.hideTableTools();
      tableContainer.remove();
      this.quill.update(Quill.sources.USER);
      // fix: 右键菜单删除表格后编辑器失焦
      this.quill.focus();
    }
  }
};
const DEFAULT_CELL_COLORS = ['white', 'red', 'yellow', 'blue'];
const NODE_EVENT_MAP = new WeakMap();
const MENU_MIN_HEIHGT = 150;
let DEFAULT_COLOR_SUBTITLE = LANG_CONF['subTitleBgColor'];
export default class TableOperationMenu {
  tableSelection: any;
  table: any;
  quill: any;
  options: any;
  menuItems: any;
  tableColumnTool: any;
  tableScrollBar: any;
  boundary: any;
  selectedTds: any;
  destroyHandler: any;
  columnToolCells: any;
  colorSubTitle: any;
  cellColors: any;
  domNode: any;

  constructor(params, quill, options) {
    const betterTableModule = quill.getModule('better-table');
    this.tableSelection = betterTableModule.tableSelection;
    this.table = params.table;
    this.quill = quill;
    this.options = options
    this.menuItems = { ...MENU_ITEMS_DEFAULT, ...options.items};
    this.tableColumnTool = betterTableModule.columnTool;
    //this.tableRowTool = betterTableModule.rowTool
    this.tableScrollBar = betterTableModule.tableScrollBar;
    this.boundary = this.tableSelection.boundary;
    this.selectedTds = this.tableSelection.selectedTds;
    this.destroyHandler = this.destroy.bind(this);
    this.columnToolCells = this.tableColumnTool.colToolCells();
    this.colorSubTitle =
      options.color && options.color.text
        ? options.color.text
        : DEFAULT_COLOR_SUBTITLE
    this.cellColors =
      options.color && options.color.colors
        ? options.color.colors
        : DEFAULT_CELL_COLORS

    this.menuInitial(params);
    this.mount();
    document.addEventListener('click', this.destroyHandler, false);
  }

  mount() {
    this.quill.root.parentNode.appendChild(this.domNode);
  }

  destroy() {
    const menuItems = arrayFrom(
      this.domNode.querySelectorAll('.' + OPERATE_MENU_ITEM_CLASS)
    )
    const colorPickerItems = arrayFrom(
      this.domNode.querySelectorAll('.' + OPERATE_MENU_COLORPICKER_ITEM_CLASS)
    )
    const nodes = menuItems.concat(colorPickerItems)

    nodes.forEach((node) => {
      if (NODE_EVENT_MAP.has(node)) {
        const unregister = NODE_EVENT_MAP.get(node)

        if (unregister && typeof unregister === 'function') {
          unregister()
        }
      }
    })

    elementRemove(this.domNode)
    document.removeEventListener('mousedown', this.destroyHandler, false)

    return null
  }

  menuInitial({ cell, left, top }) {
    const rowspan = cell.getAttribute('rowspan');
    const colspan = cell.getAttribute('colspan');
    const winHeight = window.innerHeight || Math.max(document.documentElement.clientHeight, document.body.clientHeight);
    const num = Object.keys(this.menuItems) || [];
    const menuHeight = MENU_ITEM_HEIGHT * num.length || MENU_MIN_HEIGHT;
    const transformOffset = checkAndGetViewPointChange(this.quill.root.parentNode, left, top);
    const leftPos = left - transformOffset.offsetX;
    const topPos = top - transformOffset.offsetY;
    const cssContent = {
      left: `${leftPos}px`,
      top: `${topPos}px`,
      'min-height': `${MENU_MIN_HEIGHT}px`,
      width: `${MENU_WIDTH}px`,
    };

    if (menuHeight + top > winHeight && menuHeight < winHeight) {
      delete cssContent.top;
      cssContent['bottom'] = '10px';
    }

    this.domNode = document.createElement('div');
    this.domNode.classList.add('qlbt-operation-menu');
    css(this.domNode, cssContent);

    for (const name in this.menuItems) {
      if (this.menuItems[name]) {
        const item = { ...MENU_ITEMS_DEFAULT[name], ...this.menuItems[name]};
        const dom = this.menuItemCreator(item);
        if (
          (name === 'mergeCells' && this.tableSelection.selectedTds.length === 1) ||
          (name === 'unmergeCells' && rowspan === 1 && colspan === 1)
        ) {
          dom.classList.add('qlbt-operation-menu-disabled');
        } else {
          dom.addEventListener('mouseup', item.handler.bind(this), false);
        }
        this.domNode.appendChild(dom);
      }
    }

    // if colors option is false, disabled bg color
    if (this.options.color && this.options.color !== false) {
      this.domNode.appendChild(dividingCreator())
      this.domNode.appendChild(subTitleCreator(this.colorSubTitle))
      this.domNode.appendChild(this.colorsItemCreator(this.cellColors))
    }

    // create dividing line
    function dividingCreator() {
      const dividing = document.createElement('div')
      dividing.classList.add(OPERATE_MENU_DIVIDING_CLASS)
      return dividing
    }

    // create subtitle for menu
    function subTitleCreator(title) {
      const subTitle = document.createElement('div')
      subTitle.classList.add(OPERATE_MENU_SUBTITLE_CLASS)
      subTitle.innerText = title
      return subTitle
    }
  }

  colorsItemCreator(colors) {
    const self = this
    const node = document.createElement('div')
    node.classList.add(OPERATE_MENU_COLORPICKER_CLASS)

    colors.forEach((color) => {
      const colorBox = colorBoxCreator(color)
      node.appendChild(colorBox)
    })

    function colorBoxCreator(color) {
      const box = document.createElement('div')
      box.classList.add(OPERATE_MENU_COLORPICKER_ITEM_CLASS)
      box.setAttribute('data-color', color)
      box.style.backgroundColor = color

      const clickHandler = function(){
        const selectedTds = self.tableSelection.selectedTds
        if (selectedTds && selectedTds.length > 0) {
          selectedTds.forEach((tableCell) => {
            tableCell.domNode.children[0].setAttribute('data-parent-bg',color)
            tableCell.format('cell-bg', color)
          })
        }
      }

      box.addEventListener('click', clickHandler, false)

      NODE_EVENT_MAP.set(box, () => {
        box.removeEventListener('click', clickHandler, false)
      })

      return box
    }

    return node
  }

  menuItemCreator({ text }) {
    const node = document.createElement('div');
    node.classList.add('qlbt-operation-menu-item');
    node.innerText = text;
    // node.addEventListener('click', handler.bind(this), false)
    return node;
  }

  onCopy(operation) {
    const { selectedTds } = this.tableSelection;
    const virtualTable = this.createVirtualTable(selectedTds, operation);
    document.body.appendChild(virtualTable);
    this.setCopyRange(virtualTable);
    this.tableSelection.preSelectedTable = virtualTable;
    this.tableSelection.preSelectedTds = selectedTds;
    document.execCommand('copy');
    virtualTable.remove();
    if (operation === 'cut') {
      const tableContainer = Quill.find(this.table);
      tableContainer.emptyCells(selectedTds);
    }
  }

  createVirtualTable(selectedTds, operation) {
    const virtualTable: any = document.createElement('table');
    virtualTable.style.position = 'fixed';
    virtualTable.style.top = 0;
    virtualTable.style.left = 0;
    virtualTable.style.clip = 'rect(0,0,0,0)';
    let preParentSign = '';
    let virtualTr = null;
    selectedTds.forEach(selectedCell => {
      const { domNode, parent } = selectedCell;
      const currentParentSign = parent.domNode.getAttribute('data-row');
      const rowspan = domNode.firstChild.dataset.rowspan;
      const colspan = domNode.firstChild.dataset.colspan;
      const row = domNode.firstChild.dataset.row;
      const cell = domNode.firstChild.dataset.cell;

      selectedCell.dataCell = cell;
      selectedCell.dataRow = row;
      selectedCell.dataColSpan = colspan;
      selectedCell.dataRowSpan = rowspan;

      if (currentParentSign !== preParentSign) {
        if (preParentSign !== '') {
          virtualTable.appendChild(virtualTr);
        }
        virtualTr = document.createElement('tr');
        preParentSign = currentParentSign;
      }

      const domNodeWidth = domNode.offsetWidth;
      const cloneNode = domNode.cloneNode(true);
      cloneNode.setAttribute('width', domNodeWidth);

      virtualTr.appendChild(cloneNode);
    });
    virtualTable.appendChild(virtualTr);
    return virtualTable;
  }

  setCopyRange(selectedNodes) {
    const range = document.createRange();
    const windowSelectionRange = window.getSelection();
    range.selectNodeContents(selectedNodes);
    windowSelectionRange.removeAllRanges();
    windowSelectionRange.addRange(range);
  }

  groupTableCell(selectedTds) {
    const rowGroup = [];
    let dataRow = '';
    let preDataRow = '';
    let index = 0;
    selectedTds.forEach(tableCell => {
      dataRow = tableCell.parent.domNode.getAttribute('data-row');

      if (dataRow !== preDataRow) {
        if (preDataRow !== '') {
          index++;
        }
        rowGroup[index] = [];
        preDataRow = dataRow;
      }

      rowGroup[index].push(tableCell);
    });
    return rowGroup;
  }
}

function getColToolCellIndexByBoundary(cells, boundary, conditionFn, container) {
  return cells.reduce((findIndex, cell) => {
    const cellRect = getRelativeRect(cell.getBoundingClientRect(), container);
    if (conditionFn(cellRect, boundary)) {
      findIndex = cells.indexOf(cell);
    }
    return findIndex;
  }, false);
}

function getColToolCellIndexesByBoundary(cells, boundary, conditionFn, container) {
  return cells.reduce((findIndexes, cell) => {
    const cellRect = getRelativeRect(cell.getBoundingClientRect(), container);
    if (conditionFn(cellRect, boundary)) {
      findIndexes.push(cells.indexOf(cell));
    }
    return findIndexes;
  }, []);
}

function checkAndGetViewPointChange(parentContainer: HTMLElement, left: number, top: number) {
  if (!parentContainer) {
    return {
      offsetX: 0,
      offsetY: 0,
    };
  }
  // 模拟一个元素测预测位置和最终位置是否符合，如果不符合则是有transform等造成的偏移
  const testEl = document.createElement('div');
  css(testEl, {
    opacity: '0',
    position: 'fixed',
    left: `${left}px`,
    top: `${top}px`,
    width: '1px',
    height: '1px',
    zIndex: '-999999',
  });
  parentContainer.appendChild(testEl);
  const testElPosition = testEl.getBoundingClientRect();
  parentContainer.removeChild(testEl);
  return {
    offsetX: testElPosition.left - left,
    offsetY: testElPosition.top - top,
  };
}
