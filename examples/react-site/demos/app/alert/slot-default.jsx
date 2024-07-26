import { Alert as TinyAlert } from '@opentiny/react';
import ReactDOM from 'react-dom/client';

const scopeId = 'scope-' + Math.random().toString(36).substr(2, 9);

function App(props) {
  return (
    <div>
      <style>
        {`
          [data-v="${scopeId}"] .demo-alert .tiny-alert__opration {
            margin-top: 6px;
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
        <div>
          <TinyAlert size="large" title="slot 自定义内容" className="demo-alert">
            <span>自定义内容</span>
          </TinyAlert>
          <br />
          <TinyAlert size="large" title="slot 自定义交互操作" className="demo-alert">
            <a href="javascript: void(0);">确定</a>
            <a href="javascript: void(0);">取消</a>
          </TinyAlert>
          <br />
          <TinyAlert type="success" size="large" description="提交结果页用于反馈一系列操作任务的处理结果。">
            <a href="javascript: void(0);">继续提交</a>
            <a href="javascript: void(0);">取消操作</a>
          </TinyAlert>
          <br />
          <TinyAlert type="error" size="large" description="提交结果页用于反馈一系列操作任务的处理结果。"></TinyAlert>
          <br />
          <TinyAlert type="warning" size="large" description="提交结果页用于反馈一系列操作任务的处理结果。">
            <a href="javascript: void(0);">继续提交</a>
            <a href="javascript: void(0);">取消操作</a>
          </TinyAlert>
        </div>
      </App>
    );
  }
}

export default CustomElement;
