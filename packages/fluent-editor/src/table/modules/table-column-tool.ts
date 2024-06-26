import * as Quill from 'quill';
import { CELL_MIN_HEIGHT, CELL_MIN_WIDTH, COL_TOOL_HEIGHT, PRIMARY_COLOR, ROW_TOOL_WIDTH } from '../table-config';
import { css } from '../utils';

export default class TableColumnTool {
  table: any;
  quill: any;
  modulesContainer: any;
  domNode: any;
  columnCtrlPanel: HTMLDivElement;
  leftMask: HTMLDivElement;
  rowCtrlPanel: HTMLDivElement;
  activeToolCell: HTMLElement;
  oldRootScrollTop: any;
  constructor(table, quill, dom) {
    if (!table) {
      /* eslint-disable-next-line no-constructor-return*/
      return null;
    }
    this.table = table;
    this.quill = quill;
    this.modulesContainer = dom;
    this.domNode = null;
    this.oldRootScrollTop = this.quill.root.scrollTop;

    this.initColTool();

    if (this.quill.root === this.quill.scrollingContainer) {
      this.quill.root.addEventListener('scroll', this.handleQuillRootScroll.bind(this));
    }
  }

  handleQuillRootScroll() {
    if (this.domNode) {
      this.domNode.style.marginTop = `${this.oldRootScrollTop - this.quill.root.scrollTop}px`;
    }
  }

  initColTool() {
    const parent = this.quill.root.parentNode;
    const containerRect = parent.getBoundingClientRect();
    const tableViewRect = this.table.parentNode.getBoundingClientRect();

    this.domNode = document.createElement('div');
    this.domNode.classList.add('qlbt-table-control-panel');

    // 以下添加顺序影响遮罩顺序，勿改变
    this.columnCtrlPanel = document.createElement('div');
    this.columnCtrlPanel.classList.add('qlbt-column-control-panel');
    this.domNode.appendChild(this.columnCtrlPanel);

    this.leftMask = document.createElement('div');
    this.leftMask.classList.add('qlbt-left-mask');
    css(this.leftMask, { height: `${tableViewRect.height + 50}px` });
    this.domNode.appendChild(this.leftMask);

    this.rowCtrlPanel = document.createElement('div');
    this.rowCtrlPanel.classList.add('qlbt-row-control-panel');
    this.domNode.appendChild(this.rowCtrlPanel);

    this.updateRowToolCells();
    this.updateColToolCells();

    this.modulesContainer.appendChild(this.domNode);
    css(this.domNode, {
      width: '100%',
      height: `${COL_TOOL_HEIGHT}px`,
      left: '0px',
      top: `${tableViewRect.top - containerRect.top + parent.scrollTop - 25}px`
    });
  }

  createToolCell(isRow) {
    // @ts-ignore
    window.quillIsIntable = true
    const toolCell = document.createElement('div');
    const selector = document.createElement('div');
    const resizeHolder = document.createElement('div');
    if (isRow) {
      toolCell.classList.add('qlbt-row-tool-cell');
      selector.classList.add('qlbt-row-tool-cell-selector');
      resizeHolder.classList.add('qlbt-row-tool-cell-holder');
      css(toolCell, { width: `${ROW_TOOL_WIDTH}px` });
    } else {
      toolCell.classList.add('qlbt-col-tool-cell');
      selector.classList.add('qlbt-col-tool-cell-selector');
      resizeHolder.classList.add('qlbt-col-tool-cell-holder');
      css(toolCell, { height: `${COL_TOOL_HEIGHT}px` });
    }
    toolCell.appendChild(selector);
    toolCell.appendChild(resizeHolder);
    return toolCell;
  }

