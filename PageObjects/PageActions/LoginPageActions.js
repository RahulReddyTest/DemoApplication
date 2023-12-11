import commonFunctions from "./commonFunctions";

const commonfunctions = new commonFunctions();
const loginPageElements = require("../PageElements/LoginPageElements.json")
export default class LoginPageActions{

    userLogin(userName, passWord){

        cy.visit('https://demo.guru99.com/insurance/v1/index.php');
        cy.get(loginPageElements.loginPageLocators.userName_txt).type(userName);
        cy.get(loginPageElements.loginPageLocators.password_txt).type(passWord);
        try{
            cy.get(loginPageElements.loginPageLocators.login_btn).click();
        }catch(e){
            cy.log(e)
        }
        return ;

    }
    
    validateLogin(){

        commonfunctions.checkIfEleExists(loginPageElements.loginPageLocators.logout_btn);
        cy.log("logged into application successfully")

        return ;
    }


}