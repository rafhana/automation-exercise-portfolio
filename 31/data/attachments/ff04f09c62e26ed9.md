# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: search.spec.ts >> Search Tests >> SEA-004 - User should be able to search for an item using pasted words
- Location: tests/search.spec.ts:50:9

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
  1  | import { test, expect } from '@playwright/test';
  2  | import { SearchPage } from './pages/SearchPage';
  3  | 
  4  | test.describe ('Search Tests', () => {
  5  |     test ('SEA-001 - User should be able to search for an existing product', async ({page}) => {
  6  |         //Arrange
  7  |         const searchPage = new SearchPage(page);
  8  |         await searchPage.goto();
  9  |         //Act
  10 |         await searchPage.search('Dress');
  11 |         //Assert
  12 |         await expect(page).toHaveURL('https://automationexercise.com/products?search=Dress');
  13 |         //Assert results exist
  14 |         const productNames = page.locator('.productinfo p'); //This counts how many product name elements were found on the page and stores that number in 'count'
  15 |         await expect(productNames).not.toHaveCount(0); //I expect the product results NOT to have zero items
  16 |         //Assert the heading confirms it's search results
  17 |         await expect(page.locator('h2.title')).toContainText('Searched Products');
  18 |         
  19 |     });
  20 | 
  21 |     test ('SEA-002 - There should NOT be any item listed if user search for a non-existing product', async ({page}) => {
  22 |         //Arrange
  23 |         const searchPage = new SearchPage(page);
  24 |         await searchPage.goto();
  25 |         //Act
  26 |         await searchPage.search('zqxc@#$_!');
  27 |         //Assert
  28 |         await expect(page).toHaveURL('https://automationexercise.com/products?search=zqxc@#$_!');
  29 |         //Assert result does not exist
  30 |         const productNames = page.locator('.productinfo p');
  31 |         await expect(productNames).toHaveCount(0);
  32 | 
  33 |     });
  34 | 
  35 |     test ('SEA-003 - User should be able to search for a product using keywords', async ({page}) => {
  36 |         //Arrange
  37 |         const searchPage= new SearchPage(page);
  38 |         await searchPage.goto();
  39 |         //Act
  40 |         await searchPage.search('tsh');
  41 |         //Assert
  42 |         await expect(page).toHaveURL('https://automationexercise.com/products?search=tsh');
  43 |         //Assert results exist
  44 |         const productNames = page.locator('.productinfo p');
  45 |         await expect(productNames).not.toHaveCount(0);
  46 |         //Assert the heading confirms it's search results
  47 |         await expect(page.locator('h2.title')).toContainText('Searched Products');
  48 |     });
  49 | 
  50 |     test ('SEA-004 - User should be able to search for an item using pasted words', async ({page}) => {
  51 |         //Arrange
  52 |         const searchPage = new SearchPage(page);
  53 |         await searchPage.goto();
  54 |         //Act
> 55 |         await searchPage.searchInput.fill('');
     |                                      ^ TimeoutError: locator.fill: Timeout 10000ms exceeded.
  56 |         await page.keyboard.insertText('Top');
  57 |         await searchPage.searchButton.click();
  58 |         //Assert
  59 |         await expect(page).toHaveURL('https://automationexercise.com/products?search=Top');
  60 |         //Assert results exist
  61 |         const productNames = page.locator('.productinfo p');
  62 |         await expect(productNames).not.toHaveCount(0);
  63 |         //Assert the heading confirms it's search results
  64 |         await expect(page.locator('h2.title')).toContainText('Searched Products');
  65 | 
  66 |     });
  67 | 
  68 | });
  69 | 
  70 | 
  71 | //Assert every result contains search term
  72 |         //const count = await productNames.count(); //Count how many products appeared in results
  73 |        // for (let i = 0; i < count; i++) { //Then for each product, one by one:
  74 |            // await expect(productNames.nth(i)).toContainText('Dress', { ignoreCase: true }); //Check that it contains the word "Dress" (regardless of uppercase or lowercase)
  75 |        // }
  76 | 
```