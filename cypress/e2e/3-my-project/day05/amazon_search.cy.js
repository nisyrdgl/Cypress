describe('saerch',()=>{

    it('amazon search',()=>{
        cy.amazonSearch('imac')
        cy.get('.a-color-state').should('have.text','"imac"')
        




    })
    
    
})