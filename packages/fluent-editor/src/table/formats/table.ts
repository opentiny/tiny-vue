import Quill from 'quill';
import { compare } from '../../utils/method'
import { isNullOrUndefined } from '../../config/editor.utils';
import {
  CELL_ATTRIBUTES,
  CELL_DEFAULT,
  CELL_IDENTITY_KEYS,
  CELL_MIN_HEIGHT,
  COL_ATTRIBUTES,
  COL_DEFAULT,
  ERROR_LIMIT
} from '../table-config';
import { getRelativeRect } from '../utils';
import Header from './header';
import ListItem, { ListContainer } from './list';

const Break = Quill.imports['blots/break'];
const Block = Quill.imports['blots/block'];
const Container = Quill.imports['blots/container'];

// @dynamic
class TableCellLine extends Block {
  static requiredContainer: any;
  static tagName: string;
  static className: string;
  static blotName: any;
  domNode: any;
  statics: any;
  wrap: any;
  parent: any;

  static create(value) {
    const node = super.create(value);

    // fix: when td has background-color, quill can't set it to table-cell bolt
    if (value.tdBgColor) {
      node.setAttribute(`data-parent-bg`, value.tdBgColor);
      delete value.tdBgColor;
    }

    CELL_IDENTITY_KEYS.forEach((key) => {
      const identityMaker = key === 'row' ? rowId : cellId;
      node.setAttribute(`data-${key}`, value[key] || identityMaker());
    });

    CELL_ATTRIBUTES.forEach((attrName) => {
      node.setAttribute(`data-${attrName}`, value[attrName] || CELL_DEFAULT[attrName]);
    });

    if (value.height) {
      node.setAttribute('height', value.height);
    }

    return node;
  }

  static formats(domNode) {
    const formats = {};
    if (formats['list']) {
      formats['list'] = domNode.classList.item(0);
    }
    return reduceFormats(domNode, formats);
  }

  toggleAttribute(name, value) {
    if (value) {
      this.domNode.setAttribute(name, value);
    } else {
      this.domNode.removeAttribute(name);
    }
  }

  formatChildren(name, value) {
    this.children.forEach((child) => {
      child.format && child.format(name, value)
      if(!child.domNode.style){
        return
      }
      if(child.domNode.tagName === 'SPAN' && value) {
        child.domNode.style.backgroundColor = value
      }else {
        child.domNode.style.backgroundColor = 'initial'
      }
    })
  }

  format(name, value) {
    if ([...CELL_ATTRIBUTES, ...CELL_IDENTITY_KEYS, 'parent-bg'].indexOf(name) > -1) {
      if (value) {
        this.domNode.setAttribute(`data-${name}`, value);
      } else {
        this.domNode.removeAttribute(`data-${name}`);
      }
    } else if (name === 'header') {
      if (!value) {
        return;
      }
      const { row, cell, rowspan, colspan }: any = TableCellLine.formats(this.domNode);
      super.format(name, {
        value,
        row,
        cell,
        rowspan,
        colspan,
      });
    } else {
      super.format(name, value);
    }
    switch (true) {
      case name === 'cell-bg': {
        this.toggleAttribute('data-cell-bg', value)
        this.formatChildren(name, value)
      }
    }
  }

  optimize(context) {
    super.optimize(context);

    // cover shadowBlot's wrap call, pass params parentBlot initialize
    // needed
    const { row, cell, rowspan, colspan } = this.domNode.dataset;
    const formats: any = TableCellLine.formats(this.domNode);
    const parentFormats = this.parent.formats();
    if (this.statics.requiredContainer && !(this.parent instanceof this.statics.requiredContainer)) {
      this.wrap(this.statics.requiredContainer.blotName, { row, cell, rowspan, colspan });
    } else if (!compare(formats, parentFormats)) {
      this.parent.format('row', formats.row);
      this.parent.format('cell', formats.cell);
      this.parent.format('rowspan', formats.rowspan);
      this.parent.format('colspan', formats.colspan);
    }

    const parentHeight = this.domNode.getAttribute('height');
    if (parentHeight) {
      this.parent.domNode.style.height = parentHeight;
    }
  }

  tableCell() {
    return this.parent;
  }
}
TableCellLine.blotName = 'table-cell-line';
TableCellLine.className = 'qlbt-cell-line';
TableCellLine.tagName = 'DIV';

// @dynamic
class TableCell extends Container {
  static allowedChildren: any;
  static blotName: any;
  static requiredContainer: any;
  static tagName: string;
  next: any;
  children: any;
  parent: any;
  domNode: any;
  statics: any;
  wrap: any;
  splitAfter: any;
  prev: any;
  scroll: any;

  static create(value = { row: rowId() }) {
    const node = super.create(value);

    CELL_IDENTITY_KEYS.forEach((key) => {
      node.setAttribute(`data-${key}`, value[key]);
    });

    CELL_ATTRIBUTES.forEach((attrName) => {
      if (value[attrName]) {
        node.setAttribute(attrName, value[attrName]);
      }
    });

    return node;
  }

