
const retrieveQuotation = require("../../../../../PageObjects/PageElements/RetrieveQuotation.json")
const {readData} = require("../../../../../PageObjects/PageActions/ReadAndWriteData")
export default class RetrieveQuotation{

    retrieveQuotation(){
        let data;
        cy.get("a").contains("Retrieve Quotation").click();
        cy.readFile("outputData/QuotationData.json").then(myData => {
            data = myData.quoteNumber;
            cy.log(data)
            cy.get(retrieveQuotation.RetrieveQuotation.identificationNumber_txt).type(data);
        } 
        );
        cy.get(retrieveQuotation.RetrieveQuotation.retrieve_btn).click();
    }

    validateRetrieval(){
        cy.get("b").contains("user_id");
    }
    

}