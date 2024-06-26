import * as Quill from 'quill';
import emojiMap from '../emoji-map';

const Embed = Quill.imports['blots/embed'];

// @dynamic
class EmojiBlot extends Embed {
  static emojiClass: string;
  static emojiPrefix: any;
  static tagName: string;
  static blotName: string;
  static className: string;
  static create(value) {
    const node = super.create();
    if (typeof value === 'object') {
      EmojiBlot.buildSpan(value, node);
    } else if (typeof value === 'string') {
      const valueObj = emojiMap[value];
      if (valueObj) {
        EmojiBlot.buildSpan(valueObj, node);
      }
    }
    // 修复在emoji后输入中文插入其中导致quill不能识别
    node.setAttribute('contenteditable', false);
    return node;
  }

  static value(node) {
    return node.dataset.name;
  }

  static buildSpan(value, node) {
    node.setAttribute('data-name', value.name);
    const emojiSpan = document.createElement('span');
    emojiSpan.classList.add(this.emojiClass);
    emojiSpan.classList.add(this.emojiPrefix + value.name);
    // unicode can be '1f1f5-1f1ea',see emoji-list.js.
    emojiSpan.innerText = String.fromCodePoint(...EmojiBlot.parseUnicode(value.unicode));
    node.appendChild(emojiSpan);
  }
  static parseUnicode(string) {
    return string.split('-').map(str => parseInt(str, 16));
  }
}

EmojiBlot.blotName = 'emoji';
EmojiBlot.className = 'ql-emojiblot';
EmojiBlot.tagName = 'span';
EmojiBlot.emojiClass = 'ap';
EmojiBlot.emojiPrefix = 'ap-';

export default EmojiBlot;
