import { test, expect } from '@playwright/test'

test('事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('milestone#milestone-events')

  const node = page.locator('.tiny-milestone__node').first()
  const flag = page.locator('.tiny-milestone__flag-content').first()
  const notify = page.locator('.tiny-notify')

  await node.click()
  await expect(notify).toHaveText('提示节点的点击事件')
  await flag.click()
  await expect(notify.nth(1)).toHaveText('提示活动旗子的点击事件')
})
