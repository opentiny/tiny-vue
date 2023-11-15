import { test, expect } from '@playwright/test'

test('自定义节点顶部与底部内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-line#custom-normal-step')

  const node = page.locator('#preview .tiny-steps .normal').first()
  // 自定义顶部内容
  await expect(node.locator('.custom-top')).toBeVisible()
  await expect(node.locator('.custom-top')).toContainText('已下单')
  // 自定义底部内容
  await expect(node.locator('.custom-bottom')).toBeVisible()
  await expect(node.locator('.custom-bottom')).toContainText('01:30')
})
