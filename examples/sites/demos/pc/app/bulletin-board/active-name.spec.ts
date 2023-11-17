import { test, expect } from '@playwright/test'

test('BulletinBoard 默认激活的选项卡', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('bulletin-board#active-name')

  const preview = page.locator('#preview')
  const tabTitle = preview.locator('.tiny-tabs__item')
  const tabContent = preview.locator('.tiny-tab-pane')

  // 激活第二项选项卡
  await expect(tabTitle.nth(1)).toHaveClass(/is-active/)
  await expect(tabTitle.nth(1)).toHaveCSS('color', 'rgb(94, 124, 224)')
  await expect(tabTitle.nth(1)).toHaveCSS('border-bottom', '3px solid rgb(94, 124, 224)')

  await expect(tabContent.nth(1)).toHaveClass(/active-item/)
  await expect(tabContent.nth(1)).toBeVisible()
})
