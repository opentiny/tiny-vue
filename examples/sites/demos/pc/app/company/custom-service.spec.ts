import { test, expect } from '@playwright/test'

test('自定义服务', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('company#custom-service')

  const dropdownItems = page.locator('.tiny-option.tiny-select-dropdown__item')
  const input = page.locator('.tiny-select input')
  const count = 2
  const companys = ['一', '二']
  const modal = page.locator('.tiny-modal')
  await page.waitForTimeout(200)

  // 展开
  await page.locator('.tiny-select .tiny-input__suffix .tiny-svg').click()
  await expect(dropdownItems).toHaveCount(count)
  for (let i = 0; i < count; i++) {
    await expect(dropdownItems.nth(i)).toHaveText(`公司${companys[i]}`)
  }

  // 选择
  await dropdownItems.nth(0).click()
  await expect(modal.nth(1)).toHaveText('change:0001')
  await expect(input).toHaveValue('公司一')
  await input.hover()

  // 清空
  await page.locator('.tiny-select .tiny-input__suffix .tiny-svg.icon-close').click()
  await expect(input).toHaveValue('')
})
