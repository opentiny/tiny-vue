import { createMutable } from 'solid-js/store'
import TinyButton from '@opentiny/vue-button'
import TinyIconSearch from '@opentiny/vue-icon/search/index.ts'

export default function () {
  const state = createMutable({
    value: 1
  })
  const hanleClick = () => {
    state.value++
  }

  return (
    <div className="button">
      <TinyButton>默认按钮</TinyButton>
      <TinyButton type="primary">主要按钮</TinyButton>
      <TinyButton type="success">成功按钮</TinyButton>
      <br />
      <br />
      <TinyButton type="info">信息按钮</TinyButton>
      <TinyButton type="warning">警告按钮</TinyButton>
      <TinyButton type="danger">危险按钮 </TinyButton>
      <br />
      <br />
      <TinyButton plain> 朴素按钮 </TinyButton>
      <TinyButton type="danger" text={'自定义 Text'}></TinyButton>
      <TinyButton type="primary" loading>
        加载中
      </TinyButton>
      <br />
      <br />
      <TinyButton icon={TinyIconSearch}></TinyButton>
      <TinyButton type="danger" icon={TinyIconSearch} circle></TinyButton>
      <TinyButton type="text">纯文本按钮</TinyButton>
      <br />
      <br />
      <TinyButton type="primary" size="large" plain>
        {' '}
        超大按钮{' '}
      </TinyButton>
      <TinyButton type="primary" size="medium" plain>
        {' '}
        中等按钮{' '}
      </TinyButton>
      <TinyButton type="primary" size="small" plain>
        {' '}
        小型按钮{' '}
      </TinyButton>
      <TinyButton type="primary" size="mini" plain>
        {' '}
        超小按钮{' '}
      </TinyButton>
      <br />
      <br />
      <TinyButton onClick={hanleClick}>点击事件</TinyButton> 点击计数：{state.value}
      <br />
      <br />
    </div>
  )
}
