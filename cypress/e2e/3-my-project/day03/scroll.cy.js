describe('scroll', () =>{
it('scroll  into view', () =>{ // sayfayi asagi yukari kaydirma
    cy.visit('https://qa-environment.koalaresorthotels.com/')
  

    cy.get('.col-md-7 > .mb-4').scrollIntoView()
  
    cy.wait(4000)
    cy.get(':nth-child(9) > .container > .justify-content-center > .col-md-7 > h2').scrollIntoView()


    cy.scrollTo('bottom') // sayfanin en altina gider 
    cy.scrollTo('top') // sayfanin basina gider

    cy.scrollTo(0, 1000) // istenen olcude sayfa down olur
    cy.scrollTo(0, -500) // istenen olcude sayfa up olur
}) 

})