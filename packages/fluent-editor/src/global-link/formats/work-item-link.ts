import Quill from 'quill';
import { ON_WORK_ITEM_LINK_REMOVE } from '../constants';
import { createTable } from '../utils/createTable';
const BlockEmbed = Quill.imports['blots/block/embed'];

// @dynamic
class WorkItemLink extends BlockEmbed {
  static blotName: string;
  static tagName: string;
  static className: string;
  workItemData: any;
  scroll: any;

  static create(value) {
    const node = super.create(value);
    node.setAttribute('contenteditable', 'false');
    node.setAttribute('href', value.link);
    node.setAttribute('__work_item_data__', JSON.stringify(value.data));
    const table = createTable(value.data);
    node.appendChild(table);
    return node;
  }

  static value(domNode) {
    return {
      link: domNode.getAttribute('href'),
      data: JSON.parse(domNode.getAttribute('__work_item_data__'))
    };
  }

  constructor(scroll, domNode, data) {
    super(scroll, domNode, data);
    this.workItemData = data;
  }

  remove() {
    this.scroll.emitter.emit(ON_WORK_ITEM_LINK_REMOVE, this.workItemData);
    return super.remove();
  }
}

WorkItemLink.blotName = 'work-item-link';
WorkItemLink.tagName = 'div';
WorkItemLink.className = 'ql-work-item-link';

export default WorkItemLink;
