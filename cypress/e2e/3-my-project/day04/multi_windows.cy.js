import { elementAt } from "rxjs"

describe('multiple windows', ()=>{
    it('removing target',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.wait(3000)

        cy.get('.example > a').invoke('removeAttr','target').click()
        //invoke('removeAttr','target')
        //attributi silip yeni sekmenin acılmsına 
        //sebeb olan tagı siliyor ve aynı sekmede açıyor
        //sayfaya gittiğini assert etme
        cy.get('h3').should('contain.text','New')

    })

    it('yeni url de acma',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')

        cy.wait(3000)

        cy.get('.example > a')
        .then((element) => {
            const newUrl= element.prop('href')
            cy.visit(newUrl)
            
        })
        /*
        prop () ile 'href' degerini aldık
        prop() -> jguery attribute değerini alan bir method
        */
        cy.get('h3').should('contain.text','New Window') //assert ettik
    })

})