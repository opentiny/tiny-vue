import { test, expect } from '@playwright/test'

test('加载失败', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('image#custom-load-failed-text')
  const failed = page.locator('.tiny-image__error')
  await expect(failed).toHaveText('加载失败')
  const myFailed = page.locator('.image-slot')
  await expect(myFailed).toHaveText('自定义加载失败内容')
})
