import { test, expect } from '@playwright/test'

test('自定义竖向时间线', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  await page.goto('time-line#custom-vertical-step')

  const node = page.locator('#preview .tiny-steps .timeline').first()
  // 自定义左侧内容
  await expect(node.locator('ul > span').first()).toHaveCSS('text-align', 'right')
  await expect(node.locator('ul > span').first()).toHaveText('已下单')
  // 自定义右侧内容
  await expect(node.locator('ul > span').nth(1)).toHaveCSS('margin-left', '15px')
  await expect(node.locator('ul > span').nth(1)).toContainText('2019')
})
