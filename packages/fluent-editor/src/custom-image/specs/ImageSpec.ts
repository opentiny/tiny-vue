import BlotSpec from './BlotSpec';

export default class ImageSpec extends BlotSpec {
  img;

  constructor(formatter) {
    super(formatter);
    this.img = null;
  }

  init() {
    this.formatter.quill.root.addEventListener('click', this.onClick);
  }

  getTargetElement() {
    return this.img;
  }

  onHide() {
    this.img = null;
  }

  onClick = (event: MouseEvent) => {
    const el = event.target;
    if (!(el instanceof HTMLElement) || el.tagName !== 'IMG') {
      return;
    }
    event.stopPropagation()

    this.img = el;
    this.formatter.show(this);
  };
}
