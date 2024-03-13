import { Breadcrumb as TinyBreadcrumb, BreadcrumbItem as TinyBreadcrumbItem } from '@pe-3/react';
import ReactDOM from 'react-dom/client';

function App(props) {
  return <div>{props.children}</div>;
}

export default class extends HTMLElement {
  connectedCallback() {
    ReactDOM.createRoot(this).render(
      <App>
        <TinyBreadcrumb>
          <TinyBreadcrumbItem to={{ path: '/' }} label="首页"></TinyBreadcrumbItem>
          <TinyBreadcrumbItem to={{ path: '/' }} label="首页2"></TinyBreadcrumbItem>
        </TinyBreadcrumb>
      </App>
    );
  }
}
