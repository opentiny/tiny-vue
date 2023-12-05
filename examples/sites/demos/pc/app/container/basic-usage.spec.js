import { test, expect } from '@playwright/test'

test('基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  await page.goto('container#basic-usage')
  const header = page.locator('.pc-demo-container .tiny-container__header')
  await expect(header).toHaveText('Header')
})
