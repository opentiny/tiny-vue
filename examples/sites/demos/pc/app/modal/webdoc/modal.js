export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'Basic Usage'
      },
      desc: {
        'zh-CN': `
          <code>Modal</code> 组件有2种调用方法：<code>函数式调用</code>和<code>标签式调用</code>。 <br>
          <div class="tip custom-block">
            <p class="custom-block-title"> 函数式调用 </p>
            通过调用<code>Modal</code>对象下的 <code>alert</code>、<code>confirm</code>、<code>message</code>方法调用弹窗组件。 <br>
            函数入参：支持<code>(message:string, title:string, options: Object)</code> 或  <code>(options: Object) </code>两种形式。
                     其中 <code>options</code> 对象支持<code>Modal</code> 组件的部分属性值,比如 <code>message, title, status</code> 等。 <br>
            函数返回：返回值为一个<code>Promise</code>对象，其中属性<code>vm</code>可用来关闭当前模态框<br>
          </div>
          <div class="tip custom-block">
            <p class="custom-block-title"> 标签式调用 </p>
            <code>Modal</code> 对象自身也是一个标准的Vue 组件，通过<code>modelValue</code> 属性控制弹窗的显示和隐藏。
          </div>
          <div class="warning custom-block">
            <p class="custom-block-title"> 特别提示： </p>
            1、<code>message</code> 的消息模式，只支持函数式调用。<br>
            2、消息模式和模态窗模式很多属性不共用，比如消息模式就不支持<code>title</code> 等属性。
          </div>
          `,
        'en-US': `
            The <code>Modal</code> component has two calls: the <code> function call </code> and the <code> tag call </code>. <br>
            <div class="tip custom-block">
              <p class="custom-block-title"> Function call </p>
              You can do this by calling the <code>alert</code>, <code>confirm</code>, and <code>message</code> methods under the <code>Modal</code> object. <br>
              Function entry: Support <code>(message:string, title:string, options: Object)</code> or <code>(options: Object)</code> two forms.
              The <code>options</code> object supports some property values of the <code>Modal</code> component, such as <code>message, title, status</code> and so on. <br>
              Function return: The return value is a <code>Promise</code> object where the property <code>vm</code> can be used to close the current mode box <br>
            </div>

            <div class="tip custom-block">
              <p class="custom-block-title"> Tag call </p>
              The <code>Modal</code> object itself is also a standard Vue component that controls the display and hiding of pop-ups through the <code>modelValue</code> property.
            </div>

            <div class="warning custom-block">
              <p class="custom-block-title"> Special note: </p>
              1, <code>message</code> message mode, only support functional call. <br>
              2, message mode and mode window mode many attributes do not share, for example, message mode does not support <code>title</code> and other attributes.
            </div>
`
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'status',
      name: {
        'zh-CN': '状态和图标',
        'en-US': 'Status and ICONS'
      },
      desc: {
        'zh-CN':
          '通过<code>status</code>属性设置组件状态，可选值有<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>、<code>loading</code>，每种状态有相应的状态图标。',
        'en-US':
          'Use the <code>status</code> property to set the component state, Optional values are <code>info</code>, <code>success</code>, <code>warning</code>, <code>error</code>, and <code>loading</code>. Each state has a corresponding status icon.'
      },
      codeFiles: ['status.vue']
    },

    {
      demoId: 'modal-header',
      name: {
        'zh-CN': '自定义弹窗标题',
        'en-US': 'Custom Modal title'
      },
      desc: {
        'zh-CN': `
          通过 <code>show-header</code>属性，设置是否显示头部。默认值为：<code>true</code><br>
          通过<code>title</code>属性，设置窗口的标题。<br>
        `,
        'en-US': `
          Use the <code>show-header</code> property to set whether to display headers. The default value is <code>true</code><br>
          Set the title of the window through the <code>title</code> property. <br>
        `
      },
      codeFiles: ['modal-header.vue']
    },
    {
      demoId: 'modal-footer',
      name: {
        'zh-CN': '自定义弹窗底部',
        'en-US': 'Custom modal bottom'
      },
      desc: {
        'zh-CN': `
          通过<code>show-footer</code>属性设置是否显示底部。默认值为：<code>false</code> <br>
          通过<code>confirm-content</code>属性，修改确认按钮文字；<code>cancel-content</code>属性，修改取消按钮文字。<br>
          通过<code>confirm-btn-props</code>属性，修改确认按钮的属性；<code>cancel-btn-props</code>属性，修改取消按钮的属性。<br>
          通过<code>footerDragable</code>属性，让底部也支持拖动（默认只有标题栏可拖动）。默认值为：<code>false</code><br>
          通过<code>#footer</code>插槽，完全自定义底部内容。<br>
        `,
        'en-US': ` 
          Use the <code>show-footer</code> property to set whether the bottom is displayed. The default value is <code>false</code> <br>
          Modify the confirmation button text by using the <code>confirm-content</code> property; The <code> cancer-content </code> property modifies the cancel button text. <br>
          The <code>confirm-btn-props</code> property is used to modify the properties of the confirm button. <code> cancer-btn-props </code> property to modify the properties of the cancel button. <br>
          Use the <code>footerDragable</code> property to make the bottom also dragable (by default, only the title bar can be dragged). The default value is <code>false</code><br>
          Completely customize the bottom content via the <code>#footer</code> slot. <br>
        `
      },
      codeFiles: ['modal-footer.vue']
    },

    {
      demoId: 'modal-size',
      name: {
        'zh-CN': '弹窗大小/全屏',
        'en-US': 'Size control'
      },
      desc: {
        'zh-CN': `
          通过<code>width</code>属性，设置初始宽度，<code>height</code>属性设置初始高度，<br>
          通过<code>fullscreen</code>属性，设置是否最大化显示。默认值为：<code>false</code> 
        `,
        'en-US': `
          Use the <code>width</code> property to set the width, and the <code>height</code> property to set the height, <br>
          Use the <code>fullscreen</code> property to set whether to maximize the display.
        `
      },
      codeFiles: ['modal-size.vue']
    },
    {
      demoId: 'modal-resize',
      name: {
        'zh-CN': '弹窗调整大小',
        'en-US': 'Size control'
      },
      desc: {
        'zh-CN': `
          通过<code>resize</code>属性，设置是否允许拖动边框调整窗口大小，并且右上角显示切换最大化的按钮。<br>
          当 <code>resize</code>属性设置为<code>true</code>后，通过 <code>min-height</code>属性设置拖拽后窗口的最小高度,默认值为 200.<br>
          <code>min-width</code>属性设置拖拽后窗口的最小宽度,默认值为 340。<br>
        `,
        'en-US': `
          With the <code>resize</code> property, set whether to allow dragging the border to resize the window, and the upper right corner shows a button to maximize the switch. <br>
          When the <code>resize</code> property is set to <code>true</code>, use the <code>min-height</code> property to set the minimum height of the drag-and-drop window. The default is 200.<br>
          The <code>min-width</code> property sets the minimum width of the drag-and-drop window. The default value is 340. <br>
        `
      },
      codeFiles: ['modal-resize.vue']
    },
    {
      demoId: 'modal-mask',
      name: {
        'zh-CN': '弹窗的遮罩层',
        'en-US': 'Modal mask'
      },
      desc: {
        'zh-CN': `
          通过<code>mask</code>属性,设置是否显示遮罩层。默认值为<code>true</code>  <br>
          通过<code>mask-closable</code>属性,设置是否允许点击遮罩层关闭窗口。默认值为<code>false</code><br>
        `,
        'en-US': `
          The <code>mask</code> property can be used to set whether the mask layer is displayed. The default value is <code>true</code> <br>
          You can use the <code>mask-closable</code> property to set whether to allow clicking on the mask layer to close the window. The default value is <code>false</code><br>
        `
      },
      codeFiles: ['modal-mask.vue']
    },
    {
      demoId: 'modal-lock',
      name: {
        'zh-CN': '弹窗的锁定',
        'en-US': 'Modal lock'
      },
      desc: {
        'zh-CN': `
          通过<code>lock-scroll</code>属性,设置是否锁住滚动条，不允许页面滚动。默认值为<code>false</code><br>
          通过<code>lock-view</code>属性,设置是否锁住页面，不允许窗口之外的任何操作。默认值为<code>true</code><br>
          <div class="tip custom-block">
            <code>锁住滚动条</code> 是指锁定<code>body</code>元素上的滚动条，仅当<code>body</code>有滚动条时，才有效果。<br>
            <code>锁住页面</code> 是指鼠标不能操作蒙层下面的元素。<br>
          </div>
        `,
        'en-US': `
          Use the <code>lock-scroll</code> property to set whether to lock the scroll bar to prevent page scrolling. The default value is <code>false</code><br>
          Using the <code>lock-view</code> property, you can set whether to lock the page and not allow any operations outside the window. The default value is <code>true</code><br>
          <div class="tip custom-block">
            <code> locks the scrollbar </code> means to lock the scrollbar on the <code>body</code> element. This only works if the <code>body</code> has a scrollbar.
            <code> Locks the page </code> means that the mouse cannot manipulate the elements below the mask. <br>
          </div>
        `
      },
      codeFiles: ['modal-lock.vue']
    },

    {
      demoId: 'modal-other',
      name: {
        'zh-CN': '弹窗的其它特性',
        'en-US': 'Other features of modal'
      },
      desc: {
        'zh-CN': `
          通过<code>esc-closable</code>属性设置是否允许按 Esc 键关闭窗口。默认值为<code>false</code><br>
          通过<code>z-index</code>属性设置自定义堆叠顺序。<br>
          通过<code>is-form-reset</code>属性，设置关闭弹窗后，是否重置数据。 默认值为<code>true</code>,即关闭弹窗后重置数据。<br>
        `,
        'en-US': ` 
          The <code>esc-closable</code> property sets whether to allow the Esc key to close the window. The default value is <code>false</code><br>
          You can set a custom stack order using the <code>z-index</code> property. <br>
          You can use the <code>is-form-reset</code> property to set whether data is reset after modal is closed. The default value is <code>true</code>, that is, the data is reset after the modal window is closed. <br>
        `
      },
      codeFiles: ['modal-other.vue']
    },
    {
      demoId: 'modal-event',
      name: {
        'zh-CN': '弹窗的事件',
        'en-US': 'Modal event'
      },
      desc: {
        'zh-CN': `
          当窗口显示时，会触发<code>show</code>事件<br />
          当窗口关闭时，会触发<code>hide</code>事件<br />
          当点击确定按钮时，会触发<code>confirm</code>事件<br />
          当点击取消按钮时，会触发<code>cancel</code>事件<br />
          当点击关闭按钮时，会触发<code>close</code>事件<br /> 
          当窗口缩放时，会触发<code>zoom</code>事件<br />
          <div class="tip custom-block">
            1、<code>type = 'alert' </code>时，没有<code>cancel</code>事件<br />
            2、函数式调用时，不触发<code>close</code>事件<br />
          </div>
          `,
        'en-US': `
          When the window is displayed, the <code>show</code> event <br /> is triggered
          When the window closes, the <code>hide</code> event <br /> is triggered
          When the OK button is clicked, the <code>confirm</code> event <br /> is triggered.
          When the cancel button is clicked, the <code>cancel</code> event <br /> is triggered.
          When the close button is clicked, the <code>close</code> event <br /> is triggered.
          When the window is scaled, the <code>zoom</code> event <br /> is triggered.
          <div class="tip custom-block">
            1. When <code>type = 'alert' </code>, there is no <code>cancel</code> event <br />
            2, function call, does not trigger <code>close</code> event <br />
          </div>
          `
      },
      codeFiles: ['modal-event.vue']
    },
    {
      demoId: 'modal-fn-slots',
      name: {
        'zh-CN': '弹窗的插槽',
        'en-US': 'Modal slots'
      },
      desc: {
        'zh-CN': `
          弹窗模式具有 <code> #default </code>,<code> #footer </code>插槽，标签式时，使用标准的Vue插槽语法即可。<br /> 
          在函数式使用时，通过<code>slots</code>属性，传入相应的插槽。<code> #footer </code>插槽的作用域上下文变量有： <code> {$modal, beforeClose,confirm,cancel} </code> 可使用。 <br /> 
          <div class="tip custom-block">
            函数式传入插槽时，由于<code>Modal</code>组件是直接挂载到<code>body</code>上，不是在<code>Demo</code>组件内部渲染的，所以<code>jsx</code>引用组件时，要使用引用组件的变量，而不能使用<code>Demo</code>中注册的组件名。详见示例代码
          </div>
        `,
        'en-US': `
          modal mode has <code> #default </code>,<code> #footer </code> slots, and the standard Vue slot syntax can be used for tag mode. <br />
          When used functionally, you can pass in the corresponding slot via the <code>slots</code> attribute. < code > # footer < / code > slot context variables are: the scope of the < code > {$modal, beforeClose, confirm and cancel} < / code >. <br />
          <div class="tip custom-block">
          When a function is passed into the slot, because the <code>Modal</code> component is mounted directly to the <code>body</code> instead of rendering inside the <code>Demo</code> component, when <code>jsx</code> references the component, the variable that references the component should be used. You cannot use the component name registered in <code>Demo</code>. See sample code
          </div>
          modal mode has <code> #default </code>,<code> #footer </code> slots, and the standard Vue slot syntax can be used for tag mode. <br />
          When used functionally, you can pass in the corresponding slot via the <code>slots</code> attribute. < code > # footer < / code > slot context variables are: the scope of the < code > {$modal, beforeClose, confirm and cancel} < / code >. <br />
          <div class="tip custom-block">
            When a function is passed into the slot, because the <code>Modal</code> component is mounted directly to the <code>body</code> instead of rendering inside the <code>Demo</code> component, when <code>jsx</code> references the component, the variable that references the component should be used. You cannot use the component name registered in <code>Demo</code>. See sample code
          </div>
        `
      },
      codeFiles: ['modal-fn-slots.vue']
    },
    {
      demoId: 'message-close',
      name: {
        'zh-CN': '消息的关闭和延时',
        'en-US': 'Closure and delay of messages'
      },
      desc: {
        'zh-CN': `
          通过<code>message-closable</code>属性设置消息可手动关闭。默认值为<code>false</code><br>
          通过<code>duration</code>属性设置自动关闭的延迟时间,单位为毫秒。默认值为<code>3000 ms</code><br>
        `,
        'en-US': `
          Messages can be manually closed by setting the <code>message-closable</code> property. The default value is <code>false</code><br>
          The <code>duration</code> property is used to set the automatic shutdown delay in milliseconds. The default value is <code>3000 ms</code><br>
        `
      },
      codeFiles: ['message-close.vue']
    },
    {
      demoId: 'message-top',
      name: {
        'zh-CN': '消息距离顶部位置',
        'en-US': 'Position from top'
      },
      desc: {
        'zh-CN': '通过<code>top</code>属性设置消息距离顶部的位置,单位为px',
        'en-US': `Use the <code>top</code> property to set the distance from the top of the message in units of px. `
      },
      codeFiles: ['message-top.vue']
    },

    {
      demoId: 'message-id',
      name: {
        'zh-CN': '防止重复消息提示',
        'en-US': 'Prevent Repeated Prompts'
      },
      desc: {
        'zh-CN': '通过<code>id</code>设置防止重复提示。',
        'en-US': 'Prevent repeated prompts with the <code>id</code> setting.'
      },
      codeFiles: ['message-id.vue']
    },
    {
      demoId: 'message-event',
      name: {
        'zh-CN': '消息的事件',
        'en-US': 'messeage event'
      },
      desc: {
        'zh-CN': `
          当窗口显示时，会触发<code>show</code>事件<br />
          当窗口关闭时，会触发<code>hide</code>事件<br />
        `,
        'en-US': `
          When the window is displayed, the <code>show</code> event is triggered <br /> 
          When the window closes, the <code>hide</code> event is triggered <br /> 
        `
      },
      codeFiles: ['message-event.vue']
    }
  ]
}
