import TinyAlert from '@opentiny/vue-alert'

export default function () {
  const alertSlots = {
    title: <span>插槽标题</span>
  }

  const alertSlots2 = {
    description: (
      <span>
        <p style="color:red;">插槽描述</p>
      </span>
    )
  }

  const alertSlots3 = {
    close: <span>插槽关闭</span>
  }

  return (
    <div className="alert">
      <TinyAlert description="type 为默认值 info"></TinyAlert>
      <TinyAlert size="large" title="slot 自定义内容">
        <span>自定义内容</span>
      </TinyAlert>
      <br />
      <TinyAlert size="large" title="slot 自定义交互操作">
        <a href="javascript: void(0);">确定</a>
        <a href="javascript: void(0);">取消</a>
      </TinyAlert>
      <br />
      <TinyAlert type="success" title="成功" size="large" description="提交结果页用于反馈一系列操作任务的处理结果。">
        <a href="javascript: void(0);">继续提交</a>
        <a href="javascript: void(0);">取消操作</a>
      </TinyAlert>
      <br />
      <TinyAlert
        type="error"
        title="错误"
        size="large"
        description="提交结果页用于反馈一系列操作任务的处理结果。"></TinyAlert>
      <br />
      <TinyAlert type="warning" title="警告" size="large" description="提交结果页用于反馈一系列操作任务的处理结果。">
        <a href="javascript: void(0);">继续提交</a>
        <a href="javascript: void(0);">取消操作</a>
      </TinyAlert>
      <br />
      <TinyAlert type="warning" description="type 为默认值 info" size="large" slots={alertSlots}></TinyAlert>
      <br />
      <TinyAlert type="warning" title="警告" size="large" slots={alertSlots2}></TinyAlert>
      <br />
      <TinyAlert
        type="error"
        title="错误"
        size="large"
        description="关闭按钮自定义文本"
        closable={false}
        slots={alertSlots3}></TinyAlert>
    </div>
  )
}
