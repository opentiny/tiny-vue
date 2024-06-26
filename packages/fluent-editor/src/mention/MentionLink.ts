import * as Quill from 'quill';
import { DEFAULT_MENTION_CHAR, MENTION_CHAR, ON_MENTION_LINK_REMOVE } from './constants';

const Embed = Quill.imports['blots/embed'];

// @dynamic
class MentionLink extends Embed {
  static blotName: string;
  static tagName: string;
  static className: string;
  scroll: any;
  mentionData: any;

  static create(data) {
    const node = super.create(data);
    node.dataset.mentionId = data.name || (data.mention && data.mention[data.searchKey || 'name']) || '';
    node.setAttribute('title', data.text);
    node.setAttribute(MENTION_CHAR, data.char);
    node.textContent = data.char + data.text;
    return node;
  }

  static value(domNode) {
    const
      char = domNode.getAttribute(MENTION_CHAR) || DEFAULT_MENTION_CHAR;
    const text = domNode.getAttribute('title');
    const name = domNode.dataset.mentionId;
    return { char, text, name };
  }

  constructor(scroll, domNode, data) {
    super(scroll, domNode, data);
    this.mentionData = data;
  }
  value() {
    // fix: 将@提醒内容加入到 Delta 里，以解决输入空格，@提醒内容被删除的问题
    // return ' ';
    return super.value();
  }
  remove() {
    this.scroll.emitter.emit(ON_MENTION_LINK_REMOVE, this.mentionData);
    return super.remove();
  }
}

MentionLink.blotName = 'mention';
MentionLink.tagName = 'span';
MentionLink.className = 'ql-mention-link';
export { MentionLink as default };
