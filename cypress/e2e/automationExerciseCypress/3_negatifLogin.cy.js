describe('login olma',()=>{
/*
    kullanici "automationexerciseUrl" sayfasinda
    kullanici basariyla Ana sayfaya gittigini dogrular
    kullanici Signup Login buttonu tiklar
    kullanici Hesabınıza giriş yapın ifadesinin görünür olduğunu doğrular
    kullanici  Doğru e-posta adresini ve şifresini girer
    kullanici login tusuna basar
    kullanici yanlis e-posta veya yanlis sifre mesajinin gorunur oldugunu dogrular
    */
    it('negatif login',()=>{
        const yanlisMail='esat0655@gmail.com'
        const yanlisSifre='12345625'
        cy.automationexerciseAnasayfa()
        cy.anaSayfaDogrulama()
        cy.automationLogin(yanlisMail,yanlisSifre)
        cy.contains('Your email or password is incorrect!').should('be.visible')


    })
    
   
})