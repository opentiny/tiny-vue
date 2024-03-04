import { test, expect } from '@playwright/test'

test.describe('环形', () => {
  test('是否圆环类型', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).not.toBeNull())
    await page.goto('progress#progress-type-circle')

    const firstProgress = page.getByRole('progressbar').first()
    const circleTrack = firstProgress.locator('.tiny-progress-circle__track')
    const cirlePath = firstProgress.locator('.tiny-progress-circle__path')

    await expect(firstProgress.locator('div.tiny-progress-circle')).toBeVisible()
    await expect(circleTrack).toHaveAttribute('stroke-width', '4')
    await expect(circleTrack).toHaveAttribute('stroke', '#e5e9f2')
    await expect(circleTrack).toHaveCSS('d', 'path("M 50 50 M 50 2 A 48 48 0 1 1 50 98 A 48 48 0 1 1 50 2")')
    await expect(cirlePath).toHaveAttribute('stroke-width', '4')
    await expect(cirlePath).toHaveAttribute('stroke', '#eb171f')
    await expect(cirlePath).toHaveAttribute('stroke-linecap', 'round')
    await expect(cirlePath).toHaveCSS('d', 'path("M 50 50 M 50 2 A 48 48 0 1 1 50 98 A 48 48 0 1 1 50 2")')
  })

  test('是否C型圆环类型', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).not.toBeNull())
    await page.goto('progress#progress-type-circle')

    const lastProgress = page.getByRole('progressbar').last()
    const circleTrack = lastProgress.locator('.tiny-progress-circle__track')
    const cirlePath = lastProgress.locator('.tiny-progress-circle__path')

    await expect(lastProgress).toHaveClass(/tiny-progress--dashboard/)
    await expect(lastProgress.locator('div.tiny-progress-circle')).toBeVisible()
    await expect(lastProgress.locator('div.tiny-progress__text')).toBeVisible()
    await expect(circleTrack).toHaveAttribute('stroke-width', '2')
    await expect(circleTrack).toHaveAttribute('stroke', '#e5e9f2')
    await expect(circleTrack).toHaveCSS('d', 'path("M 50 50 M 50 99 A 49 49 0 1 1 50 1 A 49 49 0 1 1 50 99")')
    await expect(cirlePath).toHaveAttribute('stroke-width', '2')
    await expect(cirlePath).toHaveAttribute('stroke', '#f56c6c')
    await expect(cirlePath).toHaveAttribute('stroke-linecap', 'round')
    await expect(cirlePath).toHaveCSS('d', 'path("M 50 50 M 50 99 A 49 49 0 1 1 50 1 A 49 49 0 1 1 50 99")')
    await expect(cirlePath).toHaveCSS('stroke-dasharray', '23.0907px, 307.876px')
  })

  test('点击值增加', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).not.toBeNull())
    await page.goto('progress#progress-type-circle')

    const firstProgress = page.getByRole('progressbar').first()
    const cirlePath1 = firstProgress.locator('.tiny-progress-circle__path')

    const lastProgress = page.getByRole('progressbar').last()
    const cirlePath2 = lastProgress.locator('.tiny-progress-circle__path')

    await expect(firstProgress).toHaveAttribute('aria-valuenow', '10')
    await expect(cirlePath1).toHaveCSS('stroke-dasharray', '30.1593px, 301.593px')
    await expect(lastProgress).toHaveAttribute('aria-valuenow', '10')
    await expect(cirlePath2).toHaveCSS('stroke-dasharray', '23.0907px, 307.876px')
    await page.getByRole('button', { name: '增加' }).click()
    await expect(firstProgress).toHaveAttribute('aria-valuenow', '20')
    await expect(cirlePath1).toHaveCSS('stroke-dasharray', '60.3186px, 301.593px')
    await expect(lastProgress).toHaveAttribute('aria-valuenow', '20')
    await expect(cirlePath2).toHaveCSS('stroke-dasharray', '46.1814px, 307.876px')

    await page.getByRole('button', { name: '增加' }).click()
    await expect(firstProgress).toHaveAttribute('aria-valuenow', '30')
    await expect(cirlePath1).toHaveCSS('stroke-dasharray', '90.4779px, 301.593px')
    await expect(lastProgress).toHaveAttribute('aria-valuenow', '30')
    await expect(cirlePath2).toHaveCSS('stroke-dasharray', '69.2721px, 307.876px')
  })
})
