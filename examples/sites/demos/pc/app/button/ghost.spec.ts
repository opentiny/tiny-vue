import { test, expect } from '@playwright/test'

test('幽灵按钮', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('button#ghost')

  const demo = page.locator('#ghost')
  const getGhostBtn = (index: number) => demo.locator('.tiny-button').nth(index)

  // 主要幽灵按钮
  await expect(getGhostBtn(0)).toHaveCSS('color', 'rgb(25, 25, 25)')
  await expect(getGhostBtn(0)).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
  await expect(getGhostBtn(0)).toHaveCSS('border-bottom-color', 'rgb(89, 89, 89)')

  // 次要幽灵按钮
  await expect(getGhostBtn(1)).toHaveCSS('color', 'rgb(89, 89, 89)')
  await expect(getGhostBtn(1)).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
  await expect(getGhostBtn(1)).toHaveCSS('border-bottom-color', 'rgb(128, 128, 128)')

  // 成功幽灵按钮
  await expect(getGhostBtn(2)).toHaveCSS('color', 'rgb(92, 179, 0)')
  await expect(getGhostBtn(2)).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
  await expect(getGhostBtn(2)).toHaveCSS('border-bottom-color', 'rgb(92, 179, 0)')

  // 信息幽灵按钮
  await expect(getGhostBtn(3)).toHaveCSS('color', 'rgb(20, 118, 255)')
  await expect(getGhostBtn(3)).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
  await expect(getGhostBtn(3)).toHaveCSS('border-bottom-color', 'rgb(20, 118, 255)')

  // 告警幽灵按钮
  await expect(getGhostBtn(4)).toHaveCSS('color', 'rgb(255, 136, 0)')
  await expect(getGhostBtn(4)).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
  await expect(getGhostBtn(4)).toHaveCSS('border-bottom-color', 'rgb(255, 136, 0)')

  // 危险幽灵按钮
  await expect(getGhostBtn(5)).toHaveCSS('color', 'rgb(242, 48, 48)')
  await expect(getGhostBtn(5)).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
  await expect(getGhostBtn(5)).toHaveCSS('border-bottom-color', 'rgb(242, 48, 48)')
})
