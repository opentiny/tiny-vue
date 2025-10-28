import { test, expect } from '@playwright/test'

test('dialogBox 基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#before-close')
})
