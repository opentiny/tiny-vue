import { Layout as TinyLayout, Row as TinyRow, Col as TinyCol } from '@opentiny/react';
import ReactDOM from 'react-dom/client';

const scopeId = 'scope-' + Math.random().toString(36).substr(2, 9);

function App() {
  return (
    <div>
      <style>
        {`
          [data-v="${scopeId}"] .col {
            line-height: 30px;
            text-align: center;
            color: #fff;
            background: #1f9ed8;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
      <div data-v={scopeId}>
        <TinyLayout className="tiny-layout-tag1">
          <TinyRow tag="span">
            <TinyCol span={3}>
              <div className="col">span（行标签已改为span）</div>
            </TinyCol>
            <TinyCol span={3}>
              <div className="col">span（行标签已改为span）</div>
            </TinyCol>
            <TinyCol span={3}>
              <div className="col">span（行标签已改为span）</div>
            </TinyCol>
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
