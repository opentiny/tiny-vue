import ResizeAction from '../actions/CustomResizeAction';
import DeleteAction from '../actions/DeleteAction';

export default class BlotSpec {
  formatter;

  constructor(formatter) {
    this.formatter = formatter;
  }

  init(): void {}

  getActions() {
    return [ResizeAction, DeleteAction];
  }

  getTargetElement() {
    return null;
  }

  getOverlayElement() {
    return this.getTargetElement();
  }

  setSelection(): void {
    this.formatter.quill.setSelection(null);
  }

  onHide() {}
}
