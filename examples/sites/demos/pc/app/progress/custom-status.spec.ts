import { test, expect } from '@playwright/test'

test('自定义状态场景', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('progress#custom-status')

  for (let i = 0; i < 10; i++) {
    await page.getByText(i * 10 + '%').isVisible()
    await page.getByText(i * 10 + 5 + '%').isVisible()
  }
})
