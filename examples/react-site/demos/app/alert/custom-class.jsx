import { Alert as TinyAlert } from '@opentiny/react';
import ReactDOM from 'react-dom/client';

const scopeId = 'scope-' + Math.random().toString(36).substr(2, 9);

function App(props) {
  return (
    <div>
      <style>
        {`[data-v="${scopeId}"] .customClass {
          background-color: pink;
        }`}
      </style>
      <div data-v={scopeId}>{props.children}</div>
    </div>
  );
}

class CustomElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.createRoot(this).render(
      <App>
        <TinyAlert customClass="customClass" type="error" description="type 为 error"></TinyAlert>
      </App>
    );
  }
}

export default CustomElement;
