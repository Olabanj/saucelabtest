/// <reference types="Cypress" />
import LoginPage from "../POM/LoginPage"
const login = new LoginPage


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
        login.typeUser().type(this.data.Username1)
        login.typePass().type(this.data.Password)
        login.loginSubmit().click()

        //Add to carts
        
        login.clickBap().click()
        login.clickBike().click()
     
        
        // click on shopping cart link
        login.clickShop().click()
    
        //continue shopping
        login.contShop().click()


    })


})
