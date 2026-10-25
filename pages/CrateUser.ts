import{Page,Locator} from "@playwright/test";


export class CreateNewUser{

        private readonly page:Page;
        private readonly Title:Locator;
        private readonly Password:Locator;
        private readonly Day:Locator;
        private readonly Month:Locator;
        private readonly Year:Locator;
        private readonly FirstName:Locator;
        private readonly LastName:Locator;
        private readonly Company:Locator;
        private readonly Address:Locator;
        private readonly Country:Locator;
        private readonly State:Locator;
        private readonly City:Locator;
        private readonly ZipCode:Locator;
        private readonly MobileNumber:Locator;
        private readonly CreateAccountBtn:Locator;

    constructor(page:Page){
        this.page=page;
        this.Title=page.getByRole("radio",{name:'Mr.',exact:true});
        this.Password=page.getByLabel("password").first();
        this.Day=page.locator("#days").first();
        this.Month=page.locator("#months").first();
        this.Year=page.locator("#years").first();
        this.FirstName=page.getByLabel("First name ");
        this.LastName=page.getByLabel("Last name ").first();
        this.Company=page.getByLabel("Company").first();
        this.Address=page.locator("#address1").first();
        this.Country=page.getByLabel("Country ").first();
        this.State=page.getByLabel("State ");
        this.City=page.getByLabel("City ");
        this.ZipCode=page.locator("#zipcode").first();
        this.MobileNumber=page.getByLabel("Mobile Number ");
        this.CreateAccountBtn=page.getByRole("button",{name:'Create Account'});
    }


    async CreateNewUser(password:string,firstname:string,lastname:string,company:string,address:string,
        state:string,city:string,zipcode:string,mobilenumber:string){

            await this.Title.check();
            await this.Password.fill(password);
            await this.Day.selectOption("5");
            await this.Month.selectOption("January");
            await this.Year.selectOption("1999");
            await this.FirstName.fill(firstname);
            await this.LastName.fill(lastname);
            await this.Company.fill(company);
            await this.Address.fill(address);
            await this.Country.selectOption("India");
            await this.State.fill(state);
            await this.City.fill(city);
            await this.ZipCode.fill(zipcode);
            await this.MobileNumber.fill(mobilenumber);
            await this.CreateAccountBtn.click();


    }




}