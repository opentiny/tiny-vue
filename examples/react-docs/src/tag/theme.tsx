import { Tag } from '@opentiny/react'
import './base.css'

function App() {
  const items = [
    { type: '', label: '标签一' },
    { type: 'success', label: '标签二' },
    { type: 'info', label: '标签三' },
    { type: 'danger', label: '标签四' },
    { type: 'warning', label: '标签五' }
  ]
  return (
    <div className="tiny-tag-demo">
      <span>Light：</span>
      {items.map((item) => (
        <Tag key={'tiny-tag1-' + item.label} type={item.type} effect="light">
          {item.label}
        </Tag>
      ))}

      <br />
      <span>Dark：</span>
      {items.map((item) => (
        <Tag key={'tiny-tag1-' + item.label} type={item.type} effect="dark">
          {item.label}
        </Tag>
      ))}

      <br />
      <span>Plain：</span>
      {items.map((item) => (
        <Tag key={'tiny-tag1-' + item.label} type={item.type} effect="plain">
          {item.label}
        </Tag>
      ))}
    </div>
  )
}

export default App
