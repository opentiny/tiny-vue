import { expect, test } from '@playwright/test'

test('图标是否正常显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('tag#slot-default')
  
  const left = page.getByLabel('示例', { exact: true }).getByRole('img').first()
  const right = page.getByLabel('示例', { exact: true }).getByRole('img').nth(2)

  await expect(left).toBeVisible()
  await expect(right).toBeVisible()
})
