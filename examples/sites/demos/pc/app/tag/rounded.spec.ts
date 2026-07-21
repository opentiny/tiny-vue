import { expect, test } from '@playwright/test'

test('圆角标签', async ({ page }) => {
  // 监听页面错误，期望无 JavaScript 异常
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  // 导航到圆角标签示例页面
  await page.goto('tag#rounded')

  // 等待页面加载完成
  await page.waitForLoadState('networkidle')

  // 只定位 .tiny-tag-demo 容器内的标签
  const demoContainer = page.locator('.tiny-tag-demo')
  const tags = demoContainer.locator('.tiny-tag')

  // 验证演示区域内存在3个标签
  await expect(tags).toHaveCount(3)

  // ========== 第一个标签：success + light + round ==========
  const tag1 = tags.nth(0)
  await expect(tag1).toHaveText('圆角按钮1')
  await expect(tag1).toHaveClass(/tiny-tag--success/)
  await expect(tag1).toHaveClass(/tiny-tag--light/)
  await expect(tag1).toHaveClass(/is-round/) // 修正：round 对应的类名是 is-round
  await expect(tag1).toBeVisible()

  // ========== 第二个标签：danger + dark + round ==========
  const tag2 = tags.nth(1)
  await expect(tag2).toHaveText('圆角按钮2')
  await expect(tag2).toHaveClass(/tiny-tag--danger/)
  await expect(tag2).toHaveClass(/tiny-tag--dark/)
  await expect(tag2).toHaveClass(/is-round/)
  await expect(tag2).toBeVisible()

  // ========== 第三个标签：warning + plain + round ==========
  const tag3 = tags.nth(2)
  await expect(tag3).toHaveText('圆角按钮3')
  await expect(tag3).toHaveClass(/tiny-tag--warning/)
  await expect(tag3).toHaveClass(/tiny-tag--plain/)
  await expect(tag3).toHaveClass(/is-round/)
  await expect(tag3).toBeVisible()

  // ========== 验证圆角样式效果 ==========
  const tag1BorderRadius = await tag1.evaluate((el) => window.getComputedStyle(el).borderRadius)
  const tag2BorderRadius = await tag2.evaluate((el) => window.getComputedStyle(el).borderRadius)
  const tag3BorderRadius = await tag3.evaluate((el) => window.getComputedStyle(el).borderRadius)

  expect(tag1BorderRadius).toBe(tag2BorderRadius)
  expect(tag2BorderRadius).toBe(tag3BorderRadius)
  expect(tag1BorderRadius).not.toBe('0px')
  expect(tag1BorderRadius).not.toBe('0')

  // ========== 验证布局样式 ==========
  const tag1MarginRight = await tag1.evaluate((el) => window.getComputedStyle(el).marginRight)
  const tag1MarginBottom = await tag1.evaluate((el) => window.getComputedStyle(el).marginBottom)
  expect(tag1MarginRight).toBe('10px')
  expect(tag1MarginBottom).toBe('10px')

  // ========== 验证不同 effect 的样式差异 ==========
  const tag1BgColor = await tag1.evaluate((el) => window.getComputedStyle(el).backgroundColor)
  expect(tag1BgColor).not.toBe('rgba(0, 0, 0, 0)')
  expect(tag1BgColor).not.toBe('transparent')

  const tag2Color = await tag2.evaluate((el) => window.getComputedStyle(el).color)
  expect(tag2Color).toMatch(/rgb\(255,\s*255,\s*255\)|white|#fff/i)

  const tag3BgColor = await tag3.evaluate((el) => window.getComputedStyle(el).backgroundColor)
  expect(tag3BgColor).toMatch(/rgba\(0, 0, 0, 0\)|transparent|rgb\(255, 255, 255\)/)
})
