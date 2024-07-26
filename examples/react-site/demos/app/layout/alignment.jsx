import { Layout as TinyLayout, Row as TinyRow, Col as TinyCol } from '@opentiny/react';
import ReactDOM from 'react-dom/client';

const scopeId = 'scope-' + Math.random().toString(36).substr(2, 9);

function App(props) {
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
        `}
      </style>
      <div data-v={scopeId}>{props.children}</div>
    </div>
  );
}

class CustomElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.createRoot(this).render(
      <App>
        <TinyLayout>
          <TinyRow flex={true} className="row-bg">
            <TinyCol span={3}>
              <div className="col">justify start</div>
            </TinyCol>
            <TinyCol span={3}>
              <div className="col">justify start</div>
            </TinyCol>
            <TinyCol span={3}>
              <div className="col">justify start</div>
            </TinyCol>
          </TinyRow>
          <TinyRow flex={true} className="row-bg" justify="center">
            <TinyCol span={3}>
              <div className="col">justify center</div>
            </TinyCol>
            <TinyCol span={3}>
              <div className="col">justify center</div>
            </TinyCol>
            <TinyCol span={3}>
              <div className="col">justify center</div>
            </TinyCol>
          </TinyRow>
          <TinyRow flex={true} className="row-bg" justify="end">
            <TinyCol span={3}>
              <div className="col">justify end</div>
            </TinyCol>
            <TinyCol span={3}>
              <div className="col">justify end</div>
            </TinyCol>
            <TinyCol span={3}>
              <div className="col">justify end</div>
            </TinyCol>
          </TinyRow>
          <TinyRow flex={true} className="row-bg" justify="space-between">
            <TinyCol span={3}>
              <div className="col">justify space-between</div>
            </TinyCol>
            <TinyCol span={3}>
              <div className="col">justify space-between</div>
            </TinyCol>
            <TinyCol span={3}>
              <div className="col">justify space-between</div>
            </TinyCol>
          </TinyRow>
          <TinyRow flex={true} className="row-bg" justify="space-around">
            <TinyCol span={3}>
              <div className="col">justify space-around</div>
            </TinyCol>
            <TinyCol span={3}>
              <div className="col">justify space-around</div>
            </TinyCol>
            <TinyCol span={3}>
              <div className="col">justify space-around</div>
            </TinyCol>
          </TinyRow>
          <TinyRow flex={true} className="row-bg align" justify="center" align="top">
            <TinyCol span={3}>
              <div className="col lg">align top</div>
            </TinyCol>
            <TinyCol span={3}>
              <div className="col md">align top</div>
            </TinyCol>
            <TinyCol span={3}>
              <div className="col sm">align top</div>
            </TinyCol>
          </TinyRow>
          <TinyRow flex={true} className="row-bg align" justify="center" align="middle">
            <TinyCol span={3}>
              <div className="col lg">align middle</div>
            </TinyCol>
            <TinyCol span={3}>
              <div className="col md">align middle</div>
            </TinyCol>
            <TinyCol span={3}>
              <div className="col sm">align middle</div>
            </TinyCol>
          </TinyRow>
          <TinyRow flex={true} className="row-bg align" justify="center" align="bottom">
            <TinyCol span={3}>
              <div className="col lg">align bottom</div>
            </TinyCol>
            <TinyCol span={3}>
              <div className="col md">align bottom</div>
            </TinyCol>
            <TinyCol span={3}>
              <div className="col sm">align bottom</div>
            </TinyCol>
          </TinyRow>
        </TinyLayout>
      </App>
    );
  }
}

export default CustomElement;
