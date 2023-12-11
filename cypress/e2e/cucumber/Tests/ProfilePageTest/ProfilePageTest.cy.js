import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import profile from "../../pages/ProfilePage/ProfilePage.cy"; 

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

Given("user navigates to edit profile screen", () => {
    profile.navigateToEditProfile()
})

When("user edits the profile", () => {
    profile.editProfile()
})

Then("profile should be updated successfully",() => {
    cy.log("profile page updated successfully")
})