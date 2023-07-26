export default function SvgRender(Component, props) {
  const className = 'icon tiny-svg' + ' ' + props.className
  return (<><Component {...props} className = {className} /></>)
}
