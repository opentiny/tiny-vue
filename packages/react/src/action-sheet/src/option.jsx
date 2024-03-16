import { vc } from '@opentiny/react-common'
import { IconCheck, IconCheckedSur } from '@opentiny/react-icon'

import { Component, Slot } from '@opentiny/react-common'

export default function Option(props) {
  return (
    <div
      className="flex items-start leading-5.5 py-3 cursor-pointer select-none"
      onClick={(e) => props.$emit('click', e)}>
      {props.multiple && (
        <Component
          is={props.selected ? IconCheckedSur : IconCheck}
          className={vc([
            'flex-none w-4 h-4 mt-0.5 mr-2',
            props.selected ? 'fill-color-brand' : 'fill-color-icon-disabled'
          ])}
        />
      )}

      <div
        className={vc([
          'flex-auto',
          { 'truncate': props.ellipsis },
          { 'text-color-brand': !props.multiple && props.selected }
        ])}>
        <Slot slots={props.slots} children={props.children}></Slot>
      </div>
    </div>
  )
}
