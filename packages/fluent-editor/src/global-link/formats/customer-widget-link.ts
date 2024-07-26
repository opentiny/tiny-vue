import Quill from 'quill';

const BlockEmbed = Quill.imports['blots/block/embed'];

// @dynamic
class CustomerWidgetLink extends BlockEmbed {
  static blotName: string;
  static tagName: string;
  static className: string;

  static create(value) {
    const node = super.create(value);
    node.setAttribute('data-widget-type', value.type);
    node.setAttribute('data-widget-id', value.id);
    node.setAttribute('src', value.value);
    return node;
  }

  static value(domNode) {
    return {
      type: domNode.getAttribute('data-widget-type'),
      id: domNode.getAttribute('data-widget-id'),
      value: domNode.getAttribute('src'),
    };
  }

  constructor(scroll, domNode, data) {
    super(scroll, domNode, data);
  }

}

CustomerWidgetLink.blotName = 'customer-widget-link';
CustomerWidgetLink.tagName = 'img';
CustomerWidgetLink.className = 'ql-customer-widget-link';

export default CustomerWidgetLink;
