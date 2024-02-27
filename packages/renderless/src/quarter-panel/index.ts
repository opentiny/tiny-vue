const QUARTER_MAP = {
  0: 0,
  1: 3,
  2: 6,
  3: 9
}

export const handleQuarterTableClick =
  ({ emit }) =>
  (event) => {
    const currentDate = new Date(2024, QUARTER_MAP[event.target.cellIndex], 1)
    emit('pick', currentDate)
  }
