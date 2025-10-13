import { test, expect } from '@playwright/test'

test('多行编辑', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-editor#editor-custom-edit')
  const demo = page.locator('#editor-custom-edit')
  await expect(
    demo.locator('.tiny-grid-body__row').nth(0).locator('td').nth(1).locator('.tiny-input__inner')
  ).toBeVisible()
  await expect(
    demo.locator('.tiny-grid-body__row').nth(1).locator('td').nth(1).locator('.tiny-input__inner')
  ).toBeVisible()
})
