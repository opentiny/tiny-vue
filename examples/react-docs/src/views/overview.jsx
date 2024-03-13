import { cmpMenus } from '@demos/pc/menus.js'
import noDataSvg from '@/assets/images/no-data.svg?url'
import { useEffect, useRef } from 'react'
import { useReactive } from '@opentiny/react/src/common/src/reactive'
import { If } from '@opentiny/react/src/common'
import './overview.less'

export default function overview() {
  let state = useReactive({
    searchMenus: cmpMenus,
    menus: cmpMenus,
    value: '',
    palceMenus: new Array(14)
  })
  const img = useRef()
  function debounce(fn, delay) {
    let timeout = 0
    return (value) => {
      if (timeout) {
        clearTimeout(timeout)
      }
      timeout = setTimeout(() => {
        fn(value)
        timeout = 0
      }, delay)
    }
  }
  function searchResultFn(event) {
    const value = event.target.value
    const trimValue = value.replaceAll(' ', '').toLowerCase()
    const currentValue = trimValue
    const reg = new RegExp(currentValue, 'ig')
    const isGrid = trimValue === 'grid' || trimValue === '表格'
    const searchMenus = state.menus
      .map((item) => {
        const label = item.label
        // 对表格特殊处理
        if (isGrid && item.key === 'cmp_table_components') {
          return { label, children: item.children }
        }
        const children = item.children.filter((child) => {
          const title = `${child.name?.toLowerCase()}${child.nameCn}`
          return child.name?.match(reg) || child.nameCn?.match(reg) || title?.match(reg)
        })
        return { label, children }
      })
      .filter((item) => item.children.length > 0)
    state.searchMenus = searchMenus
  }
  let fn = {
    searchHandler: debounce(searchResultFn, 300),
    getTo: (id, key) => `/${id}/${key}`,
    getSvg: (key) => {
      // 表格示例单独另起了许多路由，统一使用表格组件图标
      if (key.startsWith('grid-')) {
        return 'grid'
      } else {
        return key
      }
    },
    getTotalComponentsNum: () => {
      let total = 0
      cmpMenus.forEach((cmpCategory) => {
        if (cmpCategory.key === 'cmp_frame_style') {
          total += 2
        } else if (cmpCategory.key === 'cmp_table_components') {
          total += 1
        } else {
          total += cmpCategory.children.length
        }
      })
      return total
    }
  }

  useEffect(() => {
    const common = new window.TDCommon(['#footer'], {})
    common.renderFooter()
  }, [])
  return (
    <div>
      <div className="overview-layout ti-pt48">
        <h1 className="ti-mb20 ti-f24 ti-fw-600">
          组件总览
          <span className="ti-f18">({fn.getTotalComponentsNum()})</span>
        </h1>

        <h1 className="ti-f14 ti-my20 ti-lh21">
          TinyVue 为 Web 应用提供了丰富的基础 UI 组件，我们还将持续探索企业级应用的最佳 UI 实践，欢迎尝试使用 TinyVue。
        </h1>
        <If v-if={state.searchMenus?.length === 0}>
          <div className="text-center py20">
            <img className="ti-h150 ti-w200 ti-my-20" src={noDataSvg} />
          </div>
        </If>
        {state.searchMenus.map((menu, index) => {
          return (
            <div label={menu} key={index}>
              <div className="ti-rel ti-mt25">
                <h2 className="ti-f16 ti-d-ib ti-fw-600 ti-mr8 ti-mt0">{menu.label}</h2>
                <If v-if={state.searchMenus?.length !== 0}>
                  <span className="cell-title">{menu.children.length}</span>
                </If>
              </div>
              <div className="ti-f-r ti-f-wrap  overview-card">
                {menu.children.map((cell, cellIndex) => {
                  return (
                    <div label={cell} key={cellIndex} className="ti-my10 ti-text-center overview-card-container">
                      <a href={fn.getTo(menu.key, cell.key)} className="decoration-none">
                        <div className="ti-br-4 component-card">
                          <img
                            className="ti-h125 ti-w125 inline-block"
                            ref={img}
                            src={`../../demos/overviewimage/${fn.getSvg(cell.key)}.svg`}
                            onError={() => {
                              img.current.src = '../../demos/overviewimage/dev.svg'
                            }}
                          />
                          <h2 className="ti-f16 overview-card-label">
                            {cell.name}

                            <span>{cell.nameCn}</span>
                          </h2>
                        </div>
                      </a>
                    </div>
                  )
                })}
                {state.palceMenus.map((menu, index) => (
                  <div label={menu} key={index} className="ti-w320 ti-h0"></div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
      <div id="footer"></div>
    </div>
  )
}
