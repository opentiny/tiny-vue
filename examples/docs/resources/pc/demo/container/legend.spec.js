import { test, expect } from '@playwright/test'

test('传奇布局', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/container/fashionid')
  await page.getByText('传奇布局').click()
  await page.locator('#preview').getByText('Header').click()
  await expect(page.locator('.tiny-container > div').first()).toHaveAttribute('style', 'height: 60px;')
  await page.locator('#preview').getByText('Aside').click()
  await expect(page.locator('.tiny-container > div').nth(1)).toHaveAttribute(
    'style',
    'width: 200px; top: 60px;'
  )
  await page.getByText('Main').click()
  await expect(page.locator('.tiny-container > div').nth(2)).toHaveAttribute(
    'style',
    'top: 60px; left: 200px; bottom: 60px;'
  )
  await page.locator('#preview').getByText('Footer').click()
  await expect(page.locator('.tiny-container > div').nth(3)).toHaveAttribute(
    'style',
    'height: 60px; left: 200px;'
  )
})
