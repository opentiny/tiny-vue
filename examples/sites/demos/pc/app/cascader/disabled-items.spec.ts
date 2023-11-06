import { test, expect } from '@playwright/test'

test('禁用选项', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('cascader#disabled-items')
  await page.getByRole('textbox', { name: '请选择' }).click()
  const cascader = page.locator(
    '.tiny-cascader-menu > .tiny-cascader-menu__wrap > .tiny-cascader-menu__list > .is-disabled'
  )
  await expect(cascader).toBeVisible()
})