  updateColToolCells() {
    const tableContainer = Quill.find(this.table);
    if (!tableContainer) {
      return;
    }
    const tableCols = tableContainer.colGroup().children;
    const tableColsNum =  Math.max(Array.from(tableCols).length, tableContainer.colGroup().domNode.children.length);
    const existCells: any = Array.from(this.columnCtrlPanel.querySelectorAll('.qlbt-col-tool-cell'));
    const cellsNumber = Math.max(existCells.length, tableColsNum);

    for (let index = 0; index < cellsNumber; index++) {
      let col = tableCols.at(index);
      let colWidth = 0
      if(!col || col.domNode !== tableContainer.colGroup().domNode.children[index]) {
        col = tableContainer.colGroup().domNode.children[index]
        colWidth = col ? col.width : tableContainer.colGroup().domNode.children[index-1].width
      }else {
        colWidth = parseInt(col.formats()[col.statics.blotName].width, 10)
      }
      // if cell already exist
      let colToolCell = null;
      if (!existCells[index]) {
        colToolCell = this.createToolCell(false);
        this.columnCtrlPanel.appendChild(colToolCell);
        this.addColCellSelectHandler(colToolCell);
        this.addColCellHolderHandler(colToolCell);
        // set tool cell min-width
        css(colToolCell, {
          'min-width': `${colWidth}px`
        });
      } else if (existCells[index] && index >= tableColsNum) {
        existCells[index].remove();
      } else {
        colToolCell = existCells[index];
        // set tool cell min-width
        css(colToolCell, {
          'min-width': `${colWidth}px`
        });
      }
    }
  }

  updateRowToolCells() {
    const tableContainer = Quill.find(this.table);
    if (!tableContainer) {
      return;
    }
    let tableRows = Array.from(tableContainer.domNode.querySelectorAll('tr'));
    tableRows = tableRows.filter((tr: any) => tr.children.length);
    const existCells: any = Array.from(this.rowCtrlPanel.querySelectorAll('.qlbt-row-tool-cell'));
    const rowNumber = Math.max(existCells.length, tableRows.length);

    for (let index = 0; index < rowNumber; index++) {
      const row: any = tableRows[index];

      // fix: 修复 IE11/Edge 下无法拿到 height 的问题
      // IE11/Edge 下 height 会变成 'auto'
      let computedHeight = row && getComputedStyle(row)['height'];
      if (computedHeight === 'auto') {
        computedHeight = row.querySelector('td').style.height || '30px';
      }

      let rowHeight = row && parseFloat(computedHeight);
      if (rowHeight < CELL_MIN_HEIGHT) {
        const rowChildHeight = row && row.childNodes[0] && parseFloat(getComputedStyle(row.childNodes[0])['height']);
        rowHeight = rowChildHeight;
      }
      // if cell already exist
      let rowToolCell = null;
      if (!existCells[index]) {
        rowToolCell = this.createToolCell(true);
        this.rowCtrlPanel.appendChild(rowToolCell);
        this.addRowCellSelectHandler(rowToolCell);
        this.addRowCellHolderHandler(rowToolCell);
        // set tool cell height, ff not support min-height
        css(rowToolCell, { height: `${rowHeight}px` });
      } else if (existCells[index] && index >= tableRows.length) {
        existCells[index].remove();
      } else {
        rowToolCell = existCells[index];
        css(rowToolCell, { height: `${rowHeight}px` });
      }
    }
  }

  destroy() {
    // @ts-ignore
    window.quillIsIntable = false
    this.domNode.remove();
    return null;
  }

  addRowCellSelectHandler(cell) {
    const selector = cell.querySelector('.qlbt-row-tool-cell-selector');

    const handleClick = e => {
      e.preventDefault();

      const dom = e.target.parentNode;
      const domRect = dom.getBoundingClientRect();
      const containerRect = this.quill.root.parentNode.getBoundingClientRect();
      const tableRect = this.table.getBoundingClientRect();
      const tableSelection = this.quill.getModule('better-table').tableSelection;
      tableSelection.boundary = {
        x: tableRect.left - containerRect.left, // 表格左上角X轴坐标
        x1: tableRect.left - containerRect.left + tableRect.width - 2, // 表格右上角X轴坐标
        y: domRect.top - containerRect.top, // 表格左上角Y轴坐标
        y1: domRect.top - containerRect.top + domRect.height - 1, // 表格右上角Y轴坐标
        width: tableRect.width - 2,
        height: domRect.height - 1
      };
      tableSelection.selectedTds = tableSelection.computeSelectedTds();
      tableSelection.repositionHelpLines();

      dom.classList.add('qlbt-tool-cell-on');
      this.activeToolCell = dom;
    };

    selector.addEventListener('click', handleClick, false);
  }

