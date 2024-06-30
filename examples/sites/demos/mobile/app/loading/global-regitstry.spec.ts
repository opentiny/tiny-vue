import { test, expect } from '@playwright/test'

test.describe('全局加载', () => {
  test('指令方式加载', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('loading#global-registry')

    const loading = page.locator('.tiny-mobile-loading')

    await page.getByRole('button', { name: '指令方式加载全屏Loading' }).click()
    await expect(loading).toBeVisible()
    await expect(loading).toHaveClass(/is-fullscreen/)
    await page.waitForTimeout(3000)
    await expect(loading).not.toBeVisible()
  })

  test('静态方法加载', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('loading#global-registry')

    const loading = page.locator('.tiny-mobile-loading')

    await page.getByRole('button', { name: '静态方法加载全屏Loading' }).click()
    await expect(loading).toBeVisible()
    await page.waitForTimeout(3000)
    await expect(loading).not.toBeVisible()
  })
})
