import * as Quill from 'quill';
import { isNullOrUndefined } from '../../config/editor.utils';
import { CELL_ATTRIBUTES, CELL_IDENTITY_KEYS } from '../table-config';

const Block = Quill.imports['blots/block'];

// @dynamic
class Header extends Block {
  static tagName: any;
  static blotName: string;
  domNode: any;
  replaceWith: any;
  parent: any;
  wrap: any;
  enforceAllowedChildren: any;
  uiNode: any;
  children: any;
  statics: any;
  appendChild: any;
  remove: any;
  cache: {};
  scroll: any;
  static create(value) {
    if (typeof value === 'string') {
      value = { value };
    }

    const node = super.create(value.value);

    CELL_IDENTITY_KEYS.forEach(key => {
      if (value[key]) { node.setAttribute(`data-${key}`, value[key]); }
    });

    CELL_ATTRIBUTES.forEach(key => {
      if (value[key]) { node.setAttribute(`data-${key}`, value[key]); }
    });

    return node;
  }

  static formats(domNode) {
    const formats: any = {};
    formats.value = this.tagName.indexOf(domNode.tagName) + 1;

    return CELL_ATTRIBUTES.concat(CELL_IDENTITY_KEYS).reduce((tableFormats, attribute) => {
      if (domNode.hasAttribute(`data-${attribute}`)) {
        tableFormats[attribute] = domNode.getAttribute(`data-${attribute}`) || undefined;
      }
      return tableFormats;
    }, formats);
  }

  format(name, value) {
    // fix: 在标题处粘贴内容，会导致该粘贴内容的格式错误
    if (Object.prototype.toString.call(value) === '[object Object]') {
      value = value.value;
    }
    const headerDom: any = Header.formats(this.domNode);
    const { row, cell, rowspan, colspan } = headerDom;
    if (name === Header.blotName) {
      if (value) {
        super.format(name, {
          value,
          row,
          cell,
          rowspan,
          colspan
        });
      } else {
        if (row) {
          this.replaceWith('table-cell-line', {
            row,
            cell,
            rowspan,
            colspan
          });
        } else {
          super.format(name, value);
        }
      }
    } else {
      super.format(name, value);
    }
  }

  optimize(context) {
    const { row, cell, rowspan, colspan } = Header.formats(this.domNode);

    if (row && this.parent.statics.blotName !== 'table') {
      this.wrap('table', {
        row,
        cell,
        colspan,
        rowspan
      });
    }

    // ShadowBlot optimize
    this.enforceAllowedChildren();
    if (!isNullOrUndefined(this.uiNode) && this.uiNode !== this.domNode.firstChild) {
      this.domNode.insertBefore(this.uiNode, this.domNode.firstChild);
    }
    if (this.children.length === 0) {
      if (!isNullOrUndefined(this.statics.defaultChild)) {
        const child = this.scroll.create(this.statics.defaultChild.blotName);
        this.appendChild(child);
        // TODO double check if necessary
        // child.optimize(context);
      } else {
        this.remove();
      }
    }
    // Block optimize
    this.cache = {};
  }
}

Header.blotName = 'header';
Header.tagName = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];

export default Header;
