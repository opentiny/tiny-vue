import * as Quill from 'quill';
import { isNullOrUndefined, sanitize } from '../config/editor.utils';
const Embed = Quill.imports['blots/embed'];
const Inline = Quill.imports['blots/inline'];

const ATTRIBUTES = ['alt', 'height', 'width', 'image-id'];

// @dynamic
class CustomImage extends Embed {
  static ID_SEED = 0;
  static blotName: string;
  static tagName: string;
  domNode: any;
  parent: any;
  scroll: any;
  next: any;
  static create(value) {
    const node = super.create(value);
    const url = typeof value === 'string' ? value : value.src;
    if (url) {
      const imgURL = this.sanitize(url);
      if (!imgURL?.startsWith('data:image')) {
        node.dataset.src = imgURL;
      }
      node.setAttribute('src', imgURL);
    }
    node.setAttribute('data-image-id', 'img' + CustomImage.ID_SEED++);
    node.setAttribute('devui-editorx-image', true);
    node.style.verticalAlign = 'baseline';
    return node;
  }

  static formats(domNode) {
    return ATTRIBUTES.reduce((formats, attribute) => {
      if (domNode.hasAttribute(attribute)) {
        formats[attribute] = domNode.getAttribute(attribute);
      }
      return formats;
    }, {});
  }

  static match(url) {
    return /\.(jpe?g|gif|png)$/.test(url) || /^data:image\/.+;base64/.test(url);
  }

  static register() {
    if (/Firefox/i.test(navigator.userAgent)) {
      setTimeout(() => {
        // Disable image resizing in Firefox
        document.execCommand('enableObjectResizing', false, null);
      }, 1);
    }
  }

  static sanitize(url) {
    return sanitize(url, ['http', 'https', 'data']) ? url : '//:0';
  }

  static value(domNode) {
    const formats: any = {};
    const imageSrc = domNode.getAttribute('src');
    formats.src = this.sanitize(imageSrc);
    formats.hasExisted = domNode.getAttribute('devui-editorx-image');
    formats.imageId = domNode.dataset.imageId;
    return formats;
  }

  format(name, value) {
    if (ATTRIBUTES.indexOf(name) > -1) {
      if (value) {
        this.domNode.setAttribute(name, value);
      } else {
        this.domNode.removeAttribute(name);
      }
    } else {
      super.format(name, value);
    }
  }

  unWrap() {
    this.parent.replaceWith(this);
  }

  wrap(name, value) {
    const wrapper = typeof name === 'string' ? this.scroll.create(name, value) : name;
    if (!isNullOrUndefined(this.parent)) {
      this.parent.insertBefore(wrapper, this.next || undefined);
    }
    if (typeof wrapper.appendChild !== 'function') {
      throw new Error(`Cannot wrap ${name}`);
    }
    wrapper.appendChild(this);
    return wrapper;
  }
}
CustomImage.blotName = 'image';
CustomImage.tagName = 'IMG';

// @dynamic
class CustomImageContainer extends Inline {
  static tagName: string;
  static className: string;
  static blotName: string;
  static allowedChildren: typeof CustomImage[];
  constructor(scroll, domNode) {
    super(scroll, domNode);
    domNode.setAttribute('contenteditable', false);
  }
}
CustomImageContainer.blotName = 'image-container';
CustomImageContainer.className = 'ql-image-container';
CustomImageContainer.tagName = 'DIV';

CustomImageContainer.allowedChildren = [CustomImage];
export { CustomImageContainer as ImageContainerBlot, CustomImage as default };

