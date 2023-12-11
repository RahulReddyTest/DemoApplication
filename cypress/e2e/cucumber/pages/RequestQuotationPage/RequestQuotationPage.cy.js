
const requestQuotation = require("../../../../../PageObjects/PageElements/RequestQuotation.json")
const {writeFileData} = require("../../../../../PageObjects/PageActions/ReadAndWriteData")
export default class RequestQuotation{

    requestQuotationForUser(){
        cy.get("a").contains("Request Quotation").click();
        cy.get(requestQuotation.RequestQuotation.incidents_txt).type("2");
        cy.get(requestQuotation.RequestQuotation.regestration_txt).type("233333");
        cy.get(requestQuotation.RequestQuotation.anualMileage_txt).type("123");
        cy.get(requestQuotation.RequestQuotation.estimatedValue_txt).type("1234");
        cy.get(requestQuotation.RequestQuotation.parkingLocation_drp).select("Public place");
        cy.get(requestQuotation.RequestQuotation.startOfPolicy_year_drp).select("2023");
        cy.get(requestQuotation.RequestQuotation.startOfPolicy_month_drp).select("December");
        cy.get(requestQuotation.RequestQuotation.startOfPolicy_date_drp).select("1");
        cy.get("input").contains("Save Quotation").click();
        cy.wait(3000);
    }

    storeQuoteNumber(){
        let getText;
        cy.get('body').then(($value) => {
            let quoteNumber;
            getText = $value.text();
            quoteNumber = getText.replace(/\D/g, "");
            cy.log(quoteNumber);
            cy.writeFile('outputData/QuotationData.json', { quoteNumber: `${quoteNumber}`})
        })
    }

}