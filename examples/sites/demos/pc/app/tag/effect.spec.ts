import { expect, test } from '@playwright/test'

test('三大主题分别对应的五种类型', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('tag#effect')

  const light = page.locator('.tiny-tag--light')
  const dark = page.locator('.tiny-tag--dark')
  const plain = page.locator('.tiny-tag--plain')

  await expect(light).toHaveCount(5)
  await expect(dark).toHaveCount(5)
  await expect(plain).toHaveCount(5)
  await expect(light, 'At least one of the types is wrong').toHaveClass([
    /tiny-tag/,
    /tiny-tag--success/,
    /tiny-tag--info/,
    /tiny-tag--danger/,
    /tiny-tag--warning/
  ])
  await expect(dark, 'At least one of the types is wrong').toHaveClass([
    /tiny-tag/,
    /tiny-tag--success/,
    /tiny-tag--info/,
    /tiny-tag--danger/,
    /tiny-tag--warning/
  ])
  await expect(plain, 'At least one of the types is wrong').toHaveClass([
    /tiny-tag/,
    /tiny-tag--success/,
    /tiny-tag--info/,
    /tiny-tag--danger/,
    /tiny-tag--warning/
  ])
})
