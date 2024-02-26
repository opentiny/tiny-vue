const LiquidfillChart = (aliasToken) => {
  const { colorLabel, colorBgPrimary } = aliasToken

  return {
    label: {
      color: colorLabel
    },
    backgroundStyle: {
      color: colorBgPrimary
    }
  }
}

export default LiquidfillChart
