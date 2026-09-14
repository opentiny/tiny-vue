import { describe, expect, test } from 'vitest'
import { splitRowspanAtExpand } from '../src/composable/useCellSpan'

const col = (property) => ({ property, id: property })

const cell = (rowspan, column, row, extra = {}) => ({
  attrs: { rowspan, colspan: rowspan > 0 ? 1 : 0, visible: rowspan > 0, _dataRowspan: rowspan, ...extra },
  params: { column, row }
})

describe('splitRowspanAtExpand', () => {
  test('no-op without expandeds', () => {
    const area = col('area')
    const data = [{ area: 'A' }, { area: 'A' }, { area: 'A' }]
    const rows = [[cell(3, area, data[0])], [cell(0, area, data[1])], [cell(0, area, data[2])]]
    splitRowspanAtExpand(rows, { expandeds: [], rowSpan: [{ field: 'area' }] })
    expect(rows.map((r) => r[0].attrs.rowspan)).toEqual([3, 0, 0])
  })

  test('expand without merges is identity', () => {
    const city = col('city')
    const r0 = { city: '深圳' }
    const r1 = { city: '中山' }
    const rows = [[cell(1, city, r0)], [cell(1, city, r1)]]
    splitRowspanAtExpand(rows, { expandeds: [r0], rowSpan: [] })
    expect(rows.map((r) => r[0].attrs.rowspan)).toEqual([1, 1])
    expect(rows[0][0].attrs.colspan).toBe(1)
  })

  test('splits merge when middle row expands (#4200)', () => {
    const area = col('area')
    const r0 = { area: '华南区' }
    const r1 = { area: '华南区' }
    const r2 = { area: '华南区' }
    const rows = [[cell(3, area, r0)], [cell(0, area, r1)], [cell(0, area, r2)]]

    splitRowspanAtExpand(rows, {
      expandeds: [r1],
      rowSpan: [{ field: 'area' }]
    })

    expect(rows[0][0].attrs).toMatchObject({ rowspan: 2, visible: true })
    expect(rows[1][0].attrs).toMatchObject({ rowspan: 0, visible: false })
    expect(rows[2][0].attrs).toMatchObject({ rowspan: 1, visible: true })
  })

  test('expand on first row restarts merge below', () => {
    const area = col('area')
    const r0 = { area: 'A' }
    const r1 = { area: 'A' }
    const r2 = { area: 'A' }
    const rows = [[cell(3, area, r0)], [cell(0, area, r1)], [cell(0, area, r2)]]

    splitRowspanAtExpand(rows, {
      expandeds: [r0],
      rowSpan: [{ field: 'area' }]
    })

    expect(rows[0][0].attrs.rowspan).toBe(1)
    expect(rows[1][0].attrs).toMatchObject({ rowspan: 2, visible: true })
    expect(rows[2][0].attrs).toMatchObject({ rowspan: 0, visible: false })
  })

  test('expand on last row of group keeps full merge above', () => {
    const area = col('area')
    const r0 = { area: 'A' }
    const r1 = { area: 'A' }
    const r2 = { area: 'A' }
    const rows = [[cell(3, area, r0)], [cell(0, area, r1)], [cell(0, area, r2)]]

    splitRowspanAtExpand(rows, {
      expandeds: [r2],
      rowSpan: [{ field: 'area' }]
    })

    expect(rows.map((r) => r[0].attrs.rowspan)).toEqual([3, 0, 0])
  })

  test('spanMethod spans are left unchanged', () => {
    const a = col('a')
    const b = col('b')
    const r0 = { a: 1, b: 2 }
    const r1 = { a: 1, b: 2 }
    const covered = (column, row) => cell(0, column, row, { colspan: 0, visible: false, _dataRowspan: 0 })
    const rows = [
      [cell(2, a, r0, { colspan: 2, _dataRowspan: 2 }), covered(b, r0)],
      [covered(a, r1), covered(b, r1)]
    ]

    splitRowspanAtExpand(rows, {
      expandeds: [r0],
      spanMethod: () => ({})
    })

    expect(rows[0][0].attrs).toMatchObject({ rowspan: 2, colspan: 2, visible: true })
    expect(rows[0][1].attrs).toMatchObject({ rowspan: 0, colspan: 0, visible: false })
    expect(rows[1][0].attrs).toMatchObject({ rowspan: 0, colspan: 0, visible: false })
    expect(rows[1][1].attrs).toMatchObject({ rowspan: 0, colspan: 0, visible: false })
  })
})
