import { test, expect } from '@playwright/test'

test.describe('Rate 基本用法', () => {
  test('rate 组件出现', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('rate#allow-half')

    // 判断rate组件是否出现
    await expect(page.locator('//*[@id="preview"]/div[2]/div[2]/div')).toBeVisible()
  })

  test('鼠标hover时，icon高亮', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('rate#basic-usage')

    // 鼠标hover到相应icon时，icon样式改变
    const icon = page.locator('.tiny-rate__star > .tiny-svg')
    await icon.nth(0).hover()
    await expect(icon.nth(0)).toHaveClass(/hover/)
    await expect(icon.nth(0)).toHaveCSS('fill', 'rgb(255, 187, 51)')

    await icon.nth(1).hover()
    await expect(icon.nth(1)).toHaveClass(/hover/)
    await expect(icon.nth(1)).toHaveCSS('fill', 'rgb(255, 187, 51)')

    await icon.nth(2).hover()
    await expect(icon.nth(2)).toHaveClass(/hover/)
    await expect(icon.nth(2)).toHaveCSS('fill', 'rgb(255, 187, 51)')

    await icon.nth(3).hover()
    await expect(icon.nth(3)).toHaveClass(/hover/)
    await expect(icon.nth(3)).toHaveCSS('fill', 'rgb(255, 187, 51)')

    await icon.nth(4).hover()
    await expect(icon.nth(4)).toHaveClass(/hover/)
    await expect(icon.nth(4)).toHaveCSS('fill', 'rgb(255, 187, 51)')
  })

  test('click选中值准确', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('rate#basic-usage')

    const icon = page.locator('.tiny-rate__star > .tiny-svg')
    const text = page.locator('//*[@id="preview"]/div[2]/div[2]/div/span[6]')
    await icon.nth(0).click()
    await expect(text).toHaveText('很差')

    await icon.nth(1).click()
    await expect(text).toHaveText('差')

    await icon.nth(2).click()
    await expect(text).toHaveText('一般')

    await icon.nth(3).click()
    await expect(text).toHaveText('好')

    await icon.nth(4).click()
    await expect(text).toHaveText('很好')
  })
})
