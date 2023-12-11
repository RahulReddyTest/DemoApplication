import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import logout from "../../pages/LogoutPage/LogoutPage.cy";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

When("user logout from the application", () => {
    logout.userLogout();
})

Then("user should be able to logout from application",() => {
    cy.log("user logged out successfully")
})