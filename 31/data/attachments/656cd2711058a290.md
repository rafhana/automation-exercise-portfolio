# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search.spec.ts >> Search Tests >> SEA-001 - User should be able to search for an existing product
- Location: tests/search.spec.ts:5:9

# Error details

```
TimeoutError: locator.fill: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('#search_product')

```

# Page snapshot

```yaml
- generic [ref=e4]: Please wait while your request is being verified...
```

# Test source

```ts
  1  | import {Page, Locator} from '@playwright/test';
  2  | 
  3  | export class SearchPage {
  4  |     readonly page: Page;
  5  |     readonly searchInput: Locator;
  6  |     readonly searchButton: Locator;
  7  |     readonly searchResults: Locator;
  8  | 
  9  |     constructor (page: Page) {
  10 |         this.page = page;
  11 |         this.searchInput = page.locator('#search_product');
  12 |         this.searchButton = page.locator('#submit_search');
  13 |         this.searchResults = page.locator('.productinfo');
  14 |     }
  15 | 
  16 |     async goto(){
  17 |         await this.page.goto('https://automationexercise.com/products', {
  18 |             waitUntil: 'domcontentloaded'
  19 |         });
  20 |     }
  21 |     async search(searchTerm: string){
> 22 |         await this.searchInput.fill(searchTerm);
     |                                ^ TimeoutError: locator.fill: Timeout 10000ms exceeded.
  23 |         await this.searchButton.click();
  24 |     }
  25 | }
```