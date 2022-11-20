describe('Login',() =>{
    const password = '53Team53'
    const eMail = '53Team53aa.@gmail.com'
    it('Negative Login', () =>{
        // skip testin calismasini engeller
        const password = '53Team53'
    const eMail = '53Team53aa.@gmail.com'
        //kullanici anasayfaya gider
        cy.visit('https://www.automationexercise.com/') 
        cy.get('.shop-menu > .nav > :nth-child(1) > a').click()
        // kullanici hesap butonunu tiklar
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        // kullanici email adresini yazar
        cy.get('.login-form > form > [type="email"]').type(eMail)
        // kullanici passwor girer
        cy.get('[type="password"]').type(password)
        // kullanici login butonunu tiklar
        cy.get('.login-form > form > .btn').click()

        cy.get('.login-form > form > p').should('have.text','Your email or password is incorrect!')
        //cy.get("#fail").should('eq', 'Your email or password is incorrect!') // failed durumlarinda kullanilir

       

    })  

    it('Pozitif Login', () => {
        const eMail='ranagul14@gmail.com'
        const password ='123456!'
        cy.visit('https://www.automationexercise.com/')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        // kullanici email adresini yazar
        cy.get('.login-form > form > [type="email"]').type(eMail)
        // kullanici passwor girer
        cy.get('[type="password"]').type(password)
        // kullanici login butonunu tiklar
        cy.get('.login-form > form > .btn').click()

        // kullanici giris yaptigini dogrular
        cy.get('b').should('be.visible')


    })
})