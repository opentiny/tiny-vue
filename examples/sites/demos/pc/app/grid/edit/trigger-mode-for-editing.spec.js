import { test, expect } from '@playwright/test'

test('触发编辑方式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-edit#edit-trigger-mode-for-editing')
  await page.getByText('GFD 科技 YX 公司').first().click()
  await expect(page.locator('.tiny-grid-default-input')).toBeVisible()

  await page.getByText('WWWW 科技 YX 公司').nth(1).dblclick()

  await expect(page.locator('.tiny-grid-default-input')).toBeVisible()
})
