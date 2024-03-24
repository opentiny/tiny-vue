import { Layout as TinyLayout, Row as TinyRow, Col as TinyCol } from '@opentiny/react';
import ReactDOM from 'react-dom/client';

const scopeId = 'scope-' + Math.random().toString(36).substr(2, 9);

function App() {
  return (
    <div className="content">
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
          
          [data-v="${scopeId}"] .lg {
            height: 80px;
          }
          
          [data-v="${scopeId}"] .md {
            height: 60px;
          }
          
          [data-v="${scopeId}"] .sm {
            height: 40px;
          }
        `}
      </style>
      <div data-v={scopeId}>
        <TinyLayout className="tiny-layout-responsive-layout">
          <TinyRow gutter={10}>
            <TinyCol xs={4} sm={3} md={2} lg={4} xl={1}>
              <div className="col">1</div>
            </TinyCol>
            <TinyCol xs={2} sm={3} md={4} lg={2} xl={5}>
              <div className="col">2</div>
            </TinyCol>
            <TinyCol xs={2} sm={3} md={4} lg={4} xl={5}>
              <div className="col">3</div>
            </TinyCol>
            <TinyCol xs={4} sm={3} md={2} lg={2} xl={1}>
              <div className="col">4</div>
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
