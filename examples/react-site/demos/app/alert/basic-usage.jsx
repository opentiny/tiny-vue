import ReactDOM from 'react-dom/client';
import { Alert as TinyAlert } from '@opentiny/react';

class CustomElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.createRoot(this).render(
      <App>
        <TinyAlert description="type 为默认值 info"></TinyAlert>
        <TinyAlert type="error" description="type 为 error"></TinyAlert>
        <TinyAlert type="success" description="type 为 success"></TinyAlert>
        <TinyAlert type="warning" description="type 为 warning"></TinyAlert>
        <TinyAlert type="simple" description="type 为 simple"></TinyAlert>
      </App>
    );
  }
}

function App(props) {
  return <div>{props.children}</div>;
}

export default CustomElement;
