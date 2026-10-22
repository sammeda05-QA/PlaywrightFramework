//without using Fixtures
/*import {test,expect} from "@playwright/test";

import{loginPage} from '../pages/OrangeHRMLogin';

test('Login In to OrangeHRM', async({page})=>{

const login = new loginPage(page);

await login.goto();
await login.login("Admin","admin123");

})*/

//With using fixtures

import{test, expect} from "../fixtures/OrangeHRMFixture";

test("Login OrangeHRM", async({LoginPage})=>{

    await LoginPage.goto();
    await LoginPage.login("Admin","admin123");

})