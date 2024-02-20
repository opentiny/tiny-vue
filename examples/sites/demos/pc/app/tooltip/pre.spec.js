import { test, expect } from '@playwright/test'

test('测试Tooltip的是否能出现', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())

  await page.goto('tooltip#basic-usage')

  const preview = page.locator('.pc-demo-container')
  let button = preview.getByRole('button', { name: '上左' })
  let tooltip = page.getByRole('tooltip', { name: 'Top Left 提示文字' })

  await page.waitForTimeout(100)
  await page.mouse.move(600, 300)
  await expect(tooltip).toBeVisible()

  // 测试Tooltip的位置是否正确
  button = preview.getByRole('button', { name: '上右' })
  tooltip = page.getByRole('tooltip', { name: 'Top Right 提示文字' })

  await button.hover()
  let buttonBox = await button.boundingBox()
  let tooltipBox = await tooltip.boundingBox()

  // tooltip + 高度 要小于button的y
  expect(tooltipBox.y + tooltipBox.height).toBeLessThan(buttonBox.y)

  button = preview.getByRole('button', { name: '下左' })
  tooltip = page.getByRole('tooltip', { name: 'Bottom Left 提示文字' })

  await button.hover()
  buttonBox = await button.boundingBox()
  tooltipBox = await tooltip.boundingBox()

  // button + 高度 要小于 tooltip 的y
  expect(buttonBox.y + buttonBox.height).toBeLessThan(tooltipBox.y)
})
