import { Alert as TinyAlert } from '@opentiny/react';
import { IconBoat as TinyIconBoat, IconWarningTriangle as TinyIconWarningTriangle } from '@opentiny/react-icon';
import ReactDOM from 'react-dom/client';

class CustomElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.createRoot(this).render(
      <div>
        <TinyAlert icon={TinyIconBoat} description="自定义图标"></TinyAlert>
        <TinyAlert description="默认图标"></TinyAlert>
        <TinyAlert type="success" description="type 为 success 的默认图标"></TinyAlert>
        <TinyAlert icon={TinyIconWarningTriangle} type="warning" description="type 为 warning 的默认图标"></TinyAlert>
        <TinyAlert type="error" description="type 为 error 的默认图标"></TinyAlert>
      </div>
    );
  }
}

export default CustomElement;
