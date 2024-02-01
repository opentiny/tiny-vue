import { test, expect } from '@playwright/test'

test('显示个数', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('action-menu#max-show-num')

  const wrap = page.locator('#max-show-num')
  const actionMenu = wrap.locator('.tiny-action-menu')
  const visibleItem = actionMenu.locator('.tiny-action-menu__item')
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu.tiny-popper')
  const dropDownMenuItem = dropDownMenu.locator('.tiny-dropdown-item')
  const moreItem = visibleItem.last()

  await expect(visibleItem).toHaveCount(2)
  await page.waitForTimeout(300)
  await moreItem.hover()
  await expect(dropDownMenu).toBeVisible()
  await expect(dropDownMenuItem).toHaveCount(6)
})
