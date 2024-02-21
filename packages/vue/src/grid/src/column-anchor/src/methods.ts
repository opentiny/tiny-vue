import { iconMarkOn } from '@opentiny/vue-icon'
import { h } from '@opentiny/vue-common'

export default {
  renderColumnAnchor(params, _vm) {
    const { anchors = [], action = () => {} } = params || {}
    const { viewType } = _vm
    return h(
      'div',
      {
        class: ['tiny-grid__column-anchor', _vm.viewCls('columnAnchor')],
        style: viewType === 'default' ? 'display:flex' : '',
        key: _vm.columnAnchorKey
      },
      anchors.map((anchor) => {
        const { active = false, label = '', field = '', render } = anchor

        if (typeof render === 'function') {
          return render({ h, anchor, action })
        }

        const itemClass = { 'tiny-grid__column-anchor-item': true, 'tiny-grid__column-anchor-item--active': active }
        const itemOn = { click: (e) => action(field, e) }
        const iconVnode = active ? h(iconMarkOn(), { class: 'tiny-grid__column-anchor-item-icon' }) : null
        const spanVnode = h('span', label)

        return h('div', { class: itemClass, on: itemOn }, [iconVnode, spanVnode])
      })
    )
  },
  buildColumnAnchorParams() {
    let { columnAnchor } = this
    let visibleColumn = this.getColumns()
    let anchors = []
    let getAnchor = (property, label) => {
      const column = visibleColumn.find((col) => !col.type && col.property === property)
      let anchorName = ''
      let anchorRender = null

      if (typeof label !== 'undefined') {
        if (typeof label === 'string') {
          anchorName = label
        } else if (Array.isArray(label) && label.length) {
          anchorName = String(label[0])
          anchorRender = label[1]
        }
      }

      if (column) {
        anchors.push({
          label: anchorName || (typeof column.title === 'string' ? column.title : ''),
          field: property,
          active: false,
          render: anchorRender
        })
      }
    }

    if (Array.isArray(columnAnchor) && columnAnchor.length) {
      columnAnchor.forEach((item) => {
        if (typeof item === 'string') {
          getAnchor(item)
        } else if (Array.isArray(item) && item.length) {
          getAnchor(item[0], item[1])
        }
      })
    }

    this.columnAnchorParams = { anchors, action: (field, e) => this.anchorAction({ field, anchors, _vm: this, e }) }
  },
  anchorAction({ field, anchors, _vm }) {
    const fromAnchor = anchors.find((anchor) => anchor.active)
    const toAnchor = anchors.find((anchor) => anchor.field === field)

    if (toAnchor && fromAnchor !== toAnchor) {
      if (fromAnchor && fromAnchor.active) {
        fromAnchor.active = false
      }

      if (!toAnchor.active) {
        toAnchor.active = true
        _vm.columnAnchorKey = field

        _vm.$nextTick((found = false) => {
          const visibleColumn = _vm.getColumns()
          const column = visibleColumn.find((col) => !col.type && col.property === field)
          const width = visibleColumn
            .filter((col) => !col.fixed)
            .map((col) => {
              if (col === column) {
                found = true
              }
              return found ? 0 : col.renderWidth
            })
            .reduce((p, c) => p + c, 0)

          if (column) {
            _vm.scrollTo(width)
          }
        })
      }
    }
  }
}
