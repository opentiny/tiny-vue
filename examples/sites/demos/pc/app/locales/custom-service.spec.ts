import { test, expect } from '@playwright/test'

test('locales-custom-service', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('locales#custom-service')

  const demo = page.locator('#custom-service')
  const reference = demo.locator('.reference-wrapper')
  const popper = page.locator('.tiny-locales__popper')

  await expect(reference).toHaveText('zhCN')
  await expect(popper).toBeHidden()
  await reference.hover()
  await page.waitForTimeout(200)
  await expect(popper).toBeVisible()
  await popper.getByText('enUS').click()
})
