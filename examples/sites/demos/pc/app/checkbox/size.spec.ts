import { test, expect } from '@playwright/test'

test('复选框组', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('checkbox#size')

  const demo = page.locator('#size')
  const getCheckboxBtn = (index: number) =>
    demo.locator('.tiny-checkbox-group').nth(index).locator('.tiny-checkbox-button').first()

  await expect(getCheckboxBtn(0)).toHaveCSS('width', '102px')
  await expect(getCheckboxBtn(0)).toHaveCSS('height', '40px')
  await expect(getCheckboxBtn(1)).toHaveCSS('width', '86px')
  await expect(getCheckboxBtn(1)).toHaveCSS('height', '32px')
  await expect(getCheckboxBtn(2)).toHaveCSS('width', '82px')
  await expect(getCheckboxBtn(2)).toHaveCSS('height', '28px')
  await expect(getCheckboxBtn(3)).toHaveCSS('width', '66px')
  await expect(getCheckboxBtn(3)).toHaveCSS('height', '24px')
})
