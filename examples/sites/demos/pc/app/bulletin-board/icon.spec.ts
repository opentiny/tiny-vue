import { test, expect } from '@playwright/test'

test('BulletinBoard 自定义新公告前缀', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('bulletin-board#icon')

  const preview = page.locator('#preview')
  const tabContent = preview.locator('.tiny-tab-pane')

  // 自定义图标替代默认文字'NEW'
  for (let i = 0; i < 3; i++) {
    await expect(tabContent.nth(i).locator('.tiny-bulletin-board__new > svg')).toHaveCount(1)
    await expect(tabContent.nth(i).locator('.tiny-bulletin-board__new')).not.toHaveText('NEW')
  }
})
