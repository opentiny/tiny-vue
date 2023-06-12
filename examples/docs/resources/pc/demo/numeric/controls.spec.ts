import { test, expect } from '@playwright/test'

test.describe('属性设置', () => {
  test('控制按钮的显示与隐藏', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('http://localhost:7130/pc/numeric/controls')

    const numeric = page.locator('#preview .tiny-numeric')
    await expect(numeric).toHaveClass(/is-without-controls/)
    await expect(numeric.locator('.tiny-numeric__decrease')).not.toBeVisible()
    await expect(numeric.locator('.tiny-numeric__increase')).not.toBeVisible()
  })

  test('关联文字', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('http://localhost:7130/pc/numeric/controls')

    const numericInput = page.locator('#preview .tiny-numeric .tiny-numeric__input-inner')
    await expect(numericInput).toHaveAttribute('aria-label', '关联文字')
  })

  test('name属性', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('http://localhost:7130/pc/numeric/controls')

    const numericInput = page.locator('#preview .tiny-numeric .tiny-numeric__input-inner')
    await expect(numericInput).toHaveAttribute('name', 'name')
  })
})
