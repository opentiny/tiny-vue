import { Alert as TinyAlert } from '@opentiny/react';
import ReactDOM from 'react-dom/client';

function App(props) {
  return <div>{props.children}</div>;
}

export default class extends HTMLElement {
  connectedCallback() {
    ReactDOM.createRoot(this).render(
      <App>
        <TinyAlert center description="文字居中"></TinyAlert>
      </App>
    );
  }
}
