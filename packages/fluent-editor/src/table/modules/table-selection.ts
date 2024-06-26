import * as Quill from 'quill';
import { TableCell } from '../formats/table';
import { ERROR_LIMIT, LINE_POSITIONS, PRIMARY_COLOR } from '../table-config';
import { css, getRelativeRect } from '../utils';

export default class TableSelection {
  table: any;
  quill: any;
  modulesContainer: any;
  parent: any;
  boundary: any;
  // @ts-ignore
  selectedTds: any[];
  // @ts-ignore
  dragging: boolean;
  preSelectedTable: any;
  oldRootScrollTop: any;
  selectingHandler: any;
  tdEditHandler: any;
  tdResizeHandler: any;
  endTd: any;
  startTd: any;
  editTd: any;
  left: any;
  bottom: any;
  top: any;
  right: any;
  /* eslint-disable-next-line no-constructor-return*/
  constructor(table, quill, dom) {
    if (!table) {
      return null;
    }
    this.table = table;
    this.quill = quill;
    this.modulesContainer = dom;
    this.parent = this.quill.root.parentNode;
    this.boundary = {}; // params for selected square
    this.selectedTds = []; // array for selected table-cells
    this.dragging = false;
    this.preSelectedTable = null;
    this.oldRootScrollTop = this.quill.root.scrollTop;

    this.selectingHandler = this.mouseDownHandler.bind(this);

    this.tdEditHandler = this.setTdEditable.bind(this);
    this.tdResizeHandler = this.resizeTd.bind(this);

    this.helpLinesInitial();
    this.isEditorHasScrollBar();

    this.quill.root.parentNode.addEventListener('mousedown', this.selectingHandler, false);
    this.quill.on('text-change', this.tdResizeHandler);
    if (this.quill.root === this.quill.scrollingContainer) {
      this.quill.root.addEventListener('scroll', this.handleQuillRootScroll.bind(this));
    }
  }

  handleQuillRootScroll() {
    LINE_POSITIONS.forEach((direction) => {
      const selectionLine = this[direction];
      if (selectionLine) {
        selectionLine.style.marginTop = `${this.oldRootScrollTop - this.quill.root.scrollTop}px`;
      }
    });
  }

  isEditorHasScrollBar() {
    if (this.quill.root.scrollHeight > this.quill.root.clientHeight) {
      css(this.modulesContainer, { width: 'calc(100% - 23px)' });
    } else {
      this.modulesContainer.removeAttribute('style');
    }
  }

  helpLinesInitial() {
    LINE_POSITIONS.forEach((direction) => {
      this[direction] = document.createElement('div');
      this[direction].classList.add('qlbt-selection-line');
      if (direction === 'left') {
        this[direction].classList.add('qlbt-selection-line-first');
        const ctrlPointLeft = document.createElement('div');
        this[direction].appendChild(ctrlPointLeft);
      }
      if (direction === 'bottom') {
        this[direction].classList.add('qlbt-selection-line-last');
        const ctrlPointRight = document.createElement('div');
        this[direction].appendChild(ctrlPointRight);
      }
      css(this[direction], {
        position: 'absolute',
        display: 'none',
        'background-color': PRIMARY_COLOR,
      });
      this.modulesContainer.appendChild(this[direction]);
    });
  }

  mouseDownHandler(e) {
    if (e.button !== 0) {
      return;
    }
    const self: any = this;
    const betterTableModule = this.quill.getModule('better-table');
    const tableColumnTool = betterTableModule.columnTool;
    if (tableColumnTool.activeToolCell) {
      tableColumnTool.activeToolCell.classList.remove('qlbt-tool-cell-on');
      tableColumnTool.activeToolCell = null;
    }
    if (e.target.closest('.quill-better-table')) {
      if (e.shiftKey) {
        this.endTd = e.target.closest('td[data-row]');
        this.drawSelection(this, true);
        // avoid select text in multiple table-cell
        if (this.startTd !== this.endTd) {
          this.quill.blur();
        }
      } else {
        this.startTd = e.target.closest('td[data-row]');
        this.drawSelection(this, false);
        this.dragging = true;

        this.parent.addEventListener('mousemove', mouseMoveHandler, false);
        document.addEventListener('mouseup', mouseUpHandler, false);
      }
    } else if (e.target.closest('.qlbt-selection-line')) {
      this.parent.addEventListener('mousemove', mouseMoveHandler, false);
      document.addEventListener('mouseup', mouseUpHandler, false);
    }

    function mouseMoveHandler(event) {
      event.stopPropagation();

      if (event.button !== 0 || !event.target.closest('.quill-better-table')) {
        return;
      }
      self.endTd = event.target.closest('td[data-row]');
      if (!self.endTd) {
        return;
      }
      self.drawSelection(self, true);
      // avoid select text in multiple table-cell
      if (self.startTd !== self.endTd) {
        self.quill.blur();
      }
    }

    function mouseUpHandler() {
      self.parent.removeEventListener('mousemove', mouseMoveHandler, false);
      document.removeEventListener('mouseup', mouseUpHandler, false);
      self.dragging = false;
    }
  }

