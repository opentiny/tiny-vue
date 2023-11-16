<script lang="tsx">
import { props, setup, $prefix, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/anchor/vue'
import type { IAnchorApi } from '@opentiny/vue-renderless/types/anchor.type'

export default defineComponent({
  name: $prefix + 'Anchor',
  props: [...props, 'isAffix', 'links', 'containerId', 'markClass', 'type'],
  emits: ['linkClick', 'onChange'],
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as IAnchorApi
  },
  render() {
    const {
      isAffix,
      links,
      linkClick,
      state: { currentLink },
      type
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
                ref={item.link}>
                {item.title}
              </a>
              {item.children ? renderLinks(item.children) : null}
            </div>
          ))
        : null

    const renderMask = <div class={`${anchorClass}-link-mask`} ref="maskRef"></div>

    const renderOrbit = (
      <div class={`${anchorClass}-orbit`}>
        <div class={`${anchorClass}-orbit-skid`} ref="skidRef"></div>
      </div>
    )

    return (
      <div
        class={[isAffix ? `${anchorClass}__affix` : '', `${anchorClass}__wrapper`, `tiny-anchor__${type}`]}
        ref="anchorWrapRef">
        <div class={anchorClass} ref="anchorRef">
          {type === 'line' && renderMask}
          {type === 'line' && renderOrbit}
          {links && renderLinks(links)}
        </div>
      </div>
    )
  }
})
</script>
