import Quill from 'quill';
import { sanitize } from '../../config/editor.utils';

const Embed = Quill.imports['blots/embed'];
const FILE_ATTRIBUTES = ['id', 'title', 'size', 'lastModified'];

class File extends Embed {
  static blotName: string;
  static tagName: string;
  static className: string;
  static PROTOCOL_WHITELIST: string[];
  statics: any;
  domNode: any;

  static create(value) {
    const node = super.create(value);
    const size = value.size / 1024;
    const fixSize = !size ? 0 : size < 1 ? 1 : size.toFixed(0);
    node.classList.add('icon-file');
    node.setAttribute('contenteditable', false);
    node.innerText = `${value.title} (${fixSize} KB)`;
    const src = File.sanitize(value.src);
    if (src) {
      node.href = src;
      node.target = '_blank';
    }
    FILE_ATTRIBUTES.forEach((key) => {
      if (value[key]) {
        node.dataset[key] = value[key];
      }
    });
    return node;
  }

  static value(domNode) {
    return File.getFormats(domNode);
  }

  static formats(domNode) {
    return File.getFormats(domNode);
  }

  static getFormats(domNode) {
    const formats: any = {};
    const href = File.sanitize(domNode.href);
    if (href) {
      formats.src = href;
    }
    FILE_ATTRIBUTES.forEach((key) => {
      if (domNode.dataset[key]) {
        formats[key] = domNode.dataset[key];
      }
    });
    return formats;
  }

  static sanitize(url) {
    return (sanitize(url, this.PROTOCOL_WHITELIST) && url) || '';
  }
}
File.blotName = 'file';
File.tagName = 'A';
File.className = 'ql-file-item';
File.PROTOCOL_WHITELIST = ['http', 'https'];

export default File;
