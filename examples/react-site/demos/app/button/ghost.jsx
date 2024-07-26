import { Button as TinyButton } from '@opentiny/react';
import ReactDOM from 'react-dom/client';

const scopeId = 'scope-' + Math.random().toString(36).substr(2, 9);

function App(props) {
  return (
    <div>
      <style>
        {`
          [data-v="${scopeId}"] .gray-bg {
            background: #ccc;
            padding: 20px 10px 10px;
          }
          [data-v="${scopeId}"] .tiny-button {
            margin-bottom: 10px;
            margin-left: 0;
            margin-right: 8px;
          }
        `}
      </style>
      <div data-v={scopeId}>{props.children}</div>
    </div>
  );
}

class CustomElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.createRoot(this).render(
      <App>
        <div className="gray-bg">
          <TinyButton ghost resetTime="0">
            幽灵按钮
          </TinyButton>
          <TinyButton ghost resetTime="0" type="primary">
            主要按钮
          </TinyButton>
          <TinyButton ghost resetTime="0" type="success">
            成功按钮
          </TinyButton>
          <TinyButton ghost resetTime="0" type="info">
            信息按钮
          </TinyButton>
          <TinyButton ghost resetTime="0" type="warning">
            告警按钮
          </TinyButton>
          <TinyButton ghost resetTime="0" type="danger">
            危险按钮
          </TinyButton>
        </div>
      </App>
    );
  }
}

export default CustomElement;
