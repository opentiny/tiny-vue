import { test, expect } from '@playwright/test'

test('基础用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('container#basic-usage')

  const preview = page.locator('.pc-demo-container')
  const header = preview.locator('.tiny-container__header')
  const aside = preview.locator('.tiny-container__aside')
  const main = preview.locator('.tiny-container__main')
  const footer = preview.locator('.tiny-container__footer')
  const btnCalssic = preview.getByText('经典')
  const btnSimple = preview.getByText('简约')
  const btnfashion = preview.getByText('时尚')
  const btnlegend = preview.getByText('传奇')

  // 默认显示
  await expect(header).toHaveText('Header')
  await expect(main).toHaveCSS('top', '60px')
  await expect(main).toHaveCSS('left', '200px')
  await page.waitForTimeout(20)

  // 经典模式
  await btnCalssic.click()
  await expect(footer).toHaveText('Footer')
  await expect(main).toHaveCSS('top', '60px')
  await expect(main).toHaveCSS('bottom', '60px')
  await expect(main).toHaveCSS('left', '0px')
  await page.waitForTimeout(20)

  // 简约
  await btnSimple.click()
  await expect(header).toHaveCount(0)
  await expect(main).toHaveCSS('top', '0px')
  await expect(main).toHaveCSS('left', '200px')
  await page.waitForTimeout(20)

  // 时尚
  await btnfashion.click()
  await expect(header).toHaveCount(1)
  await expect(header).toHaveCSS('top', '0px')
  await expect(header).toHaveCSS('left', '200px')
  await expect(main).toHaveCSS('top', '60px')
  await expect(main).toHaveCSS('left', '200px')
  await page.waitForTimeout(20)

  // 传奇
  await btnlegend.click()
  await expect(header).toHaveCount(1)
  await expect(main).toHaveCSS('top', '60px')
  await expect(main).toHaveCSS('left', '200px')
  await expect(aside).toHaveCSS('top', '60px')
  await expect(footer).toHaveCSS('left', '200px')
})
