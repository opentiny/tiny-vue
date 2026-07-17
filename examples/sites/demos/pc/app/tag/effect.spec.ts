import { expect, test } from '@playwright/test'

test('三大主题分别对应的五种类型', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  await page.goto('tag#effect')
  await page.waitForLoadState('networkidle')

  // 修正：用 #effect 限定当前 demo 范围
  const demo = page.locator('#effect')
  const light = demo.locator('.tiny-tag--light')
  const dark = demo.locator('.tiny-tag--dark')
  const plain = demo.locator('.tiny-tag--plain')

  // 验证每组都有5个标签
  await expect(light).toHaveCount(5)
  await expect(dark).toHaveCount(5)
  await expect(plain).toHaveCount(5)

  // 验证 light 组包含5种类型（默认 + success/info/danger/warning）
  await expect(light, 'At least one of the types is wrong').toHaveClass([
    /tiny-tag/,
    /tiny-tag--success/,
    /tiny-tag--info/,
    /tiny-tag--danger/,
    /tiny-tag--warning/
  ])

  // 验证 dark 组包含5种类型
  await expect(dark, 'At least one of the types is wrong').toHaveClass([
    /tiny-tag/,
    /tiny-tag--success/,
    /tiny-tag--info/,
    /tiny-tag--danger/,
    /tiny-tag--warning/
  ])

  // 验证 plain 组包含5种类型
  await expect(plain, 'At least one of the types is wrong').toHaveClass([
    /tiny-tag/,
    /tiny-tag--success/,
    /tiny-tag--info/,
    /tiny-tag--danger/,
    /tiny-tag--warning/
  ])
})