  addRowCellHolderHandler(cell) {
    const holder = cell.querySelector('.qlbt-row-tool-cell-holder');
    let dragging = false;
    let y0 = 0;
    let y = 0;
    let delta = 0;
    let height0 = 0;
    // helpLine relation variable
    let tableRect: any = {};
    let cellRect: any = {};
    let helpLine = null;

    const handleDrag = e => {
      e.preventDefault();

      if (dragging) {
        y = e.clientY;

        if (height0 + y - y0 >= CELL_MIN_HEIGHT) {
          delta = y - y0;
        } else {
          delta = CELL_MIN_HEIGHT - height0;
        }

        css(helpLine, {
          top: `${cellRect.top + cellRect.height + delta}px`
        });
      }
    };

    const handleMouseup = e => {
      e.preventDefault();

      const existCells = Array.from(this.domNode.querySelectorAll('.qlbt-row-tool-cell'));
      const rowIndex = existCells.indexOf(cell);
      const rows: any = Array.from(this.table.querySelectorAll('tr'));
      const tds = Array.from(rows[rowIndex].childNodes);
      const hasContentTd: any = tds.find((td: any) => td.getAttribute('rowspan') === '1' && td.innerText !== '\n');

      if (dragging) {
        let tdHeight = `${height0 + delta}px`;
        if (hasContentTd) {
          tds.forEach((td: any) => td.getAttribute('rowspan') === '1' && css(td, { height: tdHeight }));
          const currentHeight = getComputedStyle(hasContentTd)['height'];
          tdHeight = (parseInt(currentHeight, 10) > height0 + delta && currentHeight) || tdHeight;
        }
        css(cell, { height: tdHeight });
        tds.forEach((td: any) => td.getAttribute('rowspan') === '1' && css(td, { height: tdHeight }));

        const tableViewRect = this.table.parentNode.getBoundingClientRect();
        css(this.leftMask, { height: `${tableViewRect.height + 50}px` });

        y0 = 0;
        y = 0;
        delta = 0;
        height0 = 0;
        dragging = false;
        holder.classList.remove('dragging');
      }

      this.quill.root.parentNode.removeEventListener('mousemove', handleDrag, false);
      document.removeEventListener('mouseup', handleMouseup, false);
      tableRect = {};
      cellRect = {};
      helpLine.remove();
      helpLine = null;

      const betterTableModule = this.quill.getModule('better-table');
      const tableScrollBar = betterTableModule.tableScrollBar;
      tableScrollBar.resetTableHeight(this.table);

      // fix: 拖动滚动条时修正选区位置
      const tableSelection = betterTableModule.tableSelection;
      if (tableSelection && tableSelection.selectedTds.length) { tableSelection.refreshHelpLinesPosition(); }
    };

    const handleMousedown = e => {
      e.preventDefault();

      this.quill.root.parentNode.addEventListener('mousemove', handleDrag, false);
      document.addEventListener('mouseup', handleMouseup, false);

      tableRect = this.table.getBoundingClientRect();
      const tableViewRect = this.table.parentNode.getBoundingClientRect();
      const width = (tableRect.width > tableViewRect.width && tableViewRect.width) || tableRect.width;
      cellRect = cell.getBoundingClientRect();
      helpLine = document.createElement('div');
      css(helpLine, {
        position: 'fixed',
        top: `${cellRect.top + cellRect.height}px`,
        left: `${cellRect.left}px`,
        zIndex: '100',
        width: `${width + ROW_TOOL_WIDTH + 9}px`,
        height: '1px',
        backgroundColor: PRIMARY_COLOR
      });

      this.quill.root.parentNode.appendChild(helpLine);
      dragging = true;
      y0 = e.clientY;
      height0 = cellRect.height;
      holder.classList.add('dragging');
    };

    holder.addEventListener('mousedown', handleMousedown, false);
  }

  addColCellSelectHandler(cell) {
    // 上方列宽控制条

    const selector = cell.querySelector('.qlbt-col-tool-cell-selector');

    const handleClick = e => {
      e.preventDefault();

      const dom = e.target.parentNode;
      const domRect = dom.getBoundingClientRect();
      const containerRect = this.quill.root.parentNode.getBoundingClientRect();
      const tableRect = this.table.getBoundingClientRect();
      const tableSelection = this.quill.getModule('better-table').tableSelection;
      tableSelection.boundary = {
        x: domRect.left - containerRect.left - 1,
        x1: domRect.left - containerRect.left + domRect.width - 2,
        y: tableRect.top - containerRect.top,
        y1: tableRect.top - containerRect.top + tableRect.height - 2,
        width: domRect.width,
        height: tableRect.height - 2
      };
      tableSelection.selectedTds = tableSelection.computeSelectedTds();
      tableSelection.repositionHelpLines();

      dom.classList.add('qlbt-tool-cell-on');
      this.activeToolCell = dom;
    };
    selector.addEventListener('click', handleClick, false);
  }

