describe('checbox', () =>{
    it.skip('checking single box ', () =>{

        //it.skip testi run etmez
        //it.only  sadece o testi run eder

        cy.visit('https://automationpractice.com') 
        // woman butonunu tikla
        cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click()
        
        
        // Top sec
        cy.get('#layered_category_4').should('not.be.checked')// tikli olmadigini assert et
        //tikla
        cy.get('#layered_category_4').check()

        // tikli oldugunu assert edelim
        cy.get('#layered_category_4').should('be.checked') // tikli ise true return eder

        // tik isaretini kaldirir
        cy.get('#layered_category_4').uncheck()
        cy.get('#layered_category_4').should('not.be.checked')
       
    }) 

    it.skip('check all checkbox', () => {

        cy.visit('https://automationpractice.com') 
        cy.get('.sf-with-ul').first().click()

        // butun checkboxlari tikla
        cy.get("input[type='checkbox']").check()
        // hepsi tiklanmis mi assert et
        cy.get("input[type='checkbox']").should('be.checked').wait(4000)

        // tum tiklari kaldir
        cy.get("input[type='checkbox']").uncheck()

        // tum tiklarin kaldirildigini assert et
        cy.get("input[type='checkbox']").should('not.be.checked').wait(4000)

    
    })

    it('click', () =>{
        cy.visit('https://automationpractice.com') 
        cy.get('.sf-with-ul').first().click()
        //tiklamalari check ile degil click ile yapacaz
        cy.get("input[type='checkbox']").click({ multiple: true })

        //click tek bir elemente uygulanir, birden fazla elemeti tiklamak icin 
        // click() icine { multiple: true } kullanilir

        // assert icin
        //1
        cy.get("input[type='checkbox']").should('be.checked')
        //2
        cy.get("input[type='checkbox']").first().parent().should('have.class','checked')
        //aşagıdaki gibi de assert yapılabilir

        //3 
        //should('have.id','usernama')
        //4
        // should('have.type','text')
        //5
        //should('have.class','container')


    })




})