import classNames from 'classnames'

export default function SvgRender(Component, props) {
  const className = classNames(
    'icon',
    'tiny-svg',
    props.className
  )
  return (<Component {...props} className = {className} />)
}
