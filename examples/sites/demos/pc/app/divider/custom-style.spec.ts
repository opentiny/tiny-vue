// divider#custom-style
import { test, expect } from '@playwright/test'

test('自定义样式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('divider#custom-style')
  const dividerText = page.locator('.tiny-divider__text')
  await expect(dividerText.first()).toHaveText('字体颜色')
  await expect(dividerText.nth(1)).toHaveText('文案背景')
  await expect(dividerText.nth(2)).toHaveText('字体大小')
  await expect(dividerText.nth(3)).toHaveText('高度及边距')
})
