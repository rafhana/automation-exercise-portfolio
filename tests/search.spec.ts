import { test, expect } from '@playwright/test';
import { SearchPage } from './pages/SearchPage';

test.describe ('Search Tests', () => {
    test ('SEA-001 - User should be able to search for an existing product', async ({page}) => {
        //Arrange
        const searchPage = new SearchPage(page);
        await searchPage.goto();
        //Act
        await searchPage.search('Dress');
        //Assert
        await expect(page).toHaveURL('https://automationexercise.com/products?search=Dress');
        //Assert results exist
        const productNames = page.locator('.productinfo p'); //This counts how many product name elements were found on the page and stores that number in 'count'
        await expect(productNames).not.toHaveCount(0); //I expect the product results NOT to have zero items
        //Assert the heading confirms it's search results
        await expect(page.locator('h2.title')).toContainText('Searched Products');
        
    });

    test ('SEA-002 - There should NOT be any item listed if user search for a non-existing product', async ({page}) => {
        //Arrange
        const searchPage = new SearchPage(page);
        await searchPage.goto();
        //Act
        await searchPage.search('zqxc@#$_!');
        //Assert
        await expect(page).toHaveURL('https://automationexercise.com/products?search=zqxc@#$_!');
        //Assert result does not exist
        const productNames = page.locator('.productinfo p');
        await expect(productNames).toHaveCount(0);

    });

    test ('SEA-003 - User should be able to search for a product using keywords', async ({page}) => {
        //Arrange
        const searchPage= new SearchPage(page);
        await searchPage.goto();
        //Act
        await searchPage.search('tsh');
        //Assert
        await expect(page).toHaveURL('https://automationexercise.com/products?search=tsh');
        //Assert results exist
        const productNames = page.locator('.productinfo p');
        await expect(productNames).not.toHaveCount(0);
        //Assert the heading confirms it's search results
        await expect(page.locator('h2.title')).toContainText('Searched Products');
    });

    test ('SEA-004 - User should be able to search for an item using pasted words', async ({page}) => {
        //Arrange
        const searchPage = new SearchPage(page);
        await searchPage.goto();
        //Act
        await searchPage.searchInput.fill('');
        await page.keyboard.insertText('Top');
        await searchPage.searchButton.click();
        //Assert
        await expect(page).toHaveURL('https://automationexercise.com/products?search=Top');
        //Assert results exist
        const productNames = page.locator('.productinfo p');
        await expect(productNames).not.toHaveCount(0);
        //Assert the heading confirms it's search results
        await expect(page.locator('h2.title')).toContainText('Searched Products');

    });

});


//Assert every result contains search term
        //const count = await productNames.count(); //Count how many products appeared in results
       // for (let i = 0; i < count; i++) { //Then for each product, one by one:
           // await expect(productNames.nth(i)).toContainText('Dress', { ignoreCase: true }); //Check that it contains the word "Dress" (regardless of uppercase or lowercase)
       // }
