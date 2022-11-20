/*
    kullanici "automationexerciseUrl" sayfasinda
    kullanici basariyla Ana sayfaya gittigini dogrular
    kullanici SignupLogin buttonu tiklar
    kullanici yeni kullanıcı kaydı'nın gorunur oldugunu dogrular
    kullanici kullanici adini girer
    kullanici email adresini girer
    kullanici Signup buttona basar
    kullanici E-posta Adresi zaten var! hatasının goruldugunu dogrular

*/

describe('mail kulanma',()=>{

    it('mevcut mail kayit olma',()=>{
        cy.automationexerciseAnasayfa()
        cy.anaSayfaDogrulama()
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('[type="text"]').type('Esat06')
        cy.get('.signup-form > form > [type="email"]').type('ranagul14@gmail.com')
        cy.get('.signup-form > form > .btn').click()
        cy.contains('Email Address already exist!').should('be.visible')

    })
    
    
})