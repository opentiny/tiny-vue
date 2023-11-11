import { test, expect } from '@playwright/test'

test('高亮多处', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('guide#highlight-box')

  const showBtn = page.getByRole('button', { name: '引导', exact: true })
  const step1 = page.getByRole('button', { name: '新手引导1' })
  const step2 = page.getByRole('button', { name: '新手引导2' })
  const step3 = page.getByRole('button', { name: '新手引导3' })
  const hightAlert1 = page.locator('.tiny-alert').nth(0)
  const hightAlert2 = page.locator('.hight11')
  const guide = page.getByRole('dialog')

  await showBtn.click()
  await expect(guide).toBeVisible()
  await expect(step1).toHaveClass(/shepherd-target/)

  // 高亮多处
  await expect(step2).not.toHaveClass(/tiny-guide__z-top/)
  await expect(step3).toHaveClass(/tiny-guide__z-top/)
  await expect(hightAlert1).toHaveClass(/tiny-guide__z-top/)
  await expect(hightAlert2).toHaveClass(/tiny-guide__z-top/)
})
