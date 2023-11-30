import { test, expect } from '@playwright/test'

test('自定义分页下拉框的类名', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('pager#popper-class')

  const demo = page.locator('#popper-class')
  const pager = demo.locator('.tiny-pager')
  const sizeChange = pager.locator('.tiny-pager__page-size')
  const sizeSelect = page.locator('.tiny-pager__selector')

  await sizeChange.click()
  await expect(sizeSelect).toHaveClass(/custom-pager/)
  await expect(sizeSelect).toHaveCSS('background-color', 'rgb(230, 247, 255)')
})
