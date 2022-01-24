/// <reference types="cypress" />

import Logout from "../PageObject/LogOut";
import LoginPage from "../PageObject/LoginPage";

const ryze_url ="https://ryze-staging.formedix.com/sign-in"
const ryze_email= "testteamtechtest"
const ryze_pwd="T3chtester"


describe("Login to the application", () => {
  it("Login with valid credentials", () => {
    const login = new LoginPage();
    login.navigate();
    login.enterEmail().clear();
    login.enterEmail().type(ryze_email); // Login to the Application with enterEmail Function
    login.enterPassword().clear();
    login.enterPassword().type(ryze_pwd);  //Login to the Application with enterPassword Function
    login.Submit().click().should("not.be.enabled");
    cy.url().should("be.equal", ryze_url);
    cy.wait(5000);
  });
});

describe("Logout to the application", () => {
  it("Logout with click on Sign Out", () => {
    const Log_out = new Logout();
    Log_out.logout_l(); // Function for mouseover the signout link
    Log_out.signout();  // Function for Logout the application
  });
});
