import { test, expect } from '@playwright/test'

test('自定义内容', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#message')

  const modal = page.locator('.tiny-modal.active')
  await page.getByRole('button', { name: '自定义提示框的内容' }).click()
  await expect(modal.locator('.tiny-modal__content').getByText('11111')).toHaveCSS('color', 'rgb(250, 152, 65)')
})
