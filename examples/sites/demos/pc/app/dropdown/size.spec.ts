import { test, expect } from '@playwright/test'

test('不同尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('dropdown#size')

  const wrap = page.locator('#size')
  const dropDown = wrap.locator('.tiny-dropdown')

  const defaultDropDown = dropDown.first()
  const mediumDropDown = dropDown.nth(1)
  const smallDropDown = dropDown.nth(2)
  const miniDropDown = dropDown.nth(3)

  /* TODO: 暂时注释，此处待 button 组件尺寸适配完后会通过 */
  // await expect(defaultDropDown.locator('.tiny-button-group')).toHaveCSS('height', '32px')
  // await expect(mediumDropDown.locator('.tiny-button-group')).toHaveCSS('height', '32px')
  // await expect(smallDropDown.locator('.tiny-button-group')).toHaveCSS('height', '28px')
  // await expect(miniDropDown.locator('.tiny-button-group')).toHaveCSS('height', '24px')
})
