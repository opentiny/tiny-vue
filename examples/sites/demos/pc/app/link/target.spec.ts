import { test, expect } from '@playwright/test'

test.describe('Link Target 功能', () => {
  test('验证不同target值的链接行为', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('link#target')

    // 使用正确的选择器 - 选择所有链接
    const links = page.locator('.demo-link-target a')

    // 验证链接数量
    await expect(links).toHaveCount(4)

    // 验证每个链接的target属性
    const targets = ['_blank', '_self', '_parent', '_top']
    for (let i = 0; i < targets.length; i++) {
      const link = links.nth(i)
      await expect(link).toHaveAttribute('target', targets[i])
    }

    // 验证链接文本
    const expectedTexts = ['在新窗口打开', '在当前窗口打开', '在父框架中打开', '在整个窗口中打开']
    for (let i = 0; i < expectedTexts.length; i++) {
      const link = links.nth(i)
      await expect(link).toContainText(expectedTexts[i])
    }
  })

  test('验证链接的href属性', async ({ page }) => {
    page.on('pageerror', (exception) => expect(exception).toBeNull())
    await page.goto('link#target')

    const links = page.locator('.demo-link-target a')

    // 验证所有链接都有相同的href
    for (let i = 0; i < 4; i++) {
      const link = links.nth(i)
      await expect(link).toHaveAttribute('href', 'https://opentiny.design/tiny-vue')
    }
  })
})
