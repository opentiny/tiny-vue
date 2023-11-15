import { test, expect } from '@playwright/test'

test('测试图片按钮是否插入图片成功', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button#loading')
  await expect(page.locator('.tiny-button:nth-child(1)')).toHaveClass(/is-loading/)
  await expect(page.locator('.tiny-button:nth-child(2)')).toHaveClass(/is-loading/)
  await expect(page.locator('.tiny-button:nth-child(3)')).toHaveClass(/is-loading/)
  await expect(page.locator('.tiny-button:nth-child(4)')).toHaveClass(/is-loading/)
  await expect(page.locator('.tiny-button:nth-child(5)')).toHaveClass(/is-loading/)
  await expect(page.locator('.tiny-button:nth-child(6)')).toHaveClass(/is-loading/)

  await expect(page.locator('.tiny-button:nth-child(1) >> .tiny-icon-loading')).toBeVisible()
  await expect(page.locator('.tiny-button:nth-child(2) >> .tiny-icon-loading')).toBeVisible()
  await expect(page.locator('.tiny-button:nth-child(3) >> .tiny-icon-loading')).toBeVisible()
  await expect(page.locator('.tiny-button:nth-child(4) >> .tiny-icon-loading')).toBeVisible()
  await expect(page.locator('.tiny-button:nth-child(5) >> .tiny-icon-loading')).toBeVisible()
  await expect(page.locator('.tiny-button:nth-child(6) >> .tiny-icon-loading')).toBeVisible()
})
