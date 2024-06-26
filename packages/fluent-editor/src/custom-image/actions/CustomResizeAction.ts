import Action from './Action';
const MIN_WIDTH = 40;

const getElementStyle = element => element.currentStyle
  ? element.currentStyle
  : window.getComputedStyle(element, null);
export default class CustomResizeAction extends Action {
  topLeftHandle: HTMLElement;
  topRightHandle: HTMLElement;
  bottomRightHandle: HTMLElement;
  bottomLeftHandle: HTMLElement;
  dragHandle: HTMLElement;
  dragStartX: number;
  preDragWidth: number;
  targetRatio: number;
  maxWidth: number;
  minWidth: number;

  constructor(formatter) {
    super(formatter);
    this.topLeftHandle = this.createHandle('top-left', 'nwse-resize');
    this.topRightHandle = this.createHandle('top-right', 'nesw-resize');
    this.bottomRightHandle = this.createHandle('bottom-right', 'nwse-resize');
    this.bottomLeftHandle = this.createHandle('bottom-left', 'nesw-resize');
    this.dragHandle = null;
    this.dragStartX = 0;
    this.preDragWidth = 0;
    this.targetRatio = 0;
    this.maxWidth = 0;
    this.minWidth = MIN_WIDTH;
  }

  onCreate() {
    const target: any = this.formatter.currentSpec.getTargetElement();
    this.formatter.overlay.setAttribute('data-image', target.src);
    this.formatter.overlay.appendChild(this.topLeftHandle);
    this.formatter.overlay.appendChild(this.topRightHandle);
    this.formatter.overlay.appendChild(this.bottomRightHandle);
    this.formatter.overlay.appendChild(this.bottomLeftHandle);
    this.repositionHandles(this.formatter.options.resize.handleStyle);
  }

  onDestroy() {
    this.setCursor('');
    this.formatter.overlay.removeChild(this.topLeftHandle);
    this.formatter.overlay.removeChild(this.topRightHandle);
    this.formatter.overlay.removeChild(this.bottomRightHandle);
    this.formatter.overlay.removeChild(this.bottomLeftHandle);
  }

  createHandle(position: string, cursor: string): HTMLElement {
    const box = document.createElement('div');
    box.classList.add(this.formatter.options.resize.handleClassName);
    box.setAttribute('data-position', position);
    box.style.cursor = cursor;

    if (this.formatter.options.resize.handleStyle) {
      Object.assign(box.style, this.formatter.options.resize.handleStyle);
    }

    box.addEventListener('mousedown', this.onMouseDown);
    return box;
  }

  repositionHandles(handleStyle: any) {
    let handleXOffset = '0px';
    let handleYOffset = '0px';
    if (handleStyle) {
      if (handleStyle.width) {
        handleXOffset = `${-parseFloat(handleStyle.width) / 2}px`;
      }
      if (handleStyle.height) {
        handleYOffset = `${-parseFloat(handleStyle.height) / 2}px`;
      }
    }

    Object.assign(this.topLeftHandle.style, { left: handleXOffset, top: handleYOffset });
    Object.assign(this.topRightHandle.style, { right: handleXOffset, top: handleYOffset });
    Object.assign(this.bottomRightHandle.style, { right: handleXOffset, bottom: handleYOffset });
    Object.assign(this.bottomLeftHandle.style, { left: handleXOffset, bottom: handleYOffset });
  }

  setCursor(value: string) {
    if (document.body) {
      document.body.style.cursor = value;
    }

    if (this.formatter.currentSpec) {
      const target = this.formatter.currentSpec.getOverlayElement();
      if (target) {
        target.style.cursor = value;
      }
    }
  }

  onMouseDown = (event: MouseEvent) => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }

    this.dragHandle = event.target;
    this.setCursor(this.dragHandle.style.cursor);

    if (!this.formatter.currentSpec) {
      return;
    }

    const target = this.formatter.currentSpec.getTargetElement();
    if (!target) {
      return;
    }
    event.preventDefault();
    const rect = target.getBoundingClientRect();

    this.dragStartX = event.clientX;
    this.preDragWidth = rect.width;
    this.targetRatio = rect.height / rect.width;

    let root: HTMLElement;
    let rootStyle: any;
    const tdWrap = this.findTd(target, 0);
    if (tdWrap) {
      root = tdWrap;
      rootStyle = getElementStyle(tdWrap);
    } else {
      root = this.formatter.quill.root;
      rootStyle = getElementStyle(root);
    }
    this.maxWidth = root.clientWidth
      - parseFloat(rootStyle.paddingRight)
      - parseFloat(rootStyle.paddingLeft);

    document.addEventListener('mousemove', this.onDrag);
    document.addEventListener('mouseup', this.onMouseUp);
  };

  findTd = (node: HTMLElement, level: number) => {
    if (level > 3) {
      return null;
    }

    const tagName = node.tagName.toUpperCase();
    if (tagName === 'TD') {
      return node;
    } else {
      const parentNode = node.parentElement;
      if (parentNode) {
        // eslint-disable-next-line no-return-assign
        return (this.findTd(parentNode, level += 1));
      } else {
        return null;
      }
    }
  };

  onDrag = (event: MouseEvent) => {
    if (!this.formatter.currentSpec) {
      return;
    }

    const target = this.formatter.currentSpec.getTargetElement();
    if (!target) {
      return;
    }

    const deltaX = event.clientX - this.dragStartX;
    let newWidth = 0;

    if (this.dragHandle === this.topLeftHandle || this.dragHandle === this.bottomLeftHandle) {
      newWidth = Math.round(this.preDragWidth - deltaX);
    } else {
      newWidth = Math.round(this.preDragWidth + deltaX);
    }

    let minWidth = this.minWidth;

    if (this.maxWidth < minWidth) {
      minWidth = this.maxWidth;
    }

    if (newWidth > this.maxWidth) {
      newWidth = this.maxWidth;
    } else if (newWidth < minWidth) {
      newWidth = minWidth;
    }

    const newHeight = this.targetRatio * newWidth;

    target.setAttribute('width', `${newWidth}`);
    target.setAttribute('height', `${newHeight}`);

    this.formatter.update();
  };

  onMouseUp = (event: MouseEvent) => {
    this.setCursor('');
    document.removeEventListener('mousemove', this.onDrag);
    document.removeEventListener('mouseup', this.onMouseUp);
  };
}
