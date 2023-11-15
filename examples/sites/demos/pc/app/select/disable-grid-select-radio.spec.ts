import { test, expect } from '@playwright/test'

test('test-grid-select', async ({ page }) => {
  await page.goto('select#disable-grid-select-radio')
  const tags = page.locator('.grid-select .tiny-tag')

  await page.locator('.tiny-select__tags').click()
  await page.getByRole('row', { name: '华南区 广东省 广州市' }).getByRole('cell').first().click()

  await expect(tags.filter({ hasText: '广州市' })).toHaveCount(1)
  await page.getByRole('row', { name: '华南区 广东省 深圳市' }).getByRole('cell').first().click()
  await expect(tags.filter({ hasText: '深圳市' })).toHaveCount(0)
})

test('test-grid-radio', async ({ page }) => {
  await page.goto('select#disable-grid-select-radio')

  const input = page.locator('.grid-radio .tiny-input__inner')
  await input.click()
  await page.getByRole('row', { name: '华南区 广东省 深圳市' }).getByRole('cell').first().click()
  await expect(page.getByPlaceholder('请选择').nth(1)).toHaveValue('深圳市')
  await input.click()
  await page.getByRole('row', { name: '华南区 广东省 广州市' }).getByRole('cell').first().click()
  await expect(page.getByPlaceholder('请选择').nth(1)).toHaveValue('深圳市')
  await page.getByRole('row', { name: '华南区 广东省 佛山市' }).getByRole('cell').first().click()
  await expect(page.getByPlaceholder('请选择').nth(1)).toHaveValue('佛山市')
})
