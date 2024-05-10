import { Chart as TinyChart } from '@pe-3/react';
import ReactDOM from 'react-dom/client';

function App(props) {
  return <div>{props.children}</div>;
}

export default class extends HTMLElement {
  connectedCallback() {
    ReactDOM.createRoot(this).render(
      <App>
        <TinyChart settings={{ type: 'line' }} data={{}}></TinyChart>
      </App>
    );
  }
}
