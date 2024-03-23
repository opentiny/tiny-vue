import { Button as TinyButton } from '@opentiny/react';
import ReactDOM from 'react-dom/client';

class CustomElement extends HTMLElement {
  connectedCallback() {
    const image = `${import.meta.env.BASE_URL}static/images/button-image.png`;

    ReactDOM.createRoot(this).render(
      <TinyButton>
        <img src={image} width="26" />
        <span>图片按钮</span>
      </TinyButton>
    );
  }
}

export default CustomElement;
