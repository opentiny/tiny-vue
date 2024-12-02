import { test, expect } from '@playwright/test'

test('多选一键复制所有标签', async ({ page }) => {
  await page.goto('tree-select#copy')

  const wrap = page.locator('#copy')
  const select = wrap.locator('.tiny-tree-select').nth(0)
  const copyValueInput = wrap.locator('.copy-value .tiny-input__inner')
  const copyIcon = select.locator('.tiny-base-select__copy .tiny-svg')

  await select.hover()
  await expect(copyIcon).toBeVisible()
  await copyIcon.click()
  await copyValueInput.press('Control+V')
  await expect(copyValueInput).toHaveValue('三级 1-1-1,二级 2-2')
})

test('多选设置复制文本分隔符', async ({ page }) => {
  await page.goto('tree-select#copy')

  const wrap = page.locator('#copy')
  const select = wrap.locator('.tiny-tree-select').nth(1)
  const copyValueInput = wrap.locator('.copy-value .tiny-input__inner')

  await page.waitForTimeout(200)
  await select.hover()
  await select.locator('.tiny-base-select__copy > .tiny-svg').click()
  await copyValueInput.press('Control+V')
  await expect(copyValueInput).toHaveValue('三级 1-1-1/二级 2-2')
})
