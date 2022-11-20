import 'cypress-iframe'  // cypress runner'ın iframe ile iletişime geçmesi için gerekli kodları tanımlar
describe('iframe', ()=>{
    it('iframe testi ', ()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        //sayfaya gidildiğinin assert yapıldı
        cy.get('h3').should('contain','Editor')
        cy.frameLoaded('#mce_0_ifr')//cy.frameLoaded('locator')iframe'i yükler
        //driver.swicthto().frame('#mce_0_ifr') selenıumda yazımı bu şekilde
        cy.iframe().find('p').clear() //iframe git ve  p tagını bul ve içindeki yazıyı sil
        //iframe içine yazı yazma
        cy.iframe().find('p').type('Hayat senle güzel Esat')
        cy.get('.large-4 > div > a').should('contain.text','Elemental')
       
        

    })
   

    })

