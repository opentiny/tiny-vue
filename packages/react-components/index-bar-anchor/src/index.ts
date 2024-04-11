
      
      export default function (props) {
        const { tiny_mode = 'pc' } = props
      
        const S = {
          
        }[tiny_mode]
      
        return S(props)
      }
      
      