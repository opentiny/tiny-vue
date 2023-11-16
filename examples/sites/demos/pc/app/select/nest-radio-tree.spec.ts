import { test, expect } from '@playwright/test'

test('radio-tree', async ({ page }) => {
  await page.goto('select#nest-radio-tree')
  const input = page.locator('#preview .tiny-input__inner')
  const suffixSvg = await page.locator('#preview .tiny-select__caret').first()

  await expect(suffixSvg).toHaveCount(1)
  await expect(suffixSvg).toBeVisible()
  await expect(input).toHaveValue('三级 1-1-2')
  await input.click()
  await page.waitForTimeout(1000)
  await expect(page.getByRole('treeitem', { name: '三级 1-1-2' })).toHaveClass(/is-current/)
  await page.getByRole('treeitem', { name: '二级 2-1' }).locator('div').filter({ hasText: '二级 2-1' }).click()
  await page.waitForTimeout(1000)
  await expect(input).toHaveValue('二级 2-1')
  await input.click()
  await page.waitForTimeout(1000)
  await expect(page.getByRole('treeitem', { name: '二级 2-1' })).toHaveClass(/is-current/)
})
