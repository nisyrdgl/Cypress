
describe('allerts', ()=>{

    it('alert test', ()=>{
            //cypress otomatik olarak tamamı tıklar
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(1) > button').click()
        //
        

        cy.get('#result').should('have.text','You successfully clicked an alert')
        
    }) 
    it('accept alert test',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(2) > button').click()
        //iki secenek çıkar tamam ve iptal diye cypress otomatik olarak tamamı tıklar
        cy.get('#result').should('contain.text','You clicked: Ok')

    })
    it('dismiss alert test',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        //iptali tıklamak için browser kontrolü icin on() methodu kullanılır
        //on()-> jquery bir fonksiyondur
        //window(object):confirm(fonctionality)
        cy.get(':nth-child(2) > button').click()
         cy.on('window:confirm',(str)=>{
            return false
         })
         cy.get('#result').should('contain.text','You clicked: Cancel')
             
            })
            it.only('entering text on the allert',()=>{
                cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
                //iptali tıklamak için browser kontrolü icin on() methodu kullanılır
                //on()-> jquery bir fonksiyondur
                //window(object):confirm(fonctionality)
                
                 cy.window()//pop up pencereleri kontrol ediyoruz
                 .then(($windowElement=>{
                    //$windowElement -> promt'bilgi gönderiyoruz
                    cy.stub($windowElement,'prompt').returns('hi')
                    cy.wait(4000)
                 cy.get(':nth-child(3) > button').click()
                 }))
                 
                 cy.get('#result').should('contain.text','You entered: hi')
                     
                    })
})
    
