import { test, expect } from '@playwright/test'

test('错误提示配置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('form#popper-options')

  const demo = page.locator('#popper-options')
  const btn = demo.getByRole('button', { name: '提交' })
  const tooltip = page.locator('.tiny-tooltip').getByText('必填')

  await btn.click()
  await expect(tooltip).toHaveCount(3)
  let beforeBox = await tooltip.first().boundingBox()
  await page.locator('#app').click()
  await page.mouse.wheel(0, 2000)
  let afterBox = await tooltip.first().boundingBox()
  expect(afterBox?.y).toBeLessThan(beforeBox?.y || 0)
})
