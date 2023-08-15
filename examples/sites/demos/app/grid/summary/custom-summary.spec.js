import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/grid-summary/summary-custom-summary')
  await expect(page.getByText('5310')).toBeVisible()
})