  static formats(domNode) {
    const formats = {
      height: undefined,
      row: undefined,
    }

    formats.height = domNode.getAttribute('height') || undefined

    if (domNode.hasAttribute('data-row')) {
      formats.row = domNode.getAttribute('data-row')
    }

    if (domNode.hasAttribute('data-cell-bg')) {
      formats['cell-bg'] = domNode.getAttribute('data-cell-bg') || undefined
    }
    return  CELL_ATTRIBUTES.reduce((formats, attribute) => {
      if (domNode.hasAttribute(attribute)) {
        formats[attribute] = domNode.getAttribute(attribute)
      }

      return formats
    }, formats)
  }

  checkMerge() {
    if (super.checkMerge() && !isNullOrUndefined(this.next.children.head)) {
      const getCellId = (node) => {
        return (
          (node.formats && node.formats()[node.statics.blotName]) || {
            cell: node.domNode.getAttribute('data-cell'),
          }
        );
      };
      const thisHead = getCellId(this.children.head);
      const thisTail = getCellId(this.children.tail);
      const nextHead = getCellId(this.next.children.head);
      const nextTail = getCellId(this.next.children.tail);
      return thisHead.cell === thisTail.cell && thisHead.cell === nextHead.cell && thisHead.cell === nextTail.cell;
    }
    return false;
  }

  cellOffset() {
    if (this.parent) {
      return this.parent.children.indexOf(this);
    }
    return -1;
  }

  formats() {
    const formats = {};

    if (this.domNode.hasAttribute('data-row')) {
      formats['row'] = this.domNode.getAttribute('data-row');
    }
    if (this.domNode.hasAttribute('data-cell')) {
      formats['cell'] = this.domNode.getAttribute('data-cell');
    }

    return CELL_ATTRIBUTES.reduce((tableFormats, attribute) => {
      if (this.domNode.hasAttribute(attribute)) {
        tableFormats[attribute] = this.domNode.getAttribute(attribute);
      }

      return tableFormats;
    }, formats);
  }

  toggleAttribute(name, value) {
    if (value) {
      this.domNode.setAttribute(name, value);
    } else {
      this.domNode.removeAttribute(name);
    }
  }

  formatChildren(name, value) {
    this.children.forEach((child) => {
      child.format(name, value)
    })
  }
    
  format(name, value) {
    const quill = Quill.find(this.scroll.domNode.parentNode);
    switch (true) {
      case CELL_ATTRIBUTES.indexOf(name) > -1:
      this.toggleAttribute(name, value);
      break;
      case ['row', 'cell'].indexOf(name) > -1:
        this.toggleAttribute(`data-${name}`, value);
        break;
      case name === 'background': {      const hasBgColor = this.domNode.querySelectorAll('div.qlbt-cell-line[data-parent-bg]');
        hasBgColor.forEach((child) => child.removeAttribute('data-parent-bg'));
        this.domNode.style.background = '';
        this.domNode.style.backgroundColor = value;
        this.children.head.format('parent-bg', value);
        break;
      }
      // TODO: 其他格式可同理实现，但已有格式清除时会清除所有格式，待解决
      case name === 'size': { 
          const start = quill.getIndex(this.children.head);
          const total = quill.getIndex(this.children.tail) + this.children.tail.length();
          const length = total - start > 0 ? total - start : 0;
          quill.setSelection(start, length, Quill.sources.USER);
          quill.format(name, value, Quill.sources.USER);
          // 设置选区后需清除选区，否则会固定处理选区内容
          quill.setSelection(start);
      }
      case name === 'cell-bg': {
        this.toggleAttribute('data-cell-bg', value)
        this.toggleAttribute('data-parent-bg', value)
        this.formatChildren(name, value)
        if (value) {
          this.domNode.style.backgroundColor = value
        } else {
          this.domNode.style.backgroundColor = 'initial'
        }
      }
    }
  }

  optimize(context) {
    // fix: when td has background-color, quill can't set it to table-cell bolt
    const hasBg: any = Array.from(this.domNode.childNodes).find((item: any) => item.getAttribute('data-parent-bg'));
    const bgColor = hasBg && hasBg.getAttribute('data-parent-bg');
    if (bgColor && bgColor !== this.domNode.style.backgroundColor ) {
      this.domNode.style.backgroundColor = bgColor;
    }

    const rId = this.domNode.getAttribute('data-row');
    if (this.statics.requiredContainer && !(this.parent instanceof this.statics.requiredContainer)) {
      this.wrap(this.statics.requiredContainer.blotName, {
        row: rId,
      });
    } else if (rId !== this.parent.formats().row) {
      this.parent.format('row', rId);
    }

    this.children.forEach((child) => {
      if (isNullOrUndefined(child.next)) {
        return;
      }
      const childFormats: any = this.getFormat(child.domNode);
      const nextFormats: any = this.getFormat(child.next.domNode);
      if (childFormats.cell !== nextFormats.cell) {
        const next = this.splitAfter(child);
        if (next) {
          next.optimize();
        }
        // We might be able to merge with prev now
        if (this.prev) {
          this.prev.optimize();
        }
      }
    });

    super.optimize(context);
  }

