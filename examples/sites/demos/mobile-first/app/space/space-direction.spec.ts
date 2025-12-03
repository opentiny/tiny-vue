import { test, expect } from '@playwright/test'

test('Space direction 属性', async ({ page }) => {
  await page.goto('space#space-direction')

  const wrap = page.locator('#space-direction .tiny-space')

  // 获取实际渲染的 flex-direction
  const getFlexDirection = async () => wrap.evaluate((el) => getComputedStyle(el).flexDirection)

  // 验证 flex-direction 是否为 column
  expect(await getFlexDirection()).toBe('column')

  // 检查子元素数量
  const items = wrap.locator('.tiny-button')
  await expect(items).toHaveCount(3)
})
