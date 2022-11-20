describe('Navigasyon', () =>{

it.skip('back, forward,refresh', ()=>{
// skip ==>test blogunu calistirmaz
    cy.visit('https://qa-environment.koalaresorthotels.com/')
    cy.wait(4000)// hard wait  4 saniye bekle
    cy.contains('Log in').click()
    // onceki sayfaya git
   // cy.go('back')
    cy.go(-1)
    cy.wait(4000)
    //onceki sayfaya git 
   // cy.go('forward')
   cy.go(1)
    cy.wait(4000)

    // sayfayi tekrar yukle refresh
    cy.reload()
})

it('zincirleme navigasyon', () =>{

    cy.visit('https://qa-environment.koalaresorthotels.com/')
    cy.contains('Log in').
    click().
    go('back').
    go('forward').
    go('back')

    cy.reload(true).// true oldugunda sayfayi yenile false olursa sayfayi yenileme
    contains('Log in').
    should('be.visible')

})
})