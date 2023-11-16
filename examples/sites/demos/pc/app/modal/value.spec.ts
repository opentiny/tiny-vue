import { test, expect } from '@playwright/test'

test('控制弹窗显示隐藏的绑定值', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#value')

  const modal = page.locator('.tiny-modal')
  await page.getByRole('button', { name: '默认插槽' }).click()
  await expect(modal).toHaveClass(/is__visible/)
  await expect(modal).toBeVisible()
  await page.getByRole('button', { name: '确认' }).click()
  await expect(modal).not.toHaveClass(/is__visible/)
  await expect(modal).not.toBeVisible()
})

test('默认插槽', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('modal#value1')
  const modal = page.locator('.tiny-modal')
  await page.getByRole('button', { name: '默认插槽' }).click()
  await expect(modal.locator('.tiny-modal__body')).toHaveText('test')
  await expect(modal.getByText('test')).toHaveClass('custom-content')
})
