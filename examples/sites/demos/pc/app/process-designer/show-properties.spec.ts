import { expect, test } from '@playwright/test'

test('ProcessDesigner 侧边栏显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('process-designer#showProperties')
  await page.locator('#showProperties > div > div.pc-demo-container > div > div > button').click()
  expect(await page.locator('#properties > div').isVisible()).toBeTruthy()
})
