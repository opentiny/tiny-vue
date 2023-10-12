import { test, expect } from '@playwright/test'

test('图片头像', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/user-head/image-user-head')
  const headImg = page.locator('.tiny-user-head')
  await expect(headImg).toHaveAttribute('value', 'localhost:3000/webnova/static/img/compontent.b2f0f5b.png')
})
