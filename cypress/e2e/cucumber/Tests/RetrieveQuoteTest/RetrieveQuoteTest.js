import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import RetrieveQuotation from "../../pages/RetrieveQuote/RetrieveQuote.cy";

const retrieveQuotation = new RetrieveQuotation();

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

Given("user retreive quote after successful login", () => {
    retrieveQuotation.retrieveQuotation();
});


Then("user verify quote retrieval", () => {
    retrieveQuotation.validateRetrieval();
});