import {Page,Locator} from "@playwright/test";

export class homePage{

    private readonly page:Page;
    
    constructor (page:Page){

        this.page=page;

    }


    async ProjectHomePage(){

        await this.page.goto('/');
    }


}