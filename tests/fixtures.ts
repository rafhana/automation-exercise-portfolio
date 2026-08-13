import { test as base } from '@playwright/test';

// Shared fixture: extends Playwright's base `test` so every spec file
// that imports `test` from here (instead of '@playwright/test') gets
// this behaviour automatically, with zero changes to any page object.
export const test = base.extend({
    page: async ({ page }, use) => {
        // Runs before every single test, on every browser (chromium/firefox/webkit).
        // Blocks Google's ad-serving domains so ads never load — meaning they
        // can't intercept clicks (ADD-001/ADD-002) or inject #google_vignette
        // into the URL (REG-001, LG-003, REG-004).
        await page.route(
            /doubleclick\.net|googlesyndication\.com|googleadservices\.com/,
            route => route.abort()
        );

        // Hand the now-protected page to the test.
        await use(page);
    },
});

export { expect } from '@playwright/test';