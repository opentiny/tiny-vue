import { test, expect } from '@playwright/test'

test('弹窗的遮罩层', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('guide#mask')

  const guideVisible = page.locator('.shepherd-modal-is-visible')
  const showBtn = page.getByRole('button', { name: '新手引导' })

  await showBtn.click()
  await expect(guideVisible).toBeVisible()
  await expect(guideVisible).toHaveCSS('opacity', '0.2')
})
