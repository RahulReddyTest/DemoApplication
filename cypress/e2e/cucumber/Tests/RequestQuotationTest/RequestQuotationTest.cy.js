import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import RequestQuotation from "../../pages/RequestQuotationPage/RequestQuotationPage.cy";

const requestQuote = new RequestQuotation()

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

Given("user requests quote after successful login", () => {
    requestQuote.requestQuotationForUser();
});

When("user succesfully create a quote", () => {
    cy.log("user successfully created quote")
});

Then("user store the quote number to output file", () => {
    requestQuote.storeQuoteNumber();
});