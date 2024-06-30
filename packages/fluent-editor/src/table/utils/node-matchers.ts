import * as Quill from 'quill';
import { omit, splitWithBreak } from '../../config/editor.utils';
import { cellId as tableCellId, rowId as tableRowId, TableViewWrapper } from '../formats/table';
import { CELL_MIN_WIDTH } from '../table-config';

const Delta = Quill.imports['delta'];
const InlineBlot = Quill.imports.parchment.InlineBlot;

// rebuild delta
export function matchTableCell(node, delta) {
  // fix: 移除旧数据中的pt高度,避免由于高度平均分导致无法插入行
  if (node.style.height.indexOf('pt')) {
    node.removeAttribute('style');
  }

  const row = node.parentNode;
  let rowId = row.dataset.row;
  if (!rowId) {
    rowId = row.dataset.row = tableRowId();
  }
  let cellId = node.dataset.cell;
  // fix: dataset.cell in td will be 'undefined' when insert row/column
  if (!cellId || cellId === 'undefined') {
    cellId = tableCellId();
  }
  const colspan = node.getAttribute('colspan') || 1;
  const rowspan = node.getAttribute('rowspan') || 1;

  // fix: empty table cells copied from other place will be removed unexpectedly
  if (delta.length() === 0) {
    delta = new Delta().insert('\n', {
      'table-cell-line': { row: rowId, cell: cellId, rowspan, colspan },
    });
    return delta;
  }

  delta = delta.reduce((newDelta, op) => {
    if (op.insert && typeof op.insert === 'string') {
      const lines = splitWithBreak(op.insert);

      lines.forEach((text) => {
        if (text === '\n') {
          let attributes = {};
          const cellAttributes = {
            row: rowId,
            cell: cellId,
            rowspan,
            colspan,
          };
          if (op.attributes['table']) {
            delete op.attributes.table;
          }
          switch (true) {
          case !!op.attributes['header']:
            attributes = Object.assign(op.attributes['header'], cellAttributes);
            break;
          case !!op.attributes['list']:
            attributes = { list: Object.assign(op.attributes['list'], cellAttributes) };
            break;
          default:
            attributes = { 'table-cell-line': cellAttributes };
          }
          // fix: when td has background-color, quill can't set it to table-cell bolt
          if (op.attributes['background'] && attributes['table-cell-line']) {
            attributes['table-cell-line']['tdBgColor'] = op.attributes['background'];
          }
          newDelta.insert('\n', Object.assign(op.attributes, attributes));
        } else {
          newDelta.insert(text, omit(op.attributes, ['table', 'table-cell-line', 'header', 'list']));
        }
      });
    } else {
      newDelta.insert(op.insert, op.attributes);
    }

    return newDelta;
  }, new Delta());

  // fix: table cell height becomes larger(because insert unnecessary <div> on both sides of cell) when init table ngModel
  const regexp = /^[\n]+$/;
  const firstDelta = delta.ops[0];
  if (delta.ops.length >= 3) {
    const lastDelta = delta.ops[delta.ops.length - 1];
    if (regexp.test(firstDelta.insert) && firstDelta.attributes['table-cell-line']) {
      delta.ops.splice(0, 1);
    }
    if (regexp.test(lastDelta.insert) && lastDelta.attributes['table-cell-line']) {
      delta.ops[delta.ops.length - 1].insert = '\n';
    }
  } else if (delta.ops.length === 1 && regexp.test(firstDelta.insert) && firstDelta.attributes['table-cell-line']) {
    delta.ops[0].insert = '\n';
  }

  return delta;
}

