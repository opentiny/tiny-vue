import { test, expect } from '@playwright/test'

// 测试组的写法
test.describe('Tooltip 基本用法', () => {
  test('测试Tooltip的是否能出现', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/tooltip/basic-usage')

    await page.getByRole('button', { name: '上右' }).hover()
    await expect(page.getByRole('tooltip', { name: 'Top Right 提示文字' })).toBeVisible() // 预期行为

    await page.waitForTimeout(1000)
  })

  test('测试Tooltip的位置是否正确', async ({ page }) => {
    await page.goto('http://localhost:7130/pc/tooltip/basic-usage')

    let button = page.getByRole('button', { name: '上右' })
    await page.getByRole('button', { name: '上右' }).hover()

    let tooltip = page.getByRole('tooltip', { name: 'Top Right 提示文字' })
    let buttonPos = await button.boundingBox()
    let tooltipPos = await tooltip.boundingBox()

    // tooltip + 高度 要小于button的y
    expect(tooltipPos.y + tooltipPos.height).toBeLessThan(buttonPos.y)

    button = page.getByRole('button', { name: '下左' })
    await button.hover()

    tooltip = page.getByRole('tooltip', { name: 'Bottom Left 提示文字' })
    buttonPos = await button.boundingBox()
    tooltipPos = await tooltip.boundingBox()

    // button + 高度 要小于 tooltip 的y
    expect(buttonPos.y + buttonPos.height).toBeLessThan(tooltipPos.y)
  })
})
