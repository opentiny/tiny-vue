import { Button } from '@opentiny/react'
import { IconAdd } from '@opentiny/react-icon'
import { useState } from 'react';

export default function ButtonExample() {
  const [loading, setLoading] = useState(false);

  const click = () => {
    console.log('button click');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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