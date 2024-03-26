import { test, expect } from '@playwright/test'

test('测试按钮回到顶部', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('float-button#backTop')
  const parent = await page.locator('.parent')
  await parent.evaluate((el) => {
    el.scrollTop = el.scrollHeight
  })
  await expect(page.locator('.tiny-float-button')).toBeVisible()
  await page.locator('.tiny-float-button').click()
  await page.waitForTimeout(1000)
  await expect(page.locator('.tiny-float-button')).not.toBeVisible()
})
