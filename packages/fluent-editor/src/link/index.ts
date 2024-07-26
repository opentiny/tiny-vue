import Quill from 'quill';
import LinkBlot from './formats/link';
import Tooltip from './modules/tooltip';
const icons = Quill.imports['ui/icons'];
const SnowTheme = Quill.imports['themes/snow'];
const Module = Quill.imports['core/module'];

// @dynamic
class Link extends Module {
  static register() {
    Quill.register('blots/link', LinkBlot, true);
  }
  constructor(quill, options) {
    super(quill, options);
  }
}

SnowTheme.prototype.extendToolbar = function(toolbar) {
  toolbar.container.classList.add('ql-snow');
  this.buildButtons(toolbar.container.querySelectorAll('button'), icons);
  this.buildPickers(toolbar.container.querySelectorAll('select'), icons);
  this.tooltip = new Tooltip(this.quill, this.options.bounds);
  if (toolbar.container.querySelector('.ql-link')) {
    this.quill.keyboard.addBinding(
      { key: 'k', shortKey: true },
      (range, context) => {
        toolbar.handlers.link.call(toolbar, !context.format.link);
      },
    );
  }
};

export default Link;
