import * as Quill from 'quill';
import { debounce } from '../../../src/utils/debounce';
import { LANG_CONF } from '../../config/editor.config';
import { isNullOrUndefined } from '../../config/editor.utils';
import LinkBlot from '../formats/link';
import { BaseTooltip } from 'quill/themes/base'
import { Range } from 'quill/core/selection'
import Emitter from 'quill/core/emitter'

// const Emitter = Quill.imports['core/emitter'];
// const BaseTooltip = Quill.imports['themes/BaseTooltip'];
// const Range = Quill.imports['core/selection/range'];

// @dynamic
export default class Tooltip extends BaseTooltip {
  static TEMPLATE: string;
  isInputFocus: boolean;
  isHover: boolean;
  debouncedHideToolTip: any;
  debouncedShowToolTip: any;
  hide: any;
  linkRange: any;
  quill: any;
  root: any;
  restoreFocus: any;
  textbox: any;
  boundsContainer: any;

  constructor(quill, bounds) {
    super(quill, bounds);
    this.isInputFocus = false;
    this.isHover = false;

    this.debouncedHideToolTip = debounce(this.hideToolTip, 300);
    this.debouncedShowToolTip = debounce(this.showToolTip, 300);
  }

  shouldHide() {
    return !this.isHover && !this.isInputFocus;
  }

  hideToolTip() {
    if (this.shouldHide()) {
      this.hide();
    }
  }

  showToolTip(name, value, range) {
    if (!this.shouldHide()) {
      this.edit(name, value, range);
    }
  }

  handleMouseLeave() {
    this.isHover = false;
    this.debouncedHideToolTip();
  }

  handleMouseEnter(event) {
    const isTooltipShow = !this.root.classList.contains('ql-hidden');
    if (isTooltipShow) {
      return;
    }

    if (this.isInputFocus) {
      this.save();
    }
    this.isHover = true;
    const linkNode = event.target;
    const preview = LinkBlot.formats(linkNode);
    if(preview.startsWith('#')){
      return
    }
    const linkBlot = Quill.find(linkNode);
    const index = this.quill.getIndex(linkBlot);
    const [link, offset] = this.quill.scroll.descendant(
      LinkBlot,
      index,
    );
    const length = link && link.length();
    this.linkRange = new Range(index - offset, length);
    this.debouncedShowToolTip('link', preview, this.linkRange);
  }

  listen() {
    super.listen();

    this.root.querySelector('a.ql-remove').addEventListener('click', (event) => {
      if (!isNullOrUndefined(this.linkRange)) {
        const range = this.linkRange;
        this.restoreFocus();
        this.quill.formatText(range, 'link', false, Emitter.sources.API);
        delete this.linkRange;
      }
      event.preventDefault();
      this.hide();
    });

    this.quill.root.addEventListener(
      'mouseover',
      (event) => {
        if (
          (event.target.tagName.toUpperCase() !== 'A' ||
          !event.target.classList.contains(LinkBlot.className)) &&
          !event.target.closest(`a.${LinkBlot.className}`)
        ) {
          return;
        }
        this.handleMouseEnter(event);
      },
      false
    );

    this.quill.root.addEventListener(
      'mouseout',
      (event) => {
        if (event.target.tagName.toUpperCase() !== 'A' && !event.target.closest(`a.${LinkBlot.className}`)) {
          return;
        }
        this.handleMouseLeave();
      },
      false
    );

    this.root.addEventListener(
      'mouseenter',
      (event) => {
        this.isHover = true;
      },
      false
    );

    this.root.addEventListener('mouseleave', this.handleMouseLeave.bind(this), false);

    this.root.querySelector('a.ql-preview').addEventListener('click', event => {
      const link = LinkBlot.sanitize(this.textbox.value);
      window.open(link, '_blank');
      event.preventDefault();
    });
    this.root.querySelector('input[type="text"]').addEventListener('focus', event => {
      this.isInputFocus = true;
    });
    this.root.querySelector('input[type="text"]').addEventListener('blur', event => {
      this.isInputFocus = false;
      this.save();
    });
    this.quill.on(
      Emitter.events.SELECTION_CHANGE,
      (range, oldRange, source) => {
        if (isNullOrUndefined(range)) { return; }
        if (source === Emitter.sources.USER) {
          const [link, offset] = this.quill.scroll.descendant(
            LinkBlot,
            range.index,
          );

          if (!isNullOrUndefined(link)) {
            this.linkRange = new Range(range.index - offset, link.length());
            const preview = LinkBlot.formats(link.domNode);
            if(!preview.startsWith('#')){
              this.edit('link', preview, this.linkRange);
            }
            return;
          }
        }
        if (this.shouldHide()) {
          this.hide();
        }
      },
    );
    this.quill.on(
      Emitter.events.TEXT_CHANGE,
      (range, oldRange, source) => {
        const selection = this.quill.getSelection();
        const index = selection && selection.index;
        setTimeout(() => {
          const link = this.quill.scroll.descendant(
            LinkBlot,
            index,
          )[0];
          if (!link) {
            this.handleMouseLeave();
          }
        });
      }
    );
  }

  save() {
    let { value } = this.textbox;
    switch (this.root.getAttribute('data-mode')) {
    case 'link': {
      const { scrollTop } = this.quill.root;
      const { autoProtocol } = this.quill.options;
      if (autoProtocol) {
        value = this.addHttpProtocol(value);
      }

      if (this.linkRange) {
        this.quill.formatText(
          this.linkRange,
          'link',
          value,
          Emitter.sources.USER,
        );
        this.restoreFocus();
      } else {
        this.restoreFocus();
        this.quill.format('link', value, Emitter.sources.USER);
      }
      this.quill.root.scrollTop = scrollTop;
      break;
    }
    case 'formula': {
      if (!value) {
        break;
      }
      const range = this.quill.getSelection(true);
      if (!isNullOrUndefined(range)) {
        const index = range.index + range.length;
        this.quill.insertEmbed(
          index,
          this.root.getAttribute('data-mode'),
          value,
          Emitter.sources.USER,
        );
        if (this.root.getAttribute('data-mode') === 'formula') {
          this.quill.insertText(index + 1, ' ', Emitter.sources.USER);
        }
        this.quill.setSelection(index + 2, Emitter.sources.USER);
      }
      break;
    }
    default:
    }
  }

  position(reference) {
    const left = reference.left;
    const top = reference.bottom + this.quill.root.scrollTop;
    this.root.style.left = `${left}px`;
    this.root.style.top = `${top}px`;
    this.root.classList.remove('ql-flip');
    const containerBounds = this.boundsContainer.getBoundingClientRect();
    const rootBounds = this.root.getBoundingClientRect();
    let shift = 0;
    if (rootBounds.right > containerBounds.right) {
      shift = containerBounds.right - rootBounds.right;
      this.root.style.left = `${left + shift}px`;
    }
    if (rootBounds.left < containerBounds.left) {
      shift = containerBounds.left - rootBounds.left;
      this.root.style.left = `${left + shift}px`;
    }
    if (rootBounds.bottom > containerBounds.bottom) {
      const height = rootBounds.bottom - rootBounds.top;
      const verticalShift = reference.bottom - reference.top + height;
      const fixedTop = top - verticalShift;
      this.root.style.top = `${fixedTop < 0 ? this.quill.root.scrollTop + reference.top : fixedTop}px`;
      this.root.classList.add('ql-flip');
    }
    return shift;
  }

  edit(mode = 'link', preview = null, range) {
    this.linkRange = range || this.quill.selection.savedRange;
    this.root.classList.remove('ql-hidden');
    this.root.classList.add('ql-editing');
    if (!isNullOrUndefined(preview)) {
      this.textbox.value = preview;
    } else if (mode !== this.root.getAttribute('data-mode')) {
      this.textbox.value = '';
    }
    this.position(this.quill.getBounds(range || this.quill.selection.savedRange));
    if (this.textbox.value === '') {
      this.textbox.focus();
    }
    this.textbox.setAttribute(
      'placeholder',
      this.textbox.getAttribute(`data-${mode}`) || '',
    );
    this.root.setAttribute('data-mode', mode);
  }

  show() {
    super.show();
    this.root.removeAttribute('data-mode');
  }

  addHttpProtocol(url) {
    let result = url;
    if (!url) {
      return '';
    }
    if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
      result = `http://${url}`;
    }
    return result;
  }
}

Tooltip.TEMPLATE = [
  `<input type="text" data-formula="e=mc^2" data-link="${LANG_CONF.linkplaceholder}" data-video="Embed URL" style="width: 225px;">`,
  '<span class="ql-split"></span>',
  '<a class="ql-preview"><i class="icon-share"></i></a>',
  '<a class="ql-remove"><i class="icon-delete"></i></a>',
].join('');
