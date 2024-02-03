import { test, expect } from '@playwright/test'

test('medium 尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('time-select#size-medium')
  const mediumBox = page.getByRole('textbox', { name: '尺寸: medium' })
  const smallBox = page.getByRole('textbox', { name: '尺寸: small' })
  const miniBox = page.getByRole('textbox', { name: '尺寸: mini' })
  await expect(mediumBox).toHaveCSS('height', '40px')
  await expect(smallBox).toHaveCSS('height', '32px')
  await expect(miniBox).toHaveCSS('height', '24px')
})
