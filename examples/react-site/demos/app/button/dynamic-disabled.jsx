import { useState } from 'react';
import ReactDOM from 'react-dom/client';

const scopeId = 'scope-' + Math.random().toString(36).substr(2, 9);

function App() {
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <style>
        {`
          [data-v="${scopeId}"] .tiny-row {
            margin-bottom: 20px;
          }
          [data-v="${scopeId}"] .tiny-button {
            margin-bottom: 10px;
            margin-left: 0;
            margin-right: 8px;
          }
        `}
      </style>
      <div data-v={scopeId}>
        {/* TODO: add TinyLayout, TinyRow first */}
        {/* <TinyLayout>
          <TinyRow>
            是否禁用：<TinySwitch checked={disabled} onChange={e => setDisabled(e.target.checked)}></TinySwitch>
          </TinyRow>
          <TinyRow>
            <TinyButton disabled={disabled}>默认按钮</TinyButton>
            <TinyButton type="primary" disabled={disabled}>
              主要按钮
            </TinyButton>
            <TinyButton type="success" disabled={disabled}>
              成功按钮
            </TinyButton>
            <TinyButton type="info" disabled={disabled}>
              信息按钮
            </TinyButton>
            <TinyButton type="warning" disabled={disabled}>
              警告按钮
            </TinyButton>
            <TinyButton type="danger" disabled={disabled}>
              危险按钮
            </TinyButton>
          </TinyRow>
          <TinyRow>
            <TinyButton disabled={disabled} plain>
              朴素按钮
            </TinyButton>
            <TinyButton type="primary" disabled={disabled} plain>
              主要按钮
            </TinyButton>
            <TinyButton type="success" disabled={disabled} plain>
              成功按钮
            </TinyButton>
            <TinyButton type="info" disabled={disabled} plain>
              信息按钮
            </TinyButton>
            <TinyButton type="warning" disabled={disabled} plain>
              警告按钮
            </TinyButton>
            <TinyButton type="danger" disabled={disabled} plain>
              危险按钮
            </TinyButton>
          </TinyRow>
          <TinyRow>
            <TinyButton disabled={disabled} ghost>
              幽灵按钮
            </TinyButton>
            <TinyButton icon={TinyIconSearch} disabled={disabled}>
              图标按钮
            </TinyButton>
            <TinyButton icon={TinyIconSearch} disabled={disabled}></TinyButton>
            <TinyButton icon={TinyIconSearch} disabled={disabled} circle></TinyButton>
          </TinyRow>
        </TinyLayout> */}
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
