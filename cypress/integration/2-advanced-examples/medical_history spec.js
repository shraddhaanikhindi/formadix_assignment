/// <reference types="cypress" />

import LoginPage from "../PageObject/LoginPage";
const ryze_url = "https://ryze-staging.formedix.com/sign-in";
const ryze_email = "testteamtechtest";
const ryze_pwd = "T3chtester";

describe("Medical history file with description", () => {
  it("Verify medical history file with decription and save the changes", () => {
    const login = new LoginPage();
    login.navigate();
    login.enterEmail().type(ryze_email);
    login.enterPassword().type(ryze_pwd);
    login.Submit().click().should("not.be.enabled");
    cy.url().should("be.equal", ryze_url);

    cy.get(
      "#menuMdb > fdx-main-nav-item > .fdx-main-nav-item > .fdxicon-regular"
    ).trigger("mouseover");
    cy.get(
      "#menuMdbStudies > .fdx-sub-nav-menu-item-text > .fdx-sub-nav-menu-item-desc"
    ).should("be.visible");

    cy.wait(1000);
    cy.get(
      "#menuMdb > fdx-main-nav-item > .fdx-main-nav-item > .fdxicon-regular"
    ).trigger("mouseout");
    cy.get(
      "#menuMdbStudies > .fdx-sub-nav-menu-item-text > .fdx-sub-nav-menu-item-desc"
    ).should("not.be.visible");

    cy.get("#menuMdbStudies").click({ force: true });

    cy.get("#fdxMdbContainerListItem0MenuToggle").click();

    cy.get("#fdxMdbContainerListItem0View")
      .contains("View") // Verify view tech study
      // asserting the option selected
      .should("have.text", "View");

    cy.get("#fdxMdbContainerListItem0Edit")
      .contains("Edit")    //Verify edit tech study
      .should("have.text", "Edit");
    cy.get("#fdxMdbContainerListItem0Delete")
      .contains("Remove this study")
      .should("have.text", "Remove this study");
    cy.get("#fdxMdbContainerListItem0Transition")
      .contains("Transition this study")
      .should("have.text", "Transition this study");
    cy.get("#fdxMdbContainerListItem0View").click();
    cy.get("#dataAcquisitionName").should("be.visible").click();
    cy.get("#FORMTypeName").should("not.be.enabled").click();
    cy.wait(3000);
    cy.get(
      '#uuid-c5ad27a8-c523-444b-9555-8cc877db69e3 > [ng-transclude=""] > .assetBrowseListItem > .fdx-form'
    ).click();

    cy.get("#switchEditMode").click();
    const test_desc_text = "Test description";

    //cy.get("#editPropsAddEntrydescription > .add-btn-text").click();

    cy.get("#assetLocaleEditTextTextareadescription")
      .type(test_desc_text)
      .should("not.be.disabled");
    cy.contains(test_desc_text).should("exist");

    cy.get("#saveAsset").click();

    cy.get("#formDescription").contains(test_desc_text);
  });
});
