import { test, expect } from '@playwright/test'

test('排序', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('layout#order')

  const preview = page.locator('.pc-demo-container')
  const layout = preview.locator('.tiny-layout')
  const row = layout.locator('.tiny-row').nth(1)

  const firstDiv = row.locator('.tiny-col').first()
  await expect(firstDiv).toHaveCSS('order', '3')
  await page.getByRole('button', { name: '升序' }).click()
  await expect(firstDiv).toHaveCSS('order', '-3')
})
