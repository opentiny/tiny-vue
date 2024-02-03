import { test, expect } from '@playwright/test'

test('二级弹窗', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dialog-box#secondary-dialog')

  const childDialogBox = page.locator('body > .tiny-dialog-box__wrapper').filter({ hasText: '子弹窗内容' })
  await page.getByRole('button', { name: '二级弹窗' }).click()
  await page.getByRole('button', { name: '子弹窗' }).click()
  await expect(childDialogBox).toBeVisible()
})
