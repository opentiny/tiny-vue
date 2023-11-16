import { test, expect } from '@playwright/test'

test('时间线流程图', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('wizard#time-line-flow')

  const wizard = page.locator('.tiny-wizard__vertical.is-time-line-flow')
  const nodeLines = wizard.locator('.tiny-wizard__chart-line.is-time-line')
  const nodeIcons = wizard.locator('.tiny-wizard__time-wrapper > svg')
  const nodeDates = wizard.locator('.tiny-wizard__date > span').filter({ hasText: /2013-12-1/ })
  const wizardChilds = page.locator('.tiny-wizard__chart-children.is-ready')
  const childNodeLines = wizardChilds.locator('.tiny-wizard__chart-line')
  const childNodeIcons = wizardChilds.locator('.tiny-wizard__chart-icon')
  const childNodeDates = wizardChilds.locator('.tiny-wizard__date.time-line-text')
  const details = wizardChilds.locator('.tiny-wizard__chart-detail')
  const userNames = wizardChilds.getByRole('link')
  const texts = [/提交小红/, /转他人处理小胡/, /主管审批小张/]
  const expandBtns = page.getByRole('listitem').locator('svg')
  const xiaoHongTop = page
    .getByRole('tooltip', { name: '小红 部门：某部门 邮件：example@example.com 手机：1234567890' })
    .locator('div')
    .filter({ hasText: '小红工号：123456890' })
    .nth(3)
  const xiaoHongBottom = page
    .getByRole('tooltip', { name: '小红 部门：某部门 邮件：example@example.com 手机：1234567890' })
    .getByText('部门：某部门邮件：example@example.com手机：1234567890')

  await expect(nodeLines).toHaveCount(2)
  await expect(nodeDates).toHaveCount(2)
  await expect(childNodeLines).toHaveCount(3)
  await expect(childNodeIcons).toHaveCount(3)
  await expect(childNodeDates).toHaveCount(3)
  await expect(details).toHaveCount(3)
  await expect(userNames).toHaveCount(3)
  for (let i = 0; i < 3; i++) {
    await expect(childNodeLines.nth(i)).toHaveCSS('width', '4px')
    await expect(childNodeLines.nth(i)).toHaveCSS('height', '88px')
    await expect(details.nth(i)).toHaveText(texts[i])
    await expect(childNodeDates.nth(i)).toHaveText(/20*1*:50/)

    if (i === 2) {
      await expect(childNodeLines.nth(i)).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
    }
    if (i < 2) {
      await expect(nodeIcons.nth(i)).toHaveCSS('width', '16px')
      await expect(nodeIcons.nth(i)).toHaveCSS('height', '20px')
      await expect(nodeLines.nth(i)).toHaveCSS('width', '4px')
      await expect(nodeLines.nth(i)).toHaveCSS('height', '88px')
    }
  }

  await userNames.first().hover()
  await expect(xiaoHongTop).toBeVisible()
  await expect(xiaoHongBottom).toBeVisible()
  await expandBtns.nth(0).click()
  await expect(nodeLines).toHaveCount(2)
  await expect(nodeDates).toHaveCount(2)
  await expect(childNodeLines).toHaveCount(1)
  await expect(childNodeIcons).toHaveCount(1)
  await expect(childNodeDates).toHaveCount(1)
  await expect(details).toHaveCount(1)
  await expect(userNames).toHaveCount(1)
})
