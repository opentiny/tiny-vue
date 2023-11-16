import { test, expect } from '@playwright/test'

test('设置指定行高亮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-highlight#methods-set-current-row')
  await page.getByRole('button', { name: 'setCurrentRow' }).click()
  await expect(page.locator('.row__current')).toBeVisible()
})
