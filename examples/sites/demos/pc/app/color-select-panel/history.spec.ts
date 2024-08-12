import { test, expect } from '@playwright/test'

test('历史记录', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-select-panel#history')
  const demo = await page.locator('#history')
  await demo.getByRole('button', { name: 'Show Color select panel' }).click()
  await demo.locator('.tiny-color-select-panel__inner__hue-select > div').dblclick()
  await demo.getByRole('button', { name: '选择' }).click()
  await demo.getByRole('button', { name: 'Show Color select panel' }).click()
  await demo.getByRole('button', { name: '历史记录' }).click()
  expect(page.locator('.tiny-color-select-panel__history__color-block')).toHaveCount(2)
})
