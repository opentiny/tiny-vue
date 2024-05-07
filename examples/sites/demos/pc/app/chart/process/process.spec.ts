import { test, expect } from '@playwright/test'

test('base', async ({ page }) => {
    await page.goto('chart-process#process-base')
    const chart = page.locator('#process-base .hui-chart')
    await expect(chart).toHaveScreenshot('base.png')
})

test('demo2', async ({ page }) => {
    await page.goto('chart-process#process-demo2')
    const chart = page.locator('#process-demo2 .hui-chart')
    await expect(chart).toHaveScreenshot('demo2.png')
})

test('demo3', async ({ page }) => {
    await page.goto('chart-process#process-demo3')
    const chart = page.locator('#process-demo3 .hui-chart')
    await expect(chart).toHaveScreenshot('demo3.png')
})

test('demo4', async ({ page }) => {
    await page.goto('chart-process#process-demo4')
    const chart = page.locator('#process-demo4 .hui-chart')
    await expect(chart).toHaveScreenshot('demo4.png')
})

test('demo5', async ({ page }) => {
    await page.goto('chart-process#process-demo5')
    const chart = page.locator('#process-demo5 .hui-chart')
    await expect(chart).toHaveScreenshot('demo5.png')
})

test('demo6', async ({ page }) => {
    await page.goto('chart-process#process-demo6')
    const chart = page.locator('#process-demo6 .hui-chart')
    await expect(chart).toHaveScreenshot('demo6.png')
})
