import { genMenus } from '../../menus.jsx'
import './layout.less'
import { useRef, useState, useEffect } from 'react'
import { vc } from '@opentiny/react/src/common'
import { IconExpand } from '@opentiny/react/src/icon'
import { useNavigate, useLocation } from 'react-router-dom'
import Overiew from '../overview.jsx'
import Docs from '../docs/docs.jsx'
import Components from '../components/components.jsx'

export default function Layout() {
  const contentRef = useRef()
  const location = useLocation()
  const navigate = useNavigate()
  let selectMenu = { id: 'overview' }

  const allMenu = genMenus()
    .slice(1)
    .map((menu) => {
      if ((location.pathname === '/' || location.pathname === '/overview') && menu.id === 'overview') {
        menu.trigger = true
        selectMenu = menu
      } else {
        let path = location.pathname.split('/')
        if (path[1] === menu.key) {
          menu.children.map((menuChild) => {
            if (path[2] === menuChild.id) {
              menu.trigger = true
              menuChild.trigger = true
              selectMenu = menuChild
            }
            return menuChild
          })
        }
      }
      return menu
    })
  const [menus, setMenus] = useState([...allMenu])
  const tongleMenu = (menu) => {
    setMenus((data) => {
      return data.map((menuIt) => {
        if (menuIt.key === menu.key) {
          menuIt.trigger = true
        } else {
          menuIt.trigger = false
        }
        return menuIt
      })
    })
    if (!menu.children) {
      selectMenu = menu
      navigate(menu.id === 'overview' ? '/' : menu.id)
    } else {
      selectMenu = {}
    }
  }
  const searchFn = (e) => {
    const value = e.target.value

    setMenus(() => {
      const data = []
      allMenu.forEach((menu) => {
        if (menu.children)
          menu.children = menu.children.filter((child) => child.label.toLocaleLowerCase().includes(value))
        if (menu.label.includes(value) || menu.children?.length > 0) {
          data.push(menu)
        }
      })
      return data
    })
  }
  const tongleMenuChildren = (menu) => {
    selectMenu = menu
  }
  useEffect(() => {
    const common = new window.TDCommon(['#footer'], {})
    common.renderFooter()
  }, [])
  return (
    <>
      <div className="main-layout ti-hp100 ti-f-c ti-f-box-stretch">
        <div className="content-layout ti-fi-1">
          <div id="layoutSider" className="layout-sider">
            <input placeholder="请输入内容进行筛选" className="layout-input" onChange={(e) => searchFn(e)}></input>
            <div className="layout-menu scroll-container">
              {menus.map((menu, index) => {
                return (
                  <div key={index}>
                    <div
                      className={vc([
                        'layout-item',
                        { 'select-menu': menu.trigger && (!selectMenu.label || selectMenu.id === 'overview') }
                      ])}
                      key={index}
                      onClick={() => {
                        tongleMenu(menu)
                      }}>
                      <span>{menu.label}</span>
                      {menu.children && (
                        <IconExpand
                          className={vc(['tiny-tree-node__expand-icon', { 'expand': menu.trigger }])}></IconExpand>
                      )}
                    </div>

                    {menu.trigger &&
                      menu.children &&
                      menu.children.map((menusChild, index2) => (
                        <a
                          className={vc(['layout-item-child', { 'select-menu': selectMenu.id === menusChild.id }])}
                          key={index2 + 'children'}
                          href={`/${menu.id || menu.key}/${menusChild.id}`}
                          onClick={() => tongleMenuChildren}>
                          {menusChild.nameCn || menusChild.title} {menusChild.name || menusChild.titleEn}
                        </a>
                      ))}
                  </div>
                )
              })}
            </div>
          </div>

          <div
            id="doc-layout"
            ref={contentRef}
            native-scrollbar="true"
            content-style="display: flex;  flex-direction: column; height:100%"
            className="md-tiny scroll-container">
            {selectMenu.id === 'overview' && <Overiew></Overiew>}
            {selectMenu.type === 'docs' && <Docs></Docs>}
            {selectMenu.type === 'components' && <Components></Components>}
          </div>
        </div>
      </div>
    </>
  )
}
