import '@4tw/cypress-drag-drop'
/*
sadece biryerde kullanılacaksa buraya import edebiliriz 
eger bir kac yerde kullanılacaksa
commands.js dosyasına bu require('@4tw/cypress-drag-drop') kod eklenir
*/ 
describe('drag and drop', () =>{
    it.skip('drag and drop test', ()=>{
        cy.visit('https://www.testandquiz.com/selenium/testing.html')
        cy.get('#column-a').dblclick()//cift tıklama
        //cy.get('#column-a').rightclick()//sag tıklama
        cy.on('window:alert',(str) =>{
            // Assert icin
            //1 expect on() ile yeni bir pencereye gidildigi icin assertlerde kullanilir
            expect(str).to.equal('hi, javaTopint Testing')
            //2
            expect(str).to.eq('hi, javaTopint Testing')
            //3
            expect(str).to.contains('hi, javaTopint Testing')
        })
        

    })
})
it('drap and drop', ()=>{
    //1 terminalden :npm install --save-dev @4tw/cypress-drag-drop yuklendi
    //2 sayfaya import edildi: import '@4tw/cypress-drag-drop'
     cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
     cy.get('#column-b')//suruklenecek element
     .wait(4000)
     .drag('#column-a')//suruklenecegi element
})
