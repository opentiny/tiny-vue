import { test, expect } from '@playwright/test'

test('手动控制显隐', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#visible')

  const wrap = page.locator('#visible')
  const dropDownMenu = page.locator('body > .tiny-dropdown-menu').locator('visible=true')

  await wrap.getByText('点击隐藏').click()
  await expect(dropDownMenu).toHaveCount(0)

  await wrap.getByText('点击显示').click()
  await expect(dropDownMenu).toHaveCount(1)

  await page.locator('#all-demos-container').click()
  await expect(dropDownMenu).toHaveCount(1)

  await dropDownMenu.locator('div').filter({ hasText: '黄金糕' }).nth(1).click()
  await expect(dropDownMenu).toHaveCount(1)

  await wrap.getByText('点击隐藏').click()
  await expect(dropDownMenu).toHaveCount(0)
})
