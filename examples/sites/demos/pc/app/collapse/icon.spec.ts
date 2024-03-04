import { test, expect } from '@playwright/test'

test('Collapse 自定义展开折叠图标', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('collapse#icon')

  const header = page.locator('.tiny-collapse-item__header')
  const content = page.locator('.tiny-collapse-item__wrap')
  const customArrow = page.locator('.tiny-collapse-item__arrow').first()

  // 自定义图标，内容展开时，标题箭头向上
  await expect(customArrow.locator('svg')).toHaveClass(/icon-delta-right/)
  await expect(content.first()).not.toHaveCSS('display', 'none')
  await expect(customArrow).toHaveCSS('transform', 'matrix(0, -1, 1, 0, 0, 0)')
  await header.first().click()
  await expect(header.first()).not.toHaveClass(/is-active/)
  await expect(content.first()).toHaveCSS('display', 'none')
  await expect(customArrow).toHaveCSS('transform', 'matrix(0, 1, -1, 0, 0, 0)')
})
