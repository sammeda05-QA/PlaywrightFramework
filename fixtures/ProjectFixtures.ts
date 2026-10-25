import {test as base} from "@playwright/test";

import { homePage} from "../pages/Homepage";
import{registerUser} from "../pages/RegisterUser";
import{CreateNewUser} from "../pages/CrateUser";

type MyFixtures={
    HomePage:homePage;
    RegisterUser:registerUser;
    createNewUser:CreateNewUser;

}

export const test = base.extend<MyFixtures>({

    HomePage:async({page},use)=>{
        const HomePage = new homePage(page);
         await use(HomePage);
    }
,
    RegisterUser:async({page},use)=>{
        const RegisterUser = new registerUser(page);
        await use(RegisterUser);
    }
 ,
 
    createNewUser:async({page},use)=>{
        const createNewUser = new CreateNewUser(page);
        await use(createNewUser);
    }

})

 export{expect} from "@playwright/test";