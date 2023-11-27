import { test, expect } from '@playwright/test'

test('测试表单文本对齐', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#label-align')

  const demo = page.locator('#label-align')
  const form = demo.locator('.tiny-form')
  const formItem = form.locator('.tiny-form-item')
  const switchBtn = demo.locator('.tiny-switch')
  const firstItemLabel = formItem.first().locator('.tiny-form-item__label')

  await expect(firstItemLabel).toHaveCSS('padding-left', '12px')
  await switchBtn.click()
  await expect(firstItemLabel).toHaveCSS('padding-left', '0px')
})
