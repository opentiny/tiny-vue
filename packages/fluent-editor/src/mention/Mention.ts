import * as Quill from 'quill';
import { isNullOrUndefined } from '../config/editor.utils';
import { DEFAULT_MENTION_CHAR, ON_MENTION_LINK_REMOVE } from './constants';
import MentionLink from './MentionLink';

const { Scope } = Quill.imports['parchment'];
const Delta = Quill.imports['delta'];

interface MentionOption {
  remove?: (data: any) => void;
  defaultLink?: string;
  target?: string;
  mentionChar?: string;
  maxHeight?: number;
  search?: (term: string) => Promise<any[]>;
  renderMentionItem?: (data: any) => HTMLElement;
  renderMentionText?: (data: any) => HTMLElement | string;
  containerClass?: string;
  listClass?: string;
  listHideClass?: string;
  searchKey: string;
  itemKey: string;
  itemClass?: string;
  itemActiveClass?: string;
  dataAttributes?: string[];
  select?: (data: any) => void;
}

// @dynamic
class Mention {
  private readonly options: MentionOption;
  private readonly mentionListEL: HTMLUListElement;
  private activeMentionIndex = 0;
  private latestMentionList: any[];
  private latestMentionCharPos: number;
  private latestCaretPos: number;
  private searchTerm = '';
  private needInsertBr = true;
  private readonly defaultOptions: MentionOption = {
    defaultLink: '#',
    target: '_blank',
    mentionChar: DEFAULT_MENTION_CHAR,
    maxHeight: 200,
    renderMentionItem(data: any) {
      let mentionItem = data.name || data.id;
      if (this.itemKey) {
        mentionItem = data[this.itemKey];
      }
      const dom = document.createElement('SPAN');
      dom.textContent = mentionItem;
      return dom;
    },
    renderMentionText(data: any) {
      let mentionText = data.name || data.id;
      if (this.itemKey) {
        mentionText = data[this.itemKey];
      }
      return `${mentionText}`;
    },
    containerClass: 'ql-mention-list-container',
    listClass: 'ql-mention-list',
    listHideClass: 'ql-mention-list--hide',
    itemClass: 'ql-mention-item',
    itemActiveClass: 'ql-mention-item--active',
    itemKey: 'name',
    searchKey: 'name',
    dataAttributes: ['id'],
    select(data: any) {},
    remove(data: any) {},
  };

  static register() {
    Quill.register(MentionLink);
  }

  // @ts-ignore
  constructor(private quill: Quill, options: MentionOption) {
    if (!options.search) {
      console.warn('please provide a search function!');
      return;
    }

    this.options = Object.assign(this.defaultOptions, options);
    const container = document.createElement('div');
    container.classList.add(this.options.containerClass);
    this.mentionListEL = document.createElement('ul');
    this.mentionListEL.classList.add(this.options.listClass, this.options.listHideClass);
    this.mentionListEL.style.cssText += `
      max-height: ${this.options.maxHeight}px;
    `;

    quill.on(Quill.events.TEXT_CHANGE, this.handleTextChange);
    quill.keyboard.addBinding({ key: 'ArrowUp' }, this.handleArrowUpKey);
    quill.keyboard.addBinding({ key: 'ArrowDown' }, this.handleArrowDownKey);
    quill.keyboard.addBinding({ key: 'Enter' }, this.handleEnterKey);
    quill.keyboard.addBinding({ key: 'Tab' }, this.handleEnterKey);
    quill.keyboard.addBinding({ key: 'Escape' }, this.handleEscapeKey);
    quill.keyboard.bindings['Enter'].unshift(quill.keyboard.bindings['Enter'].pop());
    quill.keyboard.bindings['Tab'].unshift(quill.keyboard.bindings['Tab'].pop());
    quill.keyboard.bindings['Escape'].unshift(quill.keyboard.bindings['Escape'].pop());

    const customKeyboardEnter = {
      key: 'Enter',
      shiftKey: null,
      handler: (range, context) => {
        const lineFormats = Object.keys(context.format).reduce(
          (formats, format) => {
            if (
              this.quill.scroll.query(format, Scope.BLOCK) &&
              !Array.isArray(context.format[format])
            ) {
              formats[format] = context.format[format];
            }
            return formats;
          },
          {},
        );

        // fix: 解决@提醒之后插入多余空行和光标位置不对的问题
        let selectionIndex = range.index - this.searchTerm.length;
        let delta = new Delta()
          .retain(range.index)
          .delete(range.length);
        if (this.needInsertBr) {
          delta = delta.insert('\n', lineFormats);
          selectionIndex = range.index + 1;
        }

        this.quill.updateContents(delta, Quill.sources.USER);
        this.quill.setSelection(selectionIndex, Quill.sources.SILENT);
        this.quill.focus();

        Object.keys(context.format).forEach(name => {
          if (!isNullOrUndefined(lineFormats[name])) { return; }
          if (Array.isArray(context.format[name])) { return; }
          if (name === 'code' || name === 'link') { return; }
          this.quill.format(name, context.format[name], Quill.sources.USER);
        });

        this.needInsertBr = true; // 标记是否是输入@提醒的Enter
      },
    };

    // 用自定义的Enter替换内置的Enter
    quill.keyboard.bindings['Enter'] = quill.keyboard.bindings['Enter'].map((item) => {
      const buildinKeyboardEnter = item.format === undefined && item.shiftKey === null;
      if (buildinKeyboardEnter) {
        return customKeyboardEnter;
      } else {
        return item;
      }
    });

    this.on('click', this.handleMouseClick);
    this.on('mouseover', this.handleMouseEnter);
    quill.emitter.on(ON_MENTION_LINK_REMOVE, async ({ mention, name }) => {
      const [result] = (mention && [mention]) || (await this.options.search(name));
      this.options.remove(result);
    });
    container.appendChild(this.mentionListEL);
    quill.container.parentElement.insertBefore(container, quill.container);
  }

