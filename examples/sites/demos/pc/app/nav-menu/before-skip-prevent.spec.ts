import { test, expect } from '@playwright/test'

test('使用组件默认服务时，菜单跳转处理', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('nav-menu#before-skip-prevent')
  const preview = page.locator('#preview')
  const popMenu = preview.locator('.popmenu')
  const modal = page
    .locator('div')
    .filter({ hasText: /prevent 事件/ })
    .first()
  await preview.getByText('首页').click()
  await expect(modal).toBeVisible()
  const components = preview.locator('a').filter({ hasText: '组件' })
  await components.hover()
  await expect(popMenu).toBeVisible()
  await components.click()
  await expect(modal).toBeVisible()
})
