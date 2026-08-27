# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: register.spec.ts >> Register Tests >> Account Creation Mandatory Fields >> REG-004 - User should not be able to register successfully when city is missing
- Location: tests/register.spec.ts:67:17

# Error details

```
TimeoutError: locator.fill: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Name' })

```

# Page snapshot

```yaml
- generic [ref=e4]: Please wait while your request is being verified...
```

# Test source

```ts
  1  | import {Page, Locator} from '@playwright/test';
  2  | 
  3  | export class SignupPage{
  4  |     readonly page: Page;
  5  |     readonly nameInput: Locator;
  6  |     readonly emailInput: Locator;
  7  |     readonly signupButton: Locator;
  8  |     readonly errorMessage: Locator;
  9  | 
  10 |     constructor(page: Page){
  11 |         this.page = page;
  12 |         this.nameInput = page.getByRole('textbox', { name: 'Name' });
  13 |         this.emailInput = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
  14 |         this.signupButton = page.getByRole('button', { name: 'Signup' });
  15 |         this.errorMessage = page.locator('p:has-text("Email Address already exist!")');
  16 | 
  17 |     }
  18 | 
  19 |     async goto() {
  20 |     await this.page.goto('https://automationexercise.com/login', {
  21 |         waitUntil: 'domcontentloaded'
  22 |     });
  23 |     try {
  24 |         await this.page.keyboard.press('Escape');
  25 |     } catch {
  26 |         // No ad appeared, continue
  27 |     }
  28 | }
  29 | 
  30 |     async signup(name:string, email:string){
> 31 |         await this.nameInput.fill(name);
     |                              ^ TimeoutError: locator.fill: Timeout 10000ms exceeded.
  32 |         await this.emailInput.fill(email);
  33 |         await this.signupButton.click();
  34 |     }
  35 | }
  36 | 
  37 | //Notes for waitUntil:
  38 | //Think of thios like ordering food at a restaurant:
  39 | // - Without 'waitUntil' -> you order food and immediately walk up tp the kitchen to grab it before it's ready
  40 | // - waitUntil: 'networkidle' -> you wait until EVERY single person in the restaurant has finished ordering, eating and paying before you touch your food - too long!
  41 | // - waitUntil: 'domcontentloaded' -> you wait just until YOUR food arrives at your table - perfect timing!
  42 | // domcontentloaded means: "Wait until the main page HTML is ready - I don't care about the ads and other third party stuff still loading in the background".
  43 | //Start without any 'waitUntil'. Only add it if your tests are failing with timeout errors. Don't over-engineer from the start. Add complexity only when you need it.
  44 | 
  45 | //Notes for try,catch:
  46 | // try = "Attempt to do this action", catch = "If anything goes wrong or fails, don't panic - just do this instead"
  47 | //In this case:
  48 | // - if an ad popup appeared -> Escape closes it
  49 | // - if no ad appeared -> Escape does nothing, catch handles it gracefully
  50 | //Without try/catch, if Escape failed for any reason, the entire test would crash. With try/catch, it fails silently and move on.
  51 | //Simple rule to remember:
  52 | //try = "Attempt this", catch = "If it fails, do this instead or just move on"
  53 | 
  54 | //When to use each:
  55 | 
  56 | //waitUntil: 'domcontentloaded' - user when:
  57 | // - The site has lots of add or third party scripts
  58 | // - Tests are timing out waiting for the page to load
  59 | // - You only need the main content to be ready
  60 | 
  61 | //waitUntil - 'networkidle' - use when:
  62 | // - The site is simple with no ads
  63 | // - You need to wait for API calls to complete before interacting
  64 | // - You're testing a site you control yourself
  65 | 
  66 | //try/catch - use when:
  67 | // - An element might or might not exist
  68 | // - You want to attempt an action but don't want the test to fail if it doesn't work
  69 | // - Handling optional popups, cookie banner or ads
  70 | 
  71 | 
```