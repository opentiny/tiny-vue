export const isWeb = () =>
  typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document

export const getWindow = () => (isWeb() ? window : global)

export default {
  getWindow,
  isWeb
}
