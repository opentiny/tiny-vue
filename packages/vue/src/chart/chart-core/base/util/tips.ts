const packageName = 'HUI-Charts'

function warn(tip) {
  console.warn(`[${packageName}] Warning: ${tip}`)
}

function error(tip) {
  console.error(`[${packageName}] Error: ${tip}`)
}

export default {
  warn,
  error
}