  drawSelection(self, end) {
    // fix: 如果滚动条拖动，startTd的位置已经改变了，需要重置startTdRect
    self.startTdRect = getRelativeRect(self.startTd.getBoundingClientRect(), self.quill.root.parentNode);
    let endTdRect = self.startTdRect;
    if (end) {
      self.endTdRect = getRelativeRect(self.endTd.getBoundingClientRect(), self.quill.root.parentNode);
      endTdRect = self.endTdRect;
    }
    self.boundary = computeBoundaryFromRects(self.startTdRect, endTdRect);
    self.selectedTds = self.computeSelectedTds();
    self.repositionHelpLines();
  }

  setTdEditable(e) {
    if (!this.editTd) {
      return;
    }
    this.parent.removeEventListener('keypress', this.tdEditHandler, false);
    const dom = this.editTd.domNode;
    dom.removeEventListener('click', this.tdEditHandler, false);
    dom.classList.add('editing-select-able');
    dom.setAttribute('contenteditable', true);
    if (e.type === 'keypress') {
      if (dom.childNodes.length > 1 || dom.firstChild.innerHTML !== '<br>') {
        const blank = dom.firstChild.cloneNode();
        blank.innerHTML = '<br>';
        dom.innerHTML = '';
        dom.appendChild(blank);
      }
      dom.focus();
    }
  }

  resizeTd() {
    if (!this.editTd || (this.left && !this.left.offsetParent)) {
      return;
    }
    if (this.selectedTds.length > 1) {
      this.refreshHelpLinesPosition();
    } else {
      const dom = this.editTd.domNode;
      const domRect = getRelativeRect(dom.getBoundingClientRect(), this.quill.root.parentNode);
      this.boundary = computeBoundaryFromRects(domRect, domRect);
      this.repositionHelpLines();
    }

    // 判断编辑器是否有滚动条，调整遮罩宽度
    this.isEditorHasScrollBar();

    // 更新行高 更新滑块位置
    const betterTableModule = this.quill.getModule('better-table');
    const tableColumnTool = betterTableModule.columnTool;
    if (tableColumnTool) {
      tableColumnTool.updateRowToolCells();
      const tableViewRect = this.table.parentNode.getBoundingClientRect();
      if (tableColumnTool.leftMask) {
        css(tableColumnTool.leftMask, { height: `${tableViewRect.height + 50}px` });
      }
    }

    const tableScrollBar = betterTableModule.tableScrollBar;
    tableScrollBar.resetTableHeight(this.table);
  }

  resetTd(e) {
    const dom = e.target;
    dom.classList.remove('editing-select-able');
    dom.setAttribute('contenteditable', false);
    dom.removeAttribute('contenteditable');
  }

  correctBoundary() {
    const tableContainer = Quill.find(this.table);
    const tableCells = tableContainer.descendants(TableCell);

    tableCells.forEach((tableCell) => {
      const { x, y, width, height } = getRelativeRect(tableCell.domNode.getBoundingClientRect(), this.quill.root.parentNode);
      const isCellIntersected =
        ((x + ERROR_LIMIT >= this.boundary.x && x + ERROR_LIMIT <= this.boundary.x1) ||
          (x - ERROR_LIMIT + width >= this.boundary.x && x - ERROR_LIMIT + width <= this.boundary.x1)) &&
        ((y + ERROR_LIMIT >= this.boundary.y && y + ERROR_LIMIT <= this.boundary.y1) ||
          (y - ERROR_LIMIT + height >= this.boundary.y && y - ERROR_LIMIT + height <= this.boundary.y1));
      if (isCellIntersected) {
        this.boundary = computeBoundaryFromRects(this.boundary, { x, y, width, height });
      }
    });
  }

