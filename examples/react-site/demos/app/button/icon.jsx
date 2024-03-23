import { Button as TinyButton, Layout as TinyLayout, Row as TinyRow } from '@opentiny/react';
import { IconSearch, IconDel, IconEdit, IconMail, IconStarO, IconYes } from '@opentiny/react-icon';
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
      <div data-v={scopeId}>
        <TinyLayout>
          <TinyRow>
            <TinyButton icon={IconSearch}> 图标按钮 </TinyButton>
            <TinyButton type="primary" icon={IconEdit}>
              图标按钮
            </TinyButton>
            <TinyButton type="success" icon={IconYes}>
              图标按钮
            </TinyButton>
            <TinyButton type="info" icon={IconMail}>
              图标按钮
            </TinyButton>
            <TinyButton type="warning" icon={IconStarO}>
              图标按钮
            </TinyButton>
            <TinyButton type="danger" icon={IconDel}>
              图标按钮
            </TinyButton>
          </TinyRow>
          <TinyRow>
            <TinyButton icon={IconSearch}> </TinyButton>
            <TinyButton type="primary" icon={IconEdit}></TinyButton>
            <TinyButton type="success" icon={IconYes}></TinyButton>
            <TinyButton type="info" icon={IconMail}></TinyButton>
            <TinyButton type="warning" icon={IconStarO}></TinyButton>
            <TinyButton type="danger" icon={IconDel}></TinyButton>
          </TinyRow>
        </TinyLayout>
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
