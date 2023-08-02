import { test, expect } from '@playwright/test'

test.describe('circle 类型', () => {
  test('是否circle 类型', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).not.toBeNull())
    await page.goto('http://127.0.0.1:7130/pc/progress/progress-type-circle')

    const progress = page.getByRole('progressbar')
    const circleTrack = progress.locator('.tiny-progress-circle__track')
    const cirlePath = progress.locator('.tiny-progress-circle__path')

    await expect(progress.locator('div.tiny-progress-circle')).toBeVisible()
    await expect(circleTrack).toHaveAttribute('stroke-width', '4.0')
    await expect(circleTrack).toHaveAttribute('stroke', '#e5e9f2')
    await expect(circleTrack).toHaveCSS('d', 'path(\"M 50 50 M 50 2 A 48 48 0 1 1 50 98 A 48 48 0 1 1 50 2\")')
    await expect(cirlePath).toHaveAttribute('stroke-width', '4.0')
    await expect(cirlePath).toHaveAttribute('stroke', '#ff4949')
    await expect(cirlePath).toHaveAttribute('stroke-linecap', 'round')
    await expect(cirlePath).toHaveCSS('d', 'path(\"M 50 50 M 50 2 A 48 48 0 1 1 50 98 A 48 48 0 1 1 50 2\")')
  })

  test('点击值增加', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).not.toBeNull())
    await page.goto('http://127.0.0.1:7130/pc/progress/progress-type-circle')

    const progress = page.getByRole('progressbar')
    const cirlePath = progress.locator('.tiny-progress-circle__path')

    await expect(progress).toHaveAttribute('aria-valuenow', '10')
    await expect(cirlePath).toHaveCSS('stroke-dasharray', '30.1593px, 301.593px')
    await page.getByRole('button', { name: '增加' }).click()
    await expect(progress).toHaveAttribute('aria-valuenow', '20')
    await expect(cirlePath).toHaveCSS('stroke-dasharray', '60.3186px, 301.593px')
  })
})
