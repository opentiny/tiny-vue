
      import mobileFirst from './mobile-first'
import pc from './pc'
      export default function (props) {
        const { tiny_mode = 'pc' } = props
      
        const S = {
          'mobile-first':mobileFirst,'pc':pc
        }[tiny_mode]
      
        return S(props)
      }
      
      