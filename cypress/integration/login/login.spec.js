/// <reference types="Cypress" />
import LoginPage from "../POM/LoginPage"



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
            
            const login = new LoginPage();
       cy.visit('/')
        login.typeUser().type(this.data.Username1)
        login.typePass().type(this.data.Password)
        login.loginSubmit().click()
    })


})
