class LoginPage {
  navigate() {
    cy.visit("https://ryze-staging.formedix.com/sign-in");
  }

  enterEmail() {
    return cy.get("[id=username]");
  }
  enterPassword() {
    return cy.get("[id=password]");
  }

  Submit() {
    return cy.get("[type=submit]");
  }
}

export default LoginPage;
