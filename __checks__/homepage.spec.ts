import { test, expect } from '@playwright/test'

function get_random_array_item(list) {
    return list[Math.floor((Math.random()*list.length))];
}

const get_links_from_page_locator = async (page, css_selector) => {
    return await page.$$eval(css_selector, (elements) => elements.map((element) => element.href))
}

test.describe('Shopware 6', () => {
    test('From Homepage via Category to Product', async ({ page }) => {
        let response = await page.goto(process.env.SHOPWARE_BASE_URL + '/')
            expect(response?.status()).toBeLessThan(400)

        var categoryLinks = await get_links_from_page_locator(page, '.nav-link')

        if (categoryLinks.length == 0) {
            return;
        }

        var categoryUrl = get_random_array_item(categoryLinks)

        response = await page.goto(categoryUrl)

        var productLinks = await get_links_from_page_locator(page, '.product-actions a')

        if (productLinks.length == 0) {
            return;
        }

        response = await page.goto(get_random_array_item(productLinks))
    })
    test('Add Products to Cart and Checkout as Guest', async ({ page }) => {
    })
    test('Add Products to Cart and Checkout as Logged-In User', async ({ page }) => {
    })
})
