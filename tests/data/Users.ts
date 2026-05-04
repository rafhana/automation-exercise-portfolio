const firstName = 'Rafhana';
const lastName = 'Test';

export const generateNewUser = () => ({
    name: `${firstName} ${lastName}`,
    email: `testuser_${Date.now()}@gmail.com`
})

export const generateAccountData = () => ({
    password: 'NewUser@1234',
    firstName,
    lastName,
    address: '101 Kiteway Avenue',
    country: 'Singapore',
    state: 'Singapore',
    city: 'Singapore',
    zipcode: '121314',
    mobileNumber: '81238234'
})

export const invalidEmailFormat = {
    name: 'Rafhana Test', 
    email: 'invalidemailformat.con'    
}

export const validUser = {
    name: 'Rafhana Ramlee',
    email: 'ctrafhana@gmail.com',
    password: 'Hellomynameis@1212'
}

export const invalidEmailUser = {
    email: 'wronguser@gmail.com', 
    password: 'Hellomynameis@1212'  //correct password, wrong email
}

export const invalidPasswordUser = {
    email: 'ctrafhana@gmail.com',    //correct email, wrong password
    password: 'wrongpassword'    
}


// Test Data Cleanup Process (In case generate new user is not the way to go)

//Method 1 — afterEach / afterAll hooks in Playwright
//Playwright has built-in hooks that run automatically after tests:

//test.afterEach(async ({ page }) => {
    // Run cleanup code here after every test
    // e.g. delete the user via API call
    //await deleteUserViaApi(newUser.email);
//});

//test.afterAll(async ({ page }) => {
    // Run cleanup once after ALL tests finish
//});

//Think of it like:
//afterEach = clean up after every single test
//afterAll = clean up once at the very end


//Method 2 — API Teardown
//Instead of deleting through the UI (slow and fragile), most companies delete test data directly via API calls after tests complete:

//test.afterEach(async ({ request }) => {
    //await request.delete(`https://api.example.com/users/${newUser.email}`, {
        //headers: { 'Authorization': `Bearer ${adminToken}` }
    //});
//});

//This is the most common approach in real companies because:
    // - It's fast
    // - It doesn't depend on UI elements
    // - It's reliable

//Method 3 — Database Seeding and Resetting
//Larger companies use a test database that gets completely reset before every test run. A script wipes everything and seeds fresh data:

//# Run before test suite
//npm run db:reset
//npm run db:seed

//This is the most robust approach but requires infrastructure setup — usually handled by DevOps or a senior engineer.