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
        key: _vm.columnAnchorKey,
        ref: 'tinyGridColumnAnchor'
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
  buildColumnAnchor({ property, label, anchors, activeAnchor }) {
    let visibleColumn = this.getColumns()
    let column = visibleColumn.find((col) => !col.type && col.property === property)
    let anchorName = ''
    let anchorRender = null

    if (typeof label !== 'undefined') {
      if (typeof label === 'string') {
        anchorName = label
      } else if (Array.isArray(label)) {
        if (label.length > 1) {
          anchorName = String(label[0])
          anchorRender = label[1]
        }
      } else if (label && typeof label === 'object') {
        anchorName = label.label
        anchorRender = label.render

        if (label.active) {
          activeAnchor.field = property
          if (label.delay) activeAnchor.delay = label.delay
        }
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
  },
  buildColumnAnchorParams() {
    let { columnAnchor } = this
    let anchors = []
    let activeAnchor = { field: '', delay: 30 }

    if (Array.isArray(columnAnchor) && columnAnchor.length) {
      columnAnchor.forEach((item) => {
        if (typeof item === 'string') {
          this.buildColumnAnchor({ property: item, anchors })
        } else if (Array.isArray(item)) {
          if (item.length > 1) this.buildColumnAnchor({ property: item[0], label: item[1], anchors })
        } else if (item && typeof item === 'object') {
          const { field, ...other } = item
          this.buildColumnAnchor({ property: field, label: other, anchors, activeAnchor })
        }
      })
    }

    if (!activeAnchor.field && anchors.length) {
      activeAnchor.field = anchors[0].field
    }

    this.columnAnchorParams = {
      anchors,
      activeAnchor,
      action: (field, e) => this.anchorAction({ field, anchors, _vm: this, e })
    }
    this.emitter.once('active-anchor', () => this.anchorAction({ field: activeAnchor.field, anchors, _vm: this }))
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