  // 兼容读取TableCell中的子blot，包括table-cell-line、line、head
  getFormat(domNode) {
    const formats = {};
    const firstChild = domNode.childNodes[0];
    if (firstChild && domNode.tagName === 'OL') {
      formats['list'] = firstChild.classList.item(0);
    }

    return reduceFormats(domNode, formats);
  }

  row() {
    return this.parent;
  }

  rowOffset() {
    if (this.row()) {
      return -1;
    }
    return this.row().rowOffset();
  }

  table() {
    return this.row() && this.row().table();
  }
}
TableCell.blotName = 'table';
TableCell.tagName = 'TD';

// @dynamic
class TableRow extends Container {
  static requiredContainer: any;
  static allowedChildren: any;
  static blotName: string;
  static tagName: string;
  next: any;
  children: any;
  domNode: any;
  statics: any;
  wrap: any;
  splitAfter: any;
  enforceAllowedChildren: any;
  uiNode: any;
  parent: any;
  prev: any;

  static create(value) {
    const node = super.create(value);
    if (value.row) {
      node.setAttribute('data-row', value.row);
    }
    return node;
  }

  checkMerge() {
    if (super.checkMerge() && !isNullOrUndefined(this.next.children.head)) {
      const thisHead = this.children.head.formats();
      const thisTail = this.children.tail.formats();
      const nextHead = this.next.children.head.formats();
      const nextTail = this.next.children.tail.formats();

      return thisHead.row === thisTail.row && thisHead.row === nextHead.row && thisHead.row === nextTail.row;
    }
    return false;
  }

  formats() {
    return ['row'].reduce((formats, attrName) => {
      if (this.domNode.hasAttribute(`data-${attrName}`)) {
        formats[attrName] = this.domNode.getAttribute(`data-${attrName}`);
      }
      return formats;
    }, {});
  }

  format(key, value) {
    this.domNode.setAttribute(`data-${key}`, value);
  }

  optimize(context) {
    // optimize function of ShadowBlot
    if (this.statics.requiredContainer && !(this.parent instanceof this.statics.requiredContainer)) {
      this.wrap(this.statics.requiredContainer.blotName);
    }

    this.children.forEach((child) => {
      if (isNullOrUndefined(child.next)) {
        return;
      }
      const childFormats = child.formats();
      const nextFormats = child.next.formats();
      if (childFormats.row !== nextFormats.row) {
        const next = this.splitAfter(child);
        if (next) {
          next.optimize();
        }
        if (this.prev) {
          this.prev.optimize();
        }
      }
    });

    super.optimize(context);
  }

  rowOffset() {
    if (!this.parent) {
      return -1;
    }
    return this.parent.children.indexOf(this);
  }

  table() {
    return this.parent && this.parent.parent;
  }
}
TableRow.blotName = 'table-row';
TableRow.tagName = 'TR';

// @dynamic
class TableBody extends Container {
  static requiredContainer: any;
  static allowedChildren: any;
  static blotName: string;
  static tagName: string;
}
TableBody.blotName = 'table-body';
TableBody.tagName = 'TBODY';

// @dynamic
class TableCol extends Block {
  static requiredContainer: any;
  static blotName: string;
  static tagName: string;
  domNode: any;

  static create(value) {
    const node = super.create(value);
    COL_ATTRIBUTES.forEach((attrName) => {
      node.setAttribute(`${attrName}`, value[attrName] || COL_DEFAULT[attrName]);
    });
    return node;
  }

  static formats(domNode) {
    return COL_ATTRIBUTES.reduce((formats, attribute) => {
      if (domNode.hasAttribute(`${attribute}`)) {
        formats[attribute] = domNode.getAttribute(`${attribute}`) || undefined;
      }
      return formats;
    }, {});
  }

  format(name, value) {
    if (COL_ATTRIBUTES.indexOf(name) > -1) {
      this.domNode.setAttribute(`${name}`, value || COL_DEFAULT[name]);
    } else {
      super.format(name, value);
    }
  }

  html() {
    return this.domNode.outerHTML;
  }
}
TableCol.blotName = 'table-col';
TableCol.tagName = 'col';

// @dynamic
class TableColGroup extends Container {
  static requiredContainer: any;
  static allowedChildren: any;
  static blotName: string;
  static tagName: string;
  parent: any;
  statics: any;

