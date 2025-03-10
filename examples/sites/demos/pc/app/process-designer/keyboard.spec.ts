import { test, expect } from '@playwright/test'

test('ProcessDesigner 快捷键', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('process-designer#keyboard')
  await page
    .locator('#render > div > div > svg > g > g.layer-root-1 > g:nth-child(3) > g > rect.djs-hit.djs-hit-all')
    .click()
  await page.keyboard.down('Delete')
  expect(
    await page
      .locator('#render > div > div > svg > g > g.layer-root-1 > g:nth-child(3) > g > rect.djs-hit.djs-hit-all')
      .isVisible()
  ).toBeFalsy()
})
