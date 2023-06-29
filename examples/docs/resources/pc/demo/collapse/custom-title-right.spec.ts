import { test, expect } from '@playwright/test'

test('Collapse 自定义面板标题右侧内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/collapse/custom-title-right')

  const titleRight = page.locator('.tiny-collapse-item__title__right')
  await expect(titleRight).not.toHaveCount(0)
  await expect(titleRight.nth(1)).toBeVisible()
})
