import {Page,Locator} from "@playwright/test";

export class registerUser{

    private readonly page:Page;
    private readonly SignUp :Locator;
    private readonly Name: Locator;
    private readonly Email: Locator;
    private readonly SingupButton:Locator;

    constructor(page:Page){
        this.page=page;
        this.SignUp= page.getByRole("link",{name:'Signup / Login'}).first();
        this.Name=page.getByPlaceholder("Name");
        this.Email=page.getByPlaceholder("Email Address").nth(1);
        this.SingupButton=page.getByRole("button",{name:'Signup',exact:true});
    }

    async NewCustomerRegestration(CustoermName:string,CustomerEmail:string){

       await this.SignUp.click();
       await this.Name.fill(CustoermName);
       await this.Email.fill(CustomerEmail);
       await this.SingupButton.click();

    }





}