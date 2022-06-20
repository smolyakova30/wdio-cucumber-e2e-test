import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google page is opened$/, async function(){
    browser.url("https://google.com")
})

When(/Search with (.*)$/, async function(searchItem){
console.log(`>> sarchItem: ${searchItem}`)
let ele = $(`[name=q]`)
await ele.setValue(searchItem)
await browser.keys("Enter")
})

Then(/Click on the first search results$/, async function(){
 let ele = await $(`<h3>`)
 ele.click();
})

Then(/URL should match (.*)$/, async function(expectedURL){
console.log(`>>expectedURL: ${expectedURL} `);
let url = await browser.getUrl();
chai.expect(url).to.equal(expectedURL);
})
