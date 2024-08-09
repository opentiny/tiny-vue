import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('color-select-panel#alpha')
  const demo = await page.locator('#alpha')
  await demo.getByRole('button', { name: 'Show Color select panel' }).click()
  await page.locator('.black').click()
  const v1 = await page.evaluate('document.querySelector("input[type=text]").value = "#377820"')
  await page.locator('.tiny-color-select-panel__inner__hue-select').click()
  const v2 = await page.evaluate('document.querySelector("input[type=text]").value = "#206578"')
  expect(v1).not.toContainEqual(v2)
})