  optimize(context) {
    super.optimize(context);
    // optimize 是当前slot更新后调用的callback方法，当TableBody更新后判断父容器的存在和类型相符则调用更新表格宽度方法更新宽度
    // 切记不要在当前slot内调用能改变当前slot的方法，会造成无限循环，一般通过子更新改变父较好
    if (this.parent && this.statics.requiredContainer && this.parent instanceof this.statics.requiredContainer) {
      this.parent.updateTableWidth();
    }
    // 此时colgroup创建完毕，检查colgroup的col数量是否正确
    // fix：colgroup的col数量不正确导致最后一列宽度为空
    if(this.parent.parent.domNode.className === 'quill-better-table-wrapper' 
      && this.parent.parent.domNode.tagName === 'DIV' 
      && this.parent.domNode.children.length >= 2 
      && this.parent.domNode.children[0].tagName === 'COLGROUP' 
      && this.parent.domNode.children[1].tagName === 'TBODY'
    ) {

      let trId = ""
      let colSpan = 0
      let colgroupNumber = 0
      for(let i = 0; i< this.parent.domNode.children.length; i++) {
        if(this.parent.domNode.children[i].tagName === 'TBODY') {
          if(trId === ""){
            trId = this.parent.domNode.children[i].children[0].getAttribute("data-row")
          }
          colSpan = this.findTdColspanInTbody(this.parent.domNode.children[i],trId)
        } else if (this.parent.domNode.children[i].tagName === 'COLGROUP') {
          colgroupNumber = this.parent.domNode.children[i].children.length
        }
      }
      let elementSibling = this.parent.domNode.nextElementSibling
      
      while(elementSibling && elementSibling.tagName === 'TABLE'){
        for(let i = 0; i < elementSibling.children.length; i++) {
          if(elementSibling.children[i].tagName === 'TBODY') {
            colSpan += this.findTdColspanInTbody(elementSibling.children[i], trId)
          }
        }
        elementSibling = elementSibling.nextElementSibling
      }

      if(colgroupNumber < colSpan) {
        let length = colSpan - colgroupNumber

        for(let i =0; i<length; i++) {
          let newCol = document.createElement("col");
          newCol.width = this.parent.domNode.children[0].children[this.parent.domNode.children[0].children.length-1].width
          let newBr = document.createElement("br");
          newCol.appendChild(newBr)
          this.parent.domNode.children[0].appendChild(newCol)
          this.parent.domNode.style.width+=newCol.width
        }
      }
    }
  }
// this.parent.domNode.children[1].children[0].children[0].colSpan
  findTdColspanInTbody(tbody,trId){
    let colSpan = 0
    // let tbodyChildrenLength
    for(let i = 0; i<tbody.children.length ;i++){
      if(tbody.children[i].getAttribute("data-row")!==trId){
        return colSpan
      }
      for(let j = 0; j<tbody.children[i].children.length;j++) {
        if(tbody.children[i].children[j].colSpan){
          colSpan += tbody.children[i].children[j].colSpan
        }
      }
    }
    return colSpan
  }
}
TableColGroup.blotName = 'table-col-group';
TableColGroup.tagName = 'colgroup';

// @dynamic
class TableContainer extends Container {
  static blotName: string;
  static className: string;
  static tagName: string;
  static requiredContainer: any;
  static allowedChildren: any;
  domNode: any;
  parent: any;
  children: any;
  descendants: any;
  scroll: any;
  remove: any;
  static create() {
    const node = super.create();
    return node;
  }

  constructor(scroll, domNode) {
    super(scroll, domNode);
    domNode.setAttribute('contenteditable', false);
    this.updateTableWidth();
  }

  updateTableWidth() {
    let colGroup = this.colGroup();
    if (!colGroup) {
      // undo时原表格dom被移除，因此colGroup和domNode都不对应当前新表格，需从父容器dom树重新获取
      // 如果表格有style属性则不为新添加表格，避免错误赋值
      if (this.parent && this.parent.children.head && this.domNode.hasAttribute('style')) {
        colGroup = this.parent.children.head.children.head;
        this.domNode = this.parent.children.head.domNode;
      } else if(this.domNode.tagName==="TABLE"){
        // this.domNode.forEach
        return;
      } else {
        return;
      }
    }
    const tableWidth = colGroup.children.reduce((sumWidth, col) => {
      // 兼容 table-col 不存在的情况
      const tableCol = col.formats()[TableCol.blotName];
      let tableColWidth = COL_DEFAULT.width;
      if (tableCol && tableCol.width) {
        tableColWidth = parseInt(tableCol.width, 10);
      }
      sumWidth = sumWidth + tableColWidth;
      return sumWidth;
    }, 0);
    this.domNode.removeAttribute('style');
    this.domNode.style.width = `${tableWidth}px`;
    // 当表格加载结束后修正width设定为auto的列宽度
    if (colGroup.next) {
      setTimeout(() => {
        let tdIndex = 0;
        let maxTds;
        const colNum = colGroup.children.length;
        const tableRows = this.descendants(TableRow);
        // 查询单元格数等于列数的行作为宽度赋值依据
        for (let i = 0; i < tableRows.length; i++) {
          const tds = tableRows[i].domNode.querySelectorAll('td');
          if (tds.length === colNum) {
            maxTds = tds;
            break;
          }
        }
        colGroup.children.forEach((col) => {
          if (maxTds && col.domNode.width === 'auto') {
            const width = getComputedStyle(maxTds[tdIndex])['width'];
            const num = parseInt(width, 10);
            col.domNode.width = (num < COL_DEFAULT.width && COL_DEFAULT.width) || num;
          }
          tdIndex++;
        });
      });
    }
  }

