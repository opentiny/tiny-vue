import { test, expect } from '@playwright/test'

test('事件触发', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-picker#event')
  await page.locator('.tiny-color-picker__inner').click()
  await page.locator('.black').click()
  await page.getByRole('button', { name: '确定' }).click()
  await page.getByText('用户点击了确定').click()
})
