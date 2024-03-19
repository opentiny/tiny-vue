import { renderless, api } from '@opentiny/vue-renderless/timeline-item/vue'
import { useSetup, useVm, $props, vc, Slot } from '@opentiny/react-common'
import '@opentiny/vue-theme/steps/index.less'
import { $constants } from './index'
import { useRef } from 'react'
import { IconClose, IconYes } from '@opentiny/react-icon'

export default function TimeLineItem(props) {
  const { node = {}, _constants = $constants, space = '', lineWidth = '', shape } = props
  const defaultProps = {
    ...$props,
    ...props,
    node,
    _constants,
    space,
    lineWidth,
    shape
  }
  const { ref, parent, current: vm } = useVm()
  const description = useRef()
  const { state, handleClick, getDate, getStatus, rootProps } = useSetup({
    props: defaultProps,
    renderless,
    api,
    vm,
    parent,
    doms: [description],
    constants: _constants
  })

  return (
    <div ref={ref} className={vc(['tiny-timeline-item', state.computedItemCls])} style={state.computedItemStyle}>
      {!rootProps.vertical && rootProps.textPosition === 'right' && (
        <>
          <div className="icon step-icon" onClick={() => handleClick(node)}>
            {(node.index < state.current || node.error) && !rootProps.onlyNumber ? (
              <div custom-title={node.index + rootProps.start} className="icon-wrap">
                {node.error ? (
                  <IconClose className="tiny-svg-size fixicon" />
                ) : (
                  <IconYes className="tiny-svg-size fixicon" />
                )}
              </div>
            ) : (
              <span>{rootProps.showNumber ? node.index + rootProps.start : ''}</span>
            )}
          </div>
          <div className="node-description">
            <Slot name="text" slots={props.slots}>
              <div className="name" onClick={() => handleClick(node)}>
                {node[rootProps.nameField]}
              </div>
            </Slot>
            <div
              className={`line ${node.index < state.current ? 'line-done' : ''} ${(props.nodeLength ? node.index === props.nodeLength - 1 : node.index === state.nodesLength) ? 'line-end' : ''}`}
              style={{ width: state.computedLineWidth }}></div>
            <div className="tiny-timeline-item__description" v-ref="description">
              <Slot name="description" slots={props.slots}>
                {node.description}
              </Slot>
              {node.index === rootProps.active && <Slot name="active-node-desc" slots={props.slots}></Slot>}
            </div>
          </div>
        </>
      )}
      {!rootProps.vertical && rootProps.textPosition !== 'right' && (
        <>
          <div className="date-time">
            <span className="time">
              {getDate(node[rootProps.timeField]).date} {getDate(node[rootProps.timeField]).time}
            </span>
          </div>
          <div className="tiny-steps__node">
            <div className="icon" onClick={() => handleClick(node)}>
              {(node.index < state.current || node.error) && !rootProps.onlyNumber ? (
                <div custom-title={node.index + rootProps.start} className="icon-wrap">
                  {node.error ? (
                    <IconClose className="tiny-svg-size fixicon" />
                  ) : (
                    <IconYes className="tiny-svg-size fixicon" />
                  )}
                </div>
              ) : (
                <span>{rootProps.showNumber ? node.index + rootProps.start : ''}</span>
              )}
            </div>
            <div
              className={`line ${node.index < state.current ? 'line-done' : ''} ${node.index === state.nodesLength - 1 ? 'line-end' : ''}`}></div>
          </div>
          <div className="node-description">
            <Slot name="bottom" slots={props.slots}>
              <div className="name" onClick={() => handleClick(node)}>
                {node[rootProps.nameField]}
              </div>
              {rootProps.showStatus && <div className="status">{getStatus(node.index)}</div>}
            </Slot>
          </div>
        </>
      )}
      {rootProps.vertical && (
        <>
          <Slot name="left" slots={props.slots}>
            {shape === 'circle' && (
              <div className="date-time">
                <span className="date">{getDate(node[rootProps.timeField]).date}</span>
                <span className="time">{getDate(node[rootProps.timeField]).time}</span>
              </div>
            )}
          </Slot>

          <div className="tiny-timeline-item__pillar">
            {shape === 'circle' ? (
              <div className="icon" onClick={() => handleClick(node)}>
                {(state.isReverse ? node.index > state.current : node.index < state.current) ? (
                  <IconYes className="tiny-svg-size" />
                ) : (
                  <span>
                    {rootProps.showNumber
                      ? state.isReverse
                        ? state.nodesLength - 1 - node.index + rootProps.start
                        : node.index + rootProps.start
                      : ''}
                  </span>
                )}
              </div>
            ) : (
              <div className="dot-container" onClick={() => handleClick(node)}>
                <span className="dot"></span>
              </div>
            )}
            <div className="line"></div>
          </div>
          <Slot name="right" slots={props.slots}>
            <div className="tiny-timeline-item__content" onClick={() => handleClick(node)}>
              <div className="name">{node[rootProps.nameField]}</div>
              {shape === 'dot' && <div className="time">{node[rootProps.timeField]}</div>}
            </div>
          </Slot>
        </>
      )}
    </div>
  )
}
