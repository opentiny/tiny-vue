import { test, expect } from '@playwright/test'

test('推荐基于 Teleport 的全屏方案', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-toolbar#toolbar-grid-full-screen-teleport')
  await page.getByRole('button', { name: '进入全屏模式' }).click()
  await expect(page.locator('body>.tiny-grid')).toBeVisible()
  await page.getByRole('button', { name: '退出全屏模式' }).click()
  await expect(page.locator('body>.tiny-grid')).toHaveCount(0)
})
