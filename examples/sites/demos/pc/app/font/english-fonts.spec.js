import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('font#chinese-font-set')
  await page.getByText('英文字体').click()
  await page.getByRole('heading', { name: 'User Experience Design' }).click()
  await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/h1')).toHaveText('User Experience Design')
  await page.getByRole('heading', { name: 'Helvetica' }).click()
  await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/h5')).toHaveText('Helvetica')
})
