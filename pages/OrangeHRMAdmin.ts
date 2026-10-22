import {Page, Locator} from "@playwright/test";

export class Admin{
    private readonly page:Page;
    private readonly Admin:Locator;
    private readonly AddUser:Locator;
    private readonly UserRole:Locator;
    private readonly UserRoleDropDown:Locator;
    private readonly EmployeeName:Locator;
    private readonly status: Locator;
    private readonly statusState:Locator;
    private readonly UserName:Locator;
    private readonly Password:Locator;
    private readonly ConfirmPassword:Locator;
    private readonly Save:Locator;

    constructor(page:Page){
        this.page=page;
        this.Admin= page.getByText("Admin").first();
        this.AddUser =page.getByRole("button",{name:' Add '}).first();
        this.UserRole = page.locator(".oxd-select-wrapper").first();
        this.UserRoleDropDown = page.getByRole("listbox").getByText("Admin",{exact:true});
        this.EmployeeName = page.getByPlaceholder("Type for hints...");
        this.status=page.locator(".oxd-select-text-input").last();
        this.statusState = page.getByRole("listbox").getByText("Enabled",{exact:true});
        this.UserName=page.locator(".oxd-input-group").filter({hasText:"Username"}).locator("input");
        this.Password=page.locator(".oxd-input-group").filter({has:page.getByText("Password",{exact:true})}).locator("input");
        this.ConfirmPassword = page.locator(".oxd-input-group").filter({has:page.getByText("Confirm Password",{exact:true})}).locator("input");
        this.Save = page.getByRole("button",{name:' Save '});

    }

    async UserCreation(employeeName:string, username:string, password:string, ConfirmPassword:string){
        await this.Admin.click();
        await this.AddUser.click();
        await this.UserRole.click();
        await this.UserRoleDropDown.click();
        await this.EmployeeName.fill(employeeName);
        await this.status.click();
        await this.statusState.click();
        await this.UserName.fill(username);
        await this.Password.fill(password);
        await this.ConfirmPassword.fill(ConfirmPassword);
        await this.Save.click();


    }





}