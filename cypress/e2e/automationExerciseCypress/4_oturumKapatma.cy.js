/*    
    kullanici "automationexerciseUrl" sayfasinda
    kullanici basariyla Ana sayfaya gittigini dogrular
    kullanici Signup/Login buttonu tiklar
    kullanici Hesabınıza giriş yapın ifadesinin görünür olduğunu doğrular
    kullanici  Doğru e-posta adresini ve şifresini girer
    kullanici login tusuna basar
    kullanici Kullanıcı adı olarak oturum açıldı ifadesinin görünür olduğunu doğrular
    kullanici cikis tusuna basar
    kullanici giris sayfasina yonlendirildigini dogrular
*/
describe('kullanici oturum kapatir',()=>{

    it('oturum kapatma',()=>{
        cy.automationexerciseAnasayfa()
        cy.anaSayfaDogrulama()
        cy.automationLogin('ranagul14@gmail.com','123456!')
        cy.get('b').should('have.text','Yagmur1216')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.anaSayfaDogrulama()


    })
    
    
})