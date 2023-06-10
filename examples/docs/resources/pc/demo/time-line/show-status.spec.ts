import { test, expect } from '@playwright/test'

test('显示组件内部状态', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/time-line/show-status')

  const nodes = page.locator('#preview .tiny-steps .normal')
  await expect(nodes.first().locator('.status')).toHaveText('已完成')
  await expect(nodes.nth(1).locator('.status')).toHaveText('进行中')
  await expect(nodes.nth(2).locator('.status')).toHaveText('等待中')
})