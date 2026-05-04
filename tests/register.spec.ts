import { test, expect } from '@playwright/test';
import { SignupPage } from './pages/SignupPage';
import { AccountCreationPage } from './pages/AccountCreationPage';
import { generateNewUser, generateAccountData, invalidEmailFormat, validUser} from './data/Users';

test.describe('Register Tests', () => {
    test('REG-001 - User should be able to sign up for a new account successfully', async ({page}) => {
        //Arrange
        const signupPage = new SignupPage(page);
        const accountCreationPage = new AccountCreationPage(page);
        await signupPage.goto();
        //Act
        const user = generateNewUser();
        await signupPage.signup(user.name, user.email);
        const account = generateAccountData();
        await accountCreationPage.createAccount(account);
        //Assert
        await expect(page).toHaveURL('https://automationexercise.com/account_created');
        await expect(page.locator('[data-qa="account-created"]')).toBeVisible();
        //Act
        await accountCreationPage.continueToHome();
        //Assert
        await expect(page).toHaveURL('https://automationexercise.com/');
        await expect(page.locator('a:has-text("Logged in as")')).toBeVisible();
    });

    test ('REG-002 - User should not be able to register successfully with an empty Name', async ({page}) => {
        //Arrange
        const signupPage = new SignupPage(page);
        await signupPage.goto();
        //Act
        const user = generateNewUser();
        await signupPage.signup('', user.email);
        //Assert
        await expect (page).toHaveURL('https://automationexercise.com/login');
        await expect(page.locator('a:has-text("Logged in as")')).not.toBeVisible();
    });

     test ('REG-003 - User should not be able to register successfully with an empty Email Address', async ({page}) => {
        //Arrange
        const signupPage = new SignupPage(page);
        await signupPage.goto();
        //Act
        const user = generateNewUser();
        await signupPage.signup(user.name, '');
        //Assert
        await expect (page).toHaveURL('https://automationexercise.com/login');
        await expect(page.locator('a:has-text("Logged in as")')).not.toBeVisible();
    });



    test.describe ('Account Creation Mandatory Fields', () => {
        
        const missingFieldScenarios = [
            { field: 'password', data: { password: '', firstName: 'Rafhana', lastName: 'Test', address: '101 Kiteway Avenue', country: 'Singapore', state: 'Singapore', city: 'Singapore', zipcode: '121314', mobileNumber: '81238234'}},
            { field: 'firstName', data: { password: 'NewUser@1234', firstName: '', lastName: 'Test', address: '101 Kiteway Avenue', country: 'Singapore', state: 'Singapore', city: 'Singapore', zipcode: '121314', mobileNumber: '81238234'}},
            { field: 'lastName', data: { password: 'NewUser@1234', firstName: 'Rafhana', lastName: '', address: '101 Kiteway Avenue', country: 'Singapore', state: 'Singapore', city: 'Singapore', zipcode: '121314', mobileNumber: '81238234'}},
            { field: 'address', data: { password: 'NewUser@1234', firstName: 'Rafhana', lastName: 'Test', address: '', country: 'Singapore', state: 'Singapore', city: 'Singapore', zipcode: '121314', mobileNumber: '81238234'}},
            { field: 'state', data: { password: 'NewUser@1234', firstName: 'Rafhana', lastName: 'Test', address: '101 Kiteway Avenue', country: 'Singapore', state: '', city: 'Singapore', zipcode: '121314', mobileNumber: '81238234'}},
            { field: 'city', data: { password: 'NewUser@1234', firstName: 'Rafhana', lastName: 'Test', address: '101 Kiteway Avenue', country: 'Singapore', state: 'Singapore', city: '', zipcode: '121314', mobileNumber: '81238234'}},
            { field: 'zipcode', data: { password: 'NewUser@1234', firstName: 'Rafhana', lastName: 'Test', address: '101 Kiteway Avenue', country: 'Singapore', state: 'Singapore', city: 'Singapore', zipcode: '', mobileNumber: '81238234'}},
            { field: 'mobileNumber', data: { password: 'NewUser@1234', firstName: 'Rafhana', lastName: 'Test', address: '101 Kiteway Avenue', country: 'Singapore', state: 'Singapore', city: 'Singapore', zipcode: '121314', mobileNumber: ''}},
        ]; 
        
        for (const scenario of missingFieldScenarios) {
            test (`REG-004 - User should not be able to register successfully when ${scenario.field} is missing`, async ({page}) => {
                //Arrange
                const signupPage = new SignupPage(page);
                const accountCreationPage = new AccountCreationPage(page);
                await signupPage.goto(); 
                //Act
                const user = generateNewUser();
                await signupPage.signup(user.name, user.email);
                await accountCreationPage.createAccount(scenario.data);
                //Assert
                await expect(page).toHaveURL('https://automationexercise.com/signup');
                await expect(page).not.toHaveURL('https://automationexercise.com/account_created');
            });
        }   
    });

    test ('REG-005 - User should not be able to register successfully with an invalid Email Address format', async ({page}) => {
        //Arrange
        const signupPage = new SignupPage(page);
        await signupPage.goto();
        //Act
        const invalidEmail = invalidEmailFormat;
        await signupPage.signup(invalidEmail.name, invalidEmail.email);
        //Assert
        await expect(page).toHaveURL('https://automationexercise.com/login');
        await expect(page.locator('a:has-text("Logged in as")')).not.toBeVisible();
    });

    test ('REG-006 - User should not be able to register successfully with an existing account' ,async ({page}) => {
        //Arrange
        const signupPage = new SignupPage(page);
        await signupPage.goto();
        //Act
        const existingAccount = validUser;
        await signupPage.signup(existingAccount.name, existingAccount.email);
        //Assert
        await expect(page).toHaveURL('https://automationexercise.com/signup');
        await expect(signupPage.errorMessage).toContainText("Email Address already exist!");
        });
    });
