import { isInside } from '../../config/editor.utils';
import CustomResizeAction from '../actions/CustomResizeAction';
import DeleteAction from '../actions/DeleteAction';
import ImageSpec from './ImageSpec';

export class CustomImageSpec extends ImageSpec {
  formatter;
  editorElem: HTMLElement | undefined;
  observer: any;
  oldRootScrollTop: any;

  constructor(formatter) {
    super(formatter);
    this.formatter = formatter;
    this.oldRootScrollTop = this.formatter.quill.root.scrollTop;
    this.editorElem = this.formatter.quill.container;
    if (this.formatter.quill.root === this.formatter.quill.scrollingContainer) {
      this.formatter.quill.root.addEventListener('scroll', this.handleQuillRootScroll.bind(this));
    }
  }

  handleQuillRootScroll() {
    if (this.formatter.overlay) {
      this.formatter.overlay.style.marginTop = `${this.oldRootScrollTop - this.formatter.quill.root.scrollTop}px`;
    }
  }

  init(): void {
    this.editorElem.addEventListener('mouseover', this.imageMouseOver.bind(this));
    this.editorElem.addEventListener('mouseout', this.imageMouseout);

    super.init();
  }

  getActions() {
    return [DeleteAction, CustomResizeAction];
  }

  imageMouseOver(event) {
    const target = event.target;
    const isBlotFormatter = target?.classList?.contains('blot-formatter__overlay');
    if (target.nodeName === 'IMG' || isBlotFormatter) {
      // this.addImagePreviewOverlay(event);
    }
  }

  imageMouseout = (event) => {
    if (event.target.nodeName === 'IMG'
      || event.target.classList.contains('blot-formatter__overlay')) {
      const imgDom = event.target;
      if (!isInside(event, imgDom)) {
        this.removeImagePreviewOverlay();
      }
    }
  };

  addImagePreviewOverlay(event) {
    const target = event.target;
    const {
      left: imgLeft,
      width: imgWidth
    } = target.getBoundingClientRect();
      // fix: 解决 ql-container 容器设置 calc(100vh - 180px) 这样的视窗相对单位时，滚动视窗导致图片相对视窗的 top 相应改变，从而导致图片预览按钮的位置显示错误
    const imgTop = target.getBoundingClientRect().top + this.formatter.quill.container.scrollTop;

    const {
      left: editorLeft,
      top: editorTop
    } = event.currentTarget.getBoundingClientRect();

    const imgRelativeLeft = imgLeft - editorLeft;
    const imgRelativeTop = imgTop - editorTop;

    const maxmizeWidth = 24;
    const maxmizePadding = 15;
    const previewLeft = imgRelativeLeft + imgWidth - maxmizeWidth - maxmizePadding;
    const previewTop = imgRelativeTop + maxmizePadding;

    const previewStyle = `
        left: ${previewLeft}px;
        top: ${previewTop}px;
        width: ${maxmizeWidth}px;
      `;
    const imageSrc = target.src || target.getAttribute('data-image');
    const imageId = target.getAttribute('data-image-id');

    const previewDom = event.currentTarget.querySelector('.image-preview__overlay');
    if (!previewDom) {
      event.currentTarget.insertAdjacentHTML('beforeend', `
          <div class="image-preview__overlay" style="${previewStyle}">
            <i class="icon-maxmize" id="btn-image-preview" data-image-id="${imageId}"
              data-image="${imageSrc}"></i>
          </div>
        `);
    }
  }

  removeImagePreviewOverlay() {
    const previewDom = this.editorElem.querySelector('.image-preview__overlay');
    if (previewDom) {
      previewDom.parentNode.removeChild(previewDom);
    }
  }

  onHide() {
    this.removeImagePreviewOverlay();
    super.onHide();
  }

  resetOverlayMarginTop() {
    if (this.formatter.overlay) {
      this.formatter.overlay.style.marginTop = '0px';
    }
  }

  onClick = (event: MouseEvent) => {
    const el = event.target;
    const isReadonly = this.formatter.quill.options.readOnly;
    if (!(el instanceof HTMLElement) || el.tagName !== 'IMG' || isReadonly) {
      return;
    }

    this.img = el;
    this.oldRootScrollTop = this.formatter.quill.root.scrollTop;
    this.resetOverlayMarginTop();
    this.formatter.show(this);

    // 通过图片dom获取图片选区用以复制，设置 current-select-img::selection 取消选区背景
    const imageDom = this.formatter.currentSpec?.getTargetElement();
    if (imageDom) {
      imageDom.classList.add('current-select-img');
      const quill = this.formatter.quill;
      const imgBlot = quill.scroll.find(this.img);
      const index = quill.getIndex(imgBlot);
      const len = imgBlot.length();
      quill.setSelection(index, len);
    }
  };
}
