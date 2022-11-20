describe('viewport',()=>{

    it('iphone6',()=>{
        cy.visit('https://www.amazon.com/')
        cy.viewport('iphone-6')
        cy.screenshot()




    })
    
    it('test 2 ',()=>{

        cy.visit('https://www.amazon.com/')
        cy.viewport('macbook-11')
        cy.screenshot()

    })
})