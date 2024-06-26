import { SCROLL_BAR_PANEL_HEIGHT } from '../table-config';
import { css } from '../utils';

export default class TableScrollBar {
  table: any;
  quill: any;
  modulesContainer: any;
  domNode: any;
  oldRootScrollTop: any;
  // @ts-ignore
  prev: number;
  columnToolDomNode: any;
  columnCtrlPanel: any;
  leftMask: any;
  tableViewRect: any;
  tableRect: any;
  containerRect: any;
  subscriber: any;
  // @ts-ignore
  tableMoveDistance: number;
  // @ts-ignore
  maxBarLeft: number;
  // @ts-ignore
  scrollBar: Element;
  // @ts-ignore
  isTableOverflow: boolean; // 表格是否溢出开关，判断开关值后只改变样式一次，不重复修改

  constructor(table, quill, dom) {
    if (!table) {
      return;
    }
    this.table = table;
    this.quill = quill;
    this.modulesContainer = dom;
    this.domNode = null;
    this.oldRootScrollTop = this.quill.root.scrollTop;
    this.prev = 0;

    const betterTableModule = this.quill.getModule('better-table');
    const tableColumnTool = betterTableModule.columnTool;
    this.columnToolDomNode = tableColumnTool.domNode;
    this.columnCtrlPanel = tableColumnTool.columnCtrlPanel;
    this.leftMask = tableColumnTool.leftMask;

    this.updateScrollBar();

    if (this.quill.root === this.quill.scrollingContainer) {
      this.quill.root.addEventListener('scroll', this.handleQuillRootScroll.bind(this));
    }
  }

  handleQuillRootScroll() {
    if (!this.domNode) {
      return;
    }
    const curTableRect = this.table.getBoundingClientRect();
    const curContainerRect = this.quill.root.parentNode.getBoundingClientRect();
    const tableTop = curTableRect.top + SCROLL_BAR_PANEL_HEIGHT;
    const tableBottom = curTableRect.top + curTableRect.height - 1;
    const containerBottom = curContainerRect.top + curContainerRect.height;
    if (containerBottom < tableBottom && containerBottom > tableTop) { // 表格下端溢出容器下端
      if (!this.isTableOverflow) {
        this.isTableOverflow = true;
        css(this.domNode, {
          display: 'block',
          top: `${this.containerRect.height - SCROLL_BAR_PANEL_HEIGHT}px`,
          marginTop: '0px'
        });
      }
    } else if (containerBottom <= tableTop) { // 表格上端溢出容器下端
      this.isTableOverflow = false;
      this.domNode.style.display = 'none';
    } else { // 表格下端在容器内
      this.setScrollBarToBottom();
      css(this.domNode, { marginTop: `${this.oldRootScrollTop - this.quill.root.scrollTop}px` });
    }
  }

  setScrollBarToBottom() {
    if (this.isTableOverflow) {
      this.isTableOverflow = false;
      const barPos = this.tableRect.top + this.tableRect.height - this.containerRect.top - 1;
      css(this.domNode, { display: 'block', top: `${barPos}px` });
    }
  }

  resetTableHeight(table) {
    if (this.domNode) {
      // 表格的高度改变，重置初始化tableRect的高度，但不重置其他坐标值
      this.tableRect.height = table.getBoundingClientRect().height;
      this.isTableOverflow = !this.isTableOverflow;
      this.handleQuillRootScroll();
    }
  }

  setScrollBarMove(pos, isMouse) {
    // 获取当前滑块左边距和鼠标两次事件节点之间的位移差，计算当前滑块位置及是否显示左右遮罩层，通过比例计算表格位移并赋值
    const currentBarLeft = parseInt(getComputedStyle(this.scrollBar)['left'], 10);
    let left = isMouse ? pos - this.prev + currentBarLeft : currentBarLeft + pos;
    this.showMask(left);
    left = this.getLimitedDistance(left);
    const scale = this.tableViewRect.width / this.tableRect.width;
    const move = left / scale;
    const columnCtrlPanelLeft = this.tableViewRect.left - this.containerRect.left - move;
    css(this.scrollBar, { left: `${left}px` }); // 移动表格滚动条
    css(this.columnCtrlPanel, { left: `${columnCtrlPanelLeft}px` }); // 移动顶部列宽控制条
    this.table.parentNode.scrollLeft = move; // 移动表格
    if (isMouse) {
      this.prev = pos;
    }

    // fix: 拖动滚动条时修正选区位置
    const tableSelection = this.quill.getModule('better-table').tableSelection;
    if (tableSelection && tableSelection.selectedTds.length) { tableSelection.refreshHelpLinesPosition(); }
  }

