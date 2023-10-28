import { test, expect } from '@playwright/test'

test('左右面板插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('split#left-right-slot')
  const leftDiv = page.locator('.tiny-split-pane').first()
  await expect(leftDiv).toHaveText('自定义左面板')

  const rightDiv = page.locator('.tiny-split-horizontal > div:nth-child(3)')
  await expect(rightDiv).toHaveText('自定义右面板')
})
