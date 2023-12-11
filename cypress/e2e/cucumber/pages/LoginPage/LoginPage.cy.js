import commonFunctions from "../../../../../PageObjects/PageActions/commonFunctions";

const commonfunctions = new commonFunctions();
const loginPageElements = require("../../../../../PageObjects/PageElements/LoginPageElements.json")
class LoginPage {

    navigateToApplication(){

        cy.visit('https://demo.guru99.com/insurance/v1/index.php');
    }

    userLogin(userName, passWord){
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
 const login = new LoginPage();
 export default login;