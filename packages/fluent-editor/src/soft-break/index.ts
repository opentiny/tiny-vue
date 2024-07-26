import Quill from 'quill';

const Embed = Quill.imports['blots/embed'];

class SoftBreak extends Embed {
  static blotName: string;
  static tagName: string;
  static className: string;
  domNode: any;
  prev: any;
  next: any;
  remove: () => {};

  static create() {
    const node = super.create();
    return node;
  }

  optimize() {
    // li的开头结尾，移除软回车
    if (this.prev === null) {
      this.remove();
    }
  }

  length() {
    return 1;
  }
}
SoftBreak.blotName = 'soft-break';
SoftBreak.tagName = 'BR';
SoftBreak.className = 'ql-soft-break';

export default SoftBreak;
