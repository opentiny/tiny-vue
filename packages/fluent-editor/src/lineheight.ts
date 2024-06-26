import Quill from 'quill'

// import * as Quill from 'quill';
const Parchment = Quill.imports['parchment'];

const LineHeightStyle = new Parchment.StyleAttributor('lineheight', 'line-height', {
  scope: Parchment.Scope.INLINE,
  whitelist: ['2', '2.5', '3', '4', '5'] // 行距值的白名单
});

export default LineHeightStyle;
