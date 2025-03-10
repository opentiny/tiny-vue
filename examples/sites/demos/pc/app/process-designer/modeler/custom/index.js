import CustomPalette from './custom-palette'
import CustomRenderer from './custom-render'
import CustomContextPadProvider from './custom-context-pad-provider'

export default {
  __init__: ['paletteProvider', 'customRenderer', 'contextPadProvider'],
  paletteProvider: ['type', CustomPalette],
  customRenderer: ['type', CustomRenderer],
  contextPadProvider: ['type', CustomContextPadProvider]
}