  cells(column) {
    return this.rows().map((row) => row.children.at(column));
  }

  colGroup() {
    return this.children.head;
  }

  deleteColumns(compareRect, delIndexes = [], editorWrapper) {
    const [body] = this.descendants(TableBody);
    if (isNullOrUndefined(body) || isNullOrUndefined(body.children.head)) {
      return;
    }

    const tableCells = this.descendants(TableCell);
    const removedCells = [];
    const modifiedCells = [];

    tableCells.forEach((cell) => {
      const cellRect = getRelativeRect(cell.domNode.getBoundingClientRect(), editorWrapper);

      if (cellRect.x + ERROR_LIMIT > compareRect.x && cellRect.x1 - ERROR_LIMIT < compareRect.x1) {
        removedCells.push(cell);
      } else if (cellRect.x < compareRect.x + ERROR_LIMIT && cellRect.x1 > compareRect.x1 - ERROR_LIMIT) {
        modifiedCells.push(cell);
      }
    });

    if (removedCells.length === tableCells.length) {
      this.tableDestroy();
      return true;
    }

    // remove the matches column tool cell
    delIndexes.forEach(() => {
      let col = this.colGroup().children.at(delIndexes[0])
      if(!col || this.colGroup().children.at(delIndexes[0]).domNode !== this.colGroup().domNode.children[delIndexes[0]]){
        this.colGroup().domNode.removeChild(this.colGroup().domNode.children[delIndexes[0]])
      }else {
        col.remove();
      }
      
    });

    removedCells.forEach((cell) => {
      cell.remove();
    });

    modifiedCells.forEach((cell) => {
      const cellColspan = parseInt(cell.formats().colspan, 10);
      // const cellWidth = parseInt(cell.formats().width, 10);
      cell.format('colspan', cellColspan - delIndexes.length);
    });

    this.updateTableWidth();
  }

  deleteRow(compareRect, editorWrapper) {
    const [body] = this.descendants(TableBody);
    if (isNullOrUndefined(body) || isNullOrUndefined(body.children.head)) {
      return;
    }

    const tableCells = this.descendants(TableCell);
    const tableRows = this.descendants(TableRow);
    const removedCells = []; // cells to be removed
    const modifiedCells = []; // cells to be modified
    const fallCells = []; // cells to fall into next row

    tableCells.forEach((cell) => {
      const cellRect = getRelativeRect(cell.domNode.getBoundingClientRect(), editorWrapper);

      if (cellRect.y > compareRect.y - ERROR_LIMIT && cellRect.y1 < compareRect.y1 + ERROR_LIMIT) {
        removedCells.push(cell);
      } else if (cellRect.y < compareRect.y + ERROR_LIMIT && cellRect.y1 > compareRect.y1 - ERROR_LIMIT) {
        modifiedCells.push(cell);

        if (Math.abs(cellRect.y - compareRect.y) < ERROR_LIMIT) {
          fallCells.push(cell);
        }
      }
    });

    if (removedCells.length === tableCells.length) {
      this.tableDestroy();
      return;
    }

    // compute length of removed rows
    const removedRowsLength = this.rows().reduce((sum, row) => {
      const rowRect = getRelativeRect(row.domNode.getBoundingClientRect(), editorWrapper);

      if (rowRect.y > compareRect.y - ERROR_LIMIT && rowRect.y1 < compareRect.y1 + ERROR_LIMIT) {
        sum += 1;
      }
      return sum;
    }, 0);

    // it must execute before the table layout changed with other operation
    fallCells.forEach((cell) => {
      const cellRect = getRelativeRect(cell.domNode.getBoundingClientRect(), editorWrapper);
      const nextRow = cell.parent.next;
      const cellsInNextRow = nextRow.children;

      const refCell = cellsInNextRow.reduce((ref, compareCell) => {
        const compareCellRect = getRelativeRect(compareCell.domNode.getBoundingClientRect(), editorWrapper);
        if (cellRect.x1 - compareCellRect.x < ERROR_LIMIT) {
          ref = compareCell;
        }
        return ref;
      }, null);

      nextRow.insertBefore(cell, refCell);
      const curRowId = nextRow.formats().row;
      cell.format('row', curRowId);
      cell.children.forEach((cellLine) => {
        cellLine.format('row', curRowId);
      });
    });

    modifiedCells.forEach((cell) => {
      const cellRowspan = parseInt(cell.formats().rowspan, 10);
      const curRowspan = cellRowspan - removedRowsLength;
      cell.domNode.removeAttribute('style');
      cell.format('rowspan', curRowspan);
      cell.children.forEach((cellLine) => {
        cellLine.format('rowspan', curRowspan);
      });
    });

    removedCells.forEach((cell) => {
      cell.remove();
    });

    // fix: There will be a empty tr left if i delete the last row of a table,
    // this will cause the bottom border of the table to disappear,
    // and the empty tr will execute the matchTableRow method.
    tableRows.forEach((row) => {
      if (row.children.length === 0) {
        row.remove();
      }
    });
  }

