import { $props, $setup, $prefix, defineComponent } from '@opentiny/vue-common'
import template from 'virtual-template?pc|mobile-first'

const $constants = {}

export const createNode = (name, status, label, date, items, row, col, other) => {
  const info = { status, label, date, items, row, col, other }

  return { name, info }
}

export const createLink = (from, to, p, status, style, other) => {
  const info = { status, style: style || 'solid', other }

  return { from, to, p, info }
}

export const createItem = (key, name, role, status, comment, date, other) => {
  return { key, name, role, status, comment, date, other }
}

export const createConfig = () => ({
  width: 1024,
  height: 420,
  rows: 8,
  cols: 8,
  status: { 1: 'complete', 2: 'ongoing', 3: 'pending', 4: 'fail' },
  colors: { 1: '#1890ff', 2: '#096dd9', 3: '#d9d9d9', 4: '#f5222d' },
  background: '#fff',
  statusComplete: 1,
  statusOngoing: 2,
  statusFail: 4,
  anchor: 'center',
  iconWrapperSize: 24,
  iconSize: 20,
  iconSvgSize: 14,
  labelSpacing: 8,
  labelWidth: 80,
  labelHeight: 60,
  labelDateColor: '#999',
  listWidth: 62,
  listThreshold: 1,
  listIconSize: 20,
  listBorderColor: '#d9d9d9',
  listIconColor: '#999',
  headUrl: '',
  headSize: 20,
  drawLink: null,
  styleLink: null,
  styleHoverLink: null,
  hoverHit: 3,
  checkItemStatus: null,
  font: '12px "Microsoft YaHei"',
  delay: 10,
  adjustPos: null,
  radius: 4,
  thin: true
})

export default defineComponent({
  name: $prefix + 'Flowchart',
  props: {
    ...$props,
    _constants: {
      type: Object,
      default: () => $constants
    },
    data: Object,
    config: Object
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
})
