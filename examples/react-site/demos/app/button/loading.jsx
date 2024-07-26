import { Button as TinyButton } from '@opentiny/react';
import ReactDOM from 'react-dom/client';

const scopeId = 'scope-' + Math.random().toString(36).substr(2, 9);

function App() {
  return (
    <div>
      <style>
        {`
          [data-v="${scopeId}"] .tiny-button {
            margin-bottom: 10px;
            margin-left: 0;
            margin-right: 8px;
          }
        `}
      </style>
      <div data-v={scopeId}>
        <TinyButton loading>加载中</TinyButton>
        <TinyButton type="primary" loading>
          加载中
        </TinyButton>
        <TinyButton type="success" loading>
          加载中
        </TinyButton>
        <TinyButton type="info" loading>
          加载中
        </TinyButton>
        <TinyButton type="warning" loading>
          加载中
        </TinyButton>
        <TinyButton type="danger" loading>
          加载中
        </TinyButton>
      </div>
    </div>
  );
}

class CustomElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.createRoot(this).render(<App />);
  }
}

export default CustomElement;
