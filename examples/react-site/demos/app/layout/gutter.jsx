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
        `}
      </style>
      <div data-v={scopeId}>
        <TinyLayout>
          {[0, 10, 20].map(gutter => (
            <TinyRow key={gutter} gutter={gutter}>
              {new Array(3).fill().map((_, index) => (
                <TinyCol span={4} key={index}>
                  <div className="col">gutter {gutter}px</div>
                </TinyCol>
              ))}
            </TinyRow>
          ))}
          <TinyRow gutter={0} noSpace>
            {new Array(3).fill().map((_, index) => (
              <TinyCol span={4} key={index}>
                <div className="col">noSpace</div>
              </TinyCol>
            ))}
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
