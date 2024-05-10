
      import mobile from './mobile'
      export default function (props) {
        const { tiny_mode = 'pc' } = props
      
        const S = {
          'mobile':mobile
        }[tiny_mode]
      
        return S(props)
      }
      
      