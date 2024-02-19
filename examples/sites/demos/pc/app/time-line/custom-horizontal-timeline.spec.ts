import { test, expect } from '@playwright/test'

test('自定义横向时间线', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-line#custom-horizontal-timeline')

  const node = page.locator('#custom-horizontal-timeline .tiny-steps .normal').first()
  // 自定义顶部内容
  await expect(node.locator('.custom-top')).toBeVisible()
  await expect(node.locator('.custom-top')).toContainText('已下单')
  // 自定义底部内容
  await expect(node.locator('.custom-bottom')).toBeVisible()
  await expect(node.locator('.custom-bottom')).toContainText('01:30')
})
