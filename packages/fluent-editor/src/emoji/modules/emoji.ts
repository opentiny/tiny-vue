import * as Quill from 'quill';
import emojiList from '../emoji-list';

const Module = Quill.imports['core/module'];

// @dynamic
class ShortNameEmoji extends Module {
  static DEFAULTS: {
    emojiList: any[];
    fuse: {
      shouldSort: boolean;
      threshold: number;
      location: number;
      distance: number;
      maxPatternLength: number;
      minMatchCharLength: number;
      keys: string[];
    };
  };
  emojiList: any;
  quill: any;
  fuse: any;
  onOpen: any;
  onClose: any;
  container: HTMLUListElement;
  onSelectionChange: any;
  onTextChange: any;
  open: boolean;
  atIndex: any;
  focusedButton: any;
  isWhiteSpace: (ch: any) => boolean;
  query: any;
  buttons: any;
  options: any;
  constructor(quill, options) {
    super(quill, options);

    this.emojiList = options.emojiList;

    this.quill = quill;
    this.onClose = options.onClose;
    this.onOpen = options.onOpen;
    this.container = document.createElement('ul');
    this.container.classList.add('emoji_completions');
    this.quill.container.appendChild(this.container);
    this.container.style.position = 'absolute';
    this.container.style.display = 'none';

    this.onSelectionChange = this.maybeUnfocus.bind(this);
    this.onTextChange = this.update.bind(this);

    this.open = false;
    this.atIndex = null;
    this.focusedButton = null;

    this.isWhiteSpace = function (ch) {
      let whiteSpace = false;
      if (/\s/.test(ch)) {
        whiteSpace = true;
      }
      return whiteSpace;
    };

    quill.keyboard.addBinding({
      // TODO: Once Quill supports using event.key change this to ":"
      key: 186,  // ":" instead of 190 in Safari. Since it's the same key it doesn't matter if we register both.
      shiftKey: true,
    }, this.triggerPicker.bind(this));

    quill.keyboard.addBinding({
      // gecko based browsers (firefox) use 59 as the keycode for semicolon,
      // which makes a colon character when combined with shift
      key: 59,
      shiftKey: true,
    }, this.triggerPicker.bind(this));

    quill.keyboard.addBinding({
      key: 39,  // ArrowRight
      collapsed: true
    }, this.handleArrow.bind(this));

    quill.keyboard.addBinding({
      key: 40,  // ArrowRight
      collapsed: true
    }, this.handleArrow.bind(this));
    // TODO: Add keybindings for Enter (13) and Tab (9) directly on the quill editor
  }

  triggerPicker(range, context) {
    if (this.open) { return true; }
    if (range.length > 0) {
      this.quill.deleteText(range.index, range.length, Quill.sources.USER);
    }

    this.quill.insertText(range.index, ':', 'emoji-shortname', Quill.sources.USER);
    const atSignBounds = this.quill.getBounds(range.index);
    this.quill.setSelection(range.index + 1, Quill.sources.SILENT);

    this.atIndex = range.index;

    const paletteMaxPos = atSignBounds.left + 250;
    if (paletteMaxPos > this.quill.container.offsetWidth) {
      this.container.style.left = (atSignBounds.left - 250) + 'px';
    } else {
      this.container.style.left = atSignBounds.left + 'px';
    }

    this.container.style.top = atSignBounds.top + atSignBounds.height + 'px';
    this.open = true;

    this.quill.on('text-change', this.onTextChange);
    this.quill.once('selection-change', this.onSelectionChange);
    if (this.onOpen) { this.onOpen(); }
  }

  handleArrow() {
    if (!this.open) { return true; }
    this.buttons[0].classList.remove('emoji-active');
    this.buttons[0].focus();
    if (this.buttons.length > 1) {
      this.buttons[1].focus();
    }
  }

  update(event) {
    const sel = this.quill.getSelection().index;
    if (this.atIndex >= sel) { // Deleted the at character
      return this.close(null);
    }
    this.query = this.quill.getText(this.atIndex + 1, sel - this.atIndex - 1);

    try {
      if (this.isWhiteSpace(this.query)) {
        this.close(null);
        return;
      }
    } catch (e) {
      throw new Error('Close failed');
    }

    this.query = this.query.trim();

    let emojis: any = this.emojiList;
    emojis.sort(function (a: any, b: any) {
      return a.emoji_order - b.emoji_order;
    });

    if (this.query.length < this.options.fuse.minMatchCharLength || emojis.length === 0) {
      this.container.style.display = 'none';
      return;
    }
    if (emojis.length > 15) { // return only 15
      emojis = emojis.slice(0, 15);
    }
    this.renderCompletions(emojis, event);
  }

  maybeUnfocus() {
    if (this.container.querySelector('*:focus')) { return; }
    this.close(null);
  }

  renderCompletions(emojis, evt) {
    try {
      if (evt) {
        if (evt.key === 'Enter' || evt.keyCode === 13) {
          this.close(emojis[0], 1);
          this.container.style.display = 'none';
          return;
        } else if (evt.key === 'Tab' || evt.keyCode === 9) {
          this.quill.disable();
          this.buttons[0].classList.remove('emoji-active');
          this.buttons[1].focus();
          return;
        }
      }
      if (evt) { return; }
    } catch (e) {
      throw new Error('Render failed');
    }

    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
    }
    const buttons = Array(emojis.length);
    this.buttons = buttons;

    const handler = (i, emoji) => event => {
      const arrowLeftKey = event.key === 'ArrowLeft' || event.keyCode === 37;
      const arrowUpKey = event.key === 'ArrowUp' || event.keyCode === 38;
      const arrowRightKey = event.key === 'ArrowRight' || event.keyCode === 39;
      const arrowDownKey = event.key === 'ArrowDown' || event.keyCode === 40;
      if (arrowRightKey || arrowDownKey) {
        event.preventDefault();
        buttons[Math.min(buttons.length - 1, i + 1)].focus();
      } else if (event.key === 'Tab' || event.keyCode === 9) {
        event.preventDefault();
        if ((i + 1) === buttons.length) {
          buttons[0].focus();
          return;
        }
        buttons[Math.min(buttons.length - 1, i + 1)].focus();
      } else if (arrowLeftKey || arrowUpKey) {
        event.preventDefault();
        buttons[Math.max(0, i - 1)].focus();
      } else if (event.key === 'Enter' || event.keyCode === 13
        || event.key === ' ' || event.keyCode === 32
        || event.key === 'Tab' || event.keyCode === 9) {
        event.preventDefault();
        this.quill.enable();
        this.close(emoji);
      }
    };

    emojis.forEach((emoji, i) => {
      const li = makeElement(
        'li', {},
        makeElement(
          'button', { type: 'button' },
          makeElement('span', { className: 'button-emoji ap ap-' + emoji.name, innerHTML: emoji.code_decimal }),
          makeElement('span', { className: 'unmatched' }, emoji.shortname)
        )
      );
      this.container.appendChild(li);
      buttons[i] = li.firstChild;
      // Events will be GC-ed with button on each re-render:
      buttons[i].addEventListener('keydown', handler(i, emoji));
      buttons[i].addEventListener('mousedown', () => this.close(emoji));
      buttons[i].addEventListener('focus', () => {this.focusedButton = i;});
      buttons[i].addEventListener('unfocus', () => {this.focusedButton = null;});
    });

    this.container.style.display = 'block';
    // emoji palette on top
    if (this.quill.container.classList.contains('top-emoji')) {
      const x = this.container.querySelectorAll('li');
      let i;
      for (i = 0; i < x.length; i++) {
        x[i].style.display = 'block';
      }

      const windowHeight = window.innerHeight;
      const editorPos = this.quill.container.getBoundingClientRect().top;
      if (editorPos > windowHeight / 2 && this.container.offsetHeight > 0) {
        this.container.style.top = '-' + this.container.offsetHeight + 'px';
      }
    }

    buttons[0].classList.add('emoji-active');
  }

  close(value, trailingDelete = 0) {
    this.quill.enable();
    this.container.style.display = 'none';
    while (this.container.firstChild) { this.container.removeChild(this.container.firstChild); }
    this.quill.off('selection-change', this.onSelectionChange);
    this.quill.off('text-change', this.onTextChange);
    if (value) {
      this.quill.deleteText(this.atIndex, this.query.length + 1 + trailingDelete, Quill.sources.USER);
      this.quill.insertEmbed(this.atIndex, 'emoji', value, Quill.sources.USER);
      setTimeout(() => this.quill.setSelection(this.atIndex + 1), 0);
    }
    this.quill.focus();
    this.open = false;
    if (this.onClose) { this.onClose(value); }
  }
}

ShortNameEmoji.DEFAULTS = {
  emojiList: emojiList,
  fuse: {
    shouldSort: true,
    threshold: 0.1,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
      'shortname'
    ]
  }
};

function makeElement(tag, attrs, ...children) {
  const elem = document.createElement(tag);
  Object.keys(attrs).forEach(key => {elem[key] = attrs[key];});
  children.forEach(child => {
    if (typeof child === 'string') {
      child = document.createTextNode(child);
    }
    elem.appendChild(child);
  });
  return elem;
}

export default ShortNameEmoji;
