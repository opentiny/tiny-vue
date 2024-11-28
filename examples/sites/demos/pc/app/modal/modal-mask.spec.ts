import { test, expect } from '@playwright/test'

test('弹窗的遮罩', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#modal-mask')
  const modal = page.locator('.tiny-modal')
  await page.getByRole('button', { name: '弹窗遮罩层' }).first().click()
  await expect(modal.nth(2)).toHaveClass(/is__mask/)
  await page.getByRole('button', { name: '确定' }).click()

  await page.getByRole('button', { name: '弹窗遮罩层' }).nth(1).click()
  await expect(modal.nth(1)).toHaveClass(/is__mask/)
  await page.getByRole('button', { name: '确定' }).click()
})
