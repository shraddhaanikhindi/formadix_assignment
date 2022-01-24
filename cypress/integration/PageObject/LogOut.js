class Logout {
  logout_l() {
    cy.get(
      "#menuUser > fdx-main-nav-item > .fdx-main-nav-item > .fdxicon-regular"
    ).trigger("mouseover");
    cy.wait(3000);
  }
  signout() {
    return cy.get("#menuUserLogout").click();
  }
  }

export default Logout;
