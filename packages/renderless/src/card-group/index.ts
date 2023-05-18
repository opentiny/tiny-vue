export const getStyle = ({ props }) => () => {
  const size = props.size || 'medium'
  const sizeMap = {
    large: '31.25rem',
    medium: '18.75rem',
    small: '12.5rem',
    mini: '6.25rem'
  }

  return {
    'grid-template-columns': `repeat(auto-fit, minmax(${sizeMap[size]}, 1fr))`
  }
}
