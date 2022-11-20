describe('',()=>{

    it.skip('login',()=>{
        cy.login('123murat123@gmail.com','123murat123')
        cy.get('.account > span').should('contain.text','Murat')
       



    })
    
    it('negative login ',()=>{
    cy.login('nursen124@gmail.com',"123456")
    cy.get('ol > li').should('contain.text','Authentication failed.')
    //baska bir assert
    cy.contains('Authentication failed.').should('be.visible')
    cy.screenshot()//ekran goruntusu

    })
})