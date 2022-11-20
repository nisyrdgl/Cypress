describe('My First Test ', () => {
    //decribe('testin basligi yazilir')

    // 1. test olusturma
    it('URL Testi', () => {

      cy.visit('https://www.google.com.tr') // siteyi siyaret et

      // visit('site adresi') siteye gider
        cy.url().should('include','google') // url'de google var mi
        //url() url testi icin kullanilir
        //should('xxxx') => iceriyor mu  
        cy.url().should('include', 'com')
        cy.url('inculde', 'www')
    })

 

  // 2. test olusturma her test icin it() methodu kulanilir
  it('Title Test', () =>{
    // title Google varmi?
    //tekrar sayfaya git
    cy.visit('https://www.google.com.tr')
    cy.title().should('eq', 'Google')
    // 'eq' esit mi 
  })
})