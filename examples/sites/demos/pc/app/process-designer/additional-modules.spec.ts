import { test, expect } from '@playwright/test'

test('ProcessDesigner 追加模块', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('process-designer#additional-modules')
  const el = await page.waitForSelector('#render > div > div > div.djs-minimap.open > div.map > svg')
  expect(await el.isVisible()).toBeTruthy()
})
