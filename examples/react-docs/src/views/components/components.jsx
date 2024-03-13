import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReadMarkdown from './readMarkdown'
import { fetchDemosFile } from '@/tools'
import { Anchor } from '@opentiny/react'
import './components.less'
import { renderTable } from './renderTable'
import LazyComponent from './lazyComponent'
import { getFileName } from './handleData'

export default function Components() {
  const [demos, setDemos] = useState([])
  const [apis, setApis] = useState({})
  const [docCmp, setDocCmp] = useState('')
  const location = useLocation()
  const path = location.pathname.split('/').slice(-1)[0]
  const tableData = [
    { title: 'props', head: ['名称', '类型', '默认值', '说明'] },
    { title: 'events', head: ['名称', '类型', '说明'] },
    { title: 'slots', head: ['名称', '说明'] }
  ]
  const listeners = {
    linkClick: (e) => {
      e.preventDefault()
    }
  }
  useEffect(() => {
    // const hash = location.hash
    fetchDemosFile(getFileName(path, 0)).then((mod) => {
      setDocCmp(mod)
    })
    fetchDemosFile(getFileName(path, 1)).then((res) => {
      const json = eval('(' + res.slice(15) + ')')
      setDemos(() =>
        json.demos.map((item) => {
          return {
            ...item,
            key: item.demoId,
            link: '#' + item.demoId,
            title: item.name['zh-CN']
          }
        })
      )
    })
    fetchDemosFile(getFileName(path, 2)).then((res) => {
      const json = eval('(' + res.slice(15) + ')')
      setApis(() => json)
    })
  }, [location])

  return (
    <div className=" ti-pt48 ti-pl48 ti-pr48 ti-f-r">
      <div className="ti-fi-1  ti-rel cmp-container">
        <div className="markdown-body markdown-top-body">
          {docCmp && <ReadMarkdown id="doc_wrap" textContent={docCmp} className="ti-w0 ti-fi-1"></ReadMarkdown>}
        </div>
        <div className="all-demos-container">
          <h2 className="ti-f30 ti-fw-normal ti-mb20">演示</h2>
          <div className="ti-f-c ti-f-wrap">
            <div className="one-demo-col2">
              <div id="container">
                {demos.map((demo) => (
                  <div key={demo.key} className="ti-b-a ti-br-sm ti-wp100" id={demo.key}>
                    <div className="ti-px24 ti-py20">
                      <div className="ti-f-r ti-f-pos-between ti-f-box-end ti-pb20">
                        <div className="ti-f18 ti-cur-hand">{demo.title}</div>
                      </div>
                      <div className="demo-desc ti-mb16 ti-f14">
                        <ReadMarkdown textContent={demo.desc['zh-CN']}></ReadMarkdown>
                      </div>
                      <div className="pc-demo-container">
                        <div className="pc-demo">
                          <LazyComponent fileName={getFileName(path, 3, demo)}></LazyComponent>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div id="API">
          <h2 className="ti-f30 ti-fw-normal ti-mt28">API</h2>
          <div className="mt20">
            <div className="ti-f-r ti-f-pos-start ti-fw-bold">
              <div id={path} className="ti-f18">
                {path}
              </div>
              <div className="ti-ml12 ti-b-a-primary ti-c-primary ti-px8 ti-py4">component</div>
            </div>
          </div>
          {apis.apis &&
            apis.apis.map((api, index) => <div key={index}>{tableData.map((table) => renderTable(api, table))}</div>)}
        </div>
      </div>
      <div className="cmp-page-anchor catalog ti-w128 ti-sticky ti-top32">
        <Anchor
          links={demos.concat([{ key: 'API', 'title': 'API', link: '#API' }])}
          listeners={listeners}
          markClass="is-active-anchor"
          containerId="#doc-layout"
          isAffix={true}></Anchor>
      </div>
    </div>
  )
}
