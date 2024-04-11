
      import mobile from './mobile'
import pc from './pc'
      export default function (props) {
        const { tiny_mode = 'pc' } = props
      
        const S = {
          'mobile':mobile,'pc':pc
        }[tiny_mode]
      
        return S(props)
      }
      
      