import { Alert as TinyAlert } from '@pe-3/react';
import ReactDOM from 'react-dom/client';

function App(props) {
  return <div>{props.children}</div>;
}

export default class extends HTMLElement {
  connectedCallback() {
    ReactDOM.createRoot(this).render(
      <App>
        <TinyAlert description="type 为默认值 success"></TinyAlert>
        <TinyAlert type="error" description="type 为 error"></TinyAlert>
        <TinyAlert type="info" description="type 为 info"></TinyAlert>
        <TinyAlert type="warning" description="type 为 warning"></TinyAlert>
      </App>
    );
  }
}
