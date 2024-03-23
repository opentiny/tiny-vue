// import { Button as TinyButton, Layout as TinyLayout, Row as TinyRow } from '@opentiny/react';
import ReactDOM from 'react-dom/client';

const scopeId = 'scope-' + Math.random().toString(36).substr(2, 9);

function App() {
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
      {/* TODO: add TinyLayout, TinyRow first */}
      {/* <TinyLayout data-v={scopeId}>
        <TinyRow>
          <TinyButton>默认按钮</TinyButton>
          <TinyButton type="primary" nativeType="submit">
            主要按钮
          </TinyButton>
          <TinyButton type="success"> 成功按钮 </TinyButton>
          <TinyButton type="info"> 信息按钮 </TinyButton>
          <TinyButton type="warning"> 警告按钮 </TinyButton>
          <TinyButton type="danger"> 危险按钮 </TinyButton>
        </TinyRow>
        <TinyRow>
          <TinyButton plain> 朴素按钮 </TinyButton>
          <TinyButton type="primary" plain>
            主要按钮
          </TinyButton>
          <TinyButton type="success" plain>
            成功按钮
          </TinyButton>
          <TinyButton type="info" plain>
            信息按钮
          </TinyButton>
          <TinyButton type="warning" plain>
            警告按钮
          </TinyButton>
          <TinyButton type="danger" plain>
            危险按钮
          </TinyButton>
        </TinyRow>
        <TinyRow>
          <TinyButton round> 圆角按钮 </TinyButton>
          <TinyButton type="primary" round>
            主要按钮
          </TinyButton>
          <TinyButton type="success" round>
            成功按钮
          </TinyButton>
          <TinyButton type="info" round>
            信息按钮
          </TinyButton>
          <TinyButton type="warning" round>
            警告按钮
          </TinyButton>
          <TinyButton type="danger" round>
            危险按钮
          </TinyButton>
        </TinyRow>
        <TinyRow>
          <TinyButton icon={IconSearch} circle></TinyButton>
          <TinyButton type="primary" icon={IconEdit} circle></TinyButton>
          <TinyButton type="success" icon={IconYes} circle></TinyButton>
          <TinyButton type="info" icon={IconMail} circle></TinyButton>
          <TinyButton type="warning" icon={IconStarO} circle></TinyButton>
          <TinyButton type="danger" icon={IconDel} circle></TinyButton>
        </TinyRow>
      </TinyLayout> */}
    </div>
  );
}

class CustomElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.createRoot(this).render(<App />);
  }
}

export default CustomElement;
