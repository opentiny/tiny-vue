import { test, expect } from '@playwright/test'

test('禁用选项', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('cascader#disabled-items')
  await page.locator('.tiny-cascader').getByPlaceholder('请选择').nth(1).click()
  const cascader1 = page.getByRole('menuitem', { name: '指南' })
  await expect(cascader1).toHaveClass(/is-disabled/)

  await page.getByPlaceholder('请选择').nth(1).click()
  const cascader2 = page.locator('.tiny-cascader.is-disabled .tiny-input')
  await expect(cascader2).toHaveClass(/is-disabled/)
})
