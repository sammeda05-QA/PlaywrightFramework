import{test,expect,Locator} from "@playwright/test";

import{loginPage} from "../pages/OrangeHRMLogin";
import{dashBoard} from "../pages/OrangeHRMDashboard";

test("Verify DashBoard Elements", async({page})=>{

    const login = new loginPage(page);
    await login.goto();
    await login.login("Admin","admin123");
    
    const HrmDashboard = new dashBoard(page);
    await HrmDashboard.OrangeHrmDashboard();



})