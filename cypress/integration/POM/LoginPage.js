export class LoginPage {
    typeUser() {return cy.get("[data-test='username']")}
    typePass() {return  cy.get("[data-test='password']")}
    loginSubmit() {return cy.get("[data-test='login-button']")}
}
export default LoginPage