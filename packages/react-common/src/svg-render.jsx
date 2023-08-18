import classNames from 'classnames'

export const Svg = ({ name = 'Icon', component: Component }) => {
  const funcObj = ({
    [name](props) {
      const className = classNames(
        'icon',
        'tiny-svg',
        props.className
      )
      return (<Component {...props} className={className} />)
    }
  })
  return funcObj[name]
}
