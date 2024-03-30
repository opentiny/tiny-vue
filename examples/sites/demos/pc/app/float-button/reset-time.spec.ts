import { test, expect } from '@playwright/test'

test('测试按钮禁用事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('float-button#reset-time')

  const demo = page.locator('#reset-time')

  const defalutDisabled = demo.getByRole('button', { name: '点' })

  // 默认禁用1S
  await defalutDisabled.click()
  await expect(page.locator('.tiny-float-button')).toHaveClass(
    /tiny-float-button tiny-float-button--success is-disabled is-circle/
  )
  await page.waitForTimeout(1000)
  await expect(page.locator('.tiny-float-button')).toHaveClass(/tiny-float-button tiny-float-button--success is-circle/)
})
