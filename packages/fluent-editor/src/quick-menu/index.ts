import Quill from 'quill';

interface QuickMenuOptions {
  container: string;
  component: any;
}

class QuickMenu {
  private container: HTMLDivElement;
  private hostElement: HTMLDivElement;
  private quickMenu: HTMLDivElement;
  private quickMenuContainer: HTMLDivElement;
  
// @ts-ignore
  constructor(private quill: Quill, private options: QuickMenuOptions) {
    this.quill = quill;
    this.options = options;
    this.container = this.quill.container;
    this.hostElement = this.container.parentNode as HTMLDivElement;
    this.quickMenu = this.hostElement.querySelector('.quick-menu');
    this.quickMenuContainer = this.quickMenu.querySelector('.quick-menu-container');
    quill.keyboard.addBinding({key: '/'}, this.handleSlashKeyDown);
    quill.keyboard.addBinding({key: 'ArrowUp'}, this.handleArrowUpKey);
    quill.keyboard.addBinding({key: 'ArrowDown'}, this.handleArrowDownKey);
    quill.keyboard.addBinding({key: 'Enter'}, this.handleEnterKey);
    quill.keyboard.bindings['Enter'].unshift(quill.keyboard.bindings['Enter'].pop());
    document.body.addEventListener('click', this.hideQuickMenu.bind(this));
  }

  handleSlashKeyDown = (range, context) => {
    const index = this.quill.selection.savedRange.index;
    this.quill.insertText(index, '/');

    // 一行的第一个字符为 '/'，且没有格式化，则触发快捷菜单
    const shouldTriggerQuickMenu = context.prefix === '' && Object.keys(context.format).length === 0;
    if (shouldTriggerQuickMenu) {
      const cursorIndex = this.quill.selection.savedRange.index;
      const cursorBounds = this.quill.getBounds(cursorIndex);
      const {left, top} = cursorBounds;
      const {left: editorLeft, top: editorTop} = this.container.getBoundingClientRect();
      const {left: hostElementLeft, top: hostElementTop} = this.hostElement.getBoundingClientRect();
      const relativeLeft = editorLeft - hostElementLeft;
      const relativeTop = editorTop - hostElementTop;
      const menuLeft = left + relativeLeft - 5;
      const menuTop = top + relativeTop + 20;

      this.quickMenu.style.display = 'block';
      const zIndex = this.quill.options.modules.quickmenu.zIndex;
      let style = `left:${menuLeft}px;top:${menuTop}px;`;
      if (zIndex || zIndex === 0) {
        style += `z-index:${zIndex}`;
      }
      this.quickMenuContainer.setAttribute('style', style);
      this.options.component.activeIndex = 0;
    } else {
      this.quickMenu.style.display = 'none';
    }
  };

  private isOpen() {
    return this.quickMenuContainer.style.display !== 'none' && this.quickMenu.style.display === 'block';
  }

  hideQuickMenu = (event) => {
    if (this.quickMenuContainer && !this.quickMenuContainer.contains(event.target)) {
      this.quickMenuContainer.style.display = 'none';
    }
  };

  handleArrowUpKey = (range, context) => {
    if (this.isOpen()) {
      const index = this.options.component.activeIndex;
      const total = this.options.component.quickMenus.length;
      this.options.component.activeIndex = (index + total - 1) % total;
      return false;
    }
    return true;
  };

  handleArrowDownKey = (range, context) => {
    if (this.isOpen()) {
      const index = this.options.component.activeIndex;
      const total = this.options.component.quickMenus.length;
      this.options.component.activeIndex = (index + 1) % total;
      return false;
    }
    return true;
  };

  handleEnterKey = (range, context) => {
    if (this.isOpen()) {
      this.options.component.onEnter();
      return false;
    }
    return true;
  };

}

export default QuickMenu;
