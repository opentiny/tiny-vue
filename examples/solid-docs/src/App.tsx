import { createMutable } from 'solid-js/store'
import Button from './views/button'
import Alert from './views/alert'
import Icon from './views/icon'
import Switch from './views/switch'
import { Dynamic } from 'solid-js/web'
import './main.less'

// 在这里导入组件，进行 api 调试
function App() {
  const allViews = {
    Button,
    Alert,
    Icon,
    Switch
  }
  const state = createMutable({
    value: null,
    active: '',
    menus: ['Button', 'Alert', 'Icon', 'Switch']
  })

  const getViewComponent = (name: string) => {
    return allViews[name] || Button
  }

  const hashchange = () => {
    state.active = window.location.hash.replace('#/', '') || 'Button'
    state.value = getViewComponent(state.active)
  }

  window.addEventListener('hashchange', hashchange)

  hashchange()

  return (
    <div class="app">
      <p>
        <For each={state.menus}>
          {(item) => (
            <>
              <a classList={{ 'title': true, 'active': state.active === item }} href={`#/${item}`}>
                {item}
              </a>
              <span>/</span>
            </>
          )}
        </For>
      </p>
      <br />
      <Dynamic component={state.value} />
    </div>
  )
}

export default App