  on(eventName, callback) {
    this.mentionListEL.addEventListener(eventName, (evt) => {

      let
        target = evt.target;
      let targetItemEL;

      while (this.mentionListEL.contains(target) && target !== this.mentionListEL) {
        if (target.classList.contains(this.options.itemClass)) {
          targetItemEL = target;
        }
        target = target.parentElement;
      }

      if (targetItemEL) {
        callback.call(this, targetItemEL, this.getMentionItemIndex(targetItemEL));
      }
    });
  }

  getMentionItemIndex(itemEl: Element) {
    return [].reduce.call(this.mentionListEL.children,
      (index, item, idx) => item === itemEl ? idx : index, -1);
  }

  handleTextChange = (delta, oldDelta, source) => {
    // defer handler to make sure that we can get correct quill selection range.
    setTimeout(() => {
      if (Quill.sources.USER === source) {
        const range = this.quill.getSelection();
        if (!range) {
          return;
        }

        const caretPos = this.latestCaretPos = range.index;
        // beforeCaretText的计算有问题，没有把图片内容和@提醒内容的非字符内容算进去
        const content = this.quill.getContents();
        const beforeCaretText = content.reduce((newText, op) => {
          if (typeof op.insert === 'string') {
            // eslint-disable-next-line no-return-assign
            return (newText += op.insert);
          } else {
            // eslint-disable-next-line no-return-assign
            return (newText += ' '); // 将图片内容和@提醒内容的非字符内容置为' '，算一个位置
          }
        }, '');
        const mentionCharPos = beforeCaretText.lastIndexOf(this.options.mentionChar);

        if (mentionCharPos > -1) {
          const searchTerm = beforeCaretText.substring(mentionCharPos + this.options.mentionChar.length, caretPos);
          this.searchTerm = searchTerm;
          if (!''.startsWith.call(searchTerm, ' ')) {
            this.latestMentionCharPos = mentionCharPos;
            this.searchMentionListByTerm(searchTerm);
          } else {
            this.hideMentionList();
          }
        } else {
          this.hideMentionList();
        }
      }
    });
  };

  handleMouseClick(itemEl: HTMLLIElement, index: number) {
    this.selectMentionItem(index, true);
    this.quill.focus();
  }

  handleMouseEnter(itemEl: HTMLLIElement, index: number) {
    this.activeMentionIndex = index;
    this.highlightMentionItem(index);
  }

  handleArrowUpKey = () => {
    if (this.isOpen()) {
      this.activeMentionIndex =
        (this.activeMentionIndex + this.latestMentionList.length - 1) % this.latestMentionList.length;
      this.highlightMentionItem(this.activeMentionIndex);
      return false;
    }
    return true;
  };

  handleArrowDownKey = () => {
    if (this.isOpen()) {
      this.activeMentionIndex = (this.activeMentionIndex + 1) % this.latestMentionList.length;
      this.highlightMentionItem(this.activeMentionIndex);
      return false;
    }
    return true;
  };

  handleEnterKey = () => {
    if (this.isOpen()) {
      this.selectMentionItem();
      this.needInsertBr = false;
    }
    return true;
  };

