# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Login Tests >> LG-002 - User should not be able to login with empty password
- Location: tests/login.spec.ts:21:9

# Error details

```
TimeoutError: locator.fill: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('[data-qa="login-email"]')

```

# Page snapshot

```yaml
- generic [ref=e4]: Please wait while your request is being verified...
```

# Test source

```ts
  1  | import {Page, Locator} from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |     readonly page: Page;
  5  |     readonly usernameInput: Locator;
  6  |     readonly passwordInput: Locator;
  7  |     readonly loginButton: Locator;
  8  |     readonly errorMessage: Locator;
  9  | 
  10 |     constructor (page: Page) {
  11 |         this.page = page;
  12 |         this.usernameInput = page.locator('[data-qa="login-email"]');
  13 |         this.passwordInput = page.locator('[data-qa="login-password"]');
  14 |         this.loginButton = page.locator('[data-qa="login-button"]');
  15 |         this.errorMessage = page.locator('p:has-text("Your email or password is incorrect!")');
  16 |     }
  17 | 
  18 |     async goto() {
  19 |         await this.page.goto('https://automationexercise.com/login');
  20 |     }
  21 | 
  22 |     async login(username: string, password: string){
> 23 |         await this.usernameInput.fill(username);
     |                                  ^ TimeoutError: locator.fill: Timeout 10000ms exceeded.
  24 |         await this.passwordInput.fill(password);
  25 |         await this.loginButton.click();
  26 |     }
  27 | }
```