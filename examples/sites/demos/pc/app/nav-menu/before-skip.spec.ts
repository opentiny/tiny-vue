import { test, expect } from '@playwright/test'

test('跳转前处理', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('nav-menu#before-skip')
  const preview = page.locator('#before-skip')
  await preview.getByText('首页').click()
  await expect(page.locator('div').filter({ hasText: '当前跳转的菜单为：首页' }).first()).toBeVisible()
  await preview.getByText('其他').click()
  await expect(page.locator('div').filter({ hasText: '当前跳转的菜单为：其他' }).first()).toBeVisible()
})
