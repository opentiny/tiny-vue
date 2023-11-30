import classNames from 'classnames'
import { If } from './virtual-comp'

export const Svg = ({ name = 'Icon', component: Icon }) => {
  const funcObj = ({
    [name](props) {
      const className = classNames(
        'icon',
        'tiny-svg',
        props.className
      )
      const v_if = typeof props['v-if'] === 'boolean' ? props['v-if'] : true
      const defaultProps = { ...props }
      delete defaultProps['v-if']
      return (
        <If v-if={v_if}>
          <Icon {...defaultProps} className={className} />
        </If>
      )
    }
  })
  return funcObj[name]
}
