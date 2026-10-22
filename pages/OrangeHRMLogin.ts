import{Page, Locator} from "@playwright/test";

//create a class with export 
export class loginPage{

    private readonly page:Page ;
    private readonly usernameInput:Locator;
    private readonly passwordInput:Locator;
    private readonly LoginButton:Locator;

// Constructor = here we write the locators 
constructor(page:Page){

    this.page=page;
    this.usernameInput = page.getByRole("textbox",{name:'Username'}).first();
    this.passwordInput = page.getByRole("textbox",{name:'Password'}).first();
    this.LoginButton = page.getByRole("button",{name:'Login',exact:true});
 

}
//Methods
async goto(){
    await this.page.goto('/');
}

async login(username:string,password:string){

    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.LoginButton.click();

}

}