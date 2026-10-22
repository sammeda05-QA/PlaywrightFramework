import {test,expect} from "../fixtures/OrangeHRMFixture";

test("Create User",async({LoginPage,admin,page})=>{

await LoginPage.goto();
await LoginPage.login("Admin","admin123");

const PageURL = page.url();
if(PageURL==="https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"){
    console.log("User Logged in successfully");
}

await admin.UserCreation("Ranga  Akunuri","Samm05","WolfSilent@2222","WolfSilent@2222");

})