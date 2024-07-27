import Quill from 'quill';
import { isNullOrUndefined } from '../config/editor.utils';
import './better-picker';
import Delta from 'quill-delta';
const Parchment = Quill.imports['parchment'];
const levels = ['error', 'warn', 'log', 'info'];
let level = 'warn';

function debuglogger(method, ...args) {
  if (levels.indexOf(method) <= levels.indexOf(level)) {
    console[method](...args); // eslint-disable-line no-console
  }
}

function namespace(ns) {
  return levels.reduce((logger, method) => {
    logger[method] = debuglogger.bind(console, method, ns);
    return logger;
  }, {});
}

namespace.level = newLevel => {
  level = newLevel;
};
debuglogger.level = namespace.level;
const debug = namespace('quill:toolbar')

const Toolbar = Quill.imports['modules/toolbar'];
// let oldClean = Toolbar.DEFAULTS.handlers.clean

class BetterToolbar extends Toolbar {
  quill;
  controls;
  update(range) {
    const formats = isNullOrUndefined(range) ? {} : this.quill.getFormat(range);
    this.controls.forEach(pair => {
      const [format, input] = pair;
      if (input.tagName === 'SELECT') {
        let option;
        if (isNullOrUndefined(range)) {
          option = null;
        } else if (isNullOrUndefined(formats[format])) {
          option = input.querySelector('option[selected]');
        } else if (!Array.isArray(formats[format])) {
          let value = format === 'header' ? formats[format].value : formats[format];
          if (typeof value === 'string') {
            value = value.replace(/"/g, '\\"');
          }
          option = input.querySelector(`option[value="${value}"]`);
        }
        if (isNullOrUndefined(option)) {
          input.value = ''; // TODO make configurable?
          input.selectedIndex = -1;
        } else {
          option.selected = true;
        }
      } else if (isNullOrUndefined(range)) {
        input.classList.remove('ql-active');
      } else if (input.hasAttribute('value')) {
        // both being null should match (default values)
        // '1' should match with 1 (headers)
        let isActive =
          formats[format] === input.getAttribute('value') ||
          (!isNullOrUndefined(formats[format]) &&
            (formats[format].value === input.getAttribute('value') ||
              formats[format].toString() === input.getAttribute('value'))) ||
            (isNullOrUndefined(formats[format]) && !input.getAttribute('value'));

        if (!isActive) {
          const checkFormat = formats[format];
          if (checkFormat === 'checked' || checkFormat === 'unchecked') {
            isActive = input.getAttribute('value') === 'check';
          }
        }

        if (isActive) {
          input.classList.add('ql-active');
        } else {
          input.classList.remove('ql-active');
        }
      } else {
        if (!isNullOrUndefined(formats[format])) {
          input.classList.add('ql-active');
        } else {
          input.classList.remove('ql-active');
        }
      }
    });
  }
  attach(input) {
    let format = Array.from(input.classList).find(className => {
      // @ts-ignore
      return className.indexOf('ql-') === 0;
    });
    if (!format) return;
    // @ts-ignore
    format = format.slice('ql-'.length);

    if (input.tagName === 'BUTTON') {
      input.setAttribute('type', 'button');
    }

    // @ts-ignore
    if (this.handlers[format] == null && this.quill.scroll.query(format) == null) {
      debug.warn('ignoring attaching to nonexistent format', format, input);
      return;
    }

    const eventName = input.tagName === 'SELECT' ? 'change' : 'click';
    input.addEventListener(eventName, e => {
      let value;

      if (input.tagName === 'SELECT') {
        if (input.selectedIndex < 0) return;
        const selected = input.options[input.selectedIndex];

        if (selected.hasAttribute('selected')) {
          value = false;
        } else {
          value = selected.value || false;
        }
      } else {
        if (input.classList.contains('ql-active')) {
          value = false;
        } else {
          value = input.value || !input.hasAttribute('value');
        }

        e.preventDefault();
      }

      this.quill.focus();
      const [range] = this.quill.selection.getRange();
      // @ts-ignore
      if (this.handlers[format] != null) {
        // @ts-ignore
        if(!isNullOrUndefined(window.quillIsIntable) && window.quillIsIntable === true && (format === "blockquote" || format === "code-block" || format === "list" || format === "indent" || format === "clean")) {
          return
        }
        // @ts-ignore
        this.handlers[format].call(this, value);
      } else if (
        this.quill.scroll.query(format).prototype instanceof Parchment.EmbedBlot
      ) {
        value = prompt(`Enter ${format}`); // eslint-disable-line no-alert
        if (!value) return;
        this.quill.updateContents(
          new Delta()
            .retain(range.index)
            .delete(range.length)
            // @ts-ignore
            .insert({ [format]: value }),
          Quill.sources.USER,
        );
      } else {
        // @ts-ignore
        if(!isNullOrUndefined(window.quillIsIntable) && window.quillIsIntable === true && (format === "blockquote" || format === "code-block" || format === "list" || format === "indent" || format === "clean")) {
          return
        }
        this.quill.format(format, value, Quill.sources.USER);
      }

      this.update(range);
    });
    this.controls.push([format, input]);
  }

}

export default BetterToolbar;
