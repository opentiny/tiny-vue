import { test, expect } from '@playwright/test'

test('ProcessDesigner 自定义Modeler', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('process-designer#custom')
  const selectors = [
    '#render > div > div > div.djs-palette.open > div.djs-palette-entries > div:nth-child(1) > div',
    '#render > div > div > div.djs-palette.open > div.djs-palette-entries > div:nth-child(2) > div.entry.icon-custom.icon-custom-start',
    '#render > div > div > div.djs-palette.open > div.djs-palette-entries > div:nth-child(2) > div.entry.icon-custom.icon-custom-end',
    '#render > div > div > div.djs-palette.open > div.djs-palette-entries > div:nth-child(3) > div.entry.icon-custom.icon-custom-task',
    '#render > div > div > div.djs-palette.open > div.djs-palette-entries > div:nth-child(3) > div.entry.icon-custom.icon-custom-businessRule',
    '#render > div > div > div.djs-palette.open > div.djs-palette-entries > div:nth-child(3) > div.entry.icon-custom.icon-custom-exclusive-gateway',
    '#render > div > div > div.djs-palette.open > div.djs-palette-entries > div:nth-child(3) > div.entry.icon-custom.icon-custom-data'
  ]
  const els = selectors.map((s) => page.waitForSelector(s))
  const bg = els.map(async (el) => (await el).evaluate((ele) => getComputedStyle(ele).backgroundImage))

  const bgs = [
    'url("http://localhost:3101/static/images/process-designer/flow.png")',
    'url("http://localhost:3101/static/images/process-designer/start.png")',
    'url("http://localhost:3101/static/images/process-designer/end.png")',
    'url("http://localhost:3101/static/images/process-designer/rules.png")',
    'url("http://localhost:3101/static/images/process-designer/variable.png")',
    'url("http://localhost:3101/static/images/process-designer/decision.png")',
    'url("http://localhost:3101/static/images/process-designer/score.png")'
  ]
  const elBg = await Promise.all(bg)
  expect(elBg.every((u) => bgs.includes(u))).toBeTruthy()
  // el.getAttribute()
})
