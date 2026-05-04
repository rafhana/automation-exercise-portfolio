import {Page, Locator} from '@playwright/test';

export class AccountCreationPage{
    readonly page: Page;
    readonly password: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly address: Locator;
    readonly country: Locator;
    readonly state: Locator;
    readonly city: Locator;
    readonly zipcode: Locator;
    readonly mobileNumber: Locator;
    readonly createAccountButton: Locator;
    

    constructor (page:Page){
        this.page = page;
        this.password = page.getByRole('textbox', { name: 'Password *' });
        this.firstName = page.getByRole('textbox', { name: 'First name *' });
        this.lastName = page.getByRole('textbox', { name: 'Last name *' });
        this.address = page.getByRole('textbox', { name: 'Address * (Street address, P.' });
        this.country = page.getByLabel('Country *');
        this.state = page.getByRole('textbox', { name: 'State *' });
        this.city = page.getByRole('textbox', { name: 'City * Zipcode *' });
        this.zipcode = page.locator('#zipcode');
        this.mobileNumber = page.getByRole('textbox', { name: 'Mobile Number *' });
        this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
       

    }

    async createAccount (data: {
        password: string, 
        firstName: string, 
        lastName: string, 
        address: string, 
        country: string, 
        state: string, 
        city: string, 
        zipcode: string, 
        mobileNumber: string 
    }){
        await this.password.fill(data.password);
        await this.firstName.fill(data.firstName);
        await this.lastName.fill(data.lastName);
        await this.address.fill(data.address);
        await this.country.selectOption(data.country);
        await this.state.fill(data.state);
        await this.city.fill(data.city);
        await this.zipcode.fill(data.zipcode);
        await this.mobileNumber.fill(data.mobileNumber);
        await this.createAccountButton.click();
    }

    async continueToHome(){
    await this.page.locator('[data-qa="continue-button"]').click();
    }
}

//This page does not require async goto() as the URL page only appears AFTER the server processes your name and email in SignupPage.ts
//For reference in case I forget why:
    //LoginPage.goto() -> navigate directly
    //SignupPage.goto() -> navigates directly
    //AccountCreationPage -> can ONLY be reached through SignupPage