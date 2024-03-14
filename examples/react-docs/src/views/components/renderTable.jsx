// 渲染表格的函数
export function renderTable(api, table) {
  function changePage(data) {
    const container = document.getElementById('doc-layout')
    const target = document.querySelector(`#${data.pcDemo}`)
    if (container && target) {
      const top = target?.offsetTop - container.offsetTop
      const param = { top, left: 0, behavior: 'smooth' }
      container?.scrollTo(param)
    }
  }
  const items = api[table.title] || []
  const filteredItems = items.filter((item) => item.mode && item.mode.includes('pc'))
  if (filteredItems.length > 0) {
    return (
      <div key={table.title}>
        <div className="ti-f18 ti-py28">{table.title}</div>
        <table className="api-table">
          <thead>
            <tr>
              {table.head.map((head, index) => (
                <th key={index} width={head === '名称' ? '15%' : head === '说明' ? '45%' : '20%'}>
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item, index2) => (
              <tr key={index2} onClick={() => changePage(item)}>
                {table.head.map((head, index3) => (
                  <td key={`${index2}-${index3}`}>
                    {head === '名称' && <a>{item.name}</a>}
                    {head === '类型' && <span>{item.type}</span>}
                    {head === '默认值' && <span>{item.defaultValue}</span>}

                    {head === '说明' && <span>{item.desc && item.desc['zh-CN']}</span>}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  return null
}
