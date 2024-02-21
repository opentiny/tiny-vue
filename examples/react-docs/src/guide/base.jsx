import Guide from '@opentiny/react/src/guide/src/pc'
import { Button } from '@opentiny/react'
import { useState } from 'react'
import './base.css'

function App() {
  const [showStep1, setShowStep1] = useState(false)
  const [showStep2, setShowStep2] = useState(false)
  const [showStep3, setShowStep3] = useState(false)
  const [showStep4, setShowStep4] = useState(false)
  const [showStep5, setShowStep5] = useState(false)

  const domData = [
    {
      title: '新手引导标题1',
      text: '这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案',
      domElement: '.guide-box1',
      button: [
        {
          text: '下一步',
          action: 'next'
        }
      ]
    },
    {
      title: '新手引导标题2',
      text: '<div class="scrollBox" style="height:254px">这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案</div>',
      domElement: '.guide-box2',
      button: [
        {
          text: '上一步',
          action: 'back',
          secondary: true
        },
        {
          text: '下一步',
          action: 'next'
        }
      ]
    },
    {
      text: '<div class="scrollBox" style="height:254px">这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案这里是新手引导文案</div>',
      domElement: '.guide-box2',
      button: [
        {
          text: '上一步',
          action: 'back',
          secondary: true
        },
        {
          text: '下一步',
          action: 'next'
        }
      ],
      classes: 'only-content'
    }
  ]
  const listeners1 = {
    click() {
      setShowStep1((step) => !step)
    }
  }
  const listeners2 = {
    click() {
      setShowStep2((step) => !step)
    }
  }
  const listeners3 = {
    click() {
      setShowStep3((step) => !step)
    }
  }
  const listeners4 = {
    click() {
      setShowStep4((step) => !step)
    }
  }
  const listeners5 = {
    click() {
      setShowStep5((step) => !step)
    }
  }
  return (
    <div className="root">
      <Button listeners={listeners1}>开始引导 默认位置</Button>
      <Button listeners={listeners2}>开始引导 上居中</Button>
      <Button listeners={listeners3}>开始引导 左居中</Button>
      <Button listeners={listeners4}>开始引导 左上</Button>
      <Button listeners={listeners5}>开始引导 纵轴偏移 50px</Button>

      <Guide showStep={showStep1} domData={domData}></Guide>
      <Guide showStep={showStep2} domData={domData} popPosition="top"></Guide>
      <Guide showStep={showStep3} domData={domData} popPosition="left"></Guide>
      <Guide showStep={showStep4} domData={domData} popPosition="top-start"></Guide>
      <Guide showStep={showStep5} domData={domData} popPosition="top" mainAxis={50}></Guide>

      <div className="button-list">
        <Button plain classme="guide-box1">
          基础新手引导
        </Button>
        <Button plain classme="guide-box2">
          带滚动条新手引导
        </Button>
      </div>
    </div>
  )
}

export default App
