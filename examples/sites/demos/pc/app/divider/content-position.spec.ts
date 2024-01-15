import { test, expect } from '@playwright/test'

test('Divider文案位置', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('divider#content-position')
  await page.getByText('文案在左侧').click()
  await page.getByText('文案', { exact: true }).first().click()
  await page.getByText('文案在中间').click()
  await page.getByText('文案', { exact: true }).nth(1).click()
  await page.getByText('文案在右侧').click()
  await page.getByText('文案', { exact: true }).nth(2).click()
})
