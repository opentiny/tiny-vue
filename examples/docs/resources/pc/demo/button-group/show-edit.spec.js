import { test, expect } from '@playwright/test'

test('测试是否显示编辑按钮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/button-group/show-edit')

  const preview = page.locator('#preview')
  const buttonGroup = page.locator('.tiny-button-group').nth(1)

  // 判断点击事件是否正常
  await page.getByRole('button', { name: 'Button3' }).click()
  await expect(buttonGroup.locator('li').nth(2)).toHaveClass('active')
  await page.getByRole('button', { name: 'Button2' }).click()
  await expect(buttonGroup.locator('li').nth(1)).toHaveClass('active')
  await page.getByRole('button', { name: 'Button1' }).click()
  await expect(buttonGroup.locator('li').nth(0)).toHaveClass('active')
  await expect(buttonGroup.locator('button').nth(2)).toHaveText('Button3')
  await preview.getByRole('button').nth(3).click()
  await page.getByText('Button5').click()
  await expect(buttonGroup.locator('button').nth(2)).toHaveText('Button5')

  // 判断图标是否正确
  const moreButton = buttonGroup.getByRole('button').nth(3)
  const editButton = buttonGroup.getByRole('button').nth(4)
  const moreButtonSvg = moreButton.locator('svg path').first()
  const editButtonSvg = editButton.locator('svg path').first()
  const moreSvgPathReg = /^M292\.768 449\.694c2\.491\.515.+002-12.555-\.002z$/
  const editSvgPath = 'm14.6 6.6-7.5 7.6c-.3.3-.3.7 0 1 .1.1.4.2.5.2.1 0 .4-.1.5-.2l7.5-7.5c.3-.3.3-.7 0-1-.3-.3-.7-.3-1-.1z'
  await expect(moreButtonSvg).toHaveAttribute('d', moreSvgPathReg)
  await expect(editButtonSvg).toHaveAttribute('d', editSvgPath)
})
