import{test,expect} from "../fixtures/ProjectFixtures";

test("User Creation",async({page,HomePage,RegisterUser,createNewUser})=>{

    await HomePage.ProjectHomePage();

    await RegisterUser.NewCustomerRegestration("TestUser","TestUser123@test.com");

    await createNewUser.CreateNewUser("Test@123","Test","Testing","TestersPride","HAL 2nd stage"
        ,"Bihar","Gaya","123498","123456789"
    )

    await expect(page).toHaveURL("https://automationexercise.com/account_created");

    const SuccessMessage = page.getByText("Account Created!");

    await expect(SuccessMessage).toBeVisible();

})