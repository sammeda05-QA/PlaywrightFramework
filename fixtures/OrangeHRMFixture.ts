import {test as base} from "@playwright/test";

import{loginPage} from "../pages/OrangeHRMLogin";
import {Admin} from "../pages/OrangeHRMAdmin";

type MyFixtures={
    LoginPage:loginPage;
    admin:Admin;
}

export const test = base.extend<MyFixtures>({

LoginPage:async({page},use)=>{

    const LoginPage = new loginPage(page);
    await use(LoginPage);
},

admin:async({page},use)=>{
    const admin = new Admin(page);
    await use(admin);
}


})
export { expect } from "@playwright/test";