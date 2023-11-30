import { test, expect } from '@playwright/test'

test('自定义图像内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('user-head#custom-user-head-content')
  const svg1 = page.locator('.tiny-user-head .tiny-svg path')
  await expect(await svg1.getAttribute('d')).not.toContain('M19.2 18.6c-.4-.9-1-1.8-1.7-2.5S16 14.8 15')
})
