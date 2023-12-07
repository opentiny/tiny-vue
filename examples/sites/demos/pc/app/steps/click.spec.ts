import { test, expect } from '@playwright/test'

test('点击事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('steps#click')

  // TODO
})
