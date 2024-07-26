import { Button as TinyButton } from '@opentiny/react';
import { IconMail as TinyIconMail } from '@opentiny/react-icon';
import ReactDOM from 'react-dom/client';

const scopeId = 'scope-' + Math.random().toString(36).substr(2, 9);

function App() {
  return (
    <div>
      <style>
        {`
          [data-v="${scopeId}"] .title {
            margin-top: 16px;
            padding: 10px 0 6px 0;
            font-size: 16px;
            font-weight: bold;
          }
        `}
      </style>
      <div data-v={scopeId}>
        <div className="title">纯图标按钮：</div>
        <TinyButton type="text" icon={TinyIconMail}></TinyButton>
        <TinyButton type="text" icon={TinyIconMail} disabled></TinyButton>

        <div className="title">纯文本按钮：</div>
        <TinyButton type="text" text="文本按钮"></TinyButton>
        <TinyButton type="text" text="文本按钮" disabled></TinyButton>

        <div className="title">图标加文字按钮：</div>
        <TinyButton type="text" icon={TinyIconMail} text="图标加文字"></TinyButton>
        <TinyButton type="text" icon={TinyIconMail} text="图标加文字" disabled></TinyButton>
      </div>
    </div>
  );
}

class CustomElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.createRoot(this).render(<App></App>);
  }
}

export default CustomElement;
