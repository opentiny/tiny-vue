import { expect, test } from '@playwright/test'

test('三大主题分别对应的七种类型', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  await page.goto('tag#effect')
  await page.waitForLoadState('networkidle')

  // 用 #effect 限定当前 demo 范围
  const demo = page.locator('#effect')
  const light = demo.locator('.tiny-tag--light')
  const dark = demo.locator('.tiny-tag--dark')
  const plain = demo.locator('.tiny-tag--plain')

  // 修正：每组都有7个标签（默认 + success/info/danger/warning/alerting/error）
  await expect(light).toHaveCount(7)
  await expect(dark).toHaveCount(7)
  await expect(plain).toHaveCount(7)

  // 修正：验证 light 组包含7种类型
  await expect(light, 'At least one of the types is wrong').toHaveClass([
    /tiny-tag/,
    /tiny-tag--success/,
    /tiny-tag--info/,
    /tiny-tag--danger/,
    /tiny-tag--warning/,
    /tiny-tag--alerting/,
    /tiny-tag--error/
  ])

  // 修正：验证 dark 组包含7种类型
  await expect(dark, 'At least one of the types is wrong').toHaveClass([
    /tiny-tag/,
    /tiny-tag--success/,
    /tiny-tag--info/,
    /tiny-tag--danger/,
    /tiny-tag--warning/,
    /tiny-tag--alerting/,
    /tiny-tag--error/
  ])

  // 修正：验证 plain 组包含7种类型
  await expect(plain, 'At least one of the types is wrong').toHaveClass([
    /tiny-tag/,
    /tiny-tag--success/,
    /tiny-tag--info/,
    /tiny-tag--danger/,
    /tiny-tag--warning/,
    /tiny-tag--alerting/,
    /tiny-tag--error/
  ])
})
