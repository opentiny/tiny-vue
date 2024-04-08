import { test, expect } from '@playwright/test'

test('输入框基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('input#base')

  const input = page.locator('.demo-input .tiny-mobile-input')
  const textarea = page.locator('.demo-input .tiny-mobile-textarea')

  await expect(input).toBeVisible()
  await expect(textarea).toBeVisible()

  await input.click()
  await expect(input).toHaveClass(/is-focus/)
  await textarea.click()
  await expect(textarea).toHaveClass(/is-focus/)

  await expect(input).toHaveAttribute('placeholder', '请输入内容')
  await expect(textarea).toHaveAttribute('placeholder', '用作文本框')

  await input.locator('input').fill('123')
  await expect(input.locator('input')).toHaveValue('123')
  await textarea.locator('textarea').fill('abc')
  await expect(textarea.locator('textarea')).toHaveValue('abc')
})
