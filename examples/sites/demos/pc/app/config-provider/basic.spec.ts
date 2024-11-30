import { test, expect } from '@playwright/test'

test('测试自定义事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('config-provider#base')

  // 验证自定义方法
  const demo = page.locator('#base')
  await demo.locator('.tiny-config-provider .tiny-alert > .tiny-alert__close').click()
  await page.waitForTimeout(500)
  await expect(page.locator('.tiny-modal > .tiny-modal__box').nth(1)).toHaveText('触发自定方法')

  // 验证必填星号
  await expect(demo.locator('.tiny-form')).toBeVisible()
  const beforeElement = await page.evaluate(() => {
    const labelBefore = document.querySelector('.tiny-form .tiny-form-item__label')
    const { display, content } = window.getComputedStyle(labelBefore, '::before')
    return { display, content }
  })
  expect(beforeElement.content).toBe('none')

  // 验证按钮点击禁用时间
  await demo.locator('.tiny-button').click()
  await expect(demo.locator('.tiny-button')).not.toBeDisabled({ timeout: 300 })
})