  handleScrollBarMouseDown(mouseDownEvent) {
    mouseDownEvent.preventDefault();

    this.prev = mouseDownEvent.clientX;
    this.subscriber =(mouseMoveEvent: any) => {
      mouseMoveEvent.preventDefault();
      mouseMoveEvent.stopPropagation();
      this.setScrollBarMove(mouseMoveEvent.clientX, true);
    }
    this.quill.root.parentNode.addEventListener('mousemove',this.subscriber, false)
    document.addEventListener('mouseup', this.handleScrollBarMouseup.bind(this), false);
  }

  handleScrollBarMouseup(event) {
    event.preventDefault();
    this.quill.root.parentNode.removeEventListener('mousemove',this.subscriber)
    document.removeEventListener('mouseup', this.handleScrollBarMouseup.bind(this), false);
  }

  handleWheel(event) {
    // 按住 Shift 滚动鼠标滚轮，可以对表格进行横向滚动
    if (event.shiftKey) {
      const { deltaY } = event; // 每次滚动鼠标滚轮移动的距离
      this.setScrollBarMove(deltaY, false);
    }
  }

  showMask(distance) {
    // 根据当前滑块左边距判断是否显示左右遮罩层
    if (distance >= Math.floor(this.maxBarLeft)) {
      css(this.leftMask, { display: 'block' });
    } else if (distance <= 0) {
      css(this.leftMask, { display: 'none' });
    } else {
      css(this.leftMask, { display: 'block' });
    }
  }

  getLimitedDistance(distance) {
    if (distance >= Math.floor(this.maxBarLeft)) {
      distance = this.maxBarLeft;
    } else if (distance <= 0) {
      distance = 0;
    }
    return distance;
  }

  updateScrollBar() {
    if (!this.table?.parentNode) {
      return;
    }
    // 获取表格尺寸和表格容器尺寸
    const tableRect = this.table.getBoundingClientRect();
    const tableViewRect = this.table.parentNode.getBoundingClientRect();
    const tableMoveDistance = tableRect.width - tableViewRect.width; // 表格最大移动距离
    this.tableRect = tableRect;
    this.tableViewRect = tableViewRect;
    this.tableMoveDistance = tableMoveDistance;
    this.oldRootScrollTop = this.quill.root.scrollTop;

    if (tableMoveDistance > 0) {
      this.createScrollBar();
    } else {
      this.destroyScrollBar();
    }
  }

  createScrollBar() {
    // 列控制条增加表格相应位移
    const parent = this.quill.root.parentNode;
    const containerRect = parent.getBoundingClientRect(); // 编辑器容器宽度
    this.containerRect = containerRect;
    css(this.columnCtrlPanel, {
      left: `${this.tableViewRect.left - containerRect.left - this.table.parentNode.scrollLeft}px`
    });

    // 创建滚动条
    if (this.domNode) { this.domNode.remove(); }
    this.domNode = document.createElement('div');
    this.domNode.classList.add('qlbt-table-scroll-bar-panel');
    this.scrollBar = document.createElement('div');
    this.scrollBar.classList.add('qlbt-table-scroll-bar');
    this.scrollBar.addEventListener('mousedown', this.handleScrollBarMouseDown.bind(this), false);
    const scale = this.tableViewRect.width / this.tableRect.width;
    const barWidth = this.tableViewRect.width - this.tableMoveDistance * scale; // 滑块宽度
    css(this.scrollBar, { width: `${barWidth}px` });
    this.domNode.appendChild(this.scrollBar);

    // 判断当前表格是否存在位移，如存在通过比例计算滑块当前位移并赋值
    const tableScrollLeft = this.table.parentNode.scrollLeft;
    this.maxBarLeft = this.tableMoveDistance * scale; // 滑块最大移动距离
    if (tableScrollLeft) {
      const barLeft = tableScrollLeft * scale;
      this.showMask(barLeft);
      css(this.scrollBar, { left: `${this.getLimitedDistance(barLeft)}px` });
    }

    // 将滚动条插入到 table control panel 中
    const barPos = this.tableRect.top + this.tableRect.height - containerRect.top - 1;
    this.isTableOverflow = containerRect.top + containerRect.height < this.tableRect.top + this.tableRect.height;
    this.modulesContainer.appendChild(this.domNode);
    css(this.domNode, { top: `${Math.min(containerRect.height - SCROLL_BAR_PANEL_HEIGHT, barPos)}px` });

    // 绑定鼠标滚轮事件：Shift+鼠标滚轮，滚动表格横向滚动条
    document.addEventListener('wheel', this.handleWheel.bind(this));
  }

  destroyScrollBar() {
    css(this.leftMask, { display: 'none' });
    this.columnCtrlPanel.removeAttribute('style');
    this.maxBarLeft = null;
    this.destroy();
  }

  destroy() {
    if (this.domNode) { this.domNode.remove(); }
    this.quill.root.removeEventListener('scroll', this.handleQuillRootScroll.bind(this));
    document.removeEventListener('wheel', this.handleWheel.bind(this));
  }
}