  addColCellHolderHandler(cell) {
    const tableContainer = Quill.find(this.table);
    const holder = cell.querySelector('.qlbt-col-tool-cell-holder');
    let dragging = false;
    let x0 = 0;
    let x = 0;
    let delta: any = 0;
    let width0 = 0;
    // helpLine relation variable
    let tableRect: any = {};
    let scrollContainerRect = null;
    let cellRect: any = {};
    let helpLine = null;

    const handleDrag = e => {
      e.preventDefault();

      if (dragging) {
        x = e.clientX;

        if (width0 + x - x0 >= CELL_MIN_WIDTH) {
          delta = x - x0;
        } else {
          delta = CELL_MIN_WIDTH - width0;
        }
        let left = cellRect.left + cellRect.width - 1 + delta;
        if (scrollContainerRect) {
          left -= scrollContainerRect.left;
        }

        css(helpLine, {
          left: `${left}px`
        });
      }
    };

    const handleMouseup = e => {
      e.preventDefault();

      const existCells = Array.from(this.domNode.querySelectorAll('.qlbt-col-tool-cell'));
      const colIndex = existCells.indexOf(cell);
      let colBlot = tableContainer.colGroup().children.at(colIndex)
      if(!colBlot || colBlot.domNode !== tableContainer.colGroup().domNode.children[colIndex]){
        colBlot = tableContainer.colGroup().domNode.children[colIndex];
      }
      if (dragging) {
        // fix: 防止 colWidth 是小数
        const colWidth = parseInt(width0 + delta, 10);
        if(colBlot.format){
          colBlot.format('width', colWidth);
        }else {
          colBlot.width = colWidth
        }
        
        css(cell, { 'min-width': `${colWidth}px` });

        x0 = 0;
        x = 0;
        delta = 0;
        width0 = 0;
        dragging = false;
        holder.classList.remove('dragging');
      }

      this.quill.root.parentNode.removeEventListener('mousemove', handleDrag, false);
      document.removeEventListener('mouseup', handleMouseup, false);
      tableRect = {};
      scrollContainerRect = null;
      cellRect = {};
      helpLine.remove();
      helpLine = null;
      tableContainer.updateTableWidth();

      setTimeout(() => {
        this.updateRowToolCells();
        const betterTableModule = this.quill.getModule('better-table');
        const tableScrollBar = betterTableModule.tableScrollBar;
        tableScrollBar.updateScrollBar();
        // fix: 拖动滚动条时修正选区位置
        const tableSelection = betterTableModule.tableSelection;
        if (tableSelection && tableSelection.selectedTds.length) { tableSelection.refreshHelpLinesPosition(); }
      });
    };

    const handleMousedown = e => {
      e.preventDefault();

      this.quill.root.parentNode.addEventListener('mousemove', handleDrag, false);
      document.addEventListener('mouseup', handleMouseup, false);

      tableRect = this.table.getBoundingClientRect();
      cellRect = cell.getBoundingClientRect();

      let positionValue = 'fixed';
      let top = cellRect.top;
      let left = cellRect.left + cellRect.width - 1;
      if (this.quill.root === this.quill.scrollingContainer) {
        positionValue = 'absolute';
        scrollContainerRect = this.quill.root.getBoundingClientRect();
        top -= scrollContainerRect.top;
        left -= scrollContainerRect.left;
      }

      helpLine = document.createElement('div');
      css(helpLine, {
        position: positionValue,
        top: `${top}px`,
        left: `${left}px`,
        zIndex: '100',
        height: `${tableRect.height + COL_TOOL_HEIGHT + 8}px`,
        width: '1px',
        backgroundColor: PRIMARY_COLOR
      });

      this.quill.root.parentNode.appendChild(helpLine);
      dragging = true;
      x0 = e.clientX;
      width0 = cellRect.width;
      holder.classList.add('dragging');
    };

    holder.addEventListener('mousedown', handleMousedown, false);
  }

  colToolCells() {
    return Array.from(this.domNode.querySelectorAll('.qlbt-col-tool-cell'));
  }
}
