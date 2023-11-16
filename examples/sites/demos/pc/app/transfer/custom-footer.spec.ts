import { test, expect } from '@playwright/test'

test('自定义列表底部', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('transfer#custom-footer')
  await page.getByRole('button', { name: '操作' }).first().click()
  await page.getByRole('button', { name: '操作' }).nth(1).click()
})
