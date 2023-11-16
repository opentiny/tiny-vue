import { test, expect } from '@playwright/test'

test('多级菜单', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#multi-level')

  const preview = page.locator('#preview')
  const dropDown = preview.locator('.tiny-dropdown')
  const dropDownMenuItem = page.locator('body > .tiny-dropdown-menu > .tiny-dropdown-item')
  const notify = page.locator('.tiny-notify')

  await dropDown.hover()
  await dropDownMenuItem.getByText('老友粉1').hover()
  await dropDownMenuItem.getByText('老友粉2.1').hover()
  await dropDownMenuItem.getByText('狮子头3.1').click()
  await expect(
    notify.filter({
      hasText: '配置式可以通过 data.itemData 获取配置数据：{"label":"狮子头3.1"}'
    })
  ).toBeVisible()
})
