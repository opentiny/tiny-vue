import { test, expect } from '@playwright/test'

test.describe('环形', () => {
  test('是否圆环类型', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).not.toBeNull())
    await page.goto('progress#progress-type-circle')

    const firstProgress = page.getByRole('progressbar').first()
    const circleTrack = firstProgress.locator('.tiny-progress-circle__track')
    const cirlePath = firstProgress.locator('.tiny-progress-circle__path')

    await expect(firstProgress.locator('div.tiny-progress-circle')).toBeVisible()
    await expect(circleTrack).toHaveAttribute('stroke-width', '4.8')
    await expect(circleTrack).toHaveAttribute('stroke', '#e5e9f2')
    await expect(circleTrack).toHaveCSS('d', 'path("M 50 50 M 50 3 A 47 47 0 1 1 50 97 A 47 47 0 1 1 50 3")')
    await expect(cirlePath).toHaveAttribute('stroke-width', '4.8')
    await expect(cirlePath).toHaveAttribute('stroke', '#eb171f')
    await expect(cirlePath).toHaveAttribute('stroke-linecap', 'round')
    await expect(cirlePath).toHaveCSS('d', 'path("M 50 50 M 50 3 A 47 47 0 1 1 50 97 A 47 47 0 1 1 50 3")')
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
    await expect(circleTrack).toHaveAttribute('stroke-width', '4.8')
    await expect(circleTrack).toHaveAttribute('stroke', '#e5e9f2')
    await expect(circleTrack).toHaveCSS('d', 'path("M 50 50 M 50 97 A 47 47 0 1 1 50 3 A 47 47 0 1 1 50 97")')
    await expect(cirlePath).toHaveAttribute('stroke-width', '4.8')
    await expect(cirlePath).toHaveAttribute('stroke', '#5cb87a')
    await expect(cirlePath).toHaveAttribute('stroke-linecap', 'round')
    await expect(cirlePath).toHaveCSS('d', 'path("M 50 50 M 50 97 A 47 47 0 1 1 50 3 A 47 47 0 1 1 50 97")')
    await expect(cirlePath).toHaveCSS('stroke-dasharray', '110.741px, 295.31px')
  })

  test('点击值增加', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).not.toBeNull())
    await page.goto('progress#progress-type-circle')

    const firstProgress = page.getByRole('progressbar').first()
    const cirlePath1 = firstProgress.locator('.tiny-progress-circle__path')

    const lastProgress = page.getByRole('progressbar').last()
    const cirlePath2 = lastProgress.locator('.tiny-progress-circle__path')

    await expect(firstProgress).toHaveAttribute('aria-valuenow', '50')
    await expect(cirlePath1).toHaveCSS('stroke-dasharray', '147.655px, 295.31px')
    await expect(lastProgress).toHaveAttribute('aria-valuenow', '50')
    await expect(cirlePath2).toHaveCSS('stroke-dasharray', '110.741px, 295.31px')
    await page.getByRole('button', { name: '增加' }).click()
    await expect(firstProgress).toHaveAttribute('aria-valuenow', '60')
    await expect(cirlePath1).toHaveCSS('stroke-dasharray', '177.186px, 295.31px')
    await expect(lastProgress).toHaveAttribute('aria-valuenow', '60')
    await expect(cirlePath2).toHaveCSS('stroke-dasharray', '132.889px, 295.31px')

    await page.getByRole('button', { name: '增加' }).click()
    await expect(firstProgress).toHaveAttribute('aria-valuenow', '70')
    await expect(cirlePath1).toHaveCSS('stroke-dasharray', '206.717px, 295.31px')
    await expect(lastProgress).toHaveAttribute('aria-valuenow', '70')
    await expect(cirlePath2).toHaveCSS('stroke-dasharray', '155.038px, 295.31px')
  })
})
