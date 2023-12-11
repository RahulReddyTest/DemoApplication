import commonFunctions from "../../../../../PageObjects/PageActions/commonFunctions";

const commonfunctions = new commonFunctions();
const logoutPageElements = require("../../../../../PageObjects/PageElements/LogoutPageElments.json")

class LogoutPage {

    userLogout(){
        cy.get(logoutPageElements.logoutPageLocators.logout_btn).click();
    }
  
 }
 const logout = new LogoutPage();
 export default logout;