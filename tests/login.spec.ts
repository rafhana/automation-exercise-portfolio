import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { validUser, invalidEmailUser, invalidPasswordUser, generateNewUser } from './data/Users';


test.describe ('Login Tests', () => {
    test ('LG-001 - User should login successfully with valid credentials', async ({page}) => {

        //Arrange
        const loginPage = new LoginPage(page);
        await loginPage.goto();

        //Act
        await loginPage.login(validUser.email, validUser.password);

        //Assert
        await expect (page).toHaveURL('https://automationexercise.com/');
        await expect(page.locator('a:has-text("Logged in as")')).toBeVisible();
    });

    test ('LG-002 - User should not be able to login with empty password', async ({page}) => { 

        //Arrange
        const loginPage = new LoginPage(page);
        await loginPage.goto();

        //Act
        await loginPage.login(validUser.email, '');

        //Assert
        await expect (page).toHaveURL('https://automationexercise.com/login');
        await expect(page.locator('a:has-text("Logged in as")')).not.toBeVisible();
    });

    test ('LG-003 - User should not be able to login with empty username', async ({page}) => {

        //Arrange
        const loginPage = new LoginPage(page);
        await loginPage.goto();

        //Act
        await loginPage.login( '', validUser.password);

        //Assert
        await expect (page).toHaveURL('https://automationexercise.com/login');
        await expect(page.locator('a:has-text("Logged in as")')).not.toBeVisible();
    });

    test ('LG-004 - User should not be able to login with invalid username', async ({page}) => {

        //Arrange
        const loginPage = new LoginPage(page);
        await loginPage.goto();

        //Act
        await loginPage.login( invalidEmailUser.email, invalidEmailUser.password);

        //Assert
        await expect (loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText ('Your email or password is incorrect!');
    });

    test ('LG-005 - User should not be able to login with invalid password', async ({page}) => {

        //Arrange
        const loginPage = new LoginPage(page);
        await loginPage.goto();

        //Act
        await loginPage.login( invalidPasswordUser.email, invalidPasswordUser.password);

        //Assert
        await expect (loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText ('Your email or password is incorrect!');
    });

    test ('LG-006 - User should not be able to log in with credentials that have not been registered', async ({page}) => {

        //Arrange
        const loginPage = new LoginPage(page);
        const newUser = generateNewUser();
        await loginPage.goto();

        //Act
        await loginPage.login( newUser.email, newUser.password);

        //Assert
        await expect (loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage).toContainText ('Your email or password is incorrect!');
    });
});
