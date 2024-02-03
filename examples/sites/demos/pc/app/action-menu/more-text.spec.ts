import { test, expect } from '@playwright/test'

test('下拉按钮文本', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('action-menu#more-text')

  const wrap = page.locator('#more-text')
  const actionMenu = wrap.locator('.tiny-action-menu')
  const visibleItem = actionMenu.locator('.tiny-action-menu__item')

  await expect(visibleItem.last().locator('.tiny-dropdown__title')).toHaveText('自定义下拉文本')
})
