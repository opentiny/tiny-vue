import { test, expect } from '@playwright/test'

test.describe('文本域可缩放', () => {
  test('可拖拽特性', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('input#textarea-scalable')

    const textarea = page.locator('.demo-input .tiny-mobile-textarea textarea')

    await expect(textarea.first()).toHaveCSS('resize', 'none')
    await expect(textarea.nth(1)).toHaveCSS('resize', 'vertical')
    await expect(textarea.nth(2)).toHaveCSS('resize', 'both')
    await expect(textarea.nth(3)).toHaveCSS('resize', 'horizontal')
  })

  test('可拖动改变大小', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('input#textarea-scalable')

    const textarea = page.locator('.demo-input .tiny-mobile-textarea textarea')

    await expect(textarea.nth(4)).toHaveClass(/is-autosize/)
    await expect(textarea.nth(5)).toHaveClass(/is-autosize/)
  })
})
