import { test, expect } from '@playwright/test'

test('[Input]size', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('input#size')
  const medium = page.locator('.demo-input > .tiny-input-medium .tiny-input__inner')
  const small = page.locator('.demo-input > .tiny-input-small .tiny-input__inner')
  const mini = page.locator('.demo-input > .tiny-input-mini .tiny-input__inner')
  await expect(medium).toHaveCSS('height', '40px')
  await expect(small).toHaveCSS('height', '32px')
  await expect(mini).toHaveCSS('height', '24px')
})
