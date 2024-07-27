import Quill from 'quill';
import { getEventComposedPath } from '../config/editor.utils';
import CustomerWidgetLink from './formats/customer-widget-link';
import DocumentLink from './formats/doc-link';
import WikiLink from './formats/wiki-link';
import WorkItemLink from './formats/work-item-link';

const Module = Quill.imports['core/module'];
const Delta = Quill.imports['delta'];

// @dynamic
class GlobalLink extends Module {
  open: boolean;
  wrap: any;
  panel: any;
  quill: any;

  static register() {
    Quill.register('formats/wiki-link', WikiLink);
    Quill.register('formats/doc-link', DocumentLink);
    Quill.register('formats/work-item-link', WorkItemLink);
    Quill.register('formats/customer-widget-link', CustomerWidgetLink);
  }

  constructor(quill, options) {
    super(quill, options);
    const toolbar = quill.getModule('toolbar');
    this.open = false;
    this.panel = options.component;
    this.wrap = options.wrap;
    const globalLinkBtn = toolbar.container && toolbar.container.querySelector('.ql-global-link');
    toolbar.addHandler('global-link', this.handleGlobalLinkButtonClick.bind(this));
    quill.root.addEventListener('click', this.onEditorClick.bind(this));
    document.body.addEventListener('click', (evt) => {
      if (!this.wrap.contains(evt.target) && !(globalLinkBtn && globalLinkBtn.contains(evt.target))) {
        this.open = false;
        this.wrap.classList.add('global-link-hide');
      }
    });
    this.panel.wikiLink.subscribe(this.addWikiLink.bind(this));
    this.panel.docLink.subscribe(this.addDocLink.bind(this));
    this.panel.workItemLink.subscribe(this.addWorkItemLink.bind(this));
    if (this.panel.close) { this.panel.close.subscribe(this.closePanel.bind(this)); }
  }

  onEditorClick(evt: any) {
    if (!evt.ctrlKey) { return; }
    const path = getEventComposedPath(evt);
    if (!path || path.length <= 0) { return; }
    const linkNode = path.filter(node => {
      return node.classList && (node.classList.contains(WikiLink.className)
        || node.classList.contains(DocumentLink.className)
        || node.classList.contains(WorkItemLink.className));
    })[0];

    if (!linkNode) { return; }

    if (linkNode.classList.contains(WikiLink.className)) {
      this.handleLinkClick(linkNode);
    } else if (linkNode.classList.contains(DocumentLink.className)) {
      this.handleLinkClick(linkNode);
    } else if (linkNode.classList.contains(WorkItemLink.className)) {
      const tableRow = path.filter(node => {
        return node.tagName && node.tagName.toUpperCase() === 'TR';
      })[0];

      if (tableRow) {
        this.handleLinkClick(tableRow);
      }
    }
  }

  handleLinkClick(linkNode) {
    const href = linkNode.getAttribute('href');
    if (href) {
      window.open(href);
    }
  }

  handleGlobalLinkButtonClick(value) {
    this.open = !this.open;
    this.triggerPanel();
  }

  triggerPanel() {
    if (this.open) {
      this.wrap.classList.remove('global-link-hide');
    } else {
      this.wrap.classList.add('global-link-hide');
    }
  }

  addWikiLink(wikiData) {
    const index = this.quill.getSelection(true).index;
    const arr:{link: any,text: any} [] = []
    const delta = arr.reduce.call(wikiData, (op: any, wiki) => {
      op.insert({
        [WikiLink.blotName]: {
          link: wiki.link,
          text: wiki.text
        }
      });
      return op;
    }, new Delta().retain(index));

    this.quill.updateContents(delta, Quill.sources.USER);
    this.quill.setSelection(index + 1, Quill.sources.USER);
    if (this.panel.autoClose) {
      this.closePanel();
    }
  }

  addDocLink(docData) {
    const index = this.quill.getSelection(true).index;
    const arr:{link: any,text: any, icon: any} [] = []
    const delta = arr.reduce.call(docData, (op: any, doc) => {
      op.insert({
        [DocumentLink.blotName]: {
          link: doc.link,
          text: doc.text,
          icon: doc.icon
        }
      });
      return op;
    }, new Delta().retain(index));

    this.quill.updateContents(delta, Quill.sources.USER);
    this.quill.setSelection(index + 1, Quill.sources.USER);
    if (this.panel.autoClose) {
      this.closePanel();
    }
  }

  addWorkItemLink(workItemData) {
    const index = this.quill.getSelection(true).index;
    const arr:{url: any, table: any} [] = []
    const delta = arr.reduce.call(workItemData, (op: any, workItem) => {
      op.insert({
        [WorkItemLink.blotName]: {
          link: workItem.url,
          data: workItem.table
        }
      });
      return op;
    }, new Delta().retain(index));

    this.quill.updateContents(delta, Quill.sources.USER);
    this.quill.setSelection(index + 1, Quill.sources.USER);
    if (this.panel.autoClose) {
      this.closePanel();
    }
  }

  closePanel() {
    this.open = false;
    this.triggerPanel();
  }
}

export default GlobalLink;
