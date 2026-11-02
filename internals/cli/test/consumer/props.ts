import type Button from '@opentiny/vue-button'
import type Space from '@opentiny/vue-space'

type ButtonProps = InstanceType<typeof Button>['$props']
type SpaceProps = InstanceType<typeof Space>['$props']

const button: ButtonProps = { disabled: false, text: 'OK' }
const space: SpaceProps = { size: 8, direction: 'row' }
// @ts-expect-error published button props must reject a string for disabled
const badDisabled: ButtonProps = { disabled: 'wrong' }
// @ts-expect-error published button props must reject a numeric label
const badText: ButtonProps = { text: 123 }
// @ts-expect-error published space props must reject a boolean size
const badSize: SpaceProps = { size: false }
void [button, space, badDisabled, badText, badSize]
