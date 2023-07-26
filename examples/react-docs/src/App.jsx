import { Button } from '@opentiny/react'
import { IconAdd } from '@opentiny/react-icon'
import { useState } from 'react';

function App() {


  const [loading, setLoading] = useState(false);

  const click = () => {
    console.log('button click');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }
  return (
    <>
      <Button 
        nativeType='button' 
        resetTime={1000} 
        type="danger"
        autofocus
        icon={IconAdd}
        click={click}
        loading={loading}
      >主要按钮</Button>
    </>
  )
}

export default App
