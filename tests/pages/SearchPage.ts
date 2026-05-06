import {Page, Locator} from '@playwright/test';

export class SearchPage {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly searchResults: Locator;

    constructor (page: Page) {
        this.page = page;
        this.searchInput = page.locator('#search_product');
        this.searchButton = page.locator('#submit_search');
        this.searchResults = page.locator('.productinfo');
    }

    async goto(){
        await this.page.goto('https://automationexercise.com/products', {
            waitUntil: 'domcontentloaded'
        });
    }
    async search(searchTerm: string){
        await this.searchInput.fill(searchTerm);
        await this.searchButton.click();
    }
}