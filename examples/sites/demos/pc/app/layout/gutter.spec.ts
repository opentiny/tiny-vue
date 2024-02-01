import { test, expect } from '@playwright/test'

test('gutter栅格间隔', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('layout#gutter')
  const preview = page.locator('.pc-demo-container')
  const layout = preview.locator('.tiny-layout > div')
  const row1 = layout.first()
  await expect(row1).toHaveCSS('margin-left', '0px')

  const row2 = layout.nth(1)
  await expect(row2.locator('div').first()).toHaveCSS('padding-left', '5px')

  const row3 = layout.nth(2)
  await expect(row3.locator('div').first()).toHaveCSS('padding-left', '10px')

  const row4 = layout.first()
  await expect(row4).toHaveCSS('margin-left', '0px')
})
