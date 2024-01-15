export interface Plugin {
  // 插件所属宿主
  host?: 'grid' | 'table'
  // 插件加载方法
  install?: (Table: any) => void
}
