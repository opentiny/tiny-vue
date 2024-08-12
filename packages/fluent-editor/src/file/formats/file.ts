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
    const fileSvg = '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326z m1.8 562H232V136h302v216c0 23.2 18.8 42 42 42h216v494z" p-id="2307"></path></svg>'
    node.innerHTML = `${fileSvg} ${value.title} (${fixSize} KB)`;
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
