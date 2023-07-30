import ButtonExample from './ButtonExample'
import { useState, useEffect } from 'react'
import { useNextTick } from '@opentiny/react-common'

function App() {
  const [text, setText] = useState('默认文字')
  const changeHandler = ({ target: { value } }) => {
    setText(value)
    useNextTick(() => {
      console.log(document.querySelector('#text').innerHTML)
    })
  }

  return (
    <>
      {/* button 组件展示 */}
      <ButtonExample />
      {/* react nextTick 验证 */}
      <p>
        <span id='text'>{text}</span>
      </p>
      <input
        type="text"
        value={text}
        onChange={changeHandler}
      />
    </>
  )
}

export default App
