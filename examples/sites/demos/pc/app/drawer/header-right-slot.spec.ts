import { test, expect } from '@playwright/test'

test('头部右侧插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('drawer#header-right-slot')

  const drawer = page.locator('.tiny-drawer__main')
  const headerRight = drawer.locator('.tiny-drawer__header-right')

  await page.getByRole('button', { name: '头部右侧插槽示例' }).click()
  await expect(headerRight).toBeVisible()
  await expect(headerRight).toContainText('自定义头部右侧')
})
