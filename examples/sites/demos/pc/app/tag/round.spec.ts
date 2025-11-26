import { test, expect } from '@playwright/test'

test('round 属性基础测试', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('tag#round-usage')

  // 测试圆角标签是否存在
  const roundTag = page.locator('.tiny-tag').filter({ hasText: '圆角标签' }).first()
  await expect(roundTag).toHaveCount(1)

  // 验证圆角标签具有圆角样式
  await expect(roundTag).toHaveCSS('border-radius', '9999px')

  // 测试成功标签的圆角
  const successTag = page.locator('.tiny-tag').filter({ hasText: '成功标签' }).first()
  await expect(successTag).toHaveCSS('border-radius', '9999px')

  // 测试警告标签的圆角
  const warningTag = page.locator('.tiny-tag').filter({ hasText: '警告标签' }).first()
  await expect(warningTag).toHaveCSS('border-radius', '9999px')

  // 测试危险标签的圆角
  const dangerTag = page.locator('.tiny-tag').filter({ hasText: '危险标签' }).first()
  await expect(dangerTag).toHaveCSS('border-radius', '9999px')
})

test('round 属性特殊标签测试', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('tag#round-usage')

  // 测试圆角图标标签
  const iconTag = page.locator('.tiny-tag--only-icon').first()
  await expect(iconTag).toHaveCSS('border-radius', '9999px')

  // 测试圆角配置式标签
  const valueTag = page.locator('.tiny-tag').filter({ hasText: '圆角配置标签' })
  await expect(valueTag).toHaveCount(1)
  await expect(valueTag).toHaveCSS('border-radius', '9999px')
})

test('round 属性样式验证', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('tag#round-usage')

  // 验证所有具有round属性的标签都具有正确的圆角样式
  const roundTags = page.locator('.tiny-tag')
  const count = await roundTags.count()

  for (let i = 0; i < count; i++) {
    const tag = roundTags.nth(i)
    await expect(tag).toHaveCSS('border-radius', '9999px')
  }

  // 验证标签数量是否正确
  expect(count).toBe(6) // 4个基础标签 + 1个图标标签 + 1个配置标签
})

test('round 属性视觉呈现测试', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('tag#round-usage')

  // 测试不同类型的标签视觉呈现
  const typeClasses = [
    'tiny-tag--primary',
    'tiny-tag--success',
    'tiny-tag--warning',
    'tiny-tag--danger',
    'tiny-tag--info'
  ]

  for (const typeClass of typeClasses) {
    const tag = page.locator(`.tiny-tag.${typeClass}`).first()
    await expect(tag).toBeVisible()

    // 验证圆角样式
    const borderRadius = await tag.evaluate((el) => {
      return window.getComputedStyle(el).borderRadius
    })
    expect(borderRadius).toBe('9999px')

    // 验证标签可见且具有内容
    const isVisible = await tag.isVisible()
    expect(isVisible).toBe(true)
  }
})
