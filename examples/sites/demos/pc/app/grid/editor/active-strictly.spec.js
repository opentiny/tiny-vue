import { test, expect } from '@playwright/test'

test('维护编辑状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-editor#active-strictly')
  await page.getByRole('cell', { name: '福州' }).click()
  const demo = page.locator('#active-strictly')
  await expect(
    demo.locator('.tiny-grid-body__row').first().locator('.tiny-grid-body__column').nth(1).locator('input')
  ).toHaveCount(0)
})
