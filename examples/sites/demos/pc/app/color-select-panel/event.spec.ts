import { test, expect } from '@playwright/test'

test('事件触发', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-select-panel#event')
  const demo = await page.locator('#event')
  await demo.getByRole('button', { name: 'Show Color select panel' }).click()
  await demo.getByRole('button', { name: '取消' }).click()
  expect(page.locator('.tiny-notify')).toHaveText('用户点击了取消')
  await page.locator('.tiny-notify__icon-close > .tiny-svg').click()
})
