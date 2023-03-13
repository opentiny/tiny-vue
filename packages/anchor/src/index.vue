<script lang="jsx">
import { setup, $prefix } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/anchor/vue'

export default {
  name: $prefix + 'Anchor',
  props: {
    isAffix: {
      type: Boolean,
      default: false
    },
    links: {
      type: Array,
      default: () => []
    },
    containerId: {
      type: String,
      default: ''
    },
    markClass: {
      type: String,
      default: ''
    }
  },
  emits: ['linkClick', 'onChange'],
  setup(props, context) {
    return setup({ props, context, renderless, api })
  },
  render() {
    const {
      isAffix,
      links,
      linkClick,
      state: { currentLink }
    } = this
    const anchorClass = 'tiny-anchor'

    const renderLinks = (links) =>
      Array.isArray(links)
        ? links.map((item) => (
            <div class={`${anchorClass}-link`} key={item.key}>
              <a
                href={item.link}
                class={[`${anchorClass}-link-title`, currentLink === item.link && `${anchorClass}-link-title--active`]}
                title={item.title}
                onClick={(e) => linkClick(e, item)}
                ref={item.link}
              >
                {item.title}
              </a>
              {item.children ? renderLinks(item.children) : null}
            </div>
          ))
        : null

    return isAffix ? (
      <div class={`${anchorClass}__affix`} ref="fixRef">
        <div class={anchorClass} ref="anchorRef">
          <div class={`${anchorClass}-link-mask`} ref="maskRef"></div>
          <div class={`${anchorClass}-orbit`}>
            <div class={`${anchorClass}-orbit-skid`} ref="skidRef"></div>
          </div>
          {links && renderLinks(links)}
        </div>
      </div>
    ) : (
      <div class={anchorClass} ref="anchorRef">
        <div class={`${anchorClass}-link-mask`} ref="maskRef"></div>
        <div class={`${anchorClass}-orbit`}>
          <div class={`${anchorClass}-orbit-skid`} ref="skidRef"></div>
        </div>
        {links && renderLinks(links)}
      </div>
    )
  }
}
</script>
