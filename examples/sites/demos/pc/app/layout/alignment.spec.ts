import { test, expect } from '@playwright/test'

test('layout对齐方式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('layout#alignment')
  const preview = page.locator('#preview')
  const layoutDiv = preview.locator('.tiny-layout > div')
  await expect(layoutDiv.first()).toHaveClass(/row-justify-start/)
  await expect(layoutDiv.nth(1)).toHaveClass(/row-justify-center/)
  await expect(layoutDiv.nth(2)).toHaveClass(/row-justify-end/)
})
