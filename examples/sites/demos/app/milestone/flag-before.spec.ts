import { test, expect } from '@playwright/test'

test('旗帜数据来源前面节点', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('http://127.0.0.1:7130/pc/milestone/flag-before')

  const flags = page.locator('.tiny-milestone__flag-content')
  const flagLines = page.locator('.tiny-milestone__flag-line')
  const flagLineDots = flagLines.locator('.tiny-milestone__dot')
  const flagCount = 4
  const flagAfterContents = [/引导用户按照流程完成任务/, /test7欢迎使用vui/, /test8/, /test6/]
  const flagBeforeContents = [/test1已完成/, /引导用户按照流程完成任务/, /test7欢迎使用vui/, /test8/]
  const button = page.getByRole('button').filter({ hasText: '设置flag-before值为true' })
  const afterX = [370.47, 606.02, 648.84, 884.41]
  const BeforeX = [370.47, 498.95, 734.5, 777.33]
  const flagAfterLineColors = ['rgb(245, 34, 45)', 'rgb(245, 34, 45)', 'rgb(126, 211, 33)', 'rgb(94, 124, 224)']
  const flagBeforeLineColors = ['rgb(94, 124, 224)', 'rgb(245, 34, 45)', 'rgb(245, 34, 45)', 'rgb(126, 211, 33)']

  for (let i = 0; i < flagCount; i++) {
    const { x, y, width, height } = await flags.nth(i).boundingBox()

    await expect(x).toBeCloseTo(afterX[i], 2)
    await expect(y).toBeCloseTo(371, 2)
    await expect(width).toEqual(58)
    await expect(height).toEqual(34)
    await expect(flags.nth(i)).toHaveText(flagAfterContents[i])
    await expect(flagLines.nth(i)).toHaveCSS('width', '1px')
    await expect(flagLines.nth(i)).toHaveCSS('height', '30px')
    await expect(flagLines.nth(i)).toHaveCSS('background-color', flagAfterLineColors[i])
    await flagLineDots.nth(i).isVisible()
  }

  await button.click()

  for (let i = 0; i < flagCount; i++) {
    const { x, y, width, height } = await flags.nth(i).boundingBox()

    await expect(x).toBeCloseTo(BeforeX[i], 2)
    await expect(y).toBeCloseTo(371, 2)
    await expect(width).toEqual(58)
    await expect(height).toEqual(34)
    await expect(flags.nth(i)).toHaveText(flagBeforeContents[i])
    await expect(flagLines.nth(i)).toHaveCSS('width', '1px')
    await expect(flagLines.nth(i)).toHaveCSS('height', '30px')
    await expect(flagLines.nth(i)).toHaveCSS('background-color', flagBeforeLineColors[i])
    await flagLineDots.nth(i).isVisible()
  }
})
