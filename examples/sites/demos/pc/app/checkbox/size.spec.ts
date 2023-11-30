import { test, expect } from '@playwright/test'

test('复选框组', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('checkbox#size')

  const demo = page.locator('#size')
  const getCheckboxBtn = (index: number) =>
    demo.locator('.tiny-checkbox-group').nth(index).locator('.tiny-checkbox-button').first()

  await expect(getCheckboxBtn(0)).toHaveCSS('width', '74px')
  await expect(getCheckboxBtn(0)).toHaveCSS('height', '44px')
  await expect(getCheckboxBtn(1)).toHaveCSS('width', '70px')
  await expect(getCheckboxBtn(1)).toHaveCSS('height', '38px')
  await expect(getCheckboxBtn(2)).toHaveCSS('width', '60px')
  await expect(getCheckboxBtn(2)).toHaveCSS('height', '30px')
  await expect(getCheckboxBtn(3)).toHaveCSS('width', '54px')
  await expect(getCheckboxBtn(3)).toHaveCSS('height', '24px')
})
