import { test, expect } from '@playwright/test'

test('Collapse 自定义面板标题', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('collapse#title')

  const header = page.locator('.tiny-collapse-item__header')
  const titleRight = page.locator('.tiny-collapse-item__title__right')
 
  // 标题
  await expect(header.first().locator('span')).toBeVisible()
  await expect(header.nth(1).locator('div')).not.toHaveCount(0)
  
  // 标题右侧内容
  await expect(titleRight).not.toHaveCount(0)
  await expect(titleRight.nth(1)).toBeVisible()
})
