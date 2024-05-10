import { QrCode } from '@opentiny/react'

function App() {
  return (
    <div className="root">
      <QrCode value="测试" size={250}></QrCode>
      <QrCode
        value="测试"
        size={250}
        style={{ background: '#f5f5f5', padding: '24px' }}
        color="#1677ff"
        icon={
          'https://res.hc-cdn.com/tiny-vue-web-doc/2.2.34.20240319143832/'
            ? `https://res.hc-cdn.com/tiny-vue-web-doc/2.2.34.20240319143832/static/images/mountain.png`
            : 'https://res.hc-cdn.com/tinyui-design-common/1.0.5.20230707170109/assets/tinyvue.svg'
        }></QrCode>
    </div>
  )
}

export default App
