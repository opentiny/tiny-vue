import { test, expect } from '@playwright/test'

test('基础用法', async ({ page }) => {
  await page.goto('select#basic-usage')
  const wrap = page.locator('#basic-usage')
  const input = wrap.locator('.tiny-input__inner')
  const dropdown = page.locator('.tiny-select-dropdown')

  await input.click()
  await dropdown.getByRole('listitem').filter({ hasText: '蚵仔煎' }).click()
  await expect(input).toHaveValue('蚵仔煎')
  await wrap.locator('.tiny-input__suffix svg').click()
  await expect(page.getByRole('listitem').filter({ hasText: '蚵仔煎' })).toHaveClass(/selected/)
  await dropdown.getByRole('listitem').filter({ hasText: '北京烤鸭' }).click()
  await expect(input).toHaveValue('北京烤鸭')
  await input.click()
  await expect(dropdown.getByRole('listitem').filter({ hasText: '北京烤鸭' })).toHaveClass(/selected/)
  await wrap.click()
  await expect(page.locator('div').filter({ hasText: '黄金糕双皮奶蚵仔煎龙须面北京烤鸭' }).first()).toBeHidden()
})
