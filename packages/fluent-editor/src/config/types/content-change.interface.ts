export interface IContentChange {
  content: any
  delta: any
  editor: any
  html: string | null
  oldDelta: any
  source: string
  text: string
  textCount: number
  wordCount: number
  htmlCount: number
  isChanged?: boolean
}
