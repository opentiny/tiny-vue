import { test, expect } from '@playwright/test'

test.describe('Rate 自定义 3 分段图标样式', () => {
  test('自定义三分段图标样式', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('rate#custom-3-threshold-icon')

    const icon = page.locator('.tiny-rate__star > .tiny-svg')

    await icon.nth(0).click()
    await expect(page.locator('.tiny-rate > span:nth-child(1) > .tiny-svg > .st0').first()).toHaveAttribute(
      'd',
      'M6.5 11C5.7 11 5 10.3 5 9.5S5.7 8 6.5 8 8 8.7 8 9.5 7.3 11 6.5 11zm11 0c-.8 0-1.5-.7-1.5-1.5S16.7 8 17.5 8s1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm-2.4 8c-.5 0-.9-.4-.9-.9 0-1.3-1-2.3-2.2-2.3s-2.2 1-2.2 2.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9c0-2.3 1.8-4.1 4-4.1s4 1.8 4 4.1c0 .5-.4.9-.9.9z'
    )
    await icon.nth(1).click()
    await expect(page.locator('.tiny-rate > span:nth-child(2) > .tiny-svg > .st0').first()).toHaveAttribute(
      'd',
      'M6.5 11C5.7 11 5 10.3 5 9.5S5.7 8 6.5 8 8 8.7 8 9.5 7.3 11 6.5 11zm11 0c-.8 0-1.5-.7-1.5-1.5S16.7 8 17.5 8s1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm-2.4 8c-.5 0-.9-.4-.9-.9 0-1.3-1-2.3-2.2-2.3s-2.2 1-2.2 2.3c0 .5-.4.9-.9.9s-.9-.4-.9-.9c0-2.3 1.8-4.1 4-4.1s4 1.8 4 4.1c0 .5-.4.9-.9.9z'
    )
    await icon.nth(2).click()
    await expect(page.locator('.tiny-rate > span:nth-child(3) > .tiny-svg > .st0').first()).toHaveAttribute(
      'd',
      'M9 16h6.1c.6 0 1 .4 1 1s-.4 1-1 1H9c-.6 0-1-.4-1-1s.5-1 1-1zm-2.5-5C5.7 11 5 10.3 5 9.5S5.7 8 6.5 8 8 8.7 8 9.5 7.3 11 6.5 11zm11 0c-.8 0-1.5-.7-1.5-1.5S16.7 8 17.5 8s1.5.7 1.5 1.5-.7 1.5-1.5 1.5z'
    )
    await icon.nth(3).click()
    await expect(page.locator('.tiny-rate > span:nth-child(4) > .tiny-svg > .st0').last()).toHaveAttribute(
      'd',
      'M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12zm0-2c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z'
    )
    await icon.nth(4).click()
    await expect(page.locator('.tiny-rate > span:nth-child(5) > .tiny-svg > .st0').last()).toHaveAttribute(
      'd',
      'M12 24C5.4 24 0 18.6 0 12S5.4 0 12 0s12 5.4 12 12-5.4 12-12 12zm0-2c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z'
    )
  })
})
