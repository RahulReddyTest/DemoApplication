import commonFunctions from "../../../../../PageObjects/PageActions/commonFunctions";

const commonfunctions = new commonFunctions();
const profileElements = require("../../../../../PageObjects/PageElements/ProfilePageElements.json")

class ProfilePage {

    navigateToEditProfile(){  
        cy.get("a").contains("Edit Profile").click();
    }

    editProfile(){
        cy.get(profileElements.profilePageElements.surname_txt).type("test Surname");
        cy.get(profileElements.profilePageElements.firstName_txt).type("test firstName");
        cy.get(profileElements.profilePageElements.phone_txt).type("1234567898");
        cy.get(profileElements.profilePageElements.addressStreet_txt).type("address street");
        cy.get(profileElements.profilePageElements.city_txt).type("city test");
        cy.get(profileElements.profilePageElements.county_txt).type("county test");
        cy.get(profileElements.profilePageElements.postCode_txt).type("123456");
        cy.get(profileElements.profilePageElements.updateUser_btn).click();
    }
  
 }
 const profile = new ProfilePage();
 export default profile;