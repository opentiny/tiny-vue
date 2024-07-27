export interface IMentionModule {
  data: object[]
  itemKey: string
  searchKey: string
  mentionSearchFn?: (term: string) => Promise<any[]>
  mentionSelect?: any
  mentionRemove?: any
}
