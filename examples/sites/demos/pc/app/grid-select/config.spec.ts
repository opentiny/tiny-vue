import { expect, test } from '@playwright/test'
test.use({
  viewport: { width: 1920, height: 1080 }
})
test('grid-select 禁用选项', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('grid-select#config')

  const wrap = page.locator('#config')
  const single = wrap.locator('.tiny-grid-select').first()
  const singleInput = single.locator('.tiny-input__inner')

  await singleInput.click()
  const dropdown = page.locator('body > .tiny-select-dropdown')
  const rows = dropdown.getByRole('row')

  // 第 1 行被禁用，点击后不应该选中
  await rows.nth(0).getByRole('cell').nth(1).click()
  await expect(singleInput).toHaveValue('')

  // 第 2 行可用，点击后可以选中
  await page.getByRole('row', { name: '华南区 广东省 深圳市' }).locator('div').first().click()
  await expect(singleInput).toHaveValue('深圳市')
})
