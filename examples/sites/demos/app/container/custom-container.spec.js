import { test, expect } from '@playwright/test'

test('版型切换', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/container/simple')
  await page.getByText('版型切换').click()
  await page.getByLabel('默认:default').check()
  await expect(page.locator('.tiny-container > div').first(1)).toHaveAttribute('style', 'height: 60px;')
  await expect(page.locator('.tiny-container > div').nth(2)).toHaveAttribute(
    'style',
    'top: 60px; left: 200px; bottom: 0px;'
  )
  await page.getByLabel('经典:classic').check()
  await expect(page.locator('.tiny-container > div').first()).toHaveAttribute('style', 'height: 60px;')
  await expect(page.locator('.tiny-container > div').nth(1)).toHaveAttribute(
    'style',
    'top: 60px; left: 0px; bottom: 60px;'
  )
  await expect(page.locator('.tiny-container > div').nth(2)).toHaveAttribute('style', 'height: 60px; left: 0px;')
  await page.getByLabel('简约:simple').check()
  await expect(page.locator('.tiny-container > div').first()).toHaveAttribute('style', 'top: 0px; width: 200px;')
  await expect(page.locator('.tiny-container > div').nth(1)).toHaveAttribute(
    'style',
    'top: 0px; left: 200px; bottom: 0px;'
  )
  await page.getByLabel('时尚:fashion').check()
  await expect(page.locator('.tiny-container > div').first()).toHaveAttribute('style', 'height: 60px; left: 200px;')
  await expect(page.locator('.tiny-container > div').nth(1)).toHaveAttribute('style', 'top: 0px; width: 200px;')
  await expect(page.locator('.tiny-container > div').nth(2)).toHaveAttribute(
    'style',
    'top: 60px; left: 200px; bottom: 0px;'
  )
  await page.getByLabel('传奇:legend').check()
  await expect(page.locator('.tiny-container > div').first()).toHaveAttribute('style', 'height: 60px;')
  await expect(page.locator('.tiny-container > div').nth(1)).toHaveAttribute('style', 'top: 60px; width: 200px;')
  await expect(page.locator('.tiny-container > div').nth(2)).toHaveAttribute(
    'style',
    'top: 60px; left: 200px; bottom: 60px;'
  )
  await expect(page.locator('.tiny-container > div').nth(3)).toHaveAttribute('style', 'height: 60px; left: 200px;')
})
