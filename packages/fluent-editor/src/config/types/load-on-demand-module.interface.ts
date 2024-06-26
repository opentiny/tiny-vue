export interface ILoadOnDemandModule {
  mode?: 'line' | 'text'
  limit?: number
  lazy?: boolean
}
