import { test, expect } from '@playwright/test'

test('自定义服务', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('company#custom-service')

  const expand = page.locator('#preview svg').nth(1)
  const clear = page.locator('#preview svg').nth(2)
  const dropdownItems = page.locator('.tiny-option.tiny-select-dropdown__item')
  const input = page.locator('#preview').getByPlaceholder('请输入')
  const count = 2
  const companys = ['一', '二']
  const modal = page.locator('.tiny-modal')

  // 展开
  await expand.click()
  await expect(dropdownItems).toHaveCount(count)
  for (let i = 0; i < count; i++) {
    await expect(dropdownItems.nth(i)).toHaveText(`公司${companys[i]}`)
  }

  // 选择
  await dropdownItems.nth(0).click()
  await expect(modal.nth(0)).toHaveText('change:0001')
  await expect(input).toHaveValue('公司一')
  await input.hover()

  // 清空
  await clear.click()
  await expect(modal.nth(1)).toHaveText('change:')
  await expect(modal.nth(2)).toHaveText('clear:触发了')
  await expect(input).toHaveValue('')
})
