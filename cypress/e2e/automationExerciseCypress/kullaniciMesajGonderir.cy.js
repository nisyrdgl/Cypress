/*
     kullanici "automationexerciseUrl" sayfasinda
     kullanici basariyla Ana sayfaya gittigini dogrular
     kullanici Contact Us butonuna tiklar
     kullanici formu doldurun yazisinin gorundugunu dogrular
     kullanici isim e-posta konu ve mesajini yazar
     kullanici dosya yukler
     kullanici submit butonunu tiklar
     kullanici devam etmek icin tamam tusuna basar
     kullanici formunuz basarili bir sekilde gonderildi mesajini gorur
     kullanici home tusuna basar
     kullanici basariyla Ana sayfaya gittigini dogrular

*/
describe('mesaj gonderme',()=>{

    it('kullanici mesaj gonderir',()=>{
        cy.automationexerciseAnasayfa()
        cy.anaSayfaDogrulama()
        const resim='images.jfif'
        cy.get('.shop-menu > .nav > :nth-child(8) > a').click()
        cy.get(':nth-child(2) > .form-control').type('esat') // isim
        cy.get(':nth-child(3) > .form-control').type('esat06@gmail.com')// mail
        cy.get(':nth-child(4) > .form-control').type('resim gonderme') // konu
        cy.get('#message').type('ekde resim gonderilmistir') // mesal
        cy.get(':nth-child(6) > .form-control').attachFile(resim) // dosya yukleme
        cy.get(':nth-child(7) > .btn').click() 
        cy.get('.status').should('have.text','Success! Your details have been submitted successfully.')
        cy.get('span').click()
        cy.anaSayfaDogrulama()




    })
    
    
})