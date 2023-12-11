import commonFunctions from "../../../../../PageObjects/PageActions/commonFunctions";

const commonfunctions = new commonFunctions();
const loginPageElements = require("../../../../../PageObjects/PageElements/LoginPageElements.json")

class LoginFailure {

    loginWithInvalidCredentials(userName, passWord){
        cy.get(loginPageElements.loginPageLocators.userName_txt).type(userName);
        cy.get(loginPageElements.loginPageLocators.password_txt).type(passWord);
        try{
            cy.get(loginPageElements.loginPageLocators.login_btn).click();
        }catch(e){
            cy.log(e)
        }
        return ;
    }

    loginFailure(){
        cy.log("user not able to login to application")
    }


    
 }
 const loginFailure = new LoginFailure();
 export default loginFailure;