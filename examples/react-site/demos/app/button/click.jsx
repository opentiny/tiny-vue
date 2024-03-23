import { Button as TinyButton } from '@opentiny/react';
import ReactDOM from 'react-dom/client';

function App() {
  const click = () => {
    // TODO: add TinyModal first
    // TinyModal.message({ message: 'click', status: 'info' });
  };

  return <TinyButton onClick={click}>默认按钮</TinyButton>;
}

class CustomElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.createRoot(this).render(<App />);
  }
}

export default CustomElement;
