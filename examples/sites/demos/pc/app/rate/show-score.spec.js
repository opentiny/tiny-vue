import { test, expect } from '@playwright/test'

test.describe('rate 分数显示及分数模板', () => {
  test('分数显示', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('rate#show-score')

    const icon = page.locator('.tiny-rate__star > .tiny-svg')
    const score = page.locator('.tiny-rate__text')

    await expect(score).toBeVisible()
    await icon.nth(0).click()
    await expect(score).toHaveText(/您的评分是1/)
  })
})
