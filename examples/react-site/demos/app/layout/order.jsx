import { Layout as TinyLayout, Row as TinyRow, Col as TinyCol, Button as TinyButton } from '@opentiny/react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

const scopeId = 'scope-' + Math.random().toString(36).substr(2, 9);

function App() {
  const [state, setState] = useState({
    buttonLabel: '升序',
    order: 'asc',
  });

  const toggleOrder = () => {
    setState(prevState => ({
      ...prevState,
      buttonLabel: prevState.buttonLabel === '升序' ? '降序' : '升序',
      order: prevState.order === 'asc' ? 'des' : 'asc',
    }));
  };

  return (
    <div>
      <style>{`
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
    `}</style>
      <div data-v={scopeId}>
        <TinyLayout>
          <TinyRow>
            <TinyButton onClick={toggleOrder}>{state.buttonLabel}</TinyButton>
          </TinyRow>
          <TinyRow flex={true} gutter={20} order={state.order}>
            <TinyCol span={3} no={3}>
              <div className="col">3</div>
            </TinyCol>
            <TinyCol span={3} no={1}>
              <div className="col">1</div>
            </TinyCol>
            <TinyCol span={3} no={2}>
              <div className="col">2</div>
            </TinyCol>
            <TinyCol span={3} no={4}>
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
