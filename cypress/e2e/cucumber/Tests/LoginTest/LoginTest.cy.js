import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import login from "../../pages/LoginPage/LoginPage.cy";
import loginFailure from "../../pages/LoginPage/LoginFailure.cy";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

Given("user navigates to demo application", () => {
    login.navigateToApplication();
});

When("user provides required details in login page", () => {

    login.userLogin("testUSerAUtomation@gmail.com","Raju12345@");
});

Then("user should not be able to login to application",() => {
    loginFailure.loginFailure();
})

When("user provides invalid details in login page", () => {

    loginFailure.loginWithInvalidCredentials("test","Raju12345@");
});

Then("user should be able to login into application successfully", () => {
login.validateLogin();
});