import { test, expect } from '@playwright/test'

test('默认插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('drawer#default-slot')

  const drawer = page.locator('.tiny-drawer__main')
  await page.getByRole('button', { name: '抽屉默认插槽示例' }).click()
  await expect(drawer.locator('.tiny-drawer__body > div')).toHaveClass('my-content')
  await expect(drawer.locator('.tiny-drawer__body')).toHaveText('默认插槽内容')
})
