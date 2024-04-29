import { renderless, api } from '@opentiny/vue-renderless/[[NAME]]/vue'
import { vc, If, Component, Slot, Transition, useSetup, useVm } from '@opentiny/openinula-common'
import { IconClose, IconSuccess, IconError, IconHelp, IconWarning } from '@opentiny/openinula-icon'
import '@opentiny/vue-theme-mobile/[[NAME]]/index.less'

const $constants = {

}

export default function [[UNAME]](props) {

    const {
        _constants,

    } = props

    const defaultProps = Object.assign(
        {

        },
        props
    )


    const { ref, current: vm, parent } = useVm()

    const { [[API]] } = useSetup({
        props: defaultProps,
        renderless,
        api,
        constants: _constants,
        vm,
        parent
    })

    return (
        [[TEMPLATE]]
    )
}
