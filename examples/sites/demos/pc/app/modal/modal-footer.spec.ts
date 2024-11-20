import { test, expect } from '@playwright/test'

test('自定义弹窗底部', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#modal-footer')
  const footer = page.locator('.tiny-modal__footer')

  // 自定义弹窗底部
  await page.getByRole('button', { name: '自定义弹窗底部' }).first().click()
  await expect(footer.first()).toHaveText(/Okk/)
  await page.getByRole('button', { name: 'Okk~~' }).click()

  await page.getByRole('button', { name: '自定义弹窗底部' }).nth(2).click()
  await expect(footer.nth(1)).toHaveText(/返回/)
})
