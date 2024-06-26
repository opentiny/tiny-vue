export default class Action {
  formatter;

  constructor(formatter) {
    this.formatter = formatter;
  }

  onCreate() {}

  onDestroy() {}

  onUpdate() {}
}
