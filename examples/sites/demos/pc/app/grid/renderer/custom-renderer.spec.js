import { test, expect } from '@playwright/test'

test('自定义渲染器', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-renderer#renderer-custom-renderer')
  const demo = page.locator('#renderer-custom-renderer')
  await expect(demo.getByText('GFD 科技 YX 公司').first()).toHaveCSS('color', 'rgb(218, 165, 32)')
  await demo.locator('.tiny-switch').first().click()
  await expect(page.getByText('触发了change事件')).toBeVisible()
})