  tableDestroy() {
    const quill = Quill.find(this.scroll.domNode.parentNode);
    const tableModule = quill.getModule('better-table');
    this.remove();
    tableModule.hideTableTools();
    quill.update(Quill.sources.USER);
  }

  insertCell(tableRow, ref, bg = '') {
    const id = cellId();
    const rId = tableRow.formats().row;
    const tableCell = this.scroll.create(
      TableCell.blotName,
      { ...CELL_DEFAULT, row: rId,}
    );
    tableCell.domNode.style.backgroundColor = bg
    const cellLine = this.scroll.create(TableCellLine.blotName, {
      row: rId,
      cell: id,
    });
    tableCell.appendChild(cellLine);

    if (ref) {
      tableRow.insertBefore(tableCell, ref);
    } else {
      tableRow.appendChild(tableCell);
    }
  }

  insertColumn(compareRect, colIndex, isRight = true, editorWrapper) {
    const [body] = this.descendants(TableBody);
    const [tableColGroup] = this.descendants(TableColGroup);
    const tableCols = this.descendants(TableCol);
    const addAsideCells = [];
    const modifiedCells = [];
    const affectedCells = [];

    if (isNullOrUndefined(body) || isNullOrUndefined(body.children.head)) {
      return;
    }
    const tableCells = this.descendants(TableCell);
    tableCells.forEach((cell) => {
      const cellRect = getRelativeRect(cell.domNode.getBoundingClientRect(), editorWrapper);

      if (isRight) {
        if (Math.abs(cellRect.x1 - compareRect.x1) < ERROR_LIMIT) {
          // the right of selected boundary equal to the right of table cell,
          // add a new table cell right aside this table cell
          addAsideCells.push(cell);
        } else if (compareRect.x1 - cellRect.x > ERROR_LIMIT && compareRect.x1 - cellRect.x1 < -ERROR_LIMIT) {
          // the right of selected boundary is inside this table cell
          // colspan of this table cell will increase 1
          modifiedCells.push(cell);
        }
      } else {
        if (Math.abs(cellRect.x - compareRect.x) < ERROR_LIMIT) {
          // left of selected boundary equal to left of table cell,
          // add a new table cell left aside this table cell
          addAsideCells.push(cell);
        } else if (compareRect.x - cellRect.x > ERROR_LIMIT && compareRect.x - cellRect.x1 < -ERROR_LIMIT) {
          // the left of selected boundary is inside this table cell
          // colspan of this table cell will increase 1
          modifiedCells.push(cell);
        }
      }
    });

    addAsideCells.forEach((cell) => {
      const ref = isRight ? cell.next : cell;
      const id = cellId();
      const tableRow = cell.parent;
      const rId = tableRow.formats().row;
      const cellFormats = cell.formats();
      const tableCell = this.scroll.create(
        TableCell.blotName,
        { ...CELL_DEFAULT, row: rId,
          rowspan: cellFormats.rowspan,}
      );
      const cellLine = this.scroll.create(TableCellLine.blotName, {
        row: rId,
        cell: id,
        rowspan: cellFormats.rowspan,
      });
      tableCell.appendChild(cellLine);

      if (ref) {
        tableRow.insertBefore(tableCell, ref);
      } else {
        tableRow.appendChild(tableCell);
      }
      affectedCells.push(tableCell);
    });

    // insert new tableCol
    const tableCol = this.scroll.create(TableCol.blotName, true);
    let colRef 
    if (isRight) {
      colRef = tableCols[colIndex] && tableCols[colIndex].next
    }else {
      colRef = tableCols[colIndex] 
    }
    
    if (colRef) {
      tableColGroup.insertBefore(tableCol, colRef);
    } else {
      tableColGroup.appendChild(tableCol);
    }

    modifiedCells.forEach((cell) => {
      const cellColspan = cell.formats().colspan;
      cell.format('colspan', parseInt(cellColspan, 10) + 1);
      affectedCells.push(cell);
    });

    affectedCells.sort((cellA, cellB) => {
      const y1 = cellA.domNode.getBoundingClientRect().y;
      const y2 = cellB.domNode.getBoundingClientRect().y;
      return y1 - y2;
    });

    this.updateTableWidth();
    return affectedCells;
  }

