export default {
  alert: {
    Attributes: {
      closable: 'closable',
      description: 'description',
      type: 'type',
      icon: 'icon',
      size: 'size',
      title: 'title',
      center: 'center',
      'show-icon': 'show-icon',
      'close-text': 'close-text'
    },
    Events: {
      close: 'close'
    },
    Slots: {
      default: 'slot-default',
      title: 'slot-title'
    }
  },

  badge: {
    Attributes: {
      value: 'value',
      max: 'max',
      'is-dot': 'is-dot',
      hidden: 'hidden',
      href: 'href',
      target: 'target',
      type: 'type'
    },
    Slots: {
      default: 'slot-default',
      content: 'slot-content'
    }
  },

  breadcrumb: {
    Attributes: {
      separator: 'separator',
      'separator-class': 'separator',
      replace: 'replace',
      to: 'to'
    },
    Slots: {
      default: 'slot-default'
    }
  },

  'bulletin-board': {
    Attributes: {
      data: 'data',
      'more-link': 'more-link',
      'active-name': 'active-name',
      icon: 'icon',
      'show-more': 'show-more',
      'tab-title': 'tab-title',
      title: 'title'
    }
  },

  button: {
    Attributes: {
      'native-type': 'native-type',
      type: 'type',
      size: 'size',
      autofocus: 'autofocus',
      circle: 'circle',
      disabled: 'disabled',
      icon: 'icon',
      loading: 'loading',
      plain: 'plain',
      'reset-time': 'reset-time',
      round: 'round'
    },
    Events: {
      click: 'click'
    },
    Slots: {
      default: 'slot-default'
    }
  },

  'button-group': {
    Attributes: {
      data: 'data',
      disabled: 'disabled',
      plain: 'plain',
      'text-field': 'text-field',
      value: 'value',
      'value-field': 'value-field'
    },
    Slots: {
      default: 'slot-default'
    }
  },

  input: {
    Attributes: {
      'suffix-icon': 'suffix-icon',
      maxlength: 'maxlength',
      'prefix-icon': 'prefix-icon',
      readonly: 'readonly',
      clearable: 'clearable',
      type: 'type',
      'value / v-model': 'value',
      autocomplete: 'autocomplete',
      counter: 'counter',
      autofocus: 'autofocus',
      autosize: 'autosize',
      disabled: 'disabled',
      form: 'form',
      label: 'label',
      max: 'max',
      min: 'min',
      minlength: 'minlength',
      name: 'name',
      placeholder: 'placeholder',
      resize: 'resize',
      rows: 'rows',
      'show-password': 'show-password',
      'show-word-limit': 'show-word-limit',
      size: 'size',
      step: 'step',
      tabindex: 'tabindex',
      'validate-event': 'validate-event'
    },
    Events: {
      blur: 'event-blur',
      change: 'event-change',
      clear: 'event-clear',
      focus: 'event-focus',
      input: 'event-input'
    },
    Methods: {
      addMemory: 'method-addMemory',
      blur: 'method-blur',
      focus: 'method-focus',
      select: 'method-select'
    },
    Slots: {
      append: 'slot-append',
      prefix: 'slot-prefix',
      prepend: 'slot-prepend',
      suffix: 'slot-suffix'
    }
  },

  select: {
    Attributes: {
      multiple: 'multiple',
      clearable: 'clearable',
      'value / v-model': 'value',
      autocomplete: 'autocomplete',
      'allow-create': 'allow-create',
      'automatic-dropdown': 'automatic-dropdown',
      'collapse-tags': 'collapse-tags',
      'default-first-option': 'default-first-option',
      disabled: 'disabled',
      'filter-method': 'filter-method',
      filterable: 'filterable',
      loading: 'loading',
      'loading-text': 'loading-text',
      'multiple-limit': 'multiple-limit',
      name: 'name',
      'no-data-text': 'no-data-text',
      'no-match-text': 'no-match-text',
      placeholder: 'placeholder',
      'popper-append-to-body': 'popper-append-to-body',
      'popper-class': 'popper-class',
      remote: 'remote',
      'remote-method': 'remote-method',
      'reserve-keyword': 'reserve-keyword',
      size: 'size',
      'value-key': 'value-key'
    },
    Methods: {
      blur: 'method-blur',
      focus: 'method-focus'
    },
    Events: {
      change: 'event-change',
      clear: 'event-clear',
      blur: 'event-blur',
      focus: 'event-focus',
      'remove-tag': 'event-remove-tag',
      'visible-change': 'event-visible-change'
    },
    Slots: {
      default: 'slot-default',
      empty: 'slot-empty',
      prefix: 'slot-prefix',
      footer: 'slot-footer'
    }
  },

  option: {
    Attributes: {
      disabled: 'disabled',
      label: 'label',
      value: 'value'
    }
  },

  'option-group': {
    Attributes: {
      disabled: 'disabled',
      label: 'label'
    }
  },

  'scroll-text': {
    Attributes: {
      direction: 'direction',
      'hover-stop': 'text',
      text: 'text',
      time: 'text'
    },
    Events: {},
    Methods: {},
    Slots: {
      default: 'slots'
    }
  },
  container: {
    Attributes: {
      'aside-width': 'base',
      'footer-height': 'base',
      'header-height': 'base',
      pattern: 'pattern'
    },
    Events: {},
    Methods: {},
    Slots: {}
  },
  switch: {
    Attributes: {
      disabled: 'disabled',
      mini: 'disabled',
      'value / v-model': 'truevlue',
      trueValue: 'truevlue',
      falseValue: 'truevlue'
    },
    Events: {},
    Methods: {},
    Slots: {}
  },
  tag: {
    Attributes: {
      border: 'hit',
      hit: 'hit',
      color: 'color3',
      type: 'type',
      closable: 'closable',
      createable: 'closable',
      effect: 'effect',
      disabled: 'disabled',
      mode: 'border',
      readonly: 'disabled',
      selectable: 'border',
      size: 'tag-size',
      value: 'base'
    },
    Events: {
      click: 'tag-event-click',
      close: 'tag-event-close'
    },
    Methods: {},
    Slots: {
      new: 'slotNew',
      text: 'slotText'
    }
  },
  tabs: {
    Attributes: {
      activeName: 'basic-usage',
      tabStyle: 'tab-style-card',
      withAdd: 'with-add',
      withClose: 'with-close',
      position: 'position-bottom',
      'before-leave': 'before-leave',
      stretch: 'stretch-wh',
      size: 'tabs-size',
      value: 'basic-value'
    },
    Events: {
      add: 'tabs-events-add',
      click: 'tabs-events-click',
      close: 'tabs-events-close',
      edit: 'tabs-events-edit'
    },
    Methods: {},
    Slots: {
      title: 'custom-tab-title'
    }
  },
  'text-popup': {
    Attributes: {
      label: 'label',
      placeholder: 'placeholder',
      readonly: 'readonly',
      value: 'value',
      width: 'width',
      separtor: 'separtor'
    },
    Events: {},
    Methods: {},
    Slots: {}
  },
  search: {
    Attributes: {
      'default-value': 'default-value',
      mini: 'mini-mode',
      placeholder: 'basic-usage',
      'search-types': 'search-types',
      transparent: 'transparent-mode'
    },
    Events: {
      change: 'search-events',
      search: 'search-events'
    },
    Methods: {},
    Slots: {
      poplist: 'custom-search-types',
      text: 'show-selected-types'
    }
  },
  slider: {
    Attributes: {
      value: 'basic-usage',
      mini: 'disabled',
      'value / v-model': 'truevlue',
      trueValue: 'truevlue',
      falseValue: 'truevlue'
    },
    Events: {},
    Methods: {},
    Slots: {}
  },
  split: {
    Attributes: {
      'left-top-min': 'base',
      mode: 'base',
      'right-bottom-min': 'base',
      value: 'base',
      transparent: 'base'
    },
    Events: {
      moveend: 'events',
      movestart: 'events',
      moving: 'events'
    },
    Methods: {},
    Slots: {
      bottom: 'slots',
      left: 'slots',
      right: 'slots',
      top: 'slots',
      trigger: 'slots'
    }
  },
  'card-template': {
    Attributes: {
      'body-style': 'base',
      'header-line': 'base'
    },
    Events: {},
    Methods: {},
    Slots: {
      default: 'slots',
      footer: 'slots',
      header: 'slots'
    }
  },
  col: {
    Attributes: {
      span: 'base',
      move: 'move',
      offset: 'move',
      xs: 'responsive',
      sm: 'responsive',
      xl: 'responsive',
      md: 'responsive',
      lg: 'responsive',
      no: 'move',
      tag: 'tag'
    },
    Events: {},
    Methods: {},
    Slots: {}
  },
  loading: {
    Attributes: {
      text: 'base',
      background: 'background',
      body: 'body',
      customClass: 'custom-class',
      lock: 'lock',
      spinner: 'spinner',
      transparent: 'opacity',
      fullscreen: 'fullscreen',
      target: 'target'
    },
    Events: {},
    Methods: {},
    Slots: {}
  },
  progress: {
    Attributes: {
      color: 'custom-color',
      percentage: 'basic-usage',
      'show-text': 'format-text',
      status: 'progress-status',
      'stroke-width': 'progress-width',
      'text-inside': 'text-inside-or-no-text',
      type: 'progress-type'
    }
  },
  numeric: {
    Attributes: {
      controls: 'controls',
      disabled: 'dynamic-disabled',
      max: 'max-min',
      min: 'max-min',
      mouseWheel: 'mouse-wheel',
      precision: 'precision',
      step: 'about-step'
    }
  },
  milestone: {
    Attributes: {
      data: 'data-source',
      'completed-field': 'completed-field',
      'flag-before': 'flag-before',
      'flag-content-field': 'flag-content-field',
      'flag-field': 'flag-field',
      'flag-name-field': 'flag-name-field',
      'flag-status-field': 'flag-status-field',
      'line-style': 'line-style',
      'milestones-status': 'base',
      'show-number': 'show-number',
      solid: 'solid',
      space: 'space',
      start: 'space',
      'status-field': 'status-field',
      'time-field': 'time-field'
    },
    Events: {
      click: 'click',
      flagclick: 'click',
      'flag-click': 'click'
    },
    Methods: {},
    Slots: {
      bottom: 'bottom',
      flag: 'flag',
      top: 'top'
    }
  },
  modal: {
    Attributes: {
      'value,v-model': 'value',
      type: 'type',
      id: 'id',
      duration: 'duration',
      fullscreen: 'fullscreen',
      width: 'width',
      height: 'height',
      mask: 'lock-view',
      message: 'message',
      resize: 'resize',
      showFooter: 'showFooter',
      showHeader: 'showHeader',
      status: 'status',
      title: 'title',
      top: 'top',
      zIndex: 'zIndex',
      'min-width': 'min-width',
      'min-height': 'min-height',
      'esc-closable': 'esc-closable',
      'lock-view': 'lock-view',
      'lock-scroll': 'lock-scroll',
      'mask-closable': 'mask-closable'
    },
    Events: {
      confirm: 'confirm-event',
      cancel: 'cancel-event',
      close: 'close-event',
      show: 'show-event',
      hide: 'hide-event',
      zoom: 'zoom-event'
    },
    Methods: {},
    Slots: {
      default: 'value',
      footer: 'footer-slot'
    }
  },
  espace: {
    Attributes: {
      data: 'data'
    },
    Events: {},
    Methods: {},
    Slots: {}
  },
  steps: {
    Attributes: {
      data: 'data-resource',
      active: 'order-progress',
      'count-field': 'custom-field',
      'name-field': 'custom-field',
      space: 'space',
      'status-field': 'custom-field'
    },
    Events: {
      click: 'click'
    },
    Methods: {},
    Slots: {
      item: 'slot'
    }
  },
  'user-head': {
    Attributes: {
      'background-color': 'color',
      color: 'color',
      'message-total': 'message-total',
      'message-type': 'message-type',
      'message-upper-limit': 'message-upper-limit',
      min: 'shape',
      round: 'shape',
      type: 'type',
      value: 'type'
    },
    Events: {},
    Methods: {},
    Slots: {
      default: 'slot'
    }
  },
  'fall-menu': {
    Attributes: {
      data: 'a'
    },
    Events: {},
    Methods: {},
    Slots: {
      left: 'level',
      level1: 'level',
      level2: 'level',
      level3: 'level',
      right: 'level'
    }
  },
  rate: {
    Attributes: {
      colors: 'score',
      'disabled-void-color': 'disabledcolor',
      'disabled-void-icon-class': 'disabledcolor',
      'show-text': 'readiconclass',
      'icon-classes': 'colors',
      disabled: 'disabledcolor',
      'text-color': 'readiconclass',
      texts: 'readiconclass',
      'void-icon-class': 'colors',
      'allow-half': 'half',
      'score-template': 'textconfig',
      'show-score': 'textconfig',
      'void-color': 'colors',
      'text-on-bottom': 'half',
      'value / v-model': 'half',
      size: 'spacesize',
      space: 'spacesize',
      'high-threshold': 'score',
      'low-threshold': 'score',
      max: 'score',
      radio: 'radio'
    },
    Events: {
      change: 'events'
    },
    Methods: {},
    Slots: {}
  },
  'ip-address': {
    Attributes: {
      delimiter: 'delimiter',
      disabled: 'disabled',
      readonly: 'readonly',
      type: 'type',
      value: 'type'
    },
    Events: {
      select: 'select',
      input: 'input',
      change: 'change',
      focus: 'focus',
      blur: 'blur'
    },
    Methods: {},
    Slots: {
      默认插槽: 'slots'
    }
  },
  row: {
    Attributes: {
      align: 'align',
      gutter: 'gutter',
      justify: 'justify',
      order: 'order',
      tag: 'tag1'
    },
    Events: {},
    Methods: {},
    Slots: {}
  },
  'user-contact': {
    Attributes: {
      data: 'basic-usage',
      espace: 'support-open-espace',
      'show-img': 'support-open-espace',
      'show-name': 'support-open-espace',
      'show-number': 'support-open-espace'
    },
    Events: {},
    Methods: {},
    Slots: {}
  },
  'user-link': {
    Attributes: {
      value: 'basic-usage',
      'value-split': 'value-split',
      'text-split': 'text-split',
      'value-field': 'value-field',
      'text-field': 'text-field',
      service: 'custom-service'
    },
    Events: {},
    Slots: {},
    Methods: {}
  },
  tree: {
    Attributes: {
      accordion: 'accordion-mode',
      'allow-drag': 'allow-drag',
      data: 'data-source',
      'allow-drop': 'allow-drop',
      'auto-expand-parent': 'auto-expand-parent',
      'basic-usage': 'basic-usage',
      'check-descendants': 'check-descendants',
      'check-on-click-node': 'check-on-click-node',
      'check-strictly': 'check-strictly',
      'current-node-key': 'current-node-key',
      'custom-empty-text': 'custom-empty-text',
      'custom-node-icon': 'custom-node-icon',
      'default-checked-keys': 'default-checked-keys',
      'default-expand-all': 'default-expand-all',
      'default-expanded-keys': 'default-expanded-keys',
      'disable-node': 'disable-node',
      'expand-on-click-node': 'expand-on-click-node',
      'filter-node-method': 'filter-node',
      'highlight-current': 'highlight-current',
      indent: 'indent',
      'icon-class': 'icon-class',
      'node-draggable': 'node-draggable',
      'node-key': 'node-key',
      props: 'node-props-config',
      'render-after-expand': 'render-after-expand',
      'render-content': 'render-content',
      'show-checkbox': 'show-checkbox',
      'lazy-load': 'lazy-load-node'
    },
    Events: {},
    Methods: {},
    Slots: {}
  },

  'time-select': {
    Attributes: {
      'arrow-control': 'arrow-control',
      'clear-icon': 'clear-icon',
      clearable: 'clearable',
      'default-time': 'default-time',
      'default-value': 'default-value',
      disabled: 'disabled',
      editable: 'editable',
      'start-placeholder': 'range-placeholder',
      'end-placeholder': 'range-placeholder',
      placeholder: 'basic-usage',
      name: '',
      value: 'basic-usage',
      'v-model': 'basic-usage',
      'picker-options': 'picker-options',
      'popper-class': '',
      'prefix-icon': 'prefix-icon',
      'range-separator': '',
      size: 'size-mini'
    },
    Events: {
      add: 'tabs-events-add',
      click: 'tabs-events-click',
      close: 'tabs-events-close',
      edit: 'tabs-events-edit'
    },
    Methods: {},
    Slots: {
      title: 'custom-tab-title'
    }
  },
  transfer: {
    Attributes: {
      'button-texts': 'custom-button-texts',
      columns: '',
      data: '',
      'drop-config': 'drop-config',
      'filter-method': 'custom-filter-method',
      'filter-placeholder': 'filter-placeholder',
      filterable: 'filterable',
      format: 'checked-format-text',
      'left-default-checked': 'default-checked',
      'page-vo': '',
      props: 'props-of-data-source',
      'render-content': 'custom-render-content',
      'render-type': '',
      'right-default-checked': 'default-checked',
      'show-all-btn': '',
      sortable: '',
      'target-order': 'custom-data-items',
      titles: 'custom-transfer-titles',
      'to-left-disable': '',
      'to-right-disable': '',
      'value/v-model': 'basic-usage'
    },
    Events: {
      change: 'transfer-events',
      'left-check-change': 'transfer-events',
      'right-check-change': 'transfer-events'
    },
    Slots: {
      default: 'custom-data-items',
      'left-footer': 'custom-footer',
      'right-footer': 'custom-footer'
    },
    Methods: {
      clearQuery: 'manual-clear-query'
    }
  },

  logout: {
    Attributes: {
      guestRole: 'basic-usage',
      service: 'custom-service'
    }
  },

  user: {
    Attributes: {
      value: 'basic-usage',
      multiple: 'multiple-users',
      disabled: 'dynamic-disable',
      'value-split': 'value-split',
      'value-field': 'value-field',
      'text-field': 'text-field',
      cache: 'cache-users',
      'cache-key': 'cache-users',
      delay: 'delay-load',
      'suggest-length': 'load-after-input-the-length',
      'cache-fields': 'cache-users',
      service: 'custom-service',
      'collapse-tags': '',
      placeholder: 'custom-placeholder',
      'expand-tags': '',
      sortable: 'custom-sort',
      size: 'user-select-size'
    },
    Events: {},
    Slots: {},
    Methods: {}
  },
  carousel: {
    Attributes: {},
    Events: {},
    Methods: {},
    Slots: {}
  },
  checkbox: {
    Attributes: {},
    Events: {},
    Methods: {},
    Slots: {}
  },
  'dialog-box': {
    Attributes: {},
    Events: {},
    Methods: {},
    Slots: {}
  },
  radio: {
    Attributes: {
      disabled: 'dynamic-disable',
      border: 'with-border',
      label: 'basic-usage',
      name: '',
      size: 'radio-size'
    },
    Events: {
      change: 'radio-events'
    },
    Slots: {
      default: 'basic-usage'
    },
    Methods: {}
  },
  pager: {
    Attributes: {
      'pager-count': 'pager-count',
      mode: 'pager-mode',
      'value / v-model': 'basic-usage',
      'page-sizes': 'page-size',
      layout: 'custom-layout',
      'current-page': 'current-page',
      'hide-on-single-page': 'hide-on-single-page',
      'next-text': 'custom-next-prev-text',
      'page-count': 'page-count',
      'page-size': 'page-size',
      'prev-text': 'custom-next-prev-text',
      total: 'pager-in-grid'
    },
    Events: {
      'size-change': 'pager-events',
      'current-change': 'pager-events',
      'next-click': 'pager-events',
      'prev-click': 'pager-events'
    },
    Methods: {},
    Slots: {
      default: ''
    }
  },
  collapse: {
    Attributes: {
      'value / v-model': 'basic-usage',
      accordion: 'accordion'
    },
    Events: {
      change: 'collapse-events'
    },
    Methods: {},
    Slots: {}
  },
  'slide-bar': {
    Attributes: {
      value: 'basic-usage',
      'init-blocks': 'basic-usage',
      'wheel-blocks': 'wheel-blocks',
      tag: 'custom-tag',
      'sub-tag': 'custom-tag'
    },
    Events: {
      click: 'slide-bar-events',
      'before-click': 'slide-bar-events'
    },
    Methods: {},
    Slots: {
      default: 'custom-content'
    }
  },
  'credit-card-form': {
    Attributes: {
      'form-data': 'basic-usage'
    },
    Events: {
      'input-card-cvv': 'basic-usage',
      'input-card-month': 'basic-usage',
      'input-card-name': 'basic-usage',
      'input-card-number': 'basic-usage',
      'input-card-year': 'basic-usage',
      submit: 'basic-usage'
    },
    Methods: {},
    Slots: {}
  },
  'time-line': {
    Attributes: {
      vertical: 'vertical-step',
      'show-number': 'show-number',
      'name-field': 'different-data',
      'time-field': 'different-data',
      start: 'set-start-value',
      data: 'basic-usage',
      space: 'set-step-width',
      active: 'basic-usage',
      reverse: 'vertical-step'
    },
    Events: {
      click: 'basic-usage'
    },
    Methods: {},
    Slots: {
      top: 'custom-normal-step',
      bottom: 'custom-normal-step',
      left: 'custom-vertical-step',
      right: 'custom-vertical-step'
    }
  },
  'date-picker': {
    Attributes: {
      'value/v-model': 'basic-usage',
      align: 'align',
      'clear-icon': 'about-clear',
      clearable: 'about-clear',
      type: 'date-range',
      'picker-options': 'date-range-shortcuts',
      'start-placeholder': 'custom-range',
      'end-placeholder': 'custom-range',
      'range-separator': 'custom-range',
      'default-time': 'default-time-of-range',
      disabled: 'disabled',
      'default-value': 'default-value',
      editable: 'editable',
      format: 'about-format',
      'prefix-icon': 'custom-prefix-icon',
      size: 'set-size',
      placeholder: 'custom-placeholder',
      'unlink-panels': 'unlink-panels'
    },
    Events: {
      blur: 'date-picker-events',
      change: 'date-picker-events',
      focus: 'date-picker-events'
    },
    Methods: {},
    Slots: {}
  },
  'logon-user': {
    Attributes: {
      service: 'custom-service'
    },
    Events: {},
    Methods: {},
    Slots: {}
  },
  'user-account': {
    Attributes: {
      service: 'custom-service'
    },
    Events: {},
    Methods: {},
    Slots: {
      default: 'custom-operation'
    }
  }
}
