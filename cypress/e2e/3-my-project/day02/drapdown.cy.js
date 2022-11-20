describe('dropdown', () =>{

    it('dropdown test', ()=>{
        cy.visit('https://the-internet.herokuapp.com/dropdown') 
        cy.get('#dropdown').
        select('Option 1')// dropdown da yazilan metinler yazilir
        cy.wait(3000)

        cy.get('#dropdown').
        select('Option 2')

        //assert Option 1 birin valuse 1 mi
        cy.get('#dropdown').
        select('Option 1').should('have.value','1')

    }) 
})