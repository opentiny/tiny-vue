import { test, expect } from '@playwright/test'

test('必填项红色星号', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#smb-required')

  const demo = page.locator('#smb-required')
  const form = demo.locator('.tiny-form')
  const firstLabel = form.locator('.tiny-form-item__label').first()
  const switchBtn = demo.locator('.tiny-switch')

  await switchBtn.click()
  await expect(firstLabel).toBeVisible()
  let beforeElement = await page.evaluate(() => {
    const labelBefore = document.querySelector('.tiny-form .tiny-form-item__label')
    const { display, content } = window.getComputedStyle(labelBefore, '::before')
    return { display, content }
  })

  expect(beforeElement.content).toBe('"*"')

  await switchBtn.click()
  beforeElement = await page.evaluate(() => {
    const labelBefore = document.querySelector('.tiny-form .tiny-form-item__label')
    const { display, content } = window.getComputedStyle(labelBefore, '::before')
    return { display, content }
  })
  expect(beforeElement.display).toBe('inline')
  expect(beforeElement.content).toBe('none')
})
