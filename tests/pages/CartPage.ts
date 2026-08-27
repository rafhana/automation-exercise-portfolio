import {Page, Locator} from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly cartButton: Locator;
    readonly viewCartLink: Locator;
    readonly continueShoppingButton: Locator;
    readonly cartItems: Locator;

    constructor (page: Page) {
        this.page = page;
        this.cartButton = page.getByText('Add to cart').nth(1);
        this.viewCartLink = page.getByRole('link', { name: 'View Cart' });
        this.continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping' });
        this.cartItems = page.locator('.cart_info tbody tr');
    }

    async goto() {
        
        await this.page.goto('https://automationexercise.com/products', {
            waitUntil: 'domcontentloaded'
         });

         // Close iframe popup ad if it appears
        try {
            const adIframe = this.page.frameLocator('iframe[name^="aswift_"]');
            const closeButton = adIframe.getByRole('button', { name: 'Close ad' });
            await closeButton.waitFor({ state: 'visible', timeout: 5000 });
            await closeButton.click();
        } catch {
        // No popup ad appeared, continue
        }

        // Close bottom banner ad if it appears
        try {
            const bottomAd = this.page.locator('.grippy-host');
            await bottomAd.waitFor({ state: 'visible', timeout: 5000 });
            await bottomAd.click();
        } catch {
         // No bottom ad appeared, continue
        }
    }

    async addToCartAndView() {
        const product = this.page.locator('.product-image-wrapper').first(); // adjust selector to match your product card
        await product.hover();
        await this.cartButton.click();
        await this.viewCartLink.waitFor({ state: 'visible' });
        await this.viewCartLink.click();
    }

    async addToCartAndContinue() {
        const product = this.page.locator('.product-image-wrapper').first(); // adjust selector to match your product card
        await product.hover();
        await this.cartButton.click();
        await this.continueShoppingButton.waitFor({ state: 'visible'});
        await this.continueShoppingButton.click();
    }
}