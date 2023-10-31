import { test, expect } from '@playwright/test'

test('自定义内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#message')

  await page.getByRole('button', { name: '自定义提示框的内容' }).click()
  await expect(page.locator('.tiny-modal__content')).toHaveText('自定义提示框的内容')
})
