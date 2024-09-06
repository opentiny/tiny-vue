import { test, expect } from '@playwright/test'

test('幽灵按钮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button#ghost')

  const demo = page.locator('#ghost')
  const getGhostBtn = (index: number) => demo.locator('.tiny-button').nth(index)

  // 主要幽灵按钮
  await expect(getGhostBtn(0)).toHaveCSS('color', 'rgb(94, 124, 224)')
  await expect(getGhostBtn(0)).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
  await expect(getGhostBtn(0)).toHaveCSS('border-bottom-color', 'rgb(94, 124, 224)')
  await page.waitForTimeout(100)
  await getGhostBtn(0).click()
  await page.waitForTimeout(100)
  await expect(getGhostBtn(0)).toHaveCSS('color', 'rgb(118, 147, 245)')
  await expect(getGhostBtn(0)).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
  await expect(getGhostBtn(0)).toHaveCSS('border-bottom-color', 'rgb(118, 147, 245)')

  // 默认幽灵按钮
  await page.waitForTimeout(1000)
  await expect(getGhostBtn(1)).toHaveCSS('color', 'rgb(37, 43, 58)')
  await expect(getGhostBtn(1)).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
  await expect(getGhostBtn(1)).toHaveCSS('border-bottom-color', 'rgb(173, 176, 184)')
  await page.waitForTimeout(100)
  await getGhostBtn(1).click()
  await page.waitForTimeout(100)
  await expect(getGhostBtn(1)).toHaveCSS('color', 'rgb(94, 124, 224)')
  await expect(getGhostBtn(1)).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
  await expect(getGhostBtn(1)).toHaveCSS('border-bottom-color', 'rgb(94, 124, 224)')

  // 成功幽灵按钮
  await expect(getGhostBtn(2)).toHaveCSS('color', 'rgb(80, 212, 171)')
  await expect(getGhostBtn(2)).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
  await expect(getGhostBtn(2)).toHaveCSS('border-bottom-color', 'rgb(80, 212, 171)')
  await page.waitForTimeout(100)
  await getGhostBtn(2).click()
  await page.waitForTimeout(100)
  await expect(getGhostBtn(2)).toHaveCSS('color', 'rgb(172, 242, 220)')
  await expect(getGhostBtn(2)).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
  await expect(getGhostBtn(2)).toHaveCSS('border-bottom-color', 'rgb(172, 242, 220)')

  // 信息幽灵按钮
  await expect(getGhostBtn(3)).toHaveCSS('color', 'rgb(37, 43, 58)')
  await expect(getGhostBtn(3)).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
  await expect(getGhostBtn(3)).toHaveCSS('border-bottom-color', 'rgb(37, 43, 58)')
  await page.waitForTimeout(100)
  await getGhostBtn(3).click()
  await page.waitForTimeout(100)
  await expect(getGhostBtn(3)).toHaveCSS('color', 'rgb(92, 97, 115)')
  await expect(getGhostBtn(3)).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
  await expect(getGhostBtn(3)).toHaveCSS('border-bottom-color', 'rgb(92, 97, 115)')

  // 告警幽灵按钮
  await expect(getGhostBtn(4)).toHaveCSS('color', 'rgb(250, 152, 65)')
  await expect(getGhostBtn(4)).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
  await expect(getGhostBtn(4)).toHaveCSS('border-bottom-color', 'rgb(250, 152, 65)')
  await page.waitForTimeout(100)
  await getGhostBtn(4).click()
  await page.waitForTimeout(100)
  await expect(getGhostBtn(4)).toHaveCSS('color', 'rgb(250, 194, 10)')
  await expect(getGhostBtn(4)).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
  await expect(getGhostBtn(4)).toHaveCSS('border-bottom-color', 'rgb(250, 194, 10)')

  // 危险幽灵按钮
  await expect(getGhostBtn(5)).toHaveCSS('color', 'rgb(199, 0, 11)')
  await expect(getGhostBtn(5)).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
  await expect(getGhostBtn(5)).toHaveCSS('border-bottom-color', 'rgb(199, 0, 11)')
  await page.waitForTimeout(100)
  await getGhostBtn(5).click()
  await page.waitForTimeout(100)
  await expect(getGhostBtn(5)).toHaveCSS('color', 'rgb(214, 74, 82)')
  await expect(getGhostBtn(5)).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
  await expect(getGhostBtn(5)).toHaveCSS('border-bottom-color', 'rgb(214, 74, 82)')
})