  insertRow(compareRect, isDown, editorWrapper) {
    const [body] = this.descendants(TableBody);
    if (isNullOrUndefined(body) || isNullOrUndefined(body.children.head)) {
      return;
    }

    const tableCells = this.descendants(TableCell);
    const rId = rowId();
    const newRow = this.scroll.create(TableRow.blotName, {
      row: rId,
    });
    const addBelowCells = [];
    const modifiedCells = [];
    const affectedCells = [];

    tableCells.forEach((cell) => {
      const cellRect = getRelativeRect(cell.domNode.getBoundingClientRect(), editorWrapper);

      if (isDown) {
        if (Math.abs(cellRect.y1 - compareRect.y1) < ERROR_LIMIT) {
          addBelowCells.push(cell);
        } else if (compareRect.y1 - cellRect.y > ERROR_LIMIT && compareRect.y1 - cellRect.y1 < -ERROR_LIMIT) {
          modifiedCells.push(cell);
        }
      } else {
        if (Math.abs(cellRect.y - compareRect.y) < ERROR_LIMIT) {
          addBelowCells.push(cell);
        } else if (compareRect.y - cellRect.y > ERROR_LIMIT && compareRect.y - cellRect.y1 < -ERROR_LIMIT) {
          modifiedCells.push(cell);
        }
      }
    });

    // ordered table cells with rect.x, fix error for inserting
    // new table cell in complicated table with wrong order.
    const sortFunc = (cellA, cellB) => {
      const x1 = cellA.domNode.getBoundingClientRect().x;
      const x2 = cellB.domNode.getBoundingClientRect().x;
      return x1 - x2;
    };
    addBelowCells.sort(sortFunc);

    addBelowCells.forEach((cell) => {
      const cId = cellId();
      const cellFormats = cell.formats();

      const tableCell = this.scroll.create(
        TableCell.blotName,
        { ...CELL_DEFAULT, row: rId, cell: cId, colspan: cellFormats.colspan}
      );
      const cellLine = this.scroll.create(TableCellLine.blotName, {
        row: rId,
        cell: cId,
        colspan: cellFormats.colspan,
      });
      const empty = this.scroll.create(Break.blotName);
      cellLine.appendChild(empty);
      tableCell.appendChild(cellLine);
      newRow.appendChild(tableCell);
      affectedCells.push(tableCell);
    });

    modifiedCells.forEach((cell) => {
      const cellRowspan = parseInt(cell.formats().rowspan, 10);
      cell.format('rowspan', cellRowspan + 1);
      affectedCells.push(cell);
    });

    const refRow = this.rows().find((row) => {
      const rowRect = getRelativeRect(row.domNode.getBoundingClientRect(), editorWrapper);
      if (isDown) {
        return Math.abs(rowRect.y - compareRect.y - compareRect.height) < ERROR_LIMIT;
      } else {
        return Math.abs(rowRect.y - compareRect.y) < ERROR_LIMIT;
      }
    });
    body.insertBefore(newRow, refRow);

    // reordering affectedCells
    affectedCells.sort(sortFunc);
    return affectedCells;
  }

  mergeCells(compareRect, mergingCells, rowspan, colspan, editorWrapper) {
    const mergedCell = mergingCells.reduce((result, tableCell, index) => {
      if (index !== 0) {
        if (result) {
          tableCell.moveChildren(result);
        }
        tableCell.remove();
      } else {
        tableCell.format('colspan', colspan);
        tableCell.format('rowspan', rowspan);
        result = tableCell;
        if (rowspan > 1) {
          // fix: 比较当前单元格高度样式与rowspan最小高度，小于则设置高度，不判断实际高度，因为合并时这一刻实际高度可能高于最小高度
          const minHeight = CELL_MIN_HEIGHT * rowspan + rowspan - 1;
          const cellHeight = parseInt(tableCell.domNode.style.height, 10) || 0;
          if (cellHeight < minHeight) {
            tableCell.domNode.style.height = `${minHeight}px`;
          }
        }
      }

      return result;
    }, null);

    const rId = mergedCell.domNode.getAttribute('data-row');
    const cId = mergedCell.children.head.domNode.getAttribute('data-cell');
    mergedCell.children.forEach((cellLine) => {
      cellLine.domNode.setAttribute('data-parent-bg',mergedCell.domNode.style.backgroundColor)
      if(cellLine.children['head'].domNode.style) {
        cellLine.children['head'].domNode.style.backgroundColor=mergedCell.domNode.style.backgroundColor
      }
       
      if (!cellLine.prev || cellLine.domNode.innerText.trim()) {
        cellLine.format('cell', cId);
        cellLine.format('row', rId);
        cellLine.format('colspan', colspan);
        cellLine.format('rowspan', rowspan);
      } else {
        cellLine.remove();
      }
    });

    return mergedCell;
  }

