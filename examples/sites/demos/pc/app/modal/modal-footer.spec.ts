import { test, expect } from '@playwright/test'

test('自定义弹窗底部', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#modal-footer')
  const footer = page.locator('.tiny-modal__footer > .tiny-button--info')
  const footerLink = page.locator('.tiny-link--primary')

  // 自定义弹窗底部
  await page.getByRole('button', { name: '函数式自定义弹窗底部' }).click()
  await expect(footer.first()).toHaveText(/Okk/)
  await page.getByRole('button', { name: 'Okk~~' }).click()

  await page.getByRole('button', { name: '标签式自定义弹窗底部' }).click()
  await expect(footer.first()).toHaveText(/Okk/)
  await page.getByRole('button', { name: 'Okk~~' }).click()

  await page.getByRole('button', { name: '插槽自定义弹窗底部' }).click()
  await expect(footerLink.first()).toHaveText(/返回/)
})
