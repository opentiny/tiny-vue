<script lang="ts">
import { defineComponent, h, $props } from '@opentiny/vue-common'
import Tag from '@opentiny/vue-tag'
import Cell from '../cell'
import type { Datas, FieldConfig } from './type'
import { fnField, fnFields, fnFieldConfig } from './utils'

export default defineComponent({
  inject: ['$mftable'],
  props: { ...$props, datas: Object, row: Object },
  render() {
    const { datas, row } = this as any
    const { primaryColumn, contentColumns, genParams, config, cardView }: Datas = datas
    const { cardConfig = {} } = config
    const props = {
      attrs: { 'data-tag': 'tiny-table-column-content' },
      class: 'my-0.5 truncate space-y-2 sm:space-y-1'
    }
    const ons = { mouseenter: this.handleMouseenter, mouseleave: this.handleMouseleave }

    if (!primaryColumn || !primaryColumn.renderCell) {
      return h('div', props, [])
    }

    let primaryVnode: any = null
    let contentVnodes: any[] = []

    if (cardView) {
      const hasLogo = typeof cardConfig.logoField !== 'undefined'
      let hasTag = false
      let tagVnodes: Array<any> = []
      let logoField = ''
      let logoFieldConfig: FieldConfig = {}
      let logoVnode: any = null

      if (cardConfig.tagFields && cardConfig.tagFields.length) {
        const tagFields = cardConfig.tagFields

        hasTag = true

        tagVnodes = fnFields(tagFields).map((field, i) => {
          const fieldConfig = fnFieldConfig(tagFields[i])
          let colorField = ''

          if (cardConfig.tagColorFields && cardConfig.tagColorFields.length && cardConfig.tagColorFields[i]) {
            colorField = fnField(cardConfig.tagColorFields[i])
          }

          const type = row[colorField] || ''
          const tagProps = { props: { size: 'mini', customClass: 'inline-block truncate max-w-[theme(spacing.28)] h-4.5' } }

          if (type) {
            Object.assign(tagProps.props, { type })
          }

          if (fieldConfig.render) {
            return fieldConfig.render({ h, row, field, config: fieldConfig, value: row[field], color: type })
          }

          return h(Tag, tagProps, row[field] || '')
        })
      }

      if (cardConfig.logoField) {
        logoField = fnField(cardConfig.logoField)
        logoFieldConfig = fnFieldConfig(cardConfig.logoField)
      }

      const gridCls = ['grid mb-3', hasLogo ? 'grid-cols-[theme(spacing.11)_auto]' : 'grid-cols-[auto]']
      const logoCls = 'w-11 h-11 overflow-hidden rounded'
      const primCls = [
        'text-base sm:text-sm text-color-text-primary font-normal leading-5',
        'overflow-hidden text-ellipsis whitespace-normal line-clamp-2 sm:line-clamp-1',
        { 'ml-3': hasLogo }
      ]
      const tagCls = ['truncate h-4.5', { 'ml-3': hasLogo }]

      if (logoFieldConfig.render) {
        const params = { h, row, field: logoField, config: logoFieldConfig, value: row[logoField] }
        logoVnode = logoFieldConfig.render(params)
      } else {
        logoVnode = h('img', { class: 'w-full h-full', attrs: { src: row[logoField] || '' } })
      }

      primaryVnode = h('div', { class: gridCls }, [
        hasLogo ? h('div', { class: logoCls }, [logoVnode]) : null,
        h('div', { class: 'truncate space-y-1 relative -top-0.5' }, [
          h('div', { class: primCls, on: ons }, [primaryColumn.renderCell(h, genParams(primaryColumn, row))]),
          hasTag ? h('div', { class: tagCls }, tagVnodes) : null
        ])
      ])
    } else {
      const cls = [
        'w-full text-base sm:text-sm text-color-text-primary font-normal',
        'overflow-hidden text-ellipsis whitespace-normal line-clamp-2 sm:line-clamp-1'
      ]

      primaryVnode = h('div', { class: cls, on: ons }, [primaryColumn.renderCell(h, genParams(primaryColumn, row))])
    }

    contentVnodes = contentColumns.map((contentColumn) => {
      const params = genParams(contentColumn, row)
      const cls = [
        'w-full text-sm sm:text-xs text-color-text-secondary font-light sm:font-normal leading-5 sm:leading-5',
        'overflow-hidden text-ellipsis whitespace-normal line-clamp-2 sm:line-clamp-1'
      ]

      return h('div', { class: cls, on: ons }, [
        h('span', {}, [Cell.renderHeader(h, params)]),
        h('span', {}, cardConfig.split || ':\u{20}'),
        h('span', {}, [Cell.renderCell(h, params)])
      ])
    })

    return h('div', props, [primaryVnode, ...contentVnodes])
  },
  methods: {
    handleMouseenter(e: any) {
      const { $mftable } = this as any
      $mftable.showTooltip(e)
    },
    handleMouseleave() {
      const { $mftable } = this as any
      $mftable.hideTooltip()
    }
  }
})
</script>
