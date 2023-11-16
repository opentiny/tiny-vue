import { test, expect } from '@playwright/test'

test('测试tooltip主题', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('tooltip#tooltip-theme')

  await page.getByRole('button', { name: 'Dark' }).hover()
  await expect(page.getByRole('tooltip', { name: 'dark 提示文字' })).toHaveClass(/is-dark/)

  await page.getByRole('button', { name: 'Light' }).hover()
  await expect(page.getByRole('tooltip', { name: 'light 提示文字' })).toHaveClass(/is-light/)

  await page.getByRole('button', { name: 'normal' }).hover()
  await expect(page.getByRole('tooltip', { name: 'normal 提示文字' })).toHaveClass(/is-normal/)

  await page.getByRole('button', { name: 'warning' }).hover()
  await expect(page.getByRole('tooltip', { name: 'warning 提示文字' })).toHaveClass(/is-warning/)

  await page.getByRole('button', { name: 'error' }).hover()
  await expect(page.getByRole('tooltip', { name: 'error 提示文字' })).toHaveClass(/is-error/)

  await page.getByRole('button', { name: 'info' }).hover()
  await expect(page.getByRole('tooltip', { name: 'info 提示文字' })).toHaveClass(/is-info/)

  await page.getByRole('button', { name: 'success' }).hover()
  await expect(page.getByRole('tooltip', { name: 'success 提示文字' })).toHaveClass(/is-success/)

  await page.waitForTimeout(300)
})