// replace th tag with td tag
export function matchTableHeader(node, delta, scroll) {
  const row = node.parentNode;
  const cells = Array.from(row.querySelectorAll('th'));
  let rowId = row.dataset.row;
  if (!rowId) {
    rowId = row.dataset.row = tableRowId();
  }
  const cellId = cells.indexOf(node) + 1;
  const colspan = node.getAttribute('colspan') || false;
  const rowspan = node.getAttribute('rowspan') || false;

  // fix: empty table cells copied from other place will be removed unexpectedly
  if (delta.length() === 0) {
    delta = new Delta().insert('\n', {
      'table-cell-line': { row: rowId, cell: cellId, rowspan, colspan },
    });
    return delta;
  }

  delta = delta.reduce((newDelta, op) => {
    if (op.insert && typeof op.insert === 'string') {
      const lines = splitWithBreak(op.insert);

      // fix: no '\n' in the end of op.insert, push a '\n' to lines
      if (lines[lines.length - 1] !== '\n') {
        lines.push('\n');
      }

      lines.forEach((text) => {
        text === '\n'
          ? newDelta.insert('\n', { 'table-cell-line': { row: rowId, cell: cellId, rowspan, colspan } })
          : newDelta.insert(text, op.attributes);
      });
    } else {
      newDelta.insert(op.insert, op.attributes);
    }

    return newDelta;
  }, new Delta());

  delta = delta.reduce((newDelta, op) => {
    if (op.insert && typeof op.insert === 'string' && op.insert.startsWith('\n')) {
      newDelta.insert(op.insert, { 'table-cell-line': { row: rowId, cell: cellId, rowspan, colspan }});
    } else {
      newDelta.insert(op.insert, { ...omit(op.attributes, ['table', 'table-cell-line'])});
    }

    return newDelta;
  }, new Delta());

  return delta;
}

// supplement colgroup and col
export function matchTable(node, delta, scroll) {
  let isWordTable =  node.children.length === 1 
  if (!(node instanceof Element)) {
    return;
  }
  const getMaxColNumber = (tds)=>{
    if(isWordTable){
      return tds.length
    }
    let colsNumber = 0
    tds.forEach(td=>{
      colsNumber += td.colSpan
    })
    return Math.max(tds.length, colsNumber)
  }

  const checkMinWidth = (width) => {
    if (Number.isNaN(width)) {
      // 无指定值时默认为auto，待渲染后修正
      return { 'table-col': { width: 'auto' } };
    } else if (width < CELL_MIN_WIDTH) {
      // 当列宽度小于默认宽度时取默认宽度
      return { 'table-col': true };
    } else {
      // 大于默认值取实际指定值
      return { 'table-col': { width: width } };
    }
  };

  // fix: a table with an empty tr is invalid, should not be displayed
  const rows = node.querySelectorAll('tr');
  const topRow = rows[0];
  const onlyEmptyTr = rows.length === 1 && !topRow.querySelector('td');

  // fix: empty table will return empty delta
  if (!topRow || onlyEmptyTr) {
    return new Delta().insert('\n');
  }

  const colsNumber = node.querySelectorAll('col').length;
  let maxCellsNumber = 0;
  let maxCells;
  // 遍历行获取最大列数和该行的所有单元格
  Array.prototype.slice.call(rows).forEach((row) => {
    const tds = row.querySelectorAll('td');
      maxCellsNumber = Math.max(getMaxColNumber(tds), maxCellsNumber);
      maxCells = tds;
  });
  

  // 列的累计器
  let colCount = 0;
  delta = delta.reduce((newDelta, op) => {
    // 当colCount与colsNumber相等时，则补充相差列
    if (colCount === colsNumber) {
      const fillNumber = maxCellsNumber - colCount;
      const outset = colCount;
      // index为差值列索引，通过遍历差值得到mexCells行中对应索引的单元格宽度
      for (let i = 0; i < fillNumber; i++) {
        const index = outset + i;
        const colWidth = parseInt(
          index<maxCells.length ? 
          maxCells[index].width :
          // maxCells[index].style && maxCells[index].style.width ? maxCells[index].style.width :
          maxCells[maxCells.length-1].width,
           10);
        newDelta.insert('\n', checkMinWidth(colWidth));
        colCount++;
      }
    }
    const attr = op.attributes || {};
    switch (true) {
    case !!attr['table-col']:
      // 只有当前列数小于实际总列数才操作，所以不存在大于的情况
      if (colCount < maxCellsNumber) {
        // 当table-col宽度一致时会合并为单一insert，insert长度大于1，截取符合实际总列数的长度来插入
        const insert = op.insert.slice(0, maxCellsNumber);
        const colWidth = parseInt(attr['table-col']['width'], 10);
        newDelta.insert(insert, checkMinWidth(colWidth));
        colCount += insert.length;
      }
      break;
    case !!attr['notFilled']:
    {      // 将标记的空tr填充对应列数的单元格
      const rowId = tableRowId();
      for (let x = 0; x < maxCellsNumber; x++) {
        newDelta.insert('\n', { 'table-cell-line': { row: rowId, cell: tableCellId(), rowspan: 1, colspan: 1 } });
      }
      break;}
    default:
      newDelta.insert(op.insert, op.attributes);
    }
    return newDelta;
  }, new Delta());


  const tableItem = node.closest('.quill-better-table-wrapper') || node;
  const prevBlot = tableItem.previousElementSibling && scroll.query(tableItem.previousElementSibling);
  const nextBlot = tableItem.nextElementSibling && scroll.query(tableItem.nextElementSibling);
  // fix: prevent two adjacent tables from sticking together
  if (!nextBlot || nextBlot.prototype instanceof InlineBlot) {
    delta = delta.insert('\n');
  }
  // fix: When there is no line break in front of the table, pressing the Enter key will cause a problem with the table.
  if (!prevBlot || prevBlot.prototype instanceof InlineBlot) {
    const newLine = new Delta().insert('\n');
    delta = newLine.concat(delta);
  }
  if (nextBlot === TableViewWrapper) {
    delta = delta.insert('\n');
  }

  return delta;
}

