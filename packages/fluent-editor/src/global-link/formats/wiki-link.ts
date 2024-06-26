import * as Quill from 'quill';
import { ON_WIKI_LINK_REMOVE } from '../constants';

const Embed = Quill.imports['blots/embed'];

// @dynamic
class WikiLink extends Embed {
  static blotName: string;
  static tagName: string;
  static className: string;
  wikiData: any;
  scroll: any;

  static create(value) {
    const node = super.create(value);
    node.setAttribute('href', value.link);
    node.setAttribute('target', '_blank');
    node.setAttribute('title', value.text);
    node.textContent = value.text;
    return node;
  }

  static value(domNode) {
    return {
      link: domNode.getAttribute('href'),
      text: domNode.textContent,
    };
  }

  constructor(scroll, domNode, data) {
    super(scroll, domNode, data);
    this.wikiData = data;
  }

  remove() {
    this.scroll.emitter.emit(ON_WIKI_LINK_REMOVE, this.wikiData);
    return super.remove();
  }
}

WikiLink.blotName = 'wiki-link';
WikiLink.tagName = 'A';
WikiLink.className = 'ql-wiki-link';

export default WikiLink;
