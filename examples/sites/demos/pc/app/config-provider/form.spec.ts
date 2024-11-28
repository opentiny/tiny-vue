import { test, expect } from '@playwright/test'

test('测试隐藏星号', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('config-provider#form')

  await expect(page.locator('#form .tiny-form')).toBeVisible()
  const beforeElement = await page.evaluate(() => {
    const labelBefore = document.querySelector('.tiny-form .tiny-form-item__label')
    const { display, content } = window.getComputedStyle(labelBefore, '::before')
    return { display, content }
  })
  expect(beforeElement.content).toBe('none')
})
