import { test, expect } from '@playwright/test'

test('按钮事件', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).not.toBeNull())
  await page.goto('wizard#btn-events')

  const stepItems = page.locator('.tiny-wizard__steps-item')
  const buttons = page.locator('.tiny-wizard__button')
  const prev = buttons.getByRole('button', { name: '上一步' })
  const next = buttons.getByRole('button', { name: '下一步' })
  const save = buttons.getByRole('button', { name: '保存' })
  const submit = buttons.getByRole('button', { name: '提交' })
  const charts = stepItems.locator('.tiny-wizard__chart')
  const prevClasss = [/is-ready/, /is-doing/]
  const nextClasss = [/is-ready/, /is-ready/, /is-doing/]
  const modal = page.locator('.tiny-modal')

  await save.click()
  await expect(modal.nth(1)).toHaveText(/btn-save/)
  await expect(charts).toHaveCount(5)
  for (let i = 0; i < 2; i++) {
    await expect(stepItems.nth(i)).toHaveClass(prevClasss[i])
    if (i === 1) {
      const currentNode = stepItems.nth(i).locator('.tiny-wizard__chart > span').nth(1)
      const { width, height } = await currentNode.boundingBox()
      await expect(currentNode).toHaveClass('tiny-wizard__chart-svg')
      await expect(width).toBeGreaterThanOrEqual(20)
      await expect(height).toBeGreaterThanOrEqual(20)
    }
  }

  await next.click()
  await expect(modal.nth(2)).toHaveText(/btn-next/)
  for (let i = 0; i < 3; i++) {
    await expect(stepItems.nth(i)).toHaveClass(nextClasss[i])
    if (i === 2) {
      const currentNode = stepItems.nth(i).locator('.tiny-wizard__chart > span').nth(1)
      const { width, height } = await currentNode.boundingBox()
      await expect(currentNode).toHaveClass('tiny-wizard__chart-svg')
      await expect(width).toBeGreaterThanOrEqual(20)
      await expect(height).toBeGreaterThanOrEqual(20)
    }
  }

  await prev.click()
  await expect(modal.nth(3)).toHaveText(/btn-prev/)
  for (let i = 0; i < 2; i++) {
    await expect(stepItems.nth(i)).toHaveClass(prevClasss[i])
    if (i === 1) {
      const currentNode = stepItems.nth(i).locator('.tiny-wizard__chart > span').nth(1)
      const { width, height } = await currentNode.boundingBox()
      await expect(currentNode).toHaveClass('tiny-wizard__chart-svg')
      await expect(width).toBeGreaterThanOrEqual(20)
      await expect(height).toBeGreaterThanOrEqual(20)
    }
  }
  await next.click()
  await next.click()
  await next.click()
  await next.click()
  await submit.click()
  await expect(modal.nth(7)).toHaveText(/btn-submit/)
})
