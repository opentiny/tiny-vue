import { test, expect } from '@playwright/test'

test('测试图片按钮是否插入图片成功', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button#loading')
  const demo = page.locator('#loading')

  await expect(demo.locator('.tiny-button:nth-child(1)')).toHaveClass(/is-loading/)

  await expect(demo.locator('.tiny-button:nth-child(1) >> .tiny-icon-loading')).toBeVisible()
})
