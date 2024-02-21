import { Alert as TinyAlert } from '@pe-3/react'
import ReactDOM from 'react-dom/client'
function App(props) {
  return (<div>
    {props.children}
  </div>)
}

export default class extends HTMLElement {
  connectedCallback() {
    ReactDOM.createRoot(this).render(
      <App>
        <TinyAlert size="normal" description="size 为 normal"></TinyAlert>
        <TinyAlert size="large" title="size 为 large"></TinyAlert>
      </App>
    )
  }
}