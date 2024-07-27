import Quill from 'quill';
import { LANG_CONF } from '../config';
import { ICounterOption } from '../config/types';

export default class Counter {
  container: HTMLDivElement;
  options: ICounterOption;
  defaultOptions: ICounterOption = {
    format: 'text',
    unit: 'char',
    template: LANG_CONF['counter-template'],
    count: 500
  };

  // @ts-ignore
  constructor(private quill: Quill, options: ICounterOption) {
    this.options = { ...this.defaultOptions, ...options};
    this.container = quill.addContainer('ql-counter');
    quill.on(Quill.events.TEXT_CHANGE, this.renderCount);
    this.renderCount();
  }

  renderCount = () => {
    setTimeout(() => {
      // @ts-ignore
      const { format, count: totalCount, unit, template: counterTemplate, errorTemplate } = this.options;
      const count = this.getContentLength(format);
      const restCount = totalCount - count;
      const countUnit = unit === 'char' ? LANG_CONF.char : LANG_CONF.word;
      let template: any = counterTemplate;
      if (typeof template === 'function') {
        template = template(count, restCount);
      }
      const desc = template.replace('{{count}}', count)
        .replace('{{totalCount}}', String(totalCount))
        .replace('{{restCount}}', String(restCount))
        .replace(/{{countUnit}}/g, countUnit);

      let limitTemplate: any = errorTemplate || LANG_CONF['counter-limit-tips'];
      if (typeof limitTemplate === 'function') {
        limitTemplate = limitTemplate(count, restCount);
      }
      const limitTips = limitTemplate.replace('{{countUnit}}', countUnit);
      if (restCount < 0) {
        this.container.innerHTML = errorTemplate ? limitTips : `<span style="color:red">${limitTips}</span>`;
      } else {
        this.container.innerHTML = desc;
      }
    });
  };

  getContentLength(format) {
    let content = this.quill.getText();
    if (format === 'html') {
      let html = this.quill.root.innerHTML;
      // 编辑器初始时
      if (html === '<p><br></p>' || html === '<div><br><div>') {
        html = '';
      }
      content = html;
    }
    const text = content.replace(/\s/g, '').trim();
    if (this.options.unit === 'word') {
      return !content.trim() ? 0 : content.trim().split(/\s+/).length;
    }
    return text.length;
  }
}
