import { THEMES } from '../constants'
import ict from './ict'
import bpit from './bpit'
import cloud from './cloud'
import hdesign from './hdesign'

const color = {
  [THEMES.LIGHT]: ict.light,
  [THEMES.DARK]: ict.dark,
  [THEMES.BPIT_LIGHT]: bpit.light,
  [THEMES.BPIT_DARK]: bpit.dark,
  [THEMES.CLOUD_LIGHT]: cloud.light,
  [THEMES.CLOUD_DARK]: cloud.dark,
  [THEMES.HDESIGN_LIGHT]: hdesign.light,
  [THEMES.HDESIGN_DARK]: hdesign.dark
}

export default color
