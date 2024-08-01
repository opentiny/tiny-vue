import Quill from 'quill';
import { CELL_ATTRIBUTES, CELL_IDENTITY_KEYS } from '../table-config';

const Block = Quill.imports['blots/block'];
const Container = Quill.imports['blots/container'];

// @dynamic
class ListContainer extends Container {
  static allowedChildren: any;
  static blotName: string;
  static tagName: string;
  replaceWith: any;
  domNode: any;
  parent: any;
  statics: any;
  wrap: any;

  format(name, value) {
    const { row, cell, rowspan, colspan } = this.domNode.dataset;
    if (name === ListContainer.blotName) {
      if (value) {
        super.format(name, { row, cell, rowspan, colspan });
      } else if (row) {
        this.replaceWith('table-cell-line', { row, cell, rowspan, colspan });
      }
    }
  }
}
/**
 * bugfix: quill源码中(quill/core/editor.js 272行)在处理拷贝时
 *         hard code了这个blotName用于处理ol中的li。所以在quill
 *         源码内写法不变的情况下这个名字不能改，否则拷贝有bug
 */
ListContainer.blotName = 'list-container';
ListContainer.tagName = 'OL';

// @dynamic
class ListItem extends Block {
  static blotName: string;
  static tagName: string;
  static requiredContainer: typeof ListContainer;
  statics: any;
  attachUI: any;
  domNode: any;
  replaceWith: any;
  parent: any;
  wrap: any;
  children: any;
  prev: any;
  remove: () => {};

  static create(value) {
    const node = super.create();
    if (typeof value === 'string') {
      value = { value };
    } else {
      [...CELL_IDENTITY_KEYS, ...CELL_ATTRIBUTES].forEach(key => {
        if (value[key]) {
          node.dataset[key] = value[key];
        }
      });
    }
    node.classList.add(value.value);
    return node;
  }

  static formats(domNode) {
    const formats: any = {};
    formats.value = domNode.classList.item(0) || undefined;

    return [...CELL_ATTRIBUTES, ...CELL_IDENTITY_KEYS].reduce((tableFormats, key) => {
      if (domNode.dataset[key]) {
        tableFormats[key] = domNode.dataset[key];
      }
      return tableFormats;
    }, formats);
  }

  static register() {
    Quill.register({ 'formats/list-container': ListContainer }, true);
  }

  constructor(scroll, domNode) {
    super(scroll, domNode);
    const quill = Quill.find(scroll.domNode.parentNode);
    const range = quill.getSelection();
    if (range) {
      const [line] = quill.getLine(range.index);
      const td = line.domNode.closest('td');
      if (td) {
        [...CELL_IDENTITY_KEYS, ...CELL_ATTRIBUTES].forEach(key =>
          td.dataset[key] && domNode.setAttribute(`data-${key}`, td.dataset[key]));
      }
    }

    const ui = domNode.ownerDocument.createElement('span');
    const listEventHandler = e => {
      if (!scroll.isEnabled()) { return; }
      const { value } = this.statics.formats(domNode, scroll);
      if (value === 'checked') {
        this.format('list', 'unchecked');
        e.preventDefault();
      } else if (value === 'unchecked') {
        this.format('list', 'checked');
        e.preventDefault();
      }
    };
    ui.addEventListener('mousedown', listEventHandler);
    ui.addEventListener('touchstart', listEventHandler);
    this.attachUI(ui);
  }

  format(name, value) {
    if (name !== ListItem.blotName) {
      super.format(name, value);
      return;
    }
    const type = (value && typeof value === 'object') ? value.value : value;
    const oldClass = this.domNode.classList[0];
    const tdDom = this.domNode.closest('.editing-select-able');
    const tableCellBlot = tdDom && Quill.find(tdDom);
    const images = this.domNode.querySelectorAll('img[data-image-id]');
    if (!type || type === oldClass) {
      // 消除格式或相同list抵消格式时恢复图片对齐，li转化为table-cell-line
      if (images && images.length) {
        images.forEach(img => {img.style.verticalAlign = 'baseLine';});
      }
      if (tableCellBlot && tableCellBlot.statics.blotName === 'table') {
        const tableCellFormats = tableCellBlot.formats();
        this.replaceWith('table-cell-line', tableCellFormats);
        // fix: 移除list格式时移除父级的ol或ul，避免table-cell-line判断无td自动生成td容器
        if (this.parent.statics.blotName === ListContainer.blotName) {
          this.parent.unwrap();
        }
      } else {
        super.format(name, value);
      }
    } else if (oldClass) {
      this.domNode.className = this.domNode.className.replace(oldClass, type);
    } else {
      this.domNode.classList.add(type);
    }
  }

  optimize(context) {
    // 判断前一个li是否包含软回车，如果包含则将当前li与之合并后移除
    const tail = this.prev && this.prev.domNode.lastChild;
    if (tail && tail.className && tail.className.indexOf('ql-soft-break') >= 0) {
      // 合并dom
      this.domNode.childNodes.forEach((v, i) => {
        if (i > 0) {
          this.prev.domNode.appendChild(v);
        }
      });
      this.remove();
      return;
    }

    super.optimize(context);

    // list类型
    const parentFormats = getFormats(this.parent.domNode);
    const formats = ListItem.formats(this.domNode);
    // 单元格属性
    const data = this.domNode.dataset || [];
    const images = this.domNode.querySelectorAll('img[data-image-id]');

    // li更新后判断父容器的对应属性是否与自身一致，如果不一致则向上覆盖
    if (parentFormats.list !== formats.value) {
      const oldClass = this.parent.domNode.classList[0];
      if (oldClass) {
        this.parent.domNode.className = this.parent.domNode.className.replace(oldClass, formats.value);
      } else {
        this.parent.domNode.classList.add(formats.value);
      }
    }

    if (data.cell && !parentFormats.cell) {
      [...CELL_IDENTITY_KEYS, ...CELL_ATTRIBUTES].forEach(key =>
        (formats[key] || data[key]) && this.parent.domNode.setAttribute(`data-${key}`, formats[key] || data[key]));
      // 如果父容器不在表格内则用单元格包裹
      if (this.parent.parent.statics.blotName !== 'table') {
        delete formats['list'];
        this.wrap('table', formats);
      }
    }

    // 当list中包含图片时，设置图片顶对齐
    if (images) {
      images.forEach(img => {img.style.verticalAlign = 'top';});
    }
  }
}

ListItem.blotName = 'list';
ListItem.tagName = 'LI';

ListContainer.allowedChildren = [ListItem];
ListItem.requiredContainer = ListContainer;

// 属性读取方法：兼容table-cell-line、ol、li
// 因为构造时当前range对应的元素最开始是table-cell-line，然后是li，且ol的formats方法不允许覆写，会导致报错，所以整合一个兼容方法来读取需要的属性。
function getFormats(dom): any {
  const formats = {};

  if (dom.tagName === 'OL') {
    formats['list'] = dom.classList.item(0);
  }

  return [...CELL_ATTRIBUTES, ...CELL_IDENTITY_KEYS].reduce((tableFormats, attribute) => {
    if (dom.hasAttribute(`data-${attribute}`)) {
      tableFormats[attribute] = dom.getAttribute(`data-${attribute}`) || undefined;
    }
    return tableFormats;
  }, formats);
}

export { ListContainer, ListItem as default };

