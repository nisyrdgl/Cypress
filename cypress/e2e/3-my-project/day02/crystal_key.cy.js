describe('Crystal Key Hotel', () =>{
    it('Test Case1', () =>{
        cy.visit('https://qa-environment.koalaresorthotels.com/')

        cy.contains('Log in').click()

        // assert
        //1) 
        // url 'qa-environment' iceriyor mu
        cy.url().should('include', 'qa-environment')

        //2)
        // locatte Home text 'i var mi 
        cy.get('#navHome > .nav-link').should('have.text','Home') 

        //3)
        //locat'i alinan element gorunur mu
        cy.get('.row > .mb-4').should('be.visible')

        //4) 
        // title 'KoalaResortHotels - Log in' ayni mi
        cy.title().should('eq', 'KoalaResortHotels - Log in')

        //5)  locate alinan webelementinde 'Log in' text'i var mi 
        // Log in elementinin locate'i => cy.get('.row > .mb-4') 
        cy.get('.row > .mb-4').should('include.text', 'Log in')




    })




})
    