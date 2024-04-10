import { test, expect } from '@playwright/test'

test('实例方法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  page.goto('input#methods')

  const inputs = page.locator('.demo-input-methods .tiny-mobile-input')

  await page.getByRole('button', { name: 'focus' }).click()
  await expect(inputs.first()).toHaveClass(/is-focus/)
  await page.getByRole('button', { name: 'blur' }).click()
  await expect(inputs.first()).not.toHaveClass(/is-focus/)

  await inputs.nth(1).locator('input').fill('123')
  await page.getByRole('button', { name: 'select' }).click()

  // 判断input内容是否选中
  const selectedText = await page.evaluate(() => {
    const selection = window.getSelection()
    return selection.toString()
  })
  await expect(selectedText).toBe('123')
})
