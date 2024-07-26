import Quill from 'quill';
const Inline = Quill.imports['blots/inline'];

// @dynamic
class StrikeBlot extends Inline {
  static blotName: string;
  static className: string;
  static tagName: string;
  // 此处删除了formats方法，当前tag非span，则并不需要进行特殊处理去重写formats方法
}
StrikeBlot.blotName = 'strike';
StrikeBlot.tagName = 'u';
StrikeBlot.className = 'ql-custom-strike';

export default StrikeBlot;
