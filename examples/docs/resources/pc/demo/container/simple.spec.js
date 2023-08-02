import { test, expect } from '@playwright/test'

test('简约布局', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/container/basic-usage')
  await page.getByText('简约布局').click()
  await page.locator('#preview').getByText('Aside').click()
  await expect(page.locator('.tiny-container > div').first()).toHaveAttribute('style', 'top: 0px; width: 200px;')
  await page.getByText('Main').click()
  await expect(page.locator('.tiny-container > div').nth(1)).toHaveAttribute(
    'style',
    'top: 0px; left: 200px; bottom: 0px;'
  )
})
