import { $split } from '@/tools';

// 批量导入vue组件示例文件, 进行vue组件示例的渲染
const vueFiles = import.meta.globEager('@demos/app/**/*.vue');
const vueComponents = Object.create(null);
for (const path in vueFiles) {
  if (Object.prototype.hasOwnProperty.call(vueFiles, path)) {
    const cmpId = $split(path, '/', -2);
    const key = $split(path, '/', -1);
    vueComponents[`${cmpId}/${key}`] = vueFiles[path].default;
  }
}

const languageMap = {
  js: 'javascript',
  ts: 'javascript',
  html: 'html',
  vue: 'html',
  css: 'css',
  less: 'css',
  scss: 'css',
  sass: 'css',
};

const textColor = '#5073e5';
const borderColor = '#d9dbdd';
const themeOverrides = {
  Tabs: {
    tabTextColorActiveLine: textColor,
    tabTextColorHoverLine: textColor,
    barColor: textColor,
    tabBorderColor: borderColor,
  },
};

// 只有select组件需要select.faq.cn.md
const faqMdConfig = {
  select: true
};
export { languageMap, themeOverrides, faqMdConfig, vueComponents };
