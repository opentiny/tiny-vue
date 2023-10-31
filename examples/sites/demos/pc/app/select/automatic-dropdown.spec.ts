import { test, expect } from '@playwright/test'

test('automatic-dropdown', async ({ page }) => {
  await page.goto('select#automatic-dropdown')
  const input = page.locator('#preview .tiny-input__inner')

  await page.getByRole('button', { name: '点击获取焦点' }).click()
  await page.getByRole('listitem').filter({ hasText: '双皮奶' }).click()
  await expect(input).toHaveValue('双皮奶')
  await input.click()
  await expect(page.getByRole('listitem').filter({ hasText: '双皮奶' })).toHaveClass(/selected/)
  await page.locator('.rel').click()
  await expect(page.locator('div').filter({ hasText: '黄金糕双皮奶蚵仔煎龙须面北京烤鸭' }).first()).toBeHidden()
})
