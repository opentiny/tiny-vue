export function hiddenPanel() {
  // 解决滚动页面时，下拉类组件面板与目标元素分离问题。为容器添加scroll事件，滚动页面，关闭下拉面板。
  const demoContainerEle = document.getElementById('doc-layout').getElementsByClassName('n-layout-scroll-container')[0];
  demoContainerEle?.addEventListener('scroll', () => {
    const event = new CustomEvent('tiScroll', { bubbles: false, cancelable: true });
    document.dispatchEvent(event);
  });
}

// 主题色更新
const backgroundColor = '#e9edfa';
const textColor = '#5073e5';
const borderFocus = '1px solid #5073e5';
const boxShadowFocus = '0 0 0 2px rgba(80,115,229,0.2)';
export const themeOverrides = {
  Menu: {
    itemTextColorActive: textColor,
    itemColorActive: backgroundColor,
    itemTextColorActiveHover: textColor,
    itemColorHover: backgroundColor,
    itemColorActiveHover: backgroundColor,
    itemTextColorChildActive: textColor,
    itemTextColorChildActiveHover: textColor,
    arrowColorActive: textColor,
    arrowColorActiveHover: textColor,
    arrowColorChildActive: textColor,
    arrowColorChildActiveHover: textColor,
  },
  Anchor: {
    linkColor: backgroundColor,
    linkTextColorHover: textColor,
    linkTextColorActive: textColor,
    linkTextColorPressed: textColor,
    railColorActive: textColor,
  },
  Input: {
    caretColor: textColor,
    borderHover: borderFocus,
    borderFocus: borderFocus,
    loadingColor: textColor,
    boxShadowFocus: boxShadowFocus,
  },
};
