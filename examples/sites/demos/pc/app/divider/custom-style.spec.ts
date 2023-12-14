// divider#custom-style
import { test, expect } from '@playwright/test'

test('Divider样式', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('divider#custom-style')
  await page.getByText('自定义分隔线颜色').click()
  await page.locator('.tiny-divider').first().click()
  await page.getByText('自定义分隔线的样式').click()
  await page.locator('.pc-demo > div:nth-child(4)').click()
  await page.getByText('自定义文案的颜色').click()
  await page
    .locator('div')
    .filter({ hasText: /^文案$/ })
    .first()
    .click()
  await page.getByText('文案的背景颜色', { exact: true }).click()
  await page.getByText('文案', { exact: true }).nth(1).click()
})
