function position(legend, selfLegend) {
  legend.top = selfLegend.position.top || 'auto'
  legend.left = selfLegend.position.left || 'auto'
  legend.right = selfLegend.position.right || 'auto'
  legend.bottom = selfLegend.position.bottom || 'auto'
}

export default position
