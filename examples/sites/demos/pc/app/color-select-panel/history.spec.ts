import { test, expect } from '@playwright/test'

test('历史记录', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-select-panel#history')
  await page.getByRole('button', { name: 'Toggle History visibility' }).click()
  await page.getByRole('button', { name: 'Show Color select panel' }).click()
  await expect(page.getByRole('button', { name: '历史记录' })).toBeVisible()
  await page.getByRole('button', { name: 'Toggle History visibility' }).click()
  await page.getByRole('button', { name: 'Show Color select panel' }).click()
  await expect(page.getByRole('button', { name: '历史记录' })).not.toBeVisible()
})