  unmergeCells(unmergingCells, editorWrapper) {
    let cellFormats: any = {};
    let cellRowspan = 1;
    let cellColspan = 1;

    unmergingCells.forEach((tableCell) => {
      const  tableCellBgColor = tableCell.domNode.style.backgroundColor
      cellFormats = tableCell.formats();
      cellRowspan = cellFormats.rowspan;
      cellColspan = cellFormats.colspan;

      if (cellColspan > 1) {
        const ref = tableCell.next;
        const row = tableCell.row();
        tableCell.format('colspan', 1);
        if(tableCell.domNode.children && tableCell.domNode.children[0].tagName === 'DIV' && tableCell.domNode.children[0].getAttribute('data-colspan')){
          tableCell.domNode.children[0].setAttribute('data-colspan', 1)
        }
        for (let colspanIndex = cellColspan; colspanIndex > 1; colspanIndex--) {
          this.insertCell(row, ref, tableCellBgColor);
        }
      }

      if (cellRowspan > 1) {
        let rowspanIndex = cellRowspan;
        let nextRow = tableCell.row().next;
        while (rowspanIndex > 1) {
          const refInNextRow = nextRow.children.reduce((result, cell) => {
            const compareRect = getRelativeRect(tableCell.domNode.getBoundingClientRect(), editorWrapper);
            const cellRect = getRelativeRect(cell.domNode.getBoundingClientRect(), editorWrapper);
            if (Math.abs(compareRect.x1 - cellRect.x) < ERROR_LIMIT) {
              result = cell;
            }
            return result;
          }, null);

          for (let colspanIndex = cellColspan; colspanIndex > 0; colspanIndex--) {
            this.insertCell(nextRow, refInNextRow, tableCellBgColor);
          }

          rowspanIndex -= 1;
          nextRow = nextRow.next;
        }

        tableCell.domNode.removeAttribute('style');
        if(tableCell.domNode.children && tableCell.domNode.children[0].tagName === 'DIV' && tableCell.domNode.children[0].getAttribute('data-rowspan')){
          tableCell.domNode.children[0].setAttribute('data-rowspan', 1)
        }
        tableCell.format('rowspan', 1);
      }
    });
  }

  emptyCells(selectedTds) {
    selectedTds.forEach((selectedTd) => {
      // 构造空的table cell line, 优先使用单元格已有rowId和cellId，避免从table-cell-line向上层td提交id时不一致导致错位
      const cellFormats = selectedTd.formats();
      const cellLine = this.scroll.create(TableCellLine.blotName, {
        row: cellFormats.row || rowId(),
        cell: cellFormats.cell || cellId(),
        rowspan: cellFormats.rowspan,
        colspan: cellFormats.colspan,
      });
      const empty = this.scroll.create(Break.blotName);
      cellLine.appendChild(empty);

      selectedTd.domNode.innerHTML = '';
      selectedTd.appendChild(cellLine);
    });
  }

  rows() {
    const body = this.children.tail;
    if (isNullOrUndefined(body)) {
      return [];
    }
    return body.children.map((row) => row);
  }
}
TableContainer.blotName = 'ql-table-container';
TableContainer.className = 'quill-better-table';
TableContainer.tagName = 'TABLE';

// @dynamic
class TableViewWrapper extends Container {
  static blotName: string;
  static tagName: string;
  static className: string;
  static allowedChildren: any;
  constructor(scroll, domNode) {
    super(scroll, domNode);
    const quill = Quill.find(scroll.domNode.parentNode);
    // fix: 只读模式时超长表格默认包含滚动条
    if (quill.options.readOnly) {
      domNode.style.overflow = 'auto';
    }
    domNode.addEventListener(
      'scroll',
      (e) => {
        const tableModule = quill.getModule('better-table');
        if (tableModule.columnTool) {
          tableModule.columnTool.domNode.scrollLeft = e.target.scrollLeft;
        }

        if (tableModule.tableSelection && tableModule.tableSelection.selectedTds.length > 0) {
          tableModule.tableSelection.repositionHelpLines();
        }
      },
      false
    );
  }
}
TableViewWrapper.blotName = 'table-view';
TableViewWrapper.className = 'quill-better-table-wrapper';
TableViewWrapper.tagName = 'DIV';

TableViewWrapper.allowedChildren = [TableContainer];
TableContainer.requiredContainer = TableViewWrapper;

TableContainer.allowedChildren = [TableBody, TableColGroup];
TableBody.requiredContainer = TableContainer;

TableBody.allowedChildren = [TableRow];
TableRow.requiredContainer = TableBody;

TableRow.allowedChildren = [TableCell];
TableCell.requiredContainer = TableRow;

TableCell.allowedChildren = [TableCellLine, Header, ListItem, ListContainer];
TableCellLine.requiredContainer = TableCell;

TableColGroup.allowedChildren = [TableCol];
TableColGroup.requiredContainer = TableContainer;

TableCol.requiredContainer = TableColGroup;

function rowId() {
  const id = Math.random().toString(36).slice(2, 6);
  return `row-${id}`;
}

function cellId() {
  const id = Math.random().toString(36).slice(2, 6);
  return `cell-${id}`;
}

function reduceFormats(domNode, formats) {
  return CELL_ATTRIBUTES.concat(CELL_IDENTITY_KEYS).reduce((tableFormats, attribute) => {
    if (domNode.hasAttribute(`data-${attribute}`)) {
      tableFormats[attribute] = domNode.getAttribute(`data-${attribute}`) || undefined;
    }
    return tableFormats;
  }, formats);
}

export {
  CELL_ATTRIBUTES,
  CELL_IDENTITY_KEYS,
  cellId,
  rowId,
  TableBody,
  TableCell,
  TableCellLine,
  TableCol,
  TableColGroup,
  TableContainer,
  TableRow,
  TableViewWrapper,
};

