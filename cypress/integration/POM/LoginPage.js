export class LoginPage {
    typeUser() {return cy.get("[data-test='username']")}
    typePass() {return  cy.get("[data-test='password']")}
    loginSubmit() {return cy.get("[data-test='login-button']")}
    clickBap() {return cy.get("[data-test*='add-to-cart-sauce-labs-backpack']")}
    clickBike() {return  cy.get("[data-test='add-to-cart-sauce-labs-bike-light']")}
    clickShop(){return cy.get(".shopping_cart_link")}
    contShop(){return  cy.get("[data-test='continue-shopping']")}

}
export default LoginPage