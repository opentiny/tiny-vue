import { test, expect } from '@playwright/test'

const sleep = (delay: number) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(true)
    }, delay)
  )

test('ProcessDesigner 自定义Modeler', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('process-designer#events')
  expect((await page.waitForSelector('div > div.tiny-notify__message-zone > div > p')).isVisible()).toBeTruthy()
  await page.locator('#events > div > div.pc-demo-container > div > div > button:nth-child(2)').click()
  expect(
    await page
      .locator('#render > div > div > svg > g > g.layer-root-1 > g:nth-child(3) > g > rect.djs-hit.djs-hit-all')
      .isVisible()
  ).toBeTruthy()
  await sleep(2000)
  await page.locator('#events > div > div.pc-demo-container > div > div > button:nth-child(3)').click()
  expect(await page.locator('div > div.tiny-notify__message-zone > div > p').isVisible()).toBeTruthy()
})
