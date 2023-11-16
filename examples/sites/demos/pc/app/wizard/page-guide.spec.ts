import { test, expect } from '@playwright/test'

test('页向导流程图', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('wizard#page-guide')

  const stepItems = page.locator('.tiny-wizard__steps-item')
  const buttons = page.locator('.tiny-wizard__button')
  const prev = buttons.getByRole('button', { name: '上一步' })
  const next = buttons.getByRole('button', { name: '下一步' })
  const save = buttons.getByRole('button', { name: '保存' })
  const charts = stepItems.locator('.tiny-wizard__chart')
  const prevClasss = [/is-ready/, /is-doing/]
  const nextClasss = [/is-ready/, /is-ready/, /is-doing/]

  await save.isVisible()
  await expect(charts).toHaveCount(5)
  for (let i = 0; i < 2; i++) {
    await expect(stepItems.nth(i)).toHaveClass(prevClasss[i])
    if (i === 1) {
      const currentNode = stepItems.nth(i).locator('.tiny-wizard__chart > span').nth(1)
      const { width, height } = await currentNode.boundingBox()
      await expect(currentNode).toHaveClass('tiny-wizard__chart-svg')
      await expect(width).toBeCloseTo(20)
      await expect(height).toBeCloseTo(22.67, 2)
    }
  }

  await next.click()
  for (let i = 0; i < 3; i++) {
    await expect(stepItems.nth(i)).toHaveClass(nextClasss[i])
    if (i === 2) {
      const currentNode = stepItems.nth(i).locator('.tiny-wizard__chart > span').nth(1)
      const { width, height } = await currentNode.boundingBox()
      await expect(currentNode).toHaveClass('tiny-wizard__chart-svg')
      await expect(width).toBeCloseTo(20)
      await expect(height).toBeCloseTo(22.67, 2)
    }
  }

  await prev.click()
  for (let i = 0; i < 2; i++) {
    await expect(stepItems.nth(i)).toHaveClass(prevClasss[i])
    if (i === 1) {
      const currentNode = stepItems.nth(i).locator('.tiny-wizard__chart > span').nth(1)
      const { width, height } = await currentNode.boundingBox()
      await expect(currentNode).toHaveClass('tiny-wizard__chart-svg')
      await expect(width).toBeCloseTo(20)
      await expect(height).toBeCloseTo(22.67, 2)
    }
  }
})
