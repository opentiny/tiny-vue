<script lang="tsx">
import { props, setup, $prefix, defineComponent } from '@opentiny/vue-common'
import { renderless, api } from '@opentiny/vue-renderless/anchor/vue'
import { AutoTip } from '@opentiny/vue-directive'
import type { IAnchorApi } from '@opentiny/vue-renderless/types/anchor.type'

export default defineComponent({
  name: $prefix + 'Anchor',
  directives: { AutoTip },
  props: [...props, 'isAffix', 'links', 'containerId', 'markClass', 'type'],
  emits: ['linkClick', 'onChange', 'change'], // deprecated v3.12.0废弃，v3.17.0移除onChange 事件
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

    const renderLinks = (links) =>
      Array.isArray(links)
        ? links.map((item) => (
            <div
              data-tag="tiny-anchor-link"
              class={[type === 'line' && 'ml-4 cursor-pointer leading-9', type === 'dot' && 'relative pl-2.5']}
              key={item.key}>
              <a
                data-tag="tiny-anchor-link-title"
                href={item.link}
                class={[
                  'whitespace-nowrap',
                  type === 'line' &&
                    `block max-w-full overflow-hidden text-ellipsis text-color-text-primary hover:text-color-brand`,
                  type === 'dot' &&
                    "before:content-[''] before:block before:w-2 before:h-2 before:absolute after:content-[''] after:w-px after:block after:absolute",
                  currentLink === item.link && 'text-color-brand'
                ]}
                onClick={(e) => linkClick(e, item)}
                ref={item.link}
                v-auto-tip>
                {item.title}
              </a>
              {item.children ? renderLinks(item.children) : null}
            </div>
          ))
        : null

    const renderMask = (
      <div data-tag="tiny-anchor-link-mask" class="absolute rounded-r-xl max-w-0 left-0.5 w-full" ref="maskRef"></div>
    )

    const renderOrbit = (
      <div data-tag="tiny-anchor-orbit" class="absolute left-0 -top-0 bottom-0 w-1 rounded bg-color-border">
        <div data-tag="tiny-anchor-orbit-skid" class="absolute left-0 w-1 bg-color-brand rounded" ref="skidRef"></div>
      </div>
    )

    return (
      <div
        data-tag="tiny-anchor__wrapper"
        class={[isAffix ? 'fixed z-10' : '', type === 'line' && '', type === 'dot' && 'w-50']}
        ref="anchorWrapRef">
        <div
          data-tag="tiny-anchor"
          class={[type === 'line' && 'w-50 relative text-color-text-primary text-sm', type === 'dot' && 'px-4']}
          ref="anchorRef">
          {type === 'line' && renderMask}
          {type === 'line' && renderOrbit}
          {links && renderLinks(links)}
        </div>
      </div>
    )
  }
})
</script>
