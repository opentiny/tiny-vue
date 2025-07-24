import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tabs#basic-usage')

  const container = page.locator('#basic-usage')
  const tabs = container.locator('.tiny-tabs')
  const tabItems = tabs.getByRole('tab')
  const item1 = tabItems.nth(0)
  const item2 = tabItems.nth(1)
  const content = tabs.getByRole('tabpanel')
  const activeBar = tabs.locator('.tiny-tabs__active-bar')

  await expect(tabItems).toHaveCount(4)
  await expect(tabItems).toHaveClass([
    /tiny-tabs__item is-top is-active/,
    /tiny-tabs__item is-top is-disabled/,
    /tiny-tabs__item is-top/,
    /tiny-tabs__item is-top/
  ])
  await expect(content).toHaveText(/表单组件/)
  await expect(activeBar).toHaveCSS('width', '64px')
  await expect(activeBar).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')
  await item1.click()
  await expect(item1).toHaveClass(/is-active/)
  await expect(activeBar).toHaveCSS('width', '64px')
  await expect(activeBar).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 0)')
  await expect(item1).toHaveCSS('color', 'rgb(25, 25, 25)')
  await expect(content).toHaveText(/表单组件/)

  // 禁用
  await item2.click()
  await expect(item1).toHaveClass(/is-active/)
  await expect(content).toHaveText(/表单组件/)
})
