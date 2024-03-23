import { Button as TinyButton } from '@opentiny/react';
import ReactDOM from 'react-dom/client';

class CustomElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.createRoot(this).render(
      <div>
        <TinyButton>默认按钮</TinyButton>
        <TinyButton autofocus>默认聚焦</TinyButton>
      </div>
    );
  }
}

export default CustomElement;
