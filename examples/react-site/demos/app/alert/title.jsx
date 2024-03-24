import { Alert as TinyAlert } from '@opentiny/react';
import ReactDOM from 'react-dom/client';

function App(props) {
  return <div>{props.children}</div>;
}

export default class extends HTMLElement {
  connectedCallback() {
    ReactDOM.createRoot(this).render(
      <App>
        <TinyAlert size="large" title="通过属性设置自定义 title"></TinyAlert>
        <br />
        <TinyAlert
          size="large"
          slots={{
            title: () => '通过 slot 设置自定义 title',
          }}
        ></TinyAlert>
      </App>
    );
  }
}
