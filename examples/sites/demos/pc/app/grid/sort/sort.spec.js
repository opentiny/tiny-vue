import { test, expect } from '@playwright/test'

test('手动排序', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-sort#sort-sort')
  await page.getByRole('button', { name: '手动排序 sort' }).click()
  await expect(page.locator('.tiny-grid-body__row').first()).toContainText('300')
})
