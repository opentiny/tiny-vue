import { test, expect } from '@playwright/test'

test('历史记录', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-select-panel#history')
  await page.getByRole('button', { name: 'Show Color select panel' }).click()
  await page.locator('.black').click()
  await page.getByRole('button', { name: '选择' }).click()
  await page.getByRole('button', { name: 'Append history color' }).click()
  await page.getByRole('button', { name: 'Show Color select panel' }).click()
  await page.getByRole('button', { name: '历史记录' }).click()
  await page.getByRole('button', { name: 'Pop history color' }).click()
  await page.getByRole('button', { name: 'Show Color select panel' }).click()
  await page.getByRole('button', { name: '历史记录' }).click()
})
