import { test, expect } from '@playwright/test'

test('头部插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('drawer#header-slot')

  const drawer = page.locator('.tiny-drawer__main')
  const header = drawer.locator('.tiny-drawer__header-wrapper')
  await page.getByRole('button', { name: '头部插槽示例' }).click()
  await expect(header.locator('> div')).toHaveClass('my-header')
  await expect(header).toContainText('自定义头部标题')
})
