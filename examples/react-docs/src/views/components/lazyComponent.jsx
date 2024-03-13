import { lazy, Suspense, Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够展示降级后的 UI
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>文件无法加载.</h1>
    }

    return this.props.children
  }
}

// 使用React.lazy()函数动态导入组件

function LazyComponent({ fileName }) {
  const MyComponent = lazy(() => import(fileName))

  return (
    <div>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <MyComponent />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default LazyComponent
