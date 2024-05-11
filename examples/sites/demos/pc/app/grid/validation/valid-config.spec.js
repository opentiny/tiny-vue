import { test, expect } from '@playwright/test'

test('行内校验', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  const demo = page.locator('#valid-config')
  await page.goto('grid-validation#valid-config')
  await page.getByText('WWW科技有限公司').click()
  await demo.locator('.tiny-input__inner').fill('')

  await expect(demo.locator('.tiny-grid-cell__valid-msg')).toBeVisible()
})
