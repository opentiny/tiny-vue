import { test, expect } from '@playwright/test'

test('[Input]input-icon: blur, focus', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('input#methods')

  const input = await page.locator('.demo-input input').nth(0)
  const focusBtn = await page.locator('.demo-input button', { hasText: 'focus' })
  const blurBtn = await page.locator('.demo-input button', { hasText: 'blur' })

  await focusBtn.click('button')
  await expect(input).toBeFocused()

  await blurBtn.click('button')
  await expect(input).not.toBeFocused()
  
})

test('[Input]input-icon: select', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('input#methods')

  const input = await page.locator('.demo-input input').nth(1)
  const selectBtn = await page.locator('.demo-input button', { hasText: 'select' })

  
  await input.fill('444444')
  await selectBtn.click('button')
  
  // 获取选中的文字
  const selectedText = await page.evaluate(() => {
    const selection = window.getSelection()
    return selection.toString()
  })

  expect(selectedText).toBe('444444')
})
