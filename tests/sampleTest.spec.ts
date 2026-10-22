import{test,expect} from "@playwright/test";
import { beforeEach } from "node:test";

test.describe('loginTest',()=>{

    test.beforeEach(async({page})=>{
        await page.goto("https://sso.clouddev.alpha.kaplaninc.com/Login");

    })

    test('Valid Login',async({page})=>{
        const username= await page.locator("#Username").first();
        const Password = await page.locator("#Password").first();
        const button = await page.locator("#bds-login");
        await username.fill("kec\SSatishAdmuthe");
        await Password.fill("WolfSilent@2525");
        await button.click();

        const Banner = await page.getByText("You are in a development environment. Have fun!");
        await expect(Banner).toBeVisible();
        console.log("Login Successful");

    })

    test ('Invalid Login',async({page})=>{
       // const username= await page.locator("#Username").first();
        //const Password = await page.locator("#Password").first();
        const username = await page.getByRole("textbox",{name:'Username'});
        const Password = await page.getByRole("textbox",{name:'Password'});
        
        const button = await page.locator("#bds-login");
        await username.fill("kec\SSatishAdmuthe");
        await Password.fill("fSilent@2525");
        await button.click();

        const error = await page.getByText("Invalid Username or Password. Please try again.");
        await expect(error).toBeVisible();
        console.log(error,"Login Failed");

    })


})