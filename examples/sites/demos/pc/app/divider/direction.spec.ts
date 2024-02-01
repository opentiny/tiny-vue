// divider#custom-style
import { test, expect } from '@playwright/test'

test('Divider分隔线', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('divider#direction')
  await page.getByText('分隔线', { exact: true }).first().click()
  await page.locator('.tiny-divider').first().click()
  await page.getByText('分隔线', { exact: true }).nth(1).click()
  await page.locator('.pc-demo > div:nth-child(4)').click()
  await page.getByText('分隔线', { exact: true }).nth(2).click()
})
