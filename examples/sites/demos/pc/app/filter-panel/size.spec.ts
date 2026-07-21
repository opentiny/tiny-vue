import { test, expect } from '@playwright/test'

test('测试过滤器面板尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('filter-panel#size')

  const demo = page.locator('#size')
  const filterBox = demo.locator('.tiny-filter-box')

  // 测试默认尺寸（不包含 medium class）
  await expect(filterBox).toHaveClass(/tiny-filter-box/)
  await expect(filterBox).not.toHaveClass(/tiny-filter-box--medium/)

  // 测试 medium 尺寸
  await demo.getByText('中等 (medium)').click()
  await page.waitForTimeout(200)
  await expect(filterBox).toHaveClass(/tiny-filter-box--medium/)

  // 切换回默认尺寸
  await demo.getByText('默认 (default)').click()
  await page.waitForTimeout(200)
  await expect(filterBox).not.toHaveClass(/tiny-filter-box--medium/)
})
