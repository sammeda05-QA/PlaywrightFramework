import{Page, Locator} from "@playwright/test";

export class dashBoard{

private readonly page:Page;
private readonly Admin : Locator;
private readonly PIM: Locator;
private readonly Leave:Locator;
private readonly Time: Locator;
private readonly Recuritement: Locator;
private readonly MyInfo: Locator;
private readonly Performance: Locator;
private readonly Dashboard:Locator;
private readonly Directory:Locator;
private readonly Maintenace:Locator;
private readonly claim:Locator;
private readonly Buzz:Locator;

constructor(page:Page){

    this.page=page;
    this.Admin= page.getByText("Admin").first();
    this.PIM=page.getByText("PIM").first();
    this.Leave=page.getByText("Leave").first();
    this.Time=page.getByText("Time").first();
    this.Recuritement=page.getByText("Recruitment").first();
    this.MyInfo=page.getByText("My Info").first();
    this.Performance=page.getByText("Performance").first();
    this.Dashboard=page.getByText("Performance").first();
    this.Directory=page.getByText("Directory").first();
    this.Maintenace=page.getByText("Maintenance").first();
    this.claim=page.getByText("Claim").first();
    this.Buzz=page.getByText("Buzz").first();
}

 async OrangeHrmDashboard(){

    await this.Admin.isVisible();


 }


}