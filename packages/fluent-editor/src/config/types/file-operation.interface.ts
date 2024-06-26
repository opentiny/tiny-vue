export interface FileOperation {
  operation: string
  hasRejectedFile?: boolean
  data: {
    fileId?: string
    file?: File
    files?: Array<File>
  }
  callback?: Function
}
