import { test, expect } from '@playwright/test'

test('basic', async ({ page }) => {
  await page.goto('select#basic-usage')
  const input = page.locator('#preview .tiny-input__inner')

  await input.click()
  await page.getByRole('listitem').filter({ hasText: '蚵仔煎' }).click()
  await expect(input).toHaveValue('蚵仔煎')
  await page.locator('#preview svg').nth(1).click()
  await expect(page.getByRole('listitem').filter({ hasText: '蚵仔煎' })).toHaveClass(/selected/)
  await page.getByRole('listitem').filter({ hasText: '北京烤鸭' }).click()
  await expect(input).toHaveValue('北京烤鸭')
  await input.click()
  await expect(page.getByRole('listitem').filter({ hasText: '北京烤鸭' })).toHaveClass(/selected/)
  await page.locator('.rel').click()
  await expect(page.locator('div').filter({ hasText: '黄金糕双皮奶蚵仔煎龙须面北京烤鸭' }).first()).toBeHidden()
})
