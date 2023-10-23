import { test, expect } from '@playwright/test'

test('纯段落用户引导', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/guide/content-step')

  const showBtn = page.getByRole('button', { name: '新手引导' })
  const nextBtn = page.getByRole('button', { name: '下一步' })
  const guide = page.getByRole('dialog')

  await showBtn.click()
  await expect(guide).toBeVisible()
  await expect(guide).toHaveClass(/only-content/)
  await expect(guide.locator('.shepherd-text')).toBeVisible()
})
