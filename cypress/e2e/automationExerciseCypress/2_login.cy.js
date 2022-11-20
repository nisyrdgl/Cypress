/*
    kullanici "automationexerciseUrl" sayfasinda
    kullanici basariyla Ana sayfaya gittigini dogrular
    kullanici Signup Login buttonu tiklar
    kullanici Hesabınıza giriş yapın ifadesinin görünür olduğunu doğrular
    kullanici  Doğru e-posta adresini ve şifresini girer
    kullanici login tusuna basar
    kullanici Kullanıcı adı olarak oturum açıldı ifadesinin görünür olduğunu doğrular
    kullanici  Delete Account butonuna basar
    kullanici hesap silindi yazisini gorunur
*/

describe('login olma',()=>{

    it.skip('pozitif login',()=>{
        cy.automationexerciseAnasayfa()
        cy.anaSayfaDogrulama()
        cy.automationLogin('esat06@gmail.com','123456')
        cy.get('b').should('have.text','Esat06')
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
        cy.get('b').should('contain.text','Account Deleted!')
    })
  

 
})