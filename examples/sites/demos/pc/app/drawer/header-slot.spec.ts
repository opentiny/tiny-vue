import { test, expect } from '@playwright/test'

test('头部插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('drawer#header-slot')
  const demo = page.locator('#header-slot')
  const drawer = demo.locator('.tiny-drawer__main')
  const header = drawer.locator('.tiny-drawer__header-wrapper')
  await demo.getByRole('button', { name: '头部插槽示例' }).click()
  await expect(header.locator('> div')).toHaveClass('my-header')
  await expect(header).toContainText('自定义头部标题')
})
