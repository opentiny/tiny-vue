export const filter = () => (value, data) => {
  if (!value) return true

  return data.label.includes(value)
}
