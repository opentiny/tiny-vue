import { test, expect } from '@playwright/test'

test('测试更多按钮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button-group#show-more')

  const demo = page.locator('#show-more')
  const buttonGroup = demo.locator('.tiny-button-group')

  // 判断点击事件是否正常
  await demo.getByRole('button', { name: 'Button3' }).click()
  await expect(buttonGroup.locator('li').nth(2)).toHaveClass('active')
  await demo.getByRole('button', { name: 'Button2' }).click()
  await expect(buttonGroup.locator('li').nth(1)).toHaveClass('active')
  await demo.getByRole('button', { name: 'Button1' }).click()
  await expect(buttonGroup.locator('li').nth(0)).toHaveClass('active')
  await expect(buttonGroup.locator('button').nth(2)).toHaveText('Button3')
  await demo.getByRole('button').nth(3).click()
  await page.locator('.tiny-popper').getByText('Button5').click()
  await expect(buttonGroup.locator('button').nth(2)).toHaveText('Button5')

  // 判断图标是否正确
  const moreButton = buttonGroup.getByRole('button').nth(3)
  const moreButtonSvg = moreButton.locator('svg path').first()
  const moreSvgPathReg = /^M292\.768 449\.694c2\.491\.515.+002-12.555-\.002z$/
  await expect(moreButtonSvg).toHaveAttribute('d', moreSvgPathReg)
})
