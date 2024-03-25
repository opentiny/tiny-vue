import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('company#basic-usage')

  const dropdown = page.locator('.tiny-select-dropdown.tiny-popper')
  const icon = page.locator('.tiny-select .tiny-input__suffix .tiny-svg')
  const text = page.getByText('当前选中值：')

  await expect(text).toHaveCount(1)
  await text.isVisible()
  await expect(dropdown).not.toBeVisible()

  // 展开和收回下拉框测试
  await icon.click()
  await expect(dropdown).toBeVisible()
  await expect(page.locator('.tiny-modal').nth(1)).toHaveText('visible:true')
  await icon.click()
  await expect(dropdown).not.toBeVisible()
  await expect(page.locator('.tiny-modal').nth(2)).toHaveText('visible:false')
})
