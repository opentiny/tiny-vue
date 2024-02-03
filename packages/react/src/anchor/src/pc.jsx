import { renderless, api } from '@opentiny/vue-renderless/anchor/vue'
import { If, useSetup, useVm, vc } from '@opentiny/react-common'
import { useRef, createRef } from 'react'
import '@opentiny/vue-theme/anchor/index.less'

export default function Anchor(props) {
  const { isAffix = false, links = [], containerId = '', markClass = '', type = 'line' } = props
  const defaultProps = {
    isAffix,
    links,
    containerId,
    markClass,
    type
  }
  const doms = [useRef(), createRef(), useRef(), createRef()]

  const refs = {}
  const renderLinks = (links) =>
    Array.isArray(links)
      ? links.map((item) => {
        refs[item.link] = useRef()
        return (
          <div className={`${anchorClass}-link`} key={item.key}>
            <a
              href={item.link}
              className={vc([
                `${anchorClass}-link-title`,
                state.currentLink === item.link && `${anchorClass}-link-title--active`
              ])}
              title={item.title}
              onClick={(e) => linkClick(e, item)}
              ref={refs[item.link]}
              v-ref={item.link}>
              {item.title}
            </a>
            {item.children ? renderLinks(item.children) : null}
          </div>
        )
      })
      : null
  doms.concat(doms, Object.values(refs))
  const { current: vm, parent } = useVm()
  const { state, linkClick } = useSetup({
    props: defaultProps,
    renderless,
    api,
    vm,
    parent,
    doms
  })
  const anchorClass = 'tiny-anchor'

  const renderMask = <div className={`${anchorClass}-link-mask`} ref={doms[1]} v-ref="maskRef"></div>

  const renderOrbit = (
    <div className={`${anchorClass}-orbit`}>
      <div className={`${anchorClass}-orbit-skid`} ref={doms[3]} v-ref="skidRef"></div>
    </div>
  )

  return (
    <div
      ref={doms[0]}
      v-ref="anchorWrapRef"
      className={vc([isAffix ? `${anchorClass}__affix` : '', `${anchorClass}__wrapper`, `${anchorClass}__${type}`])}>
      <div className={anchorClass} ref={doms[2]} v-ref="anchorRef">
        <If v-if={type === 'line'}>
          {renderMask}
          {renderOrbit}
        </If>

        {links && renderLinks(links)}
      </div>
    </div>
  )
}