  computeSelectedTds() {
    const tableContainer = Quill.find(this.table);
    const tableCells = tableContainer.descendants(TableCell);

    const result = tableCells.reduce((selectedCells, tableCell) => {
      const { x, y, width, height } = getRelativeRect(tableCell.domNode.getBoundingClientRect(), this.quill.root.parentNode);
      const isCellIncluded =
        x + ERROR_LIMIT >= this.boundary.x &&
        x - ERROR_LIMIT + width <= this.boundary.x1 &&
        y + ERROR_LIMIT >= this.boundary.y &&
        y - ERROR_LIMIT + height <= this.boundary.y1;

      if (isCellIncluded) {
        selectedCells.push(tableCell);
      }

      return selectedCells;
    }, []);

    if (result.length === 1 && this.editTd !== result[0]) {
      const resetTds = this.table.querySelectorAll('td[contenteditable=true]');
      resetTds.forEach((td) => this.resetTd({ target: td }));
      this.editTd = result[0];
      this.editTd.domNode.addEventListener('mousedown', this.tdEditHandler, false);
      this.parent.addEventListener('keypress', this.tdEditHandler, false);
    }

    return result;
  }

  repositionHelpLines() {
    this.oldRootScrollTop = this.quill.root.scrollTop;
    if (!this.left) {
      return;
    }

    css(this.left, {
      display: 'block',
      left: `${this.boundary.x - 1}px`,
      top: `${this.boundary.y}px`,
      height: `${this.boundary.height + 1}px`,
      width: '1px',
      'margin-top': '0px',
    });

    css(this.right, {
      display: 'block',
      left: `${this.boundary.x1}px`,
      top: `${this.boundary.y - 1}px`,
      height: `${this.boundary.height + 1}px`,
      width: '1px',
      'margin-top': '0px',
    });

    css(this.top, {
      display: 'block',
      left: `${this.boundary.x - 1}px`,
      top: `${this.boundary.y - 1}px`,
      width: `${this.boundary.width + 1}px`,
      height: '1px',
      'margin-top': '0px',
    });

    css(this.bottom, {
      display: 'block',
      left: `${this.boundary.x - 1}px`,
      top: `${this.boundary.y1}px`,
      width: `${this.boundary.width + 1}px`,
      height: '1px',
      'margin-top': '0px',
    });
  }

  // based on selectedTds compute positions of help lines
  // It is useful when selectedTds are not changed
  refreshHelpLinesPosition() {
    const startRect = getRelativeRect(this.selectedTds[0].domNode.getBoundingClientRect(), this.quill.root.parentNode);
    const endRect = getRelativeRect(
      this.selectedTds[this.selectedTds.length - 1].domNode.getBoundingClientRect(),
      this.quill.root.parentNode
    );
    this.boundary = computeBoundaryFromRects(startRect, endRect);
    this.repositionHelpLines();
  }

  destroy() {
    const resetTds = this.table.querySelectorAll('td[contenteditable=true]');
    resetTds.forEach((td) => this.resetTd({ target: td }));

    LINE_POSITIONS.forEach((direction) => {
      if (this[direction]) {
        this[direction].remove();
        this[direction] = null;
      }
    });

    this.quill.root.parentNode.removeEventListener('mousedown', this.selectingHandler, false);

    delete this.editTd;

    return null;
  }

  setSelection(startRect, endRect) {
    this.boundary = computeBoundaryFromRects(
      getRelativeRect(startRect, this.quill.root.parentNode),
      getRelativeRect(endRect, this.quill.root.parentNode)
    );
    this.correctBoundary();
    this.selectedTds = this.computeSelectedTds();
    this.repositionHelpLines();
  }

  clearSelection() {
    const resetTds = this.table.querySelectorAll('td[contenteditable=true]');
    resetTds.forEach((td) => this.resetTd({ target: td }));
    this.boundary = {};
    this.selectedTds = [];
    LINE_POSITIONS.forEach((direction) => {
      if (this[direction]) {
        css(this[direction], {
          display: 'none',
        });
      }
    });
  }
}

function computeBoundaryFromRects(startRect, endRect) {
  const x = Math.min(startRect.x, endRect.x, startRect.x + startRect.width - 1, endRect.x + endRect.width - 1);

  const x1 = Math.max(startRect.x, endRect.x, startRect.x + startRect.width - 1, endRect.x + endRect.width - 1);

  const y = Math.min(startRect.y, endRect.y, startRect.y + startRect.height - 1, endRect.y + endRect.height - 1);

  const y1 = Math.max(startRect.y, endRect.y, startRect.y + startRect.height - 1, endRect.y + endRect.height - 1);

  const width = x1 - x;
  const height = y1 - y;

  return { x, x1, y, y1, width, height };
}
