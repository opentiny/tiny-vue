import Button from './dist-react/@opentiny/button/lib'

function App() {
  return (
    <div
      className='app'
    >
      {/* <Alert
        type='success'
        description='设置警告的提示内容，默认为空'
        slots={{
          description: () => '设置警告的提示内容，默认为空；'
        }}
      ></Alert> */}
      <Button tiny_mode='mobile'>按钮</Button>
    </div>
  )
}

export default App
