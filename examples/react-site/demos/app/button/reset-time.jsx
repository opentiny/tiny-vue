import { Button as TinyButton } from '@opentiny/react';
import ReactDOM from 'react-dom/client';

class CustomElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.createRoot(this).render(
      <div>
        <TinyButton>默认禁用</TinyButton>
        <TinyButton resetTime={0}>无禁用</TinyButton>
        <TinyButton resetTime={5000}>禁用 5 秒</TinyButton>
      </div>
    );
  }
}

export default CustomElement;
