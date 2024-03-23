import ReactDOM from 'react-dom/client';

const scopeId = 'scope-' + Math.random().toString(36).substr(2, 9);

function App() {
  return (
    <div>
      <style>
        {`
          [data-v="${scopeId}"] .title {
            font-size: 16px;
            margin-top: 10px;
            margin-bottom: 14px;
            font-weight: bold;
          }
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
          <div className="title">常规按钮尺寸：</div>
          <TinyButton size="large">超大按钮</TinyButton>
          <TinyButton size="medium">中等按钮</TinyButton>
          <TinyButton size="small">小型按钮</TinyButton>
          <TinyButton>默认按钮</TinyButton>
          <TinyButton size="mini">超小按钮</TinyButton>
        </TinyRow>

        <TinyRow>
          <div className="title">朴素按钮尺寸：</div>
          <TinyButton type="primary" size="large" plain>
            超大按钮
          </TinyButton>
          <TinyButton type="primary" size="medium" plain>
            中等按钮
          </TinyButton>
          <TinyButton type="primary" size="small" plain>
            小型按钮
          </TinyButton>
          <TinyButton type="primary" plain>
            默认按钮
          </TinyButton>
          <TinyButton type="primary" size="mini" plain>
            超小按钮
          </TinyButton>
        </TinyRow>

        <TinyRow>
          <div className="title">圆角按钮尺寸：</div>
          <TinyButton type="success" size="large" round>
            超大按钮
          </TinyButton>
          <TinyButton type="success" size="medium" round>
            中等按钮
          </TinyButton>
          <TinyButton type="success" size="small" round>
            小型按钮
          </TinyButton>
          <TinyButton type="success" round>
            默认按钮
          </TinyButton>
          <TinyButton type="success" size="mini" round>
            超小按钮
          </TinyButton>
        </TinyRow>

        <TinyRow>
          <div className="title">圆形按钮尺寸：</div>
          <TinyButton type="warning" size="large" icon={<TinyIconEdit />} circle />
          <TinyButton type="warning" size="medium" icon={<TinyIconEdit />} circle />
          <TinyButton type="warning" size="small" icon={<TinyIconEdit />} circle />
          <TinyButton type="warning" icon={<TinyIconEdit />} circle />
          <TinyButton type="warning" size="mini" icon={<TinyIconEdit />} circle />
        </TinyRow>

        <TinyRow>
          <div className="title">纯图标按钮尺寸：</div>
          <TinyButton icon={<TinyIconDel />} type="text" size="large" />
          <TinyButton icon={<TinyIconDel />} type="text" size="medium" />
          <TinyButton icon={<TinyIconDel />} type="text" size="small" />
          <TinyButton icon={<TinyIconDel />} type="text" />
          <TinyButton icon={<TinyIconDel />} type="text" size="mini" />
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
