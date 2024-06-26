import * as Quill from 'quill';
import { isNullOrUndefined } from '../config/editor.utils';
const SnowTheme = Quill.imports['themes/snow'];

let optionsCounter = 0;

function toggleAriaAttribute(element, attribute) {
  element.setAttribute(
    attribute,
    element.getAttribute(attribute) !== 'true',
  );
}

class Picker {
  container: any;
  label: any;
  options: any;
  select: any;
  constructor(select) {
    this.select = select;
    this.container = document.createElement('span');
    this.buildPicker();
    this.select.style.display = 'none';
    this.select.parentNode.insertBefore(this.container, this.select);

    this.label.addEventListener('mousedown', (e) => {
      this.togglePicker();
      e.preventDefault();
    });
    this.label.addEventListener('keydown', event => {
      switch (event.key) {
      case 'Enter':
        this.togglePicker();
        break;
      case 'Escape':
        this.escape();
        event.preventDefault();
        break;
      default:
      }
    });
    this.select.addEventListener('change', this.update.bind(this));
  }

  togglePicker() {
    this.container.classList.toggle('ql-expanded');
    // Toggle aria-expanded and aria-hidden to make the picker accessible
    toggleAriaAttribute(this.label, 'aria-expanded');
    toggleAriaAttribute(this.options, 'aria-hidden');
  }

  buildItem(option) {
    const item = document.createElement('span');
    item.tabIndex = 0;
    item.setAttribute('role', 'button');
    item.classList.add('ql-picker-item');
    if (option.hasAttribute('value')) {
      item.setAttribute('data-value', option.getAttribute('value'));
    }
    if (option.textContent) {
      item.setAttribute('data-label', option.textContent);
    }
    item.addEventListener('click', (e) => {
      this.selectItem(item, true);
    });
    item.addEventListener('keydown', event => {
      switch (event.key) {
      case 'Enter':
        this.selectItem(item, true);
        event.preventDefault();
        break;
      case 'Escape':
        this.escape();
        event.preventDefault();
        break;
      default:
      }
    });

    return item;
  }

  buildLabel() {
    const label = document.createElement('span');
    label.classList.add('ql-picker-label');
    label.innerHTML = `
      <svg viewbox="0 0 18 18">
        <polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"></polygon>
        <polygon class="ql-stroke" points="7 7 9 5 11 7 7 7"></polygon>
      </svg>
    `;
    label.tabIndex = 0;
    label.setAttribute('role', 'button');
    label.setAttribute('aria-expanded', 'false');
    this.container.appendChild(label);
    return label;
  }

  buildOptions() {
    const options = document.createElement('span');
    options.classList.add('ql-picker-options');

    // Don't want screen readers to read this until options are visible
    options.setAttribute('aria-hidden', 'true');
    options.tabIndex = -1;

    // Need a unique id for aria-controls
    options.id = `ql-picker-options-${optionsCounter}`;
    optionsCounter += 1;
    this.label.setAttribute('aria-controls', options.id);

    this.options = options;

    Array.from(this.select.options).forEach((option: any) => {
      const item = this.buildItem(option);
      options.appendChild(item);
      if (option.selected === true) {
        this.selectItem(item);
      }
    });
    this.container.appendChild(options);
  }

  buildPicker() {
    Array.from(this.select.attributes).forEach((item: any) => {
      this.container.setAttribute(item.name, item.value);
    });
    this.container.classList.add('ql-picker');
    this.label = this.buildLabel();
    this.buildOptions();
  }

  escape() {
    // Close menu and return focus to trigger label
    this.close();
    // Need setTimeout for accessibility to ensure that the browser executes
    // focus on the next process thread and after any DOM content changes
    setTimeout(() => this.label.focus(), 1);
  }

  close() {
    this.container.classList.remove('ql-expanded');
    this.label.setAttribute('aria-expanded', 'false');
    this.options.setAttribute('aria-hidden', 'true');
  }

  selectItem(item, trigger = false) {
    const selected = this.container.querySelector('.ql-selected');
    if (item === selected) { return; }
    if (!isNullOrUndefined(selected)) {
      selected.classList.remove('ql-selected');
    }
    if (isNullOrUndefined(item)) { return; }
    item.classList.add('ql-selected');
    this.select.selectedIndex = Array.from(item.parentNode.children).indexOf(
      item,
    );
    if (item.hasAttribute('data-value')) {
      this.label.setAttribute('data-value', item.getAttribute('data-value'));
    } else {
      this.label.removeAttribute('data-value');
    }
    if (item.hasAttribute('data-label')) {
      this.label.setAttribute('data-label', item.getAttribute('data-label'));
    } else {
      this.label.removeAttribute('data-label');
    }
    if (trigger) {
      let ev;
      if (typeof Event === 'function') {
        ev = new Event('change');
      } else {
        ev = document.createEvent('Event');
        ev.initEvent('change', true, true);
      }
      this.select.dispatchEvent(ev);
      this.close();
    }
  }

