import { Alert as TinyAlert } from '@opentiny/react';
import ReactDOM from 'react-dom/client';

function App(props) {
  return <div>{props.children}</div>;
}

class CustomElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.createRoot(this).render(
      <App>
        <TinyAlert description="show-icon 默认值为 true，显示图标"></TinyAlert>
        <TinyAlert showIcon={false} description="show-icon 设置为 false，不显示图标"></TinyAlert>
      </App>
    );
  }
}

export default CustomElement;
