import { Layout as TinyLayout, Row as TinyRow, Col as TinyCol } from '@opentiny/react';
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

          [data-v="${scopeId}"] .row-bg {
            padding: 10px 0;
            background-color: #f9fafc;
          }

          [data-v="${scopeId}"] .align {
            height: 120px;
          }

          [data-v="${scopeId}"] .lg {
            height: 80px;
          }

          [data-v="${scopeId}"] .md {
            height: 60px;
          }

          [data-v="${scopeId}"] .sm {
            height: 40px;
          }

          [data-v="${scopeId}"] .button {
            width: 70px;
            line-height: 30px;
            text-align: center;
            background: #46c096;
            color: #fff;
            cursor: pointer;
            border-radius: 3px;
          }

          [data-v="${scopeId}"] .title {
            margin-bottom: 20px;
            margin-top: 20px;
            line-height: 30px;
            height: 30px;
            overflow: hidden;
          }

          [data-v="${scopeId}"] .item {
            margin-bottom: 100px;
            box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.3);
            min-height: 200px;
          }
        `}
      </style>
      <div data-v={scopeId} className="content">
        <TinyLayout className="tiny-layout-offset">
          <TinyRow>
            <TinyCol span={2}>
              <div className="col">offset 0</div>
            </TinyCol>
            <TinyCol span={2} offset={1}>
              <div className="col">offset 1</div>
            </TinyCol>
            <TinyCol span={2} offset={1}>
              <div className="col">offset 3</div>
            </TinyCol>
            <TinyCol span={2} offset={1}>
              <div className="col">offset 4</div>
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
