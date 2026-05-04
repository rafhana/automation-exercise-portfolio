import {Page, Locator} from '@playwright/test';

export class SignupPage{
    readonly page: Page;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly signupButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page){
        this.page = page;
        this.nameInput = page.getByRole('textbox', { name: 'Name' });
        this.emailInput = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
        this.signupButton = page.getByRole('button', { name: 'Signup' });
        this.errorMessage = page.locator('p:has-text("Email Address already exist!")');

    }

    async goto() {
    await this.page.goto('https://automationexercise.com/login', {
        waitUntil: 'domcontentloaded'
    });
    try {
        await this.page.keyboard.press('Escape');
    } catch {
        // No ad appeared, continue
    }
}

    async signup(name:string, email:string){
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.signupButton.click();
    }
}

//Notes for waitUntil:
//Think of thios like ordering food at a restaurant:
// - Without 'waitUntil' -> you order food and immediately walk up tp the kitchen to grab it before it's ready
// - waitUntil: 'networkidle' -> you wait until EVERY single person in the restaurant has finished ordering, eating and paying before you touch your food - too long!
// - waitUntil: 'domcontentloaded' -> you wait just until YOUR food arrives at your table - perfect timing!
// domcontentloaded means: "Wait until the main page HTML is ready - I don't care about the ads and other third party stuff still loading in the background".
//Start without any 'waitUntil'. Only add it if your tests are failing with timeout errors. Don't over-engineer from the start. Add complexity only when you need it.

//Notes for try,catch:
// try = "Attempt to do this action", catch = "If anything goes wrong or fails, don't panic - just do this instead"
//In this case:
// - if an ad popup appeared -> Escape closes it
// - if no ad appeared -> Escape does nothing, catch handles it gracefully
//Without try/catch, if Escape failed for any reason, the entire test would crash. With try/catch, it fails silently and move on.
//Simple rule to remember:
//try = "Attempt this", catch = "If it fails, do this instead or just move on"

//When to use each:

//waitUntil: 'domcontentloaded' - user when:
// - The site has lots of add or third party scripts
// - Tests are timing out waiting for the page to load
// - You only need the main content to be ready

//waitUntil - 'networkidle' - use when:
// - The site is simple with no ads
// - You need to wait for API calls to complete before interacting
// - You're testing a site you control yourself

//try/catch - use when:
// - An element might or might not exist
// - You want to attempt an action but don't want the test to fail if it doesn't work
// - Handling optional popups, cookie banner or ads

