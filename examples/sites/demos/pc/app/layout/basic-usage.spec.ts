import { test, expect } from '@playwright/test'

test('栅格布局', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('layout#basic-usage')
  const preview = page.locator('.pc-demo-container')
  const layout = preview.locator('.tiny-layout .tiny-row')
  const row1 = layout.first()
  await expect(row1.locator('.tiny-col')).toHaveClass(/col-md-24/)

  const row2 = layout.nth(1)
  const colFirst = row2.locator('.tiny-col')
  await expect(colFirst.first()).toHaveClass(/col-md-6/)
  await expect(colFirst.nth(1)).toHaveClass(/col-md-12/)
  await expect(colFirst.nth(2)).toHaveClass(/col-md-6/)

  const row3 = layout.nth(2)
  const colThird = row3.locator('.tiny-col')
  await expect(colThird.first()).toHaveClass(/col-md-4/)
  await expect(colThird.nth(1)).toHaveClass(/col-md-6/)
})
