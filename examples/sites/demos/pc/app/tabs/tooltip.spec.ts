import { test, expect } from '@playwright/test'

test('提示是否正常', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tabs#tooltip')

  const container = page.locator('#tooltip')
  const tabs = container.locator('.tiny-tabs')
  const tabsList = container.locator('.tiny-tabs > div')
  const top = tabsList.first()

  await top.hover()
  await expect(tabs).toHaveClass(/tiny-tabs--left/)
})
