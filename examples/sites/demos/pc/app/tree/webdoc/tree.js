export default {
  column: '2',
  owner: '',
  demos: [
    {
      'demoId': 'basic-usage',
      'name': { 'zh-CN': '基本用法', 'en-US': 'Basic Usage' },
      'desc': {
        'zh-CN': `
            通过 <code>data</code> 属性设置数据源, 默认通过数据项的 <code>label</code> , <code>children</code> 属性展示数据。<br>
            通过 <code>show-line</code> 属性设置是否显示连接线。<br>
            通过 <code>size</code> 属性设置组件的大小, 可选值为<code>medium</code> , <code>small</code>。<br>
            通过 <code>indent</code> 属性设置每一级的水平缩进，默认18px。<br>
            通过 <code>node-click</code> 事件，监听节点的点击。<br>
          `,
        'en-US': `
            The data source is set through the <code>data</code> property. By default, the data is displayed through the <code>label</code> and <code>children</code> properties of the data item. <br>
            The <code>show-line</code> property is used to set whether the connection line is displayed. <br>
            Use the <code>size</code> property to set the component size. The optional values are <code>medium</code>, <code>small</code>. <br>
            Use the <code>indent</code> property to set the horizontal indent for each level. The default is 18px. <br>
            Listen for a node click via the <code>node-click</code> event. <br>
          `
      },
      'codeFiles': ['basic-usage.vue']
    },
    {
      'demoId': 'props',
      'name': { 'zh-CN': '数据格式 / 禁用', 'en-US': 'Data format/Disabled' },
      'desc': {
        'zh-CN': `
          通过 <code>props</code> 属性，指定 <code>label / children / disabled / isLeaf</code> 映射关系，以支持用户传入非标准格式的数据到<code> data </code>属性。<br>
           <code>disabled</code> 指定节点的禁用状态。<br>
           <code>isLeaf</code> 指定节点是否为叶子节点，仅在懒加载时有效。<br>
        `,
        'en-US': `Using the <code>props</code> property, specify the <code>label/children/disabled/isLeaf</code> mapping. To enable users to pass data in a non-standard format to the <code> data </code> property. <br>
          <code>disabled</code> Specifies the disabled status of a node. <br>
          <code>isLeaf</code> Specifies whether the node is a leaf node and is valid only for lazy loading. <br>
        `
      },
      'codeFiles': ['props.vue']
    },
    {
      'demoId': 'icons',
      'name': { 'zh-CN': '自定义图标', 'en-US': 'Custom icon' },
      'desc': {
        'zh-CN': `
          通过 <code>icon</code> 属性设置组件的图标。<br>
          通过 <code>expandIcon</code> 属性设置组件的打开图标，<code>expandIconColor</code> 属性设置打开图标颜色。<br>
          通过 <code>shrinkIcon</code> 属性设置组件的收起图标，<code>shrinkIconColor</code> 属性设置收起图标颜色。<br>
          <div class="tip custom-block"> <code>expandIcon</code>,<code>shrinkIcon</code> 2个属性的优先级更高。</div>
        `,
        'en-US': `Set the icon of the component with the <code>icon</code> property. <br>
          The <code>expandIcon</code> property sets the open icon of the component, and the <code>expandIconColor</code> property sets the open icon color. <br>
          The <code>shrinkIcon</code> property is used to set the component's shrinkIconColor, and the <code> shrinkiconcolor </code> property is used to set the shrinkiconcolor. <br>
          <div class="tip custom-block"> <code>expandIcon</code>,<code>shrinkIcon</code> The two attributes are preferred. </div>
        `
      },
      'codeFiles': ['icons.vue']
    },
    {
      'demoId': 'slot',
      'name': { 'zh-CN': '自定义节点 / 插槽', 'en-US': 'Customize nodes/slots' },
      'desc': {
        'zh-CN': `
           <code>default </code> 插槽, 节点内容元素，默认为节点数据的 <code>label</code> 值。<br>
           <code>prefix</code> 插槽, 节点内容前置元素。<br>
           <code>suffix</code> 插槽, 节点内容后置元素。<br>
           <code>operation</code> 插槽，节点内容靠右对齐的元素，当启用<a href="#edit">编辑</a>时, 它显示在编辑按钮的左边。<br>
           <code>empty</code> 插槽，传入的 <code>data</code> 属性为空时，自定义无数据的元素。<br><br>

           除以上5个插槽外，组件还提供了2个自定义节点的属性：<br>
           通过 <code>emptyText</code> 属性，指定无数据时文本提示。<br>
           通过 <code>render-content</code> 函数属性，自定义渲染函数,可使用 JSX 返回需要渲染的节点内容。<br>
        `,
        'en-US': `The <code>default </code> slot, node content element, defaults to the <code>label</code> value of the node data. <br>
          <code>prefix</code> slot, the prefix element of the node content. <br>
          <code>suffix</code> Slots, element after node content. <br>
          The <code>operation</code> slot, the right-aligned element of the node content, which appears to the left of the edit button when <a href="#edit"> is enabled to edit </a>. <br>
          The <code>empty</code> slot, custom data-free elements when the <code>data</code> property is passed in. <br><br>
          
          In addition to the above five slots, the component also provides properties for two custom nodes: <br>
          Using the <code>emptyText</code> property, specify a text prompt when no data is available. <br>
          Using the <code>render-content</code> function property, you can customize the rendering function to return the node content to be rendered using JSX. <br>
        `
      },
      'codeFiles': ['slot.vue']
    },
    {
      'demoId': 'expand-control',
      'name': { 'zh-CN': '节点的展开控制', 'en-US': 'Expansion control of nodes' },
      'desc': {
        'zh-CN': `
          通过 <code> default-expand-all </code> 属性，加载时默认展开所有节点, 默认为 <code>false</code>。<br>
          通过 <code> default-expanded-keys </code> 属性，加载时默认展开指定数组里的节点，需要指定<code>node-key</code>的值。<br>
          通过 <code> expand-on-click-node </code> 属性，设置节点在点击内容时展开 / 收起， 默认为 <code>true</code>。 当设置为 <code>false</code>时，只有点击图标才展开。<br>
          通过 <code> node-expand </code> 事件，监听节点展开的动作。<br>
          通过 <code> node-collapse </code> 事件，监听节点收起的动作。<br>
        `,
        'en-US': `By using the <code> default-expand-all </code> property, all nodes are expanded by default when loading. The default value is <code>false</code>. <br>
          Using the <code> default-expanded-keys </code> property, the nodes in the specified array are expanded by default when loaded. You need to specify the value of <code>node-key</code>. <br>
          Use the <code> expand-on-click-node </code> property to set the node to expand/collapse when clicking content. The default is <code>true</code>. When set to <code>false</code>, it only expands by clicking the icon. <br>
          Use the <code> node-expand </code> event to listen for the expansion of a node. <br>
          Listen for the collapse of a node through the <code> node-collapse </code> event. <br>
        `
      },
      'codeFiles': ['expand-control.vue']
    },

    {
      'demoId': 'node-hl',
      'name': { 'zh-CN': '节点的高亮 / 查询', 'en-US': 'Highlighting/querying nodes' },
      'desc': {
        'zh-CN': `
          通过 <code> node-key </code> 属性，指定节点的唯一标识，节点的高亮与查询，都必须设置节点的唯一标识。<br>
          通过 <code> highlight-current </code> 属性，是否启用节点高亮的功能，默认值为<code> true </code>。<br>
          通过 <code> current-node-key </code> 属性， 设置当前高亮的节点。<br>
          通过 <code> current-change </code> 事件， 监听选择节点的动作。<br>
          <div class="tip custom-block"> 
            <p class="custom-block-title"> 实用技巧 </p>
            节点数据：传入的节点数据。<br>
            节点对象：组件内节点对象。<br>
            节点路径：从根节点开始，由节点数据组成的数组。<br><br>
            通过节点对象，可以取到当前节点的 <code> parent 、childNodes 、nextSibling、previousSibling </code> 等属性，从而实现节点间的自由访问。
          </div>
          通过 <code> getCurrentNode 、getCurrentKey 、getNode 、getNodeKey 、getNodePath </code> 等组件函数，查询以上节点的信息。<br>
          通过 <code> setCurrentKey 、setCurrentNode </code> 等组件函数，手动设置高亮节点。<br>
        `,
        'en-US': `The <code> node-key </code> attribute specifies the unique identifier of a node. The unique identifier must be set for highlighting and querying nodes. <br>
          Whether to enable node highlighting by using the <code> highlight-current </code> property. The default value is <code> true </code>. <br>
          Use the <code> current-node-key </code> property to set the currently highlighted node. <br>
          The <code> current-change </code> event is used to listen for the action of the selected node. <br>
          <div class="tip custom-block">
          <p class="custom-block-title"> Practical tips </p>
          Node data: Incoming node data. <br>
          Node object: Node objects in a component. <br>
          Node path: An array of node data starting from the root node. <br><br>
          Through the node object, you can obtain the <code> parent, childNodes, nextSibling, previousSibling </code> attributes of the current node, so as to achieve free access between nodes.
          </div>
          Run the <code> getCurrentNode, getCurrentKey, getNode, getNodeKey, and getNodePath </code> component functions to query information about the preceding nodes. <br>
          Manually set the highlighted node using component functions such as <code> setCurrentKey and setCurrentNode </code>. <br>
        `
      },
      'codeFiles': ['node-hl.vue']
    },
    {
      'demoId': 'node-op',
      'name': { 'zh-CN': '节点的增删改', 'en-US': 'Adding, deleting or modifying nodes' },
      'desc': {
        'zh-CN': `
          通过 <code> insertBefore </code> 组件方法，在当前节点前增加一个节点。<br>
          通过 <code> insertAfter </code> 组件方法，在当前节点后增加一个节点。<br>
          通过 <code> append </code> 组件方法，追加一个节点到当前节点的子节点的顶部。<br>
          通过 <code> updateKeyChildren </code> 组件方法，更新当前节点的子节点,原有的子节点会丢失。<br>
          通过 <code> remove </code> 组件方法，删除当前节点。<br>
          <div class="tip custom-block"> 
            <p class="custom-block-title"> 实用技巧 </p>
            当更新子节点，且需要保留子节点时，请先使用<code> getNode </code> 查询到当前节点的<code> children </code>， 修改它后再调用<code> updateKeyChildren </code> 更新子节点。
          </div>
        `,
        'en-US': `Add a node in front of the current node using the <code> insertBefore </code> component method. <br>
          Add a node after the current one by using the <code> insertAfter </code> component method. <br>
          append a node to the top of the children of the current node using the <code> append </code> component method. <br>
          Run the <code> updateKeyChildren </code> component method to update the children of the current node. The original children will be lost. <br>
          Run the <code> remove </code> component method to delete the current node. <br>
          <div class="tip custom-block">
          <p class="custom-block-title"> Practical tips </p>
          When updating child nodes and retaining child nodes, use <code> getNode </code> to query <code> children </code> of the current node. Modify it and then call <code> updateKeyChildren </code> to update the child node.
          </div>
        `
      },
      'codeFiles': ['node-op.vue']
    },
    {
      'demoId': 'checkbox',
      'name': { 'zh-CN': '多选模式', 'en-US': 'Multiple choice mode' },
      'desc': {
        'zh-CN': `
          通过 <code> show-checkbox </code> 属性，启用多选模式。<br>
          通过 <code> check-strictly </code> 属性，指定是否严格模式。属性默认为 <code> false </code>，勾选父节点，子节点自动全选中；子节点全选中，自动勾选父节点。<br>
          通过 <code>  check-on-click-node </code> 属性，点击节点时，同时进行勾选/反勾选节点。 属性默认值为 <code> false </code>, 即点击节点不自动勾选。<br>
          通过 <code> default-checked-keys  </code> 属性，设置默认加载时，自动勾选的节点的keys数组。<br>
          <div class="tip custom-block">  严格模式下父子不相互影响，勾选父节点时不会自动勾选子节点，适于于某些特殊场景。 </div>
        `,
        'en-US': `Enable multiple selection by using the <code> show-checkbox </code> property. <br>
          The <code> check-strictly </code> property specifies whether strict mode is used. The default property is <code> false </code>. If you select the parent node, all child nodes are automatically selected. If all child nodes are selected, the parent node is automatically selected. <br>
          Using the <code> check-on-click-node </code> property, when you click a node, select or deselect the node at the same time. The default value of the property is <code> false </code>, that is, the node is not automatically selected when you click it. <br>
          With the <code> default-checked-keys </code> property, set the keys array of nodes that are automatically checked when loaded by default. <br>
          <div class="tip custom-block"> In strict mode, the child node is not automatically selected when the parent node is selected, which is suitable for some special scenarios. </div>
        `
      },
      'codeFiles': ['checkbox.vue']
    },
    {
      'demoId': 'check-op',
      'name': { 'zh-CN': '多选的查询 / 勾选', 'en-US': 'Multiple-selection query/select' },
      'desc': {
        'zh-CN': `
          通过 <code> getCheckedKeys、getCheckedNodes、getHalfCheckedKeys、getHalfCheckedNodes </code> 组件函数，查询当前组件的勾选状态。<br>
          通过 <code> setChecked、setCheckedByNodeKey、setCheckedKeys、setCheckedNodes </code> 组件函数，手动勾选组件的指定节点。<br>
          <div class="tip custom-block"> 
            <code> setChecked </code> 勾选时，可以深度递归勾选(deep:true)，也可以只勾选某节点。<br> 
            建议使用 <code> setCheckedKeys </code>进行勾选，保证父子联动状态统一，详见下面例子。 
          </div>
          通过 <code> check </code> 事件，监听勾选节点的事件。<br>
          通过 <code> check-change </code> 事件，监听节点状态变化的回调。<br>
          <div class="tip custom-block"> 
              <code> check </code> 事件触发在点击的元素上， 事件参数为：被点击的节点和勾选后组件的整体勾选状态。<br>
              <code> check-change </code> 事件是发生在每一个发生勾选状态变化的节点， 事件参数为：状态变化的节点和该节点当前的<code>checked值</code>和<code>indeterminate值</code>。<br><br>
              通常一次勾选动作会触发多个节点的状态变化。
           </div>
        `,
        'en-US': `Run the <code> getCheckedKeys, getCheckedNodes, getHalfCheckedKeys, getHalfCheckedNodes </code> component functions to query the status of the current component. <br>
          Manually select a specified node of a component using the <code> setChecked, setCheckedByNodeKey, setCheckedKeys, and setCheckedNodes </code> component functions. <br>
          <div class="tip custom-block">
          <code> setChecked </code> When checked, you can select deep:true or select only a node. <br>
          You are advised to select <code> setCheckedKeys </code> to ensure consistent parent-child interaction. For details, see the following example.
          </div>
          The <code> check </code> event is used to listen for events on the selected node. <br>
          Use the <code> check-change </code> event to listen for callbacks of node status changes. <br>
          <div class="tip custom-block">
          <code> check </code> The event is triggered on the clicked element. The event parameters are: the node that is clicked and the overall checked status of the selected component. <br>
          The <code> check-change </code> event occurs on each node whose status changes. The event parameters are: the node whose status changes, the current <code>checked value </code> and the <code>indeterminate value </code> of the node. <br><br>
          Usually, a single check action triggers the status change of multiple nodes.
          </div>
        `
      },
      'codeFiles': ['check-op.vue']
    },
    {
      'demoId': 'radio',
      'name': { 'zh-CN': '单选模式', 'en-US': 'Radio mode' },
      'desc': {
        'zh-CN': `
          通过 <code> show-radio </code> 属性启用单选模式。<br>
          通过 <code> default-checked-keys 、 check-change </code> 等属性和事件，在单选模式下用法不变。<br>
          通过 <code> setCurrentRadio </code> 组件函数，设置<code> default-checked-keys  </code> 的第一项为勾选值，详见下面例子。<br>
          <div class="tip custom-block"> 
            建议尽量不使用单选模式
          </div>
        `,
        'en-US': `Enable radio mode with the <code> show-radio </code> property. <br>
          The usage is unchanged in radio mode via attributes and events such as <code> default-checked-keys and check-change </code>. <br>
          Using the <code> setCurrentRadio </code> component function, set the first item of <code> default-checked-keys </code> as the checked value, as shown in the following example. <br>
          <div class="tip custom-block">
          You are advised not to use the single option mode
          </div>
        `
      },
      'codeFiles': ['radio.vue']
    },
    {
      'demoId': 'filter-view',
      'name': { 'zh-CN': '节点过滤与视图', 'en-US': 'Node filtering and views' },
      'desc': {
        'zh-CN': `
          通过 <code> filter-node-method </code> 属性, 指定过滤节点时的函数，函数返回<code>true</code>时节点显示，否则节点隐藏。<br>
          通过 <code> filter </code> 组件方法，触发组件进行过滤。<br>
          通过 <code> view-type </code> 属性，设置组件的视图模式，可选值为<code> tree </code> 和 <code> plain </code>,默认为<code> tree </code>。<br>
          通过 <code> show-auxi </code> 属性，设置在平铺视图时，是否显示节点的辅助信息，默认为<code>true</code>。<br>
          <div class="tip custom-block"> 
            平铺视图多用于过滤场景等<br>
            平铺视图支持 <code> default 、 prefix 、 suffix </code> 三个插槽，实现自定义节点，参见<a href="#slot"> 插槽示例 </a>
          </div>
        `,
        'en-US': `The <code> filter-node-method </code> property is used to specify the function for filtering nodes. The function returns <code>true</code> to display the nodes. <br>
          Run the <code> filter </code> component method to trigger the component to filter. <br>
          Use the <code> view-type </code> property to set the component view mode. The optional values are <code> tree </code> and <code> plain </code>. The default value is <code> tree </code>. <br>
          The <code> show-auxi </code> property is used to set whether to display auxiliary node information in tiled view. The default is <code>true</code>. <br>
          <div class="tip custom-block">
          Tiled view is mostly used for filtering scenes <br>
          Tiling view supports <code> default, prefix, suffix </code> three slots to achieve custom nodes, see <a href="#slot"> slot example </a>
          </div>
        `
      },
      'codeFiles': ['filter-view.vue']
    },
    {
      'demoId': 'lazy',
      'name': { 'zh-CN': '懒加载', 'en-US': 'Lazy loading' },
      'desc': {
        'zh-CN': `
          通过 <code> lazy </code> 属性, 启用懒加载模式。<br>
          通过 <code> load </code> 函数属性，触发加载，初始会执行一次。<br>
          通过 <code> props.isLeaf </code> 属性，指定返回数据体的节点是否为叶子节点，叶子节点点击后不再触发<code> load </code>函数。<br>
          通过 <code> afterLoad </code> 函数属性 或者  <code> load-data </code> 事件，监听下级节点加载完毕的事件，它们完全等效。<br>
          <div class="tip custom-block"> 
            懒加载模式下，<code> data </code> 属性无效
          </div>
        `,
        'en-US': `Enable lazy loading mode with the <code> lazy </code> property. <br>
          load is triggered by the <code> load </code> function property, which is initially executed once. <br>
          Using the <code> props.isLeaf </code> property, you can specify whether the node that returns the props is a leaf node. After a leaf node is clicked, the <code> load </code> function is no longer triggered. <br>
          afterLoad </code> function properties or <code> load-data </code> events are used to listen for events when a subordinate node has finished loading, which is exactly equivalent. <br>
          <div class="tip custom-block">
          The <code> data </code> property is invalid in lazy load mode
          </div>
        `
      },
      'codeFiles': ['lazy.vue']
    },
    {
      'demoId': 'drag',
      'name': { 'zh-CN': '拖拽节点', 'en-US': 'Drag node' },
      'desc': {
        'zh-CN': `
          通过 <code> draggable </code> 属性, 启用拖拽功能。<br>
          通过 <code> allow-drag </code> 函数属性，判断目标节点能否拖拽，返回<code>false</code>时，不能拖拽。<br>
          通过 <code> allow-drop </code> 函数属性，判断目标节点能否被放置，函数入参为：<code>源节点、目标节点、释放位置</code>，函数返回<code>false</code>时，不能释放。<br> 
          <div class="tip custom-block"> 
              释放位置可选值为<code>'prev'、'inner' 和 'next'</code>，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后。<br>
          </div>
          通过 <code> node-drop </code> 事件，监听拖拽成功后触发的事件。<br>
          通过 <code> node-drag-start 、node-drag-enter、node-drag-over、node-drag-leave 、node-drag-end </code> 等事件，监听拖拽过程中触发的事件。<br>
          <div class="tip custom-block"> 
            事件<code> node-drop 、node-drag-end</code> 的释放类型参数，可选值为： <code>'before'/'after'/'inner'/'none'</code>。<br><br>
            拖拽过程中的事件触发频率高，请考虑使用事件节流函数。
          </div>
        `,
        'en-US': `Enable drag and drop by using the <code> draggable </code> property. <br>
          Use the <code> allow-drag </code> function property to determine whether the target node can be dragged. If <code>false</code> is returned, it cannot be dragged. <br>
          The <code> allow-drop </code> function property is used to determine whether the target node can be placed. The parameters of the function are: <code> source node, target node, and release location </code>. When the function returns <code>false</code>, the target node cannot be released. <br>
          <div class="tip custom-block">
          Release position The optional values are <code>'prev', 'inner', and 'next'</code>, indicating place before, insert to, and place after the target node, respectively. <br>
          </div>
          Use the <code> node-drop </code> event to listen for events triggered after a successful drag and drop. <br>
          Use <code> node-drag-start, node-drag-enter, node-drag-over, node-drag-leave, and node-drag-end </code> to listen for events that are triggered during the drag and drop process. <br>
          <div class="tip custom-block">
          The release type parameter of the <code> node-drop, node-drag-end</code> event, optional values are <code>'before'/'after'/'inner'/'none'</code>. <br><br>
          Events trigger frequently during drag and drop. Consider using the event throttling function.
          </div>
        `
      },
      'codeFiles': ['drag.vue']
    },
    {
      'demoId': 'edit',
      'name': { 'zh-CN': '编辑节点', 'en-US': 'Edit node' },
      'desc': {
        'zh-CN': `
            通过调用实例的<code> openEdit </code>方法来进入编辑，<code> closeEdit </code>方法取消编辑，<code> saveEdit </code>方法保存编辑。<br>
            通过调用实例的<code> addNode(node) </code>方法为 node 节点添加一个子节点，并立即进入编辑模式。<br>
            通过调用实例的<code> editNode(node) </code>方法，立即编辑 node 节点。<br>
            通过调用实例的<code> saveNode() </code>方法，保存正在编辑的节点。<br>
            <div class="tip custom-block"> 
              在使用编辑功能时，不要使用 <code> props </code> 去定义数据列的映射关系，要使用默认的数据格式。
            </div>
          `,
        'en-US': `Edit is accessed by calling the <code> openEdit </code> method of the instance, the <code> closeEdit </code> method cancellations the edit, and the <code> saveEdit </code> method saves the edit. <br>
          Add a child node to the node node by calling the instance's <code> addNode(node) </code> method and immediately enter edit mode. <br>
          Edit the node node immediately by calling the instance's <code> editNode(node) </code> method. <br>
          Save the node being edited by calling the instance's <code> saveNode() </code> method. <br>
          <div class="tip custom-block">
          When using the editing functions, do not use <code> props </code> to define the mapping of data columns. Instead, use the default data format.
          </div>
        `
      },
      'codeFiles': ['edit.vue']
    },
    {
      'demoId': 'contextmenu',
      'name': { 'zh-CN': '右键菜单', 'en-US': 'Right-click menu' },
      'desc': {
        'zh-CN': `
            通过 <code> show-contextmenu </code> 属性，启用右键菜单功能。<br>
            通过 <code> contextmenu </code> 插槽，自定义右键菜单的元素。<br>
            通过 <code> closeMenu </code> 方法，关闭右键菜单的元素。<br>
            通过 <code> node-contextmenu </code> 事件，监听用户右键点击节点的事件。<br>
          `,
        'en-US': `The <code> show-contextmenu </code> property enables the right-click menu function. <br>
          Customize the elements of the right-click menu through the <code> contextmenu </code> slot. <br>
          Close the element of the right-click menu using the <code> closeMenu </code> method. <br>
          The <code> node-contextMenu </code> event is used to listen for the event of the user right-clicking on the node. <br>
        `
      },
      'codeFiles': ['contextmenu.vue']
    },
    {
      'demoId': 'other',
      'name': { 'zh-CN': '其它特性', 'en-US': 'Other characteristics' },
      'desc': {
        'zh-CN': `
            通过 <code> accordion </code> 属性，启用手风琴模式，每次展开节点时，自动关闭其它已打开的节点，默认值为<code> false </code>。<br>
            通过 <code> icon-trigger-click-node </code> 属性，指定点击图标，是否触发点击的行为，默认值为<code> true </code>。<br>
            通过 <code> render-after-expand </code> 属性，是否在展开节点时，才渲染下级节点，默认值为<code> true </code>。<br>
            通过 <code> show-check-easily </code> 属性，在严格模式时，是否勾选父节点时，自动勾选子节点，<code> false </code>。<br>
          `,
        'en-US': `accordion mode is enabled through the <code> accordion </code> property, and other open nodes are automatically closed each time a node is expanded. The default value is <code> false </code>. <br>
          The <code> icon-trigger-click-node </code> property specifies whether clicking an icon triggers the clicking behavior. The default value is <code> true </code>. <br>
          The <code> render-after-expand </code> property determines whether to render subordinate nodes only when expanding nodes. The default value is <code> true </code>. <br>
          With the <code> show-check-easily </code> property, when the parent node is selected in strict mode, the child node is automatically selected, <code> false </code>. <br>
        `
      },
      'codeFiles': ['other.vue']
    }
  ],
  apis: [
    {
      'name': 'tree',
      'type': 'component',
      'properties': [
        {
          'name': 'data',
          'type': 'Array',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置数据源。可配置静态数据源和动态数据源。',
            'en-US': 'Set the data source. Static and dynamic data sources can be configured.; Display Data'
          },
          'demoId': 'data-source'
        },
        {
          'name': 'expand-icon',
          'type': 'object',
          'defaultValue': '',
          'desc': { 'zh-CN': '指示展开的图标', 'en-US': 'Indicates the expanded icon' },
          'demoId': 'set-tree-icon'
        },
        {
          'name': 'icon-trigger-click-node',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '点击图标展开节点时是否触发 node-click 事件',
            'en-US': 'Whether to trigger the node-click event when an icon is clicked to expand a node.'
          },
          'demoId': 'check-on-click-node'
        },
        {
          'name': 'show-line',
          'type': 'boolean',
          'defaultValue': 'false',
          'desc': {
            'zh-CN': '设置是否显示连接线',
            'en-US': 'Set the display node connection line.'
          },
          'demoId': 'guide-line'
        },
        {
          'name': 'show-contextmenu',
          'type': 'boolean',
          'defaultValue': '',
          'desc': {
            'zh-CN': '右键点击节点是否弹窗自定义菜单,默认值为 false',
            'en-US': 'Whether to display the custom menu when right-clicking a node. The default value is false.'
          },
          'demoId': 'contextmenu'
        },
        {
          'name': 'shrink-icon',
          'type': 'object',
          'defaultValue': '',
          'desc': { 'zh-CN': '指示收缩的图标', 'en-US': 'Icon indicating contraction' },
          'demoId': 'set-tree-icon'
        },
        {
          'name': 'empty-text',
          'type': 'string',
          'defaultValue': '',
          'desc': { 'zh-CN': '内容为空的时候展示的文本', 'en-US': 'Text displayed when the content is empty.' },
          'demoId': 'custom-empty-text'
        },
        {
          'name': 'render-after-expand',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '是否在第一次展开某个树节点后才渲染其子节点',
            'en-US': 'Whether to render a tree node after it is expanded for the first time.'
          },
          'demoId': 'render-after-expand'
        },
        {
          'name': 'node-key',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN': '节点唯一标识属性名称。每个树节点用来作为唯一标识的属性，整棵树应该是唯一的',
            'en-US':
              'The node uniquely identifies the attribute name.; Each tree node is used as a unique identifier attribute, and the entire tree should be unique'
          },
          'demoId': 'node-key'
        },
        {
          'name': 'check-strictly',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false',
            'en-US':
              'Whether to strictly follow the method of not associating parent and child when the check box is displayed. The default value is false.'
          },
          'demoId': 'check-strictly'
        },
        {
          'name': 'default-expand-all',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否默认展开所有节点', 'en-US': 'Whether to expand all nodes by default' },
          'demoId': 'default-expand-all'
        },
        {
          'name': 'expand-on-click-node',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN':
              '点击节点展开收起开关。当设置为true: 点击节点内容时可展开/收起节点。设置为false: 只有点击节点名称前面的展开/收起图标才能进行节点展开/收起。是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。',
            'en-US':
              'Click the node to expand the function of the node. When set to true, the node can be expanded or closed when the node content is clicked. If this parameter is set to false, the node can be expanded or expanded only after the expansion/fold icon is clicked in front of the node name.; Indicates whether to expand or shrink a node when a node is clicked. The default value is true. If the value is false, the node is expanded or collapsed only when an arrow icon is displayed.'
          },
          'demoId': 'expand-on-click-node'
        },
        {
          'name': 'check-on-click-node',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。',
            'en-US':
              'Whether to select a node when you click it. The default value is false, indicating that the node is selected only when you click the check box.'
          },
          'demoId': 'check-on-click-node'
        },
        {
          'name': 'auto-expand-parent',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 true',
          'desc': {
            'zh-CN': '展开子节点的时候是否自动展开父节点',
            'en-US': 'Whether to automatically expand the parent node when expanding the child node.'
          },
          'demoId': 'auto-expand-parent'
        },
        {
          'name': 'default-checked-keys',
          'type': 'Array',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '配置默认选中。取值为 key 在数据源 dataset 中所对应的值。组件生成后会默认将 defaultValue 中所对应的节点选中。默认勾选的节点的 key 的数组',
            'en-US':
              'Selected by default. The value is the value corresponding to the key in the data source dataset. After the component is generated, the corresponding node in defaultValue is selected by default. ;Key array of selected nodes by default'
          },
          'demoId': 'default-checked-keys'
        },
        {
          'name': 'default-expanded-keys',
          'type': 'Array',
          'defaultValue': '',
          'desc': { 'zh-CN': '默认展开的节点的 key 的数组', 'en-US': 'Key array of the expanded node by default' },
          'demoId': 'default-expanded-keys'
        },
        {
          'name': 'render-content',
          'type': 'Function(h, { node, data, store }',
          'defaultValue': '',
          'desc': {
            'zh-CN': '树节点的内容区的渲染 Function',
            'en-US': 'Render Function of the content area of the tree node'
          },
          'demoId': 'render-content'
        },
        {
          'name': 'show-checkbox',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '节点是否可被选择', 'en-US': 'Whether a node can be selected.' },
          'demoId': 'show-checkbox'
        },
        {
          'name': 'draggable',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '是否开启节点拖拽，节点的位置可任意拖放，改变原来的节点的父子结构。是否开启拖拽节点功能',
            'en-US':
              'Whether to enable the node dragging function. The node position can be dragged at will to change the parent-child structure of the original node. ;Whether to enable the function of dragging nodes'
          },
          'demoId': 'node-draggable'
        },
        {
          'name': 'allow-drag',
          'type': 'Function(node)',
          'defaultValue': '',
          'desc': { 'zh-CN': '判断节点能否被拖拽', 'en-US': 'Dedicated whether a node can be dragged.' },
          'demoId': 'allow-drag'
        },
        {
          'name': 'allow-drop',
          'type': 'Function(draggingNode, dropNode, type)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              "拖拽时判定目标节点能否被放置。type 参数有三种情况：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后",
            'en-US':
              "Dedicated whether the target node can be placed during dragging. The type parameter has three situations: 'prev',' inner', and'next', which indicate that it is placed before the target node, inserted into the target node, and placed after the target node respectively"
          },
          'demoId': 'allow-drop'
        },
        {
          'name': 'props',
          'type': 'object',
          'defaultValue': "该属性的默认值为 {children: 'children',label: 'label',disabled: 'disabled'}",
          'desc': {
            'zh-CN': '配置选项，具体看下表',
            'en-US': 'Configuration options. For details, see the following table.'
          },
          'demoId': 'node-props-config'
        },
        {
          'name': 'highlight-current',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': { 'zh-CN': '是否高亮当前选中节点', 'en-US': 'Whether to highlight the selected node' },
          'demoId': 'highlight-current'
        },
        {
          'name': 'lazy',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN': '异步加载模式，展开节点时再请求数据。需要服务支持。是否懒加载子节点，需与 load 方法结合使用',
            'en-US':
              'Asynchronous loading mode. Data is requested when a node is expanded. Service support is required.; Whether to load subnodes in lazy mode. This parameter must be used together with the load method.'
          },
          'demoId': 'lazy-load-node'
        },
        {
          'name': 'load',
          'type': 'Function(node, resolve)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '加载子树数据的方法，仅当 lazy 属性为true 时生效',
            'en-US':
              'Method for loading subtree data. This parameter is valid only when the lazy attribute is set to true.'
          },
          'demoId': 'lazy-load-node'
        },
        {
          'name': 'filter-node-method',
          'type': 'Function(value, data, node)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '指定输入筛选时匹配的节点的字段值。对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏',
            'en-US':
              'Field value of the node to be matched during input filtering. This method is to filter tree nodes. If true is returned, the node can be displayed. If false is returned, the node can be hidden'
          },
          'demoId': 'filter-node'
        },
        {
          'name': 'accordion',
          'type': 'boolean',
          'defaultValue': '该属性的默认值为 false',
          'desc': {
            'zh-CN':
              '是否为单一路径。为 true 时，全部层级的节点同级互斥，为数字时，不大于该值的节点同级互斥。是否每次只打开一个同级树节点展开',
            'en-US':
              'Whether the path is a single path. If this parameter is set to true, nodes at all levels are mutually exclusive. If this parameter is set to a number, nodes not greater than this parameter are mutually exclusive. ;Do you want to open only one node of the same level tree at a time to expand'
          },
          'demoId': 'accordion-mode'
        },
        {
          'name': 'indent',
          'type': 'number',
          'defaultValue': '该属性的默认值为 18',
          'desc': {
            'zh-CN': '相邻级节点间的水平缩进，单位为像素',
            'en-US': 'horizontal indentation between adjacent nodes, in pixels.'
          },
          'demoId': 'indent'
        },
        {
          'name': 'icon',
          'type': 'object',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '自定义图标。css : string（图标的总样式名），child : string（叶子节点图标），parent : string（父节点图标，open 打开，close，关闭），expand : string（展开节点图标），collapse : string（收缩节点图标）;自定义树节点的图标',
            'en-US':
              'User-defined icon. css: string (general style name of an icon), child: string (leaf node icon), parent: string (Parent node icon, open, close, and close), expand: string (the expansion node icon); collapse: string (the collapse node icon); Custom tree node icon'
          },
          'demoId': 'custom-node-icon'
        },
        {
          'name': 'view-type',
          'type': 'string',
          'defaultValue': 'tree',
          'desc': {
            'zh-CN': '视图模式，可选值有tree、plain，其中tree是普通视图，plain是平铺视图；默认值是tree',
            'en-US':
              "View mode. The options are 'tree' and 'plain', where tree indicates a common view and plain indicates a tiled view. The default value is tree."
          },
          'demoId': 'plain-mode'
        },
        {
          'name': 'filter-plain-method',
          'type': 'string',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '平铺模式下，对树节点进行筛选的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏',
            'en-US':
              'Method for filtering tree nodes in tile mode. If true is returned, the node can be displayed. If false is returned, the node is hidden.'
          },
          'demoId': 'plain-mode'
        }
      ],
      'events': [
        {
          'name': 'node-click',
          'type': 'Function(data, node, vm)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '点击节点后的事件。节点被点击时的回调;//参数说明\n{data: 节点数据,node: 节点状态信息（包括数据）,vm: 组件实例}',
            'en-US':
              'Event after a node is clicked.; Callback when a node is clicked; //Parameter description\n{data: node data, node: node status information (including data), vm: component instance}'
          },
          'demoId': 'check-on-click-node'
        },
        {
          'name': 'node-contextmenu',
          'type': 'Function(event, data, node, vm)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '当某一节点被鼠标右键点击时会触发该事件;//参数说明\n{data: 节点数据,node: 节点状态信息（包括数据）,vm: 组件实例,event:原生事件}',
            'en-US':
              'This event is triggered when a node is right-clicked. //Parameter description\n{data: node data, node: node status information (including data), vm: component instance, event: native event}'
          },
          'demoId': 'node-contextmenu'
        },
        {
          'name': 'check-change',
          'type': 'Function(data, node, vm)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '节点选中状态发生变化时的回调;//参数说明\n{node: 节点状态信息（包括数据）,checked:当前点击节点的勾选状态,indeterminate}',
            'en-US':
              'The callback is performed when the selected node status changes. //Parameter description\n{node: node status (including data), checked: selected status of the currently clicked node, and indeterminate}'
          },
          'demoId': 'node-events'
        },
        {
          'name': 'check',
          'type': 'Function(data, currentNode)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '勾选节点后的事件;当复选框被点击的时候触发;//回调参数：\n{data: object,// 当前选中节点信息\ncurrentNode:object//树组件目前的选中状态信息，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性}',
            'en-US':
              'events after a node is selected. Triggered when the check box is clicked; // Callback parameters:\n{data: object,// Information about the currently selected node\ncurrentNode:object// Current selected status of the tree component. Contains four attributes: checkedNodes, checkedKeys, halfCheckedNodes, and halfCheckedKeys} '
          },
          'demoId': 'drag-events'
        },
        {
          'name': 'current-change',
          'type': 'Function(data, currentNode)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '当前选中节点变化时触发的事件;//参数说明\n{data: 节点数据,currentNode: 节点状态信息（包括数据）}',
            'en-US':
              'Event triggered when the selected node changes. //Parameter description\n{data: node data, currentNode: node status information (including data)}'
          },
          'demoId': 'drag-events'
        },
        {
          'name': 'node-expand',
          'type': 'Function(data, node, vm)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '展开节点后的事件。节点被展开时触发的事件;//参数说明\n{data: 节点数据,node: 节点状态信息（包括数据,vm: 当前组件实例}',
            'en-US':
              'Event after a node is expanded.; event triggered when a node is expanded; //Parameter description\n{data: node data, node: node status information (including data, vm: current component instance}'
          },
          'demoId': 'default-expanded-keys'
        },
        {
          'name': 'node-collapse',
          'type': 'Function(data, node, vm)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '收缩节点后的事件;节点被关闭时触发的事件;//参数说明\n{data: 节点数据,node: 节点状态信息（包括数据）,vm: 当前组件实例}',
            'en-US':
              'Event after node shrinking; Event triggered when a node is closed; //Parameter description\n{data: node data, node: node status information (including data), vm: current component instance}'
          },
          'demoId': 'default-expanded-keys'
        },
        {
          'name': 'node-drag-start',
          'type': 'Function(node, event)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '节点开始拖拽时触发的事件;节点开始拖拽时触发的事件;node: 拖拽节点，event: 原生事件',
            'en-US':
              'Event triggered when a node starts to be dragged. Event triggered when a node starts to be dragged. node: drag node; event: native event'
          },
          'demoId': 'drag-events'
        },
        {
          'name': 'node-drag-enter',
          'type': 'Function(draggingNode, targetNode, dropType, event)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '拖拽进入其他节点时触发的事件;//参数\n{draggingNode: 拖拽节点,targetNode: 目标节点,dropType: 拖拽类型, //拖拽节点在目标节点对应关系（before/after/inner/none)\nevent: 原生事件}',
            'en-US':
              'Event triggered when a user drags a node to another node. //Parameters\n{draggingNode: drag node, targetNode: target node, dropType: drag type, //Drag node mapping relationship on the target node (before/after/inner/none) \nevent: native event}'
          },
          'demoId': 'drag-events'
        },
        {
          'name': 'node-drag-leave',
          'type': 'Function(draggingNode, targetNode, dropType, event)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '拖拽离开某个节点时触发的事件;//参数\n{draggingNode: 拖拽节点,targetNode: 目标节点,dropType: 拖拽类型,//拖拽节点在目标节点对应关系（before/after/inner/none)\nevent: 原生事件}',
            'en-US':
              'Event triggered when a node is dragged away. //Parameters\n{draggingNode: drag node, targetNode: target node, dropType: drag type, //Drag node mapping relationship on the target node (before/after/inner/none) \nevent: native event}'
          },
          'demoId': 'drag-events'
        },
        {
          'name': 'node-drag-over',
          'type': 'Function(raggingNode, targetNode, dropType, event)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）;//参数\n{draggingNode: 拖拽节点,targetNode: 目标节点,dropType: 拖拽类型, //拖拽节点在目标节点对应关系（before/after/inner/none)\nevent: 原生事件}',
            'en-US':
              'Event triggered when a node is dragged (similar to the mouseover event of a browser). //Parameters\n{draggingNode: drag node, targetNode: target node, dropType: drag type, //Drag node mapping relationship on the target node (before/after/inner/none) \nevent: native event}'
          },
          'demoId': 'drag-events'
        },
        {
          'name': 'node-drag-end',
          'type': 'Function(draggingNode, targetNode, dropType, event)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '拖拽结束时（可能未成功）触发的事件;//参数\n{draggingNode: 拖拽节点,targetNode: 目标节点,dropType: 拖拽类型, //拖拽节点在目标节点对应关系（before/after/inner/none)\nevent: 原生事件}',
            'en-US':
              'Event triggered when the drag ends (may not be successful). //Parameters\n{draggingNode: drag node, targetNode: target node, dropType: drag type, //Drag node mapping relationship on the target node (before/after/inner/none) \nevent: native event}'
          },
          'demoId': 'drag-events'
        },
        {
          'name': 'node-drop',
          'type': 'Function(draggingNode, targetNode, dropType, event)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '拖放节点后的事件。开启 dragable 属性为 true 有效。拖拽成功完成时触发的事件;//参数\n{draggingNode: 拖拽节点,targetNode: 目标节点,dropType: 拖拽类型, //拖拽节点在目标节点对应关系（before/after/inner/none)\nevent: 原生事件}',
            'en-US':
              'Event after a node is dragged. The dragable attribute is valid when true is enabled.; event triggered when the drag is successfully completed; //Parameters\n{draggingNode: drag node, targetNode: target node, dropType: drag type, //Drag node mapping relationship on the target node (before/after/inner/none) \nevent: native event}'
          },
          'demoId': 'node-draggable'
        },
        {
          'name': 'leave-plain-view',
          'type': 'Function(plainNode, event)',
          'defaultValue': '',
          'desc': {
            'zh-CN': '平铺模式下，点击节点定位图标触发的事件。参数{ plainNode: 被点击的节点数据, event: 原生点击事件 }',
            'en-US':
              'This event is triggered when the node location icon is clicked in tile mode. Parameter { plainNode: clicked node data, event: native click event }'
          },
          'demoId': 'plain-mode'
        },
        {
          'name': 'check-plain',
          'type': 'Function(plainNode, value)',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '平铺模式下，勾选或取消勾选节点的事件，需要设置show-checkbox为true才生效。参数{ plainNode: 被点击的节点数据, value: 复选框是否选中，取值true或false }',
            'en-US':
              'In tiled mode, you need to set show-checkbox to true to enable or disable node events. Parameter { plainNode: clicked node data, value: indicates whether the check box is selected. The value can be true or false }'
          },
          'demoId': 'plain-mode'
        }
      ],
      'slots': [
        {
          'name': 'default',
          'type': '',
          'defaultValue': '',
          'desc': {
            'zh-CN': '自定义树节点的内容，参数为 { node, data }',
            'en-US': 'Content of a user-defined tree node. The parameter is {node, data}.'
          },
          'demoId': 'slot-deffault'
        },
        {
          'name': 'empty',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义空数据文本', 'en-US': 'Customize empty data text' },
          'demoId': 'custom-empty-text'
        },
        {
          'name': 'contextmenu',
          'type': '',
          'defaultValue': '',
          'desc': { 'zh-CN': '自定义树节点的右键菜单内容，参数为 { node, data }', 'en-US': '' },
          'demoId': 'contextmenu'
        }
      ],
      'methods': [
        {
          'name': 'filter',
          'type': '(value) => void',
          'defaultValue': '',
          'desc': { 'zh-CN': '对树节点进行筛选操作', 'en-US': 'Filter tree nodes.' },
          'demoId': 'filter-node'
        },
        {
          'name': 'updateKeyChildren',
          'type': '(key, data) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '通过 keys 设置节点子元素，使用此方法必须设置 node-key 属性',
            'en-US': 'Use keys to set node subelements. The node-key attribute must be set in this method.'
          },
          'demoId': 'show-checkbox'
        },
        {
          'name': 'getCheckedNodes',
          'type': '(leafOnly, includeHalfChecked) => result',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '获取选中标识的数据。若节点可被选择（即 show-checkbox 为 true），则返回目前被选中的节点所组成的数组，仅配置多选时生效',
            'en-US':
              'Obtains the data of the selected identifier.; If a node can be selected (that is, show-checkbox is set to true), the array composed of the currently selected nodes is returned. This parameter is valid only when multiple nodes are selected.'
          },
          'demoId': 'check-on-click-node'
        },
        {
          'name': 'setCheckedNodes',
          'type': '(keys, leafOnly) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '设置目前勾选的节点，使用此方法必须设置 node-key 属性',
            'en-US': 'Set the selected node. You must set the node-key attribute in this method.'
          },
          'demoId': 'show-checkbox'
        },
        {
          'name': 'getCheckedKeys',
          'type': '(leafOnly) => result',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '若节点可被选择（即 show-checkbox 为 true），则返回目前被选中的节点的 key 所组成的数组, 仅配置多选时生效',
            'en-US':
              'If a node can be selected (that is, show-checkbox is set to true), the array consisting of the keys of the selected node is returned. This parameter is valid only when multiple nodes are selected.'
          },
          'demoId': 'check-on-click-node'
        },
        {
          'name': 'setCheckedKeys',
          'type': '(keys, leafOnly) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '通过 keys 设置目前勾选的节点，使用此方法必须设置 node-key 属性',
            'en-US': 'Use keys to set the selected node. You must set the node-key attribute.'
          },
          'demoId': 'show-checkbox'
        },
        {
          'name': 'setChecked',
          'type': '(data,checked,deep) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '通过 key / data 设置某个节点的勾选状态，使用此方法必须设置 node-key 属性。通过第3个参数，可以递归设置所有子节点的勾选状态！',
            'en-US':
              'Use key/data to set the selected status of a node. You must set the node-key attribute in this method. The third parameter can recursively set the check status of all subnodes'
          },
          'demoId': 'show-checkbox'
        },
        {
          'name': 'closeMenu',
          'type': '() => void',
          'defaultValue': '',
          'desc': { 'zh-CN': '关闭右键点击节点弹窗自定义菜单', 'en-US': 'Close the shortcut menu.' },
          'demoId': 'contextmenu'
        },
        {
          'name': 'getHalfCheckedNodes',
          'type': '() => result',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '若节点可被选择（即 show-checkbox 为 true），则返回目前半选中的节点所组成的数组,仅配置多选时生效。',
            'en-US':
              'If a node can be selected (that is, show-checkbox is set to true), the array composed of half-selected nodes is returned. This parameter takes effect only when multiple nodes are selected.'
          },
          'demoId': 'check-on-click-node'
        },
        {
          'name': 'getHalfCheckedKeys',
          'type': '() => result',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '若节点可被选择（即 show-checkbox 为 true），则返回目前半选中的节点的 key 所组成的数组，仅配置多选时生效。',
            'en-US':
              'If a node can be selected (that is, show-checkbox is set to true), the array consisting of the keys of the currently half-selected node is returned. This parameter is valid only when multiple nodes are selected.'
          },
          'demoId': 'check-on-click-node'
        },
        {
          'name': 'getCurrentKey',
          'type': '() => result',
          'defaultValue': '',
          'desc': {
            'zh-CN':
              '获取当前被选中节点的 key，使用此方法必须设置 node-key 属性，若没有节点被选中则返回 ，仅配置单选时生效',
            'en-US':
              'Obtains the key of the currently selected node. This method must be used to set the node-key attribute. If no node is selected, the system returns. This method takes effect only when one node is selected.'
          },
          'demoId': 'node-key'
        },
        {
          'name': 'getCurrentNode',
          'type': '() => result',
          'defaultValue': '',
          'desc': {
            'zh-CN': '获得当前的选中的节点，仅单选模式下生效;获取当前被选中节点的 data，若没有节点被选中则返回 null',
            'en-US':
              'Obtains the selected node. This parameter is valid only in single-choice mode. Obtains the data of the currently selected node. If no node is selected, null is returned'
          },
          'demoId': 'node-key'
        },
        {
          'name': 'setCurrentKey',
          'type': '(key) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性',
            'en-US':
              'Use the key to set the selected status of a node. You must set the node-key attribute when using this method.'
          },
          'demoId': 'node-key'
        },
        {
          'name': 'setCurrentNode',
          'type': '(key) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '通过 node 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性',
            'en-US':
              'Use node to set the selected status of a node. You must set the node-key attribute in this method.'
          },
          'demoId': 'node-key'
        },
        {
          'name': 'getNode',
          'type': '(data) => result',
          'defaultValue': '',
          'desc': {
            'zh-CN': '根据 data 或者 key 拿到 Tree 组件中的 node',
            'en-US': 'The node in the Tree component is obtained based on data or key.'
          },
          'demoId': 'show-checkbox'
        },
        {
          'name': 'remove',
          'type': '(data) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '删除节点。删除 Tree 中的一个节点，使用此方法必须设置 node-key 属性',
            'en-US': 'Delete a node. ;Delete a node from the tree. The node-key attribute must be set in this method'
          },
          'demoId': 'node-key'
        },
        {
          'name': 'append',
          'type': '(data, parentNode) => void',
          'defaultValue': '',
          'desc': { 'zh-CN': '为 Tree 中的一个节点追加一个子节点', 'en-US': 'Add a subnode to a node in the tree.' },
          'demoId': 'node-key'
        },
        {
          'name': 'insertBefore',
          'type': '(data, refNode) => void',
          'defaultValue': '',
          'desc': { 'zh-CN': '为 Tree 的一个节点的前面增加一个节点', 'en-US': 'Add a node before a tree node.' },
          'demoId': 'node-key'
        },
        {
          'name': 'insertAfter',
          'type': '(data, refNode) => void',
          'defaultValue': '',
          'desc': {
            'zh-CN': '根据节点数据在父节点下插入一个子节点。为 Tree 的一个节点的后面增加一个节点',
            'en-US':
              'Insert a child node under the parent node based on the node data. Add a node  after a node of the Tree'
          },
          'demoId': 'node-key'
        }
      ]
    }
  ]
}
