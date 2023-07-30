import classNames from 'classnames'

export default function SvgRender(Component, props) {
  // const className = 'icon tiny-svg' + ' ' + props.className
  const className = classNames(
    'icon',
    'tiny-svg',
    props.className
  )
  return (<Component {...props} className = {className} />)
}
