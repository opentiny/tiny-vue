import { test, expect } from '@playwright/test'

test('测试Alpha', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-select-panel#alpha')
  await page.getByRole('button', { name: 'Show Color select panel' }).click()
  await page.locator('.black').click()
  await page.getByRole('button', { name: '选择' }).click()
})
