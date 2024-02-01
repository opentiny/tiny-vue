import { test, expect } from '@playwright/test'

test('事件触发', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-select-panel#event')
  await page.getByRole('button', { name: 'Show Color select panel' }).click()
  await page.locator('.black').click()
  await page.locator('.tiny-color-select-panel__inner__hue-select').click()
  await page.getByRole('button', { name: '选择' }).click()
  await page.getByRole('button', { name: 'Show Color select panel' }).click()
  await page.getByRole('button', { name: '取消' }).click()
})
