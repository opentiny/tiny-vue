import { test, expect } from '@playwright/test'

test('dashboard类型', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('http://127.0.0.1:7130/pc/progress/progress-type-dashboard')

  const progress = page.getByRole('progressbar')
  const circleTrack = progress.locator('.tiny-progress-circle__track')
  const cirlePath = progress.locator('.tiny-progress-circle__path')

  await expect(progress).toHaveClass(/tiny-progress--dashboard/)
  await expect(progress.locator('div.tiny-progress-circle')).toBeVisible()
  await expect(progress.locator('div.tiny-progress__text')).toBeVisible()
  await expect(circleTrack).toHaveAttribute('stroke-width', '2.0')
  await expect(circleTrack).toHaveAttribute('stroke', '#e5e9f2')
  await expect(circleTrack).toHaveCSS('d', 'path(\"M 50 50 M 50 99 A 49 49 0 1 1 50 1 A 49 49 0 1 1 50 99\")')
  await expect(cirlePath).toHaveAttribute('stroke-width', '2.0')
  await expect(cirlePath).toHaveAttribute('stroke', '#e6a23c')
  await expect(cirlePath).toHaveAttribute('stroke-linecap', 'round')
  await expect(cirlePath).toHaveCSS('d', 'path(\"M 50 50 M 50 99 A 49 49 0 1 1 50 1 A 49 49 0 1 1 50 99\")')
  await expect(cirlePath).toHaveCSS('stroke-dasharray', '46.1814px, 307.876px')
})
