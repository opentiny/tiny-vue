import { test, expect } from '@playwright/test'

test('折叠展示 Tag', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('cascader#collapse-tags')
  const tag = page.locator('span').filter({ hasText: '+ 2' }).first()
  await expect(tag).toBeVisible()
})
