/// <reference types="cypress" />

import LoginPage from "../PageObject/LoginPage";
const ryze_url ="https://ryze-staging.formedix.com/sign-in"
const ryze_email= "testteamtechtest"
const ryze_pwd="T3chtester"


describe('Login to the application', () => {
it('Login with valid credentials', () => {

const login= new LoginPage();
login.navigate();
login.enterEmail().type(ryze_email);
login.enterPassword().type(ryze_pwd);
login.Submit().click().should('not.be.enabled');
cy.url().should('be.equal', ryze_url)

cy.get('#menuMdb > fdx-main-nav-item > .fdx-main-nav-item > .fdxicon-regular').trigger('mouseover')
cy.get('#menuMdbStudies > .fdx-sub-nav-menu-item-text > .fdx-sub-nav-menu-item-desc').should('be.visible')

cy.wait(1000)
cy.get('#menuMdb > fdx-main-nav-item > .fdx-main-nav-item > .fdxicon-regular').trigger('mouseout')
cy.get('#menuMdbStudies > .fdx-sub-nav-menu-item-text > .fdx-sub-nav-menu-item-desc').should('not.be.visible')

cy.get('#menuMdbStudies').click({force: true})

cy.get('#fdxMdbContainerListItem0MenuToggle').click()

// selecting a value from static dropdown
cy.get('#fdxMdbContainerListItem0View').contains('View')
// asserting the option selected
.should('have.text', 'View')



cy.get('#fdxMdbContainerListItem0Edit').contains('Edit').should('have.text', 'Edit')
cy.get('#fdxMdbContainerListItem0Delete').contains('Remove this study').should('have.text', 'Remove this study')
cy.get('#fdxMdbContainerListItem0Transition').contains('Transition this study').should('have.text', 'Transition this study')
cy.get('#fdxMdbContainerListItem0View').click()
cy.get('#fdxMdbAssetGroupListHeader').should('be.visible').click()
cy.get('#FORMTypeView').should('not.be.enabled').click()



    });

});