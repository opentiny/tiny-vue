import { Layout as TinyLayout, Row as TinyRow, Col as TinyCol } from '@opentiny/react';
import ReactDOM from 'react-dom/client';

const scopeId = 'scope-' + Math.random().toString(36).substr(2, 9);

function App() {
  return (
    <div className="content">
      <style>
        {`
          [data-v="${scopeId}"] .tiny-row {
            margin: 20px 0;
          }

          [data-v="${scopeId}"] .tiny-row .last-child {
            margin-bottom: 0;
          }

          [data-v="${scopeId}"] .tiny-col .col {
            line-height: 30px;
            text-align: center;
            color: #fff;
            background: #1f9ed8;
            border-radius: 15px;
          }

          [data-v="${scopeId}"] .tiny-col:nth-child(even) .col {
            background: #73d0fc;
          }
        `}
      </style>
      <div data-v={scopeId}>
        {[12, 24].map((cols, index) => (
          <div key={index}>
            <div>每行 {cols} 栅格布局示例：</div>
            <TinyLayout cols={cols}>
              <TinyRow>
                <TinyCol span={12}>
                  <div className="col">span 12</div>
                </TinyCol>
              </TinyRow>
              <TinyRow>
                <TinyCol span={3}>
                  <div className="col">span 3</div>
                </TinyCol>
                <TinyCol span={6}>
                  <div className="col">span 6</div>
                </TinyCol>
                <TinyCol span={3}>
                  <div className="col">span 3</div>
                </TinyCol>
              </TinyRow>
              <TinyRow>
                <TinyCol span={2}>
                  <div className="col">span 2</div>
                </TinyCol>
                <TinyCol span={3}>
                  <div className="col">span 3</div>
                </TinyCol>
                <TinyCol span={2}>
                  <div className="col">span 2</div>
                </TinyCol>
                <TinyCol span={3}>
                  <div className="col">span 3</div>
                </TinyCol>
                <TinyCol span={2}>
                  <div className="col">span 2</div>
                </TinyCol>
              </TinyRow>
            </TinyLayout>
          </div>
        ))}
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
