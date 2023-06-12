import { test, expect } from '@playwright/test'

test.describe('Rate 自定义禁用时未选中图标类名', () => {
  test('禁用时未选中图标类名', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('http://localhost:7130/pc/rate/disabled-not-selected-class')

    // 禁用
    const icon = page.locator('.tiny-rate__star > .tiny-svg')
    await icon.nth(0).hover()
    await expect(icon.nth(0)).toHaveClass(/disabled/)
    await icon.nth(1).hover()
    await expect(icon.nth(1)).toHaveClass(/disabled/)
    await icon.nth(2).hover()
    await expect(icon.nth(3)).toHaveClass(/disabled/)
    await icon.nth(3).hover()
    await expect(icon.nth(3)).toHaveClass(/disabled/)
    await icon.nth(4).hover()
    await expect(icon.nth(4)).toHaveClass(/disabled/)

    // 未选中图标
    const svg = page.locator('.tiny-rate > span:nth-child(5) > .tiny-svg > .st0')
    await expect(svg).toHaveAttribute(
      'd',
      'M12 1c-.4 0-.8.1-1.1.3-.4.2-.6.5-.8.9L7.8 7l-5 .8c-.8.1-1.4.7-1.7 1.4s-.1 1.6.5 2.2l3.7 3.8-.9 5.4c-.1.6.1 1.2.5 1.7s1 .8 1.6.8c.4 0 .7-.1 1-.3l4.4-2.5 4.4 2.5c.3.2.7.3 1 .3.6 0 1.2-.3 1.6-.8.4-.5.6-1.1.5-1.7l-.9-5.4 3.7-3.8c.6-.6.7-1.4.5-2.2-.3-.8-.9-1.3-1.7-1.4L16 7l-2.2-4.8c-.2-.4-.5-.7-.8-.9-.2-.2-.6-.3-1-.3z'
    )
  })
})