  update() {
    let option;
    if (this.select.selectedIndex > -1) {
      const item = this.container.querySelector('.ql-picker-options').children[
        this.select.selectedIndex
      ];
      option = this.select.options[this.select.selectedIndex];
      this.selectItem(item);
    } else {
      this.selectItem(null);
    }
    const isActive =
      !isNullOrUndefined(option) &&
      option !== this.select.querySelector('option[selected]');

    if (isActive) {
      this.label.classList.add('ql-active');
    } else {
      this.label.classList.remove('ql-active');
    }
  }
}

class IconPicker extends Picker {
  defaultItem: any;
  constructor(select, icons) {
    super(select);
    this.container.classList.add('ql-icon-picker');
    Array.from(this.container.querySelectorAll('.ql-picker-item')).forEach(
      (item: any) => {
        item.innerHTML = icons[item.getAttribute('data-value') || ''];
      },
    );
    this.defaultItem = this.container.querySelector('.ql-selected');
    this.selectItem(this.defaultItem, null);
  }

  selectItem(target, trigger) {
    super.selectItem(target, trigger);
    const item = target || this.defaultItem;
    if (this.label.innerHTML === item.innerHTML) { return; }
    this.label.innerHTML = item.innerHTML;
  }
}

class ColorPicker extends Picker {
  constructor(select, label) {
    super(select);
    this.label.innerHTML = label;
    this.container.classList.add('ql-color-picker');
    Array.from(this.container.querySelectorAll('.ql-picker-item'))
      .slice(0, 7)
      .forEach((item: any) => {
        item.classList.add('ql-primary');
      });
  }

  buildItem(option) {
    const item = super.buildItem(option);
    item.style.backgroundColor = option.getAttribute('value') || '';
    return item;
  }

  selectItem(item, trigger) {
    super.selectItem(item, trigger);
    const colorLabel = this.label.querySelector('.ql-color-label');
    const value = item ? item.getAttribute('data-value') || '' : '';
    if (colorLabel) {
      if (colorLabel.tagName === 'line') {
        colorLabel.style.stroke = value;
      } else {
        colorLabel.style.fill = value;
      }
    }
  }
}

Quill.register('ui/picker', Picker, true);
Quill.register('ui/icon-picker', IconPicker, true);
Quill.register('ui/color-picker', ColorPicker, true);

const ALIGNS = [false, 'center', 'right'];

const COLORS = [
  '#000000',
  '#e60000',
  '#ff9900',
  '#ffff00',
  '#008a00',
  '#0066cc',
  '#9933ff',
  '#ffffff',
  '#facccc',
  '#ffebcc',
  '#ffffcc',
  '#cce8cc',
  '#cce0f5',
  '#ebd6ff',
  '#bbbbbb',
  '#f06666',
  '#ffc266',
  '#ffff66',
  '#66b966',
  '#66a3e0',
  '#c285ff',
  '#888888',
  '#a10000',
  '#b26b00',
  '#b2b200',
  '#006100',
  '#0047b2',
  '#6b24b2',
  '#444444',
  '#5c0000',
  '#663d00',
  '#666600',
  '#003700',
  '#002966',
  '#3d1466',
];

const FONTS = [false, 'serif', 'monospace'];

const HEADERS = ['1', '2', '3', false];

const SIZES = ['small', false, 'large', 'huge'];

SnowTheme.prototype.buildPickers = function(selects, icons) {
  this.pickers = Array.from(selects).map((select: any) => {
    if (select.classList.contains('ql-align')) {
      if (isNullOrUndefined(select.querySelector('option'))) {
        fillSelect(select, ALIGNS);
      }
      return new IconPicker(select, icons.align);
    }
    if (
      select.classList.contains('ql-background') ||
      select.classList.contains('ql-color')
    ) {
      const format = select.classList.contains('ql-background')
        ? 'background'
        : 'color';
      if (isNullOrUndefined(select.querySelector('option'))) {
        fillSelect(
          select,
          COLORS
        );
      }
      return new ColorPicker(select, icons[format]);
    }
    if (isNullOrUndefined(select.querySelector('option'))) {
      if (select.classList.contains('ql-font')) {
        fillSelect(select, FONTS);
      } else if (select.classList.contains('ql-header')) {
        fillSelect(select, HEADERS);
      } else if (select.classList.contains('ql-size')) {
        fillSelect(select, SIZES);
      }
    }
    return new Picker(select);
  });
  const update = () => {
    this.pickers.forEach(picker => {
      picker.update();
    });
  };
  this.quill.on(Quill.events.EDITOR_CHANGE, update);
};

function fillSelect(select, values, defaultValue = false) {
  values.forEach(value => {
    const option = document.createElement('option');
    if (value === defaultValue) {
      option.setAttribute('selected', 'selected');
    } else {
      option.setAttribute('value', value);
    }
    select.appendChild(option);
  });
}
