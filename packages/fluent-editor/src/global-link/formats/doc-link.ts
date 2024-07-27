import Quill from 'quill';
import { ON_DOC_LINK_REMOVE } from '../constants';

const Embed = Quill.imports['blots/embed'];

// @dynamic
class DocumentLink extends Embed {
  static blotName: string;
  static tagName: string;
  static className: string;
  docData: any;
  scroll: any;

  static create(value) {
    const node = super.create(value);
    node.setAttribute('href', value.link);
    node.setAttribute('title', value.text);
    node.setAttribute('target', '_blank');
    node.setAttribute('icon-link', value.icon);

    const icon = document.createElement('span');
    icon.classList.add('ql-doc-link-icon');
    icon.style.background = `url(${value.icon}) no-repeat center`;
    icon.style.backgroundSize = 'contain';

    node.insertAdjacentElement('afterbegin', icon);
    const text = document.createTextNode(value.text);
    node.appendChild(text);
    return node;
  }

  static value(domNode) {
    return {
      link: domNode.getAttribute('href'),
      icon: domNode.getAttribute('icon-link'),
      text: domNode.textContent,
    };
  }

  constructor(scroll, domNode, data) {
    super(scroll, domNode, data);
    this.docData = data;
  }

  remove() {
    this.scroll.emitter.emit(ON_DOC_LINK_REMOVE, this.docData);
    return super.remove();
  }
}

DocumentLink.blotName = 'doc-link';
DocumentLink.tagName = 'A';
DocumentLink.className = 'ql-doc-link';

export default DocumentLink;
