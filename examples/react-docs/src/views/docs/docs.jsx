import './docs.less'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReadMarkdown from '../components/readMarkdown'

export default function docs() {
  const location = useLocation()
  const [docCmp, setDocCmp] = useState(null)

  useEffect(() => {
    const path = location.pathname.split('/').slice(-1)[0] + '.md'
    fetch('../../../demos/pc/webdoc/' + path)
      .then((res) => res.text())
      .then((mod) => {
        setDocCmp(mod)
      })
  }, [location])
  return (
    <div>
      <div className=" ti-pt48 ti-pl48 ti-pr48">
        <ReadMarkdown id="doc_wrap" textContent={docCmp} className="ti-w0 ti-fi-1" />
      </div>
      <div id="footer"></div>
    </div>
  )
}