  handleEscapeKey = () => {
    if (this.isOpen()) {
      this.hideMentionList();
      return false;
    }
    return true;
  };

  getActiveMentionItem() {
    return this.mentionListEL.querySelector(`.${this.options.itemActiveClass}`);
  }

  isOpen() {
    return !this.mentionListEL.classList.contains(this.options.listHideClass);
  }

  async searchMentionListByTerm(term: string) {
    const mentionList = await this.options.search(term);
    this.latestMentionList = mentionList;
    if (!mentionList || mentionList.length === 0) {
      return this.hideMentionList();
    }

    this.showMentionList(mentionList);
  }

  showMentionList(mentionList: any[]) {
    if (!this.isOpen()) {
      this.mentionListEL.classList.remove(this.options.listHideClass);
    }
    this.activeMentionIndex = 0;
    this.setMentionListPos();
    this.render(mentionList);
  }

  hideMentionList() {
    if (this.isOpen()) {
      this.activeMentionIndex = 0;
      this.mentionListEL.classList.add(this.options.listHideClass);
    }
  }

  setMentionListPos() {
    const cursorIndex = this.quill.selection.savedRange.index;
    const cursorBounds = this.quill.getBounds(cursorIndex);
    const { left, top } = cursorBounds;
    const container = this.quill.container;
    const hostElement = container.parentNode as HTMLDivElement;
    const { left: editorLeft, top: editorTop } = container.getBoundingClientRect();
    const { left: hostElementLeft, top: hostElementTop } = hostElement.getBoundingClientRect();
    const relativeLeft = editorLeft - hostElementLeft;
    const relativeTop = editorTop - hostElementTop;
    const menuLeft = left + relativeLeft - 5;
    const menuTop = top + relativeTop + 20;
    this.mentionListEL.style.cssText += `
      left: ${menuLeft}px;
      top: ${menuTop}px;
    `;
  }

  render(mentionList: any[]) {
    const wrapEl = document.createElement('div');

    [].forEach.call(mentionList, (mentionItem, index) => {
      const mentionItemEl = document.createElement('li');
      mentionItemEl.classList.add(this.options.itemClass);
      if (index === this.activeMentionIndex) {
        mentionItemEl.classList.add(this.options.itemActiveClass);
      }
      const renderResult = this.options.renderMentionItem(mentionItem);
      mentionItemEl.insertAdjacentElement('afterbegin', renderResult);
      wrapEl.appendChild(mentionItemEl);
    });

    this.mentionListEL.innerHTML = wrapEl.innerHTML;
  }

  highlightMentionItem(index: number) {
    const oldActiveItem = this.getActiveMentionItem();
    if (oldActiveItem) {
      oldActiveItem.classList.remove(this.options.itemActiveClass);
    }

    const newActiveItem = this.mentionListEL.querySelector(`.${this.options.itemClass}:nth-of-type(${index + 1})`);
    if (newActiveItem) {
      newActiveItem.classList.add(this.options.itemActiveClass);
      this.scrollIntoView(newActiveItem);
    }
  }

  scrollIntoView(node: Element): void {
    const nodeAsAny: any = node;
    if (nodeAsAny.scrollIntoViewIfNeeded) {
      nodeAsAny.scrollIntoViewIfNeeded(false);
      return;
    }
    if (node.scrollIntoView) {
      node.scrollIntoView(false);
      return;
    }
  }

  selectMentionItem(index = this.activeMentionIndex, isClick?: boolean) {
    const activeMentionItem = this.latestMentionList[index];
    this.insertMentionBlot(activeMentionItem, isClick);
    this.options.select(activeMentionItem);
    this.hideMentionList();
  }

  insertMentionBlot(activeMentionItem: any, isClick?: boolean) {
    const mention = this.options.renderMentionText(activeMentionItem);
    const delta = new Delta()
      .retain(this.latestMentionCharPos)
      .delete(this.latestCaretPos - this.latestMentionCharPos)
      .insert({
        [MentionLink.blotName]: {
          char: this.options.mentionChar,
          text: mention,
          mention: activeMentionItem,
          link: this.options.defaultLink,
          target: this.options.target,
          searchKey: this.options.searchKey,
        },
      });
    if (isClick) {
      this.quill.updateContents(delta, Quill.sources.USER);
    } else {
      this.quill.updateContents(delta, Quill.sources.API);
    }
    this.quill.setSelection(this.latestMentionCharPos + 1, Quill.sources.API);
  }
}

export { Mention as default };

