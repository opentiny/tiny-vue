
import * as Quill from 'quill';
import Html2Canvas from 'html2canvas';
import { isPureIE } from '../config/editor.utils';

const Delta = Quill.imports['delta'];
const Module = Quill.imports['core/module'];

class Screenshot extends Module {
  quill: any;
  range: any;
  cutter: HTMLDivElement;
  mask: HTMLDivElement;
  coordinate: HTMLDivElement;
  width: number;
  height: number;
  leftClickLockFlag = false;
  start: {
    x: number;
    y: number;
  };

  constructor(quill, options, range) {
    super(quill, options);
    this.quill = quill;
    this.range = range;
  }

  init() {
    const maskExits = document.querySelectorAll('.ql-screenshot-mask');
    if (maskExits) {
      maskExits.forEach(item => item && item.remove());
    }
    // 创建截图图层
    this.mask = document.createElement('div');
    this.mask.className = 'ql-screenshot-mask';
    this.cutter = document.createElement('div');
    this.cutter.className = 'ql-screenshot-cutter';
    this.coordinate = document.createElement('p');
    this.coordinate.className = 'ql-screenshot-coordinate';
    this.insertBlock();
    this.cutter.appendChild(this.coordinate);
    this.mask.appendChild(this.cutter);
    document.body.appendChild(this.mask);
    document.addEventListener('mousedown', this.toggleRect);
  }

  insertBlock() {
    for (let i = 0; i < 7; i++) {
      const blockItem = document.createElement('div');
      blockItem.className = 'ql-screenshot-border-block';
      this.cutter.appendChild(blockItem);
    }
  }

  removeContextmenu = (event) => {
    event.preventDefault();
    this.mask.remove();
    document.removeEventListener('contextmenu', this.removeContextmenu);
  };

  toggleRect = (event: MouseEvent) => {
    // 右键取消截图操作
    if (event.button === 2) {
      document.removeEventListener('mousemove', this.drawRect);
      document.removeEventListener('mousedown', this.toggleRect);
      document.addEventListener('contextmenu', this.removeContextmenu);
      return;
    }
    if (!this.leftClickLockFlag) {
      if (this.start) {
        // 如果有起点，则当前触发坐标为终点，移除监听事件并添加确认和取消按钮
        document.removeEventListener('mousemove', this.drawRect);
        const doneBtn = document.createElement('div');
        doneBtn.innerHTML = `<span class="ql-screenshot-ok"></span><span class="ql-screenshot-cancel"></span>`;
        doneBtn.className = 'ql-screenshot-done';
        doneBtn.addEventListener('click', this.afterShotCtrl);
        this.coordinate.remove();
        this.cutter.appendChild(doneBtn);
        this.leftClickLockFlag = true;
      } else {
        // 无起点则设置起点坐标，监听鼠标移动
        this.start = { x: event.clientX, y: event.clientY };
        this.cutter.style.left = `${this.start.x}px`;
        this.cutter.style.top = `${this.start.y}px`;
        document.addEventListener('mousemove', this.drawRect);
      }
    }
  };

  drawRect = (event: MouseEvent) => {
    // 通过鼠标移动描绘截图图层
    this.width = event.clientX - this.start.x;
    this.height = event.clientY - this.start.y;
    this.cutter.style.width = `${this.width}px`;
    this.cutter.style.height = `${this.height}px`;
    this.coordinate.innerHTML = `${this.width}<br>${this.height}`;
  };

  afterShotCtrl = (event) => {
    document.removeEventListener('mousedown', this.toggleRect);
    this.mask.remove();
    const target = event.target;
    if (target && target.className === 'ql-screenshot-ok') {
      const rect = {
        x: this.start.x,
        y: this.start.y,
        width: this.width,
        height: this.height,
        scrollX: document.body.scrollLeft,
        scrollY: document.body.scrollTop,
        allowTaint: true, // 是否允许跨域图片渲染
        logging: false, // 是否启用日志记录
      };
      this.renderImage(rect);
    }
    this.start = undefined;
  };

  renderImage(rect) {
    if (isPureIE) {
      Html2Canvas(document.body, rect).then(canvas => this.insertEditor(canvas));
    } else {
      Html2Canvas(document.body, {
        allowTaint: true, // 是否允许跨域图片渲染
        foreignObjectRendering: this.quill.options.screenshotOnStaticPage, // 是否使用svg方式
        logging: false, // 是否启用日志记录
      }).then((canvas) => {
        // 当前canvas为body全局截图，从当前截图中截取想要的部分重新绘制转成base64插入富文本
        const cropCanvas = document.createElement('canvas');
        cropCanvas.width = this.width;
        cropCanvas.height = this.height;
        const cropCanvasCtx = cropCanvas.getContext('2d');
        cropCanvasCtx.drawImage(
          canvas,
          rect.x + window.scrollX,
          rect.y + window.scrollY,
          this.width,
          this.height,
          0,
          0,
          this.width,
          this.height
        );
        this.insertEditor(cropCanvas);
        cropCanvas.remove();
      });
    }
  }

  insertEditor(canvas) {
    const image = canvas.toDataURL();
    const delta = new Delta()
      .retain(this.range.index)
      .delete(this.range.length)
      .insert({ image });
    this.quill.updateContents(delta, Quill.sources.USER);
    this.quill.setSelection(this.range.index + 1, Quill.sources.SILENT);
  }
}

export default Screenshot;
