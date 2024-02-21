<script lang="ts">
import { defineComponent, h } from '@opentiny/vue-common'

export default defineComponent({
  name: 'CalendarItem',
  props: {
    text: String,
    day: [String, Object],
    config: Object
  },
  emits: ['clickday'],
  render() {
    const { text, day, config, $emit } = this as any
    const { renderItem, render } = config

    if (typeof render === 'function') {
      return render({ h, item: day, text, config })
    }

    let child = typeof renderItem === 'function' ? renderItem({ h, item: day, text }) : ''
    let backgroundColorClass = ''
    let markVnode: any = null
    let ons: any = {}

    child = child || h('span', text)

    if (day && day.disabled) {
      backgroundColorClass = (config && config.disabledBackgroundColorClass) || 'bg-color-bg-4'
    } else {
      ons.click = () => $emit.apply(this, ['clickday', day])
    }

    if (day && day.type === 'cur' && day.isCur) {
      backgroundColorClass = (config && config.currentBackgroundColorClass) || 'bg-color-brand'
    }

    const itemClass = [
      'w-8 h-8 rounded-sm flex justify-center items-center',
      day && day.disabled ? 'cursor-not-allowed' : 'cursor-pointer',
      backgroundColorClass
    ]
    const itemAttrs: any = { class: itemClass, on: ons, attrs: {} }

    itemAttrs.attrs['data-tag'] = 'tiny-mobile-calendar-bar-item'

    if (day && day.marked) {
      markVnode = h('div', {
        class: [
          'absolute w-1.5 h-1.5 left-1/2 bottom-0.5 -translate-x-1/2 rounded-full cursor-pointer',
          (config && config.markBackgroundColorClass) || 'bg-color-brand'
        ],
        attrs: { title: config && config.showMarkMessage ? day.markMsg : '' }
      })
    }

    return h('div', { class: 'w-full h-full flex justify-center items-center relative' }, [
      h('div', itemAttrs, [child]),
      markVnode
    ])
  }
})
</script>
