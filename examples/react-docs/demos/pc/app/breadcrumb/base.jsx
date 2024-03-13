import { Breadcrumb, BreadcrumbItem, Icon } from '@opentiny/react'

function App() {
  const listeners = {
    select(value) {
      alert('触发面包屑事件' + JSON.stringify(value))
    }
  }
  const listeners2 = {
    select(value) {
      alert('触发面包屑事件' + JSON.stringify(value))
    }
  }
  const options = [
    {
      label: '首页',
      to: { path: '/' }
    },
    {
      label: '产品',
      to: { path: '/breadcrumb' }
    },
    {
      label: '软件',
      replace: true
    }
  ]
  const options1 = [
    {
      name: '首页',
      to: { path: '/' }
    },
    {
      name: '产品',
      to: { path: '/breadcrumb' }
    },
    {
      name: '软件',
      replace: true
    }
  ]
  const IconAdd = Icon.IconAdd
  return (
    <div className="root">
      <Breadcrumb listeners={listeners}>
        <BreadcrumbItem
          to={{ path: '/breadcrumb', query: { a: 2 } }}
          listeners={listeners2}
          label="首页"></BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/"> 产品 </a>
        </BreadcrumbItem>
        <BreadcrumbItem to={{ path: '/breadcrumb', query: { a: 1 } }}> 软件 </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb listeners={listeners} separator="/">
        <BreadcrumbItem
          to={{ path: '/breadcrumb', query: { a: 2 } }}
          listeners={listeners2}
          label="首页"></BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/"> 产品 </a>
        </BreadcrumbItem>
        <BreadcrumbItem to={{ path: '/breadcrumb', query: { a: 1 } }}> 软件 </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb listeners={listeners} separatorIcon={IconAdd}>
        <BreadcrumbItem
          to={{ path: '/breadcrumb', query: { a: 2 } }}
          replace
          listeners={listeners2}
          label="首页"></BreadcrumbItem>
        <BreadcrumbItem>
          <a href="/"> 产品 </a>
        </BreadcrumbItem>
        <BreadcrumbItem to={{ path: '/breadcrumb', query: { a: 1 } }}> 软件 </BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb options={options} listeners={listeners2}></Breadcrumb>
      <Breadcrumb options={options1} textField="name" listeners={listeners2}></Breadcrumb>
    </div>
  )
}

export default App
