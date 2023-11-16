import { test, expect } from '@playwright/test'

test('菜单跳转处理', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('nav-menu#before-skip')
  const preview = page.locator('#preview')
  await preview.getByText('规范').click()
  await expect(page.locator('div').filter({ hasText: '当前跳转的菜单为：规范' }).first()).toBeVisible()
  await preview.getByText('案例').click()
  await expect(page.locator('div').filter({ hasText: '当前跳转的菜单为：案例' }).first()).toBeVisible()
})
