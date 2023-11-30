import { test, expect } from '@playwright/test'

test('栅格布局', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('layout#base')
  const preview = page.locator('#preview')
  const layout = preview.locator('.tiny-layout > div')
  const div1 = layout.first()
  await expect(div1.locator('.tiny-col')).toHaveClass(/col-md-12/)

  const div2 = layout.nth(1)
  const colFirst = div2.locator('.tiny-col')
  await expect(colFirst.first()).toHaveClass(/col-md-3/)
  await expect(colFirst.nth(1)).toHaveClass(/col-md-6/)
  await expect(colFirst.nth(2)).toHaveClass(/col-md-3/)

  const div3 = layout.nth(2)
  const colThird = div3.locator('.tiny-col')
  await expect(colThird.first()).toHaveClass(/col-md-2/)
  await expect(colThird.nth(1)).toHaveClass(/col-md-3/)
})
