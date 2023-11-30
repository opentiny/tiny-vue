import { expect, test } from '@playwright/test'

test('图标是否正常显示', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('tag#slot-default')

  const left = page.locator('.tiny-tag > svg:nth-child(1)').first()
  const right = page.locator('.tiny-tag > svg:nth-child(2)').first()

  await expect(left).toBeVisible()
  await expect(right).toBeVisible()
})
