import{test,expect} from "@playwright/test";
import { stringToToken } from "typescript/unstable/ast";
import { updateShorthandPropertyAssignment } from "typescript/unstable/ast/factory";

test('Verify Locators',async({page})=>{

    await page.goto("https://www.saucedemo.com/");

    const username =  page.getByRole("textbox",{name:'Username'});
    //const username =  page.getByPlaceholder("Username").first();
    const password =  page.getByRole("textbox",{name:'Password'});
   // const password =  page.getByPlaceholder("Password").first();

    await username.fill("standard_user");
    await password.fill("secret_sauce");

    const button =  page.getByRole("button",{name:'Login'});
    await button.click();

    const bagpack =  page.getByRole("button",{name:'Sauce Labs Backpack'}).first();
    //const bagpack = page.getByRole("link",{name:'Sauce Labs Backpack'});

    await bagpack.click();

    const cart = page.getByRole("button",{name:'Cart, 1 items'});
    await cart.click();

    const checkout = page.getByRole("button",{name:'Checkout'});
    await checkout.click();



})