// #properties > div

import { test, expect } from '@playwright/test'

test('ProcessDesigner Readonly', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('process-designer#readonly')
  expect(await page.locator('#render > div > div > div.djs-minimap.open > div.map > svg').isVisible()).toBeFalsy()
})
