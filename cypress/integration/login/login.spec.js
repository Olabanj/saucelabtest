/// <reference types="Cypress" />
import LoginPage from "../POM/LoginPage"

const loginPage = new LoginPage();
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  });

    describe("login test",function(){
        before(function() {
            cy.fixture('loginData').then(function(data) {
                this.data=data
            })
        })
        it("login functionalty",function(){
       
      
        cy.visit('/')
        loginPage.typeUser().type(this.data.Username1)
        loginPage.typePass().type(this.data.Password)
        loginPage.loginSubmit().click()
    })


})
