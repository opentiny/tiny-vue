import { test, expect } from '@playwright/test'

test('个性化按钮点击事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  const custom = page.locator('.tiny-grid-custom')
  await page.goto('grid-custom#custom-ordercolumn-local')
  await page.locator('.tiny-grid-custom__setting-btn').click()
  await custom.locator('.tiny-grid-body__row').first().getByTitle('显示').getByRole('img').click()
  await custom.getByRole('button', { name: '确定' }).click()
  await expect(
    page.getByText('点击了确认按钮{"sortType":"page","pageSize":10,"columns":[{"property":"name","order":nu')
  ).toBeVisible()
  await page.getByRole('button', { name: '确定' }).click()
  await page.locator('.tiny-grid-custom__setting-btn').click()
  await custom.getByRole('button', { name: '重置' }).click()
  await expect(page.getByText('点击了重置按钮')).toBeVisible()
  await page.getByRole('button', { name: '确定' }).nth(1).click()
  await custom.getByRole('button', { name: '取消' }).click()
  await expect(page.getByText('点击了取消按钮 undefined')).toBeVisible
})
