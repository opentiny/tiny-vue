import Quill from 'quill';
import Action from './actions/Action';
import ImageBlot, { ImageContainerBlot } from './image';
import DefaultOptions, { Options } from './Options';
import BlotSpec from './specs/BlotSpec';
import { CustomImageSpec } from './specs/CustomImageSpec';
import { merge as deepmerge } from 'lodash-es';

const dontMerge = (destination: Array<any>, source: Array<any>) => source;

// @dynamic
export default class BlotFormatter {
  quill: any;
  options: Options;
  currentSpec: BlotSpec;
  specs: BlotSpec[];
  overlay: HTMLElement;
  actions: Action[];
  observer: any;

  static register() {
    Quill.register('formats/image', ImageBlot, true);
    Quill.register('formats/image-container', ImageContainerBlot, true);
    Quill.register('modules/image-spec', CustomImageSpec, true);
  }

  constructor(quill: any, options: any = {}) {
    this.quill = quill;
    this.options = deepmerge(DefaultOptions, options, { arrayMerge: dontMerge });
    this.currentSpec = null;
    this.actions = [];
    this.overlay = document.createElement('div');
    this.overlay.classList.add(this.options.overlay.className);
    if (this.options.overlay.style) {
      Object.assign(this.overlay.style, this.options.overlay.style);
    }

    // disable native image resizing on firefox
    document.execCommand('enableObjectResizing', false, 'false'); // eslint-disable-next-line-line no-undef
    this.quill.root.parentNode.style.position = this.quill.root.parentNode.style.position || 'relative';
    this.quill.root.addEventListener('click', this.onClick);
    this.specs = this.options.specs.map((SpecClass: any) => new SpecClass(this));
    this.specs.forEach((spec) => spec.init());
  }

  show(spec: BlotSpec) {
    this.currentSpec = spec;
    this.currentSpec.setSelection();
    this.setUserSelect('none');
    this.quill.root.parentNode.appendChild(this.overlay);
    this.repositionOverlay();
    this.createActions(spec);

    // fix: 图片对齐之后，虚线外框应该跟随移动
    const imageDom = spec.getTargetElement();
    const win: any = window;
    const MutationObserver = win.MutationObserver || win.WebKitMutationObserver || win.MozMutationObserver;
    const element = imageDom.parentNode;
    this.observer = new MutationObserver((mutationList) => {
      for (const mutation of mutationList) {
        const target = mutation.target;
        const image = target.querySelector('img');
        if (image) {
          this.repositionOverlay();
        }
      }
    });
    this.observer.observe(element, {
      attributes: true,
      attributeFilter: ['class'],
      attributeOldValue: true,
      subtree: true,
    });
    document.body.addEventListener('click', this.hideImageOverlay, true);
  }

  hide() {
    if (!this.currentSpec) {
      return;
    }

    const imgDom = this.currentSpec.getTargetElement();
    if (imgDom) {
      imgDom.classList.remove('current-select-img');
    }

    this.currentSpec.onHide();
    this.currentSpec = null;
    this.quill.root.parentNode.removeChild(this.overlay);
    this.overlay.style.setProperty('display', 'none');
    this.setUserSelect('');
    this.destroyActions();
  }

  update() {
    this.repositionOverlay();
    this.actions.forEach((action) => action.onUpdate());
  }

  createActions(spec: BlotSpec) {
    this.actions = spec.getActions().map((ActionClass: any) => {
      const action: Action = new ActionClass(this);
      action.onCreate();
      return action;
    });
  }

  destroyActions() {
    this.actions.forEach((action: Action) => action.onDestroy());
    this.actions = [];
  }

  repositionOverlay() {
    if (!this.currentSpec) {
      return;
    }

    const overlayTarget = this.currentSpec.getOverlayElement();
    if (!overlayTarget) {
      return;
    }

    const parent: HTMLElement = this.quill.root.parentNode;
    const specRect = overlayTarget.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    Object.assign(this.overlay.style, {
      display: 'block',
      left: `${specRect.left - parentRect.left - 1 + parent.scrollLeft}px`,
      top: `${specRect.top - parentRect.top + parent.scrollTop}px`,
      width: `${specRect.width}px`,
      height: `${specRect.height}px`,
    });
  }

  setUserSelect(value: string) {
    const props: string[] = [
      'userSelect',
      'mozUserSelect',
      'webkitUserSelect',
      'msUserSelect',
    ];

    props.forEach((prop: string) => {
      // set on contenteditable element and <html>
      this.quill.root.style.setProperty(prop, value);
      if (document.documentElement) {
        document.documentElement.style.setProperty(prop, value);
      }
    });
  }

  onClick = () => {
    this.hide();
  };

  hideImageOverlay = (event) => {
    const target = event.target;
    const isBlotFormatter = target?.classList?.contains('blot-formatter__overlay');
    // 点击图片操作框之外应该将其销毁
    if (!isBlotFormatter) {
      this.hide();
    }
    document.body.removeEventListener('click', this.hideImageOverlay);
  };
}