export function matchTableRow(node, delta) {
  // fix: 处理空<tr>标签被忽略的情况
  if (delta.ops.length === 1 && !delta.ops[0].attributes) {
    delta = new Delta().insert('\n', { notFilled: true });
  }
  return delta;
}

// match h tags, distinguish between headers in the table and headers outside the table
export function matchHeader(node, delta) {
  const newDelta = new Delta();
  const fontSize = node.style.fontSize;
  delta.forEach((op) => {
    newDelta.insert(
      op.insert,
      Object.assign(op.attributes, {
        size: fontSize,
      })
    );
  });
  return newDelta;
}

export function matchList(node, delta) {
  const value = node.tagName === 'UL' ? 'bullet' : 'ordered';
  delta.forEach((op) => {
    if (typeof op.attributes.list === 'string') {
      delete op.attributes.list;
    } else if (typeof op.attributes.list === 'object' && !op.attributes.list['value']) {
      op.attributes.list['value'] = value;
    }
  });
  return delta;
}

export function matchInline(node, delta, scroll) {
  const quill = Quill.find(scroll.domNode.parentNode);
  const currentRange = quill.getSelection();
  const formats = currentRange && quill.getFormat(currentRange);
  if (
    formats &&
    formats['table-cell-line'] && // 当前光标节点在表格内，否则不操作delta
    node.nextElementSibling
  ) {
    // 插入节点是否存在下一个兄弟元素
    const match = scroll.query(node);
    const nodeHtml = node.nextElementSibling.innerHTML;
    const nodeText = node.nextElementSibling.innerText;
    if (
      (match && match.prototype instanceof InlineBlot) || // 判断当前节点是否为内联
      (node.tagName === 'P' && nodeHtml !== nodeText)
    ) {
      // 非内联时如果为P且下一个不为text节点
      delta.forEach((op) => {op.insert += '\n';});
    }
  }
  return delta;
}

// 匹配 word 自带的 v:shape 标签中的图片 v:imageData
export function matchWordShapeImage(node, delta) {
  if (node) {
    const imageUrl = node.attributes.src?.nodeValue;
    delta = new Delta().insert({ image: imageUrl });
  }
  return delta;
}

export function matchMentionLink(node, delta, scroll) {
  const name = node.dataset.mentionId;
  if (name) {
    const quill = Quill.find(scroll.domNode.parentNode);
    const mention = quill.getModule('mention');
    if (mention) {
      mention.options.search(name).then((res) => {
        const [item] = res;
        if (item) {
          mention.options.select(item);
        }
      });
    }
  }
  return delta;
}
