import Quill from 'quill';
import Action from './Action';

export default class DeleteAction extends Action {
  onCreate() {
    document.addEventListener('keyup', this.onKeyUp, true);
    this.formatter.quill.root.addEventListener('input', this.onKeyUp, true);
  }

  onDestroy() {
    document.removeEventListener('keyup', this.onKeyUp);
    this.formatter.quill.root.removeEventListener('input', this.onKeyUp);
  }

  onKeyUp = (event: any) => {
    if (!this.formatter.currentSpec) {
      return;
    }

    // delete or backspace
    if (event.keyCode === 46 || event.keyCode === 8) {
      const blot = Quill.find(this.formatter.currentSpec.getTargetElement());
      if (blot) {
        blot.deleteAt(0);
      }
      this.formatter.hide();
    }
  };
}
