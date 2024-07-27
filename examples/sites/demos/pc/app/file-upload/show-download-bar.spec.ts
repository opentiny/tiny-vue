import { test, expect } from '@playwright/test'

test('自定义下载进度条展示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('file-upload#show-download-bar')

  const lists = page.locator('.tiny-upload-list-item')
  const first = lists.first()
  const firstDownload = first.getByText('下载', { exact: true }).first()
  const second = lists.nth(1)
  const secondDownload = second.getByText('下载', { exact: true }).first()
  const progresss1 = first.getByRole('progressbar')
  const progresss2 = second.getByRole('progressbar')

  await expect(lists).toHaveCount(2)
  await first.hover()
  await firstDownload.click()
  await page.waitForTimeout(500)
  await expect(progresss1).toHaveClass(/is-default/)
  await expect(progresss1).toHaveAttribute('aria-valuenow', '100')
  await page.locator('div').filter({ hasText: '下载成功' }).nth(1).isVisible()
  await second.hover()
  await secondDownload.click()
  await page.waitForTimeout(500)
  await expect(progresss2).toHaveClass(/is-exception/)
  await expect(progresss2).toHaveAttribute('aria-valuenow', '50')
  await page.locator('div').filter({ hasText: '下载失败' }).nth(1).isVisible()
})
