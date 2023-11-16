import { test, expect } from '@playwright/test'

test('gutter栅格间隔', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('layout#gutter')
  const preview = page.locator('#preview')
  const layout = preview.locator('.tiny-layout > div')
  const div1 = layout.first()
  await expect(div1).toHaveCSS('margin-left', '0px')

  const div2 = layout.nth(1)
  await expect(div2.locator('div').first()).toHaveCSS('padding-left', '10px')

  const div3 = layout.nth(2)
  await expect(div3.locator('div').first()).toHaveCSS('padding-left', '25px')
})
