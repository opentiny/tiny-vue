import { test, expect } from '@playwright/test'

test('Space align 属性', async ({ page }) => {
  // 跳转到 align 示例
  await page.goto('space#space-align')

  // 定位 tiny-space 容器
  const wrap = page.locator('#space-align .tiny-space')

  // 初始 align 为 start
  let alignItems = await wrap.evaluate((el) => getComputedStyle(el).alignItems)
  expect(alignItems).toBe('start') // 注意这里用 start 而不是 flex-start

  // 点击按钮修改 align 为 center
  await page.getByRole('button', { name: 'center', exact: true }).click()

  // 检查 align 是否更新
  alignItems = await wrap.evaluate((el) => getComputedStyle(el).alignItems)
  expect(alignItems).toBe('center')

  // 检查子元素数量
  const items = wrap.locator('.tiny-button')
  await expect(items).toHaveCount(2)
})
