import{test,expect} from "../fixtures/ProjectFixtures";

test("Verify HomePage",async({page,HomePage})=>{

    await HomePage.ProjectHomePage();

    const URL = page.url();
    console.log(URL);
    
    await expect(page).toHaveURL("https://automationexercise.com/");

})