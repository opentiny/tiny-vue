import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button#base')

  const buttons = page.locator('.button-wrap .tiny-mobile-button')

  // 主要按钮
  await expect(buttons.first()).toHaveClass(/tiny-mobile-button--primary/)
  await expect(buttons.first()).toHaveCSS('background-color', 'rgb(25, 25, 25)')
  await expect(buttons.first()).toHaveCSS('color', 'rgb(255, 255, 255)')

  // 次要按钮
  await expect(buttons.nth(1)).toHaveClass(/tiny-mobile-button--secondary/)
  await expect(buttons.nth(1)).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  await expect(buttons.nth(1)).toHaveCSS('color', 'rgb(25, 25, 25)')

  // 危险按钮
  await expect(buttons.nth(2)).toHaveClass(/tiny-mobile-button--danger/)
  await expect(buttons.nth(2)).toHaveCSS('border-color', 'rgb(242, 48, 48)')
  await expect(buttons.nth(2)).toHaveCSS('color', 'rgb(242, 48, 48)')

  // 文字按钮
  await expect(buttons.nth(3)).toHaveClass(/tiny-mobile-button--text/)
  await expect(buttons.nth(3)).toHaveCSS('border-style', 'none')

  // 纯图标按钮
  await expect(buttons.nth(4)).toHaveClass(/tiny-mobile-button--icon/)
  await expect(buttons.nth(4).locator('span')).toBeEmpty()

  // 图标按钮
  await expect(buttons.nth(5)).toHaveClass(/tiny-mobile-button--icon/)
  await expect(buttons.nth(5)).toContainText('图标按钮')
})
