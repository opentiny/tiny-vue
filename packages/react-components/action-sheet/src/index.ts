
      import mobileFirst from './mobile-first'
import mobile from './mobile'
      export default function (props) {
        const { tiny_mode = 'pc' } = props
      
        const S = {
          'mobile-first':mobileFirst,'mobile':mobile
        }[tiny_mode]
      
        return S(props)
      }
      
      