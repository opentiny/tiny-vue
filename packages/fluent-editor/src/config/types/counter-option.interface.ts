export interface ICounterOption {
  format?: 'text' | 'html'
  unit?: 'word' | 'char'
  count?: number
  template?: string | Function
  errorTemplate?: string | Function
}
