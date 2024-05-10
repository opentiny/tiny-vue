
      import mobileFirst from './mobile-first'
      export default function (props) {
        const { tiny_mode = 'pc' } = props
      
        const S = {
          'mobile-first':mobileFirst
        }[tiny_mode]
      
        return S(props)
      }
      
      