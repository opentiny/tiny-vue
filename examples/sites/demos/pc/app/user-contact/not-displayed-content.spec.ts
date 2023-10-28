import { test, expect } from '@playwright/test'

test('定制弹框不显示的内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('user-contact#not-displayed-content')
  const noneBox = page.locator('.no-arrow')
  await expect(noneBox).toHaveCSS('display', 'none')
})
