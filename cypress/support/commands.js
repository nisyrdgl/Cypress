// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Cypress.Commands.add -> komut ekle, tanimla
//utomationpractice.com giris icin tanimlandi
Cypress.Commands.add('login', (email, password) =>{
    cy.visit('https://automationpractice.com/index.php')
    cy.get('.login').click()
    cy.get('#email').type(email)
    cy.get('#passwd').type(password)
    cy.get('#SubmitLogin > span').click()
})
//=========================================
// amazonda arama yapmak girilen urun icin arama yapacak
Cypress.Commands.add('amazonSearch', (productName) =>{
    cy.visit('https://www.amazon.com/')
    cy.get('#twotabsearchtextbox').type(productName)
        cy.get('#nav-search-submit-button').click()
})
//=========================================
//https://www.npmjs.com/package/cypress-file-upload
//npm install --save-dev cypress-file-upload
import 'cypress-file-upload';
//=========================================

//https://www.automationexercise.com/ kayit olusturma
import { faker } from '@faker-js/faker';
Cypress.Commands.add('registerUser', () =>{
    cy.visit('https://www.automationexercise.com/')
    const firstName=faker.name.firstName()
    const lastName=faker.name.lastName()
    const email=faker.internet.email()
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('[type="text"]').type('Esat06')
        cy.get('.signup-form > form > [type="email"]').type('esat06@gmail.com')
        cy.get('.signup-form > form > .btn').click()
        cy.get('#id_gender1').click()
        cy.get('#password').type('123456')
        cy.get('#days').select('25')
        cy.get('#months').select('April')
        cy.get('#years').select('2018')
        cy.get('#newsletter').click()
        cy.get('#optin').click()
        //adres bilgileri
        cy.get('#first_name').type(firstName)
        cy.get('#last_name').type(lastName)
        cy.get('#company').type('atomationExecise')
        cy.get('#address1').type('Turkiye')
        cy.get('#address2').type('Ankara')
        cy.get('#country').select('Canada')
        cy.get('#state').type('123')
        cy.get('#city').type('Cankaya')
        cy.get('#zipcode').type('06000')
        cy.get('#mobile_number').type('5554447788')
        cy.get('.login-form > form > .btn').click()
        cy.get('b').should('contain.text','Account Created!')
       
    
})
//=========================================

//https://www.automationexercise.com/ anasayfaya gitme
Cypress.Commands.add('automationexerciseAnasayfa', () =>{
    cy.visit('https://www.automationexercise.com/ ')
 
})
//=========================================

//https://www.automationexercise.com/ anasayfaya dogrulama
Cypress.Commands.add('anaSayfaDogrulama', () =>{
    cy.visit('https://www.automationexercise.com/ ')
    cy.get('.active > :nth-child(1) > .test_cases_list > .btn').should('contain.text','Test Cases')
})
//https://www.automationexercise.com/ login olma
Cypress.Commands.add('automationLogin', (email,password) =>{
    cy.visit('https://www.automationexercise.com/ ')
    cy.get('.active > :nth-child(1) > .test_cases_list > .btn').should('contain.text','Test Cases')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('.login-form > h2').should('have.text','Login to your account')
    cy.get('.login-form > form > [type="email"]').type(email)
    cy.get('[type="password"]').type(password)
    cy.get('.login-form > form > .btn').click()

})