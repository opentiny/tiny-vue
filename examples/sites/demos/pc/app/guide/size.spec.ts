import { test, expect } from '@playwright/test'

test('尺寸', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('guide#size')

  const guide = page.locator('.shepherd-element')
  const showBtn = page.getByRole('button', { name: '新手引导自定义宽高' })

  await showBtn.click()
  await expect(guide).toBeVisible()
  await expect(guide).toHaveCSS('width', '300px')
  await expect(guide).toHaveCSS('height', '200px')
})
