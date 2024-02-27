const size = ['small', false, 'large', 'huge']
const underline = ['bold', 'italic', 'underline', 'strike']
const media = ['link', 'image', 'video', 'file']
const header = [{ header: [1, 2, 3, 4, 5, 6, false] }]
const script = [{ script: 'sub' }, { script: 'super' }]

const defaultOptions = {
  theme: 'snow',
  boundary: document.body,
  modules: {
    tableModule: true,
    toolbar: {
      container: [
        underline,
        ['blockquote', 'code-block'],
        [{ header: 1 }, { header: 2 }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        script,
        [{ indent: '-1' }, { indent: '+1' }],
        [{ direction: 'rtl' }],
        [{ size }],
        header,
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ align: [] }],
        ['clean'],
        media
      ],
      handlers: {
        file(value) {
          if (!value) {
            this.quill.format('file', false)
          }
        }
      }
    },
    clipboard: { matchVisual: false }
  },
  placeholder: 'Insert text here ...',
  readOnly: false
}

const getToolbarTips = (t) => [
  { Choice: '.ql-bold', title: t('ui.richText.bold') },
  { Choice: '.ql-italic', title: t('ui.richText.italic') },
  { Choice: '.ql-underline', title: t('ui.richText.underline') },
  { Choice: '.ql-header', title: t('ui.richText.header') },
  { Choice: '.ql-strike', title: t('ui.richText.strike') },
  { Choice: '.ql-blockquote', title: t('ui.richText.blockquote') },
  { Choice: '.ql-code-block', title: t('ui.richText.codeBlock') },
  { Choice: '.ql-size', title: t('ui.richText.size') },
  { Choice: '.ql-list[value="ordered"]', title: t('ui.richText.listOrdered') },
  { Choice: '.ql-list[value="bullet"]', title: t('ui.richText.listBullet') },
  { Choice: '.ql-header[value="1"]', title: t('ui.richText.header1') },
  { Choice: '.ql-header[value="2"]', title: t('ui.richText.header2') },
  { Choice: '.ql-align', title: t('ui.richText.align') },
  { Choice: '.ql-color', title: t('ui.richText.color') },
  { Choice: '.ql-background', title: t('ui.richText.background') },
  { Choice: '.ql-image', title: t('ui.richText.image') },
  { Choice: '.ql-video', title: t('ui.richText.video') },
  { Choice: '.ql-link', title: t('ui.richText.link') },
  { Choice: '.ql-formula', title: t('ui.richText.formula') },
  { Choice: '.ql-clean', title: t('ui.richText.clean') },
  { Choice: '.ql-indent[value="-1"]', title: t('ui.richText.indent1') },
  { Choice: '.ql-indent[value="+1"]', title: t('ui.richText.indent2') },
  {
    Choice: '.ql-header .ql-picker-label',
    title: t('ui.richText.pickerLabel')
  },
  {
    Choice: '.ql-header .ql-picker-item[data-value="1"]',
    title: t('ui.richText.headerPicker1')
  },
  {
    Choice: '.ql-header .ql-picker-item[data-value="2"]',
    title: t('ui.richText.headerPicker2')
  },
  {
    Choice: '.ql-header .ql-picker-item[data-value="3"]',
    title: t('ui.richText.headerPicker3')
  },
  {
    Choice: '.ql-header .ql-picker-item[data-value="4"]',
    title: t('ui.richText.headerPicker4')
  },
  {
    Choice: '.ql-header .ql-picker-item[data-value="5"]',
    title: t('ui.richText.headerPicker5')
  },
  {
    Choice: '.ql-header .ql-picker-item[data-value="6"]',
    title: t('ui.richText.headerPicker6')
  },
  {
    Choice: '.ql-header .ql-picker-item:last-child',
    title: t('ui.richText.normal')
  },
  {
    Choice: '.ql-size .ql-picker-item[data-value="small"]',
    title: t('ui.richText.sizeSmall')
  },
  {
    Choice: '.ql-size .ql-picker-item[data-value="large"]',
    title: t('ui.richText.sizeLarge')
  },
  {
    Choice: '.ql-size .ql-picker-item[data-value="huge"]',
    title: t('ui.richText.sizeHuge')
  },
  {
    Choice: '.ql-size .ql-picker-item:nth-child(2)',
    title: t('ui.richText.normal')
  },
  {
    Choice: '.ql-align .ql-picker-item:first-child',
    title: t('ui.richText.alignPicker1')
  },
  {
    Choice: '.ql-align .ql-picker-item[data-value="center"]',
    title: t('ui.richText.alignPicker2')
  },
  {
    Choice: '.ql-align .ql-picker-item[data-value="right"]',
    title: t('ui.richText.alignPicker3')
  },
  {
    Choice: '.ql-align .ql-picker-item[data-value="justify"]',
    title: t('ui.richText.alignPicker4')
  },
  { Choice: '.ql-script[value="sub"]', title: t('ui.richText.subScript') },
  { Choice: '.ql-script[value="super"]', title: t('ui.richText.superScript') },
  {
    Choice: '.ql-direction[value="rtl"]',
    title: t('ui.richText.directionRTL')
  },
  { Choice: '.ql-font', title: t('ui.richText.font') },
  { Choice: '.ql-file', title: t('ui.richText.file') }
]

export { defaultOptions, getToolbarTips }
