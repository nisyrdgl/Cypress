import { faker } from '@faker-js/faker';
import { name } from 'commander';
/*
Test Case 1: Register User
    kullanici "automationexerciseUrl" sayfasinda
    kullanici basariyla Ana sayfaya gittigini dogrular
    Kullanıci sisteme basarili sekilde kayit olur
    kullanici SignupLogin buttonu tiklar
    kullanici yeni kullanıcı kaydı'nın gorunur oldugunu dogrular
    kullanici kullanici adini girer
    kullanici email adresini girer
    kullanici Signup buttona basar
    kullanici hesap bilgilerini girin ifadesinin görünür olduğunu doğrular
    kullanici hesap bilgilerini girer
    kullanici Bültenimize kaydolun onay kutusunu tiklar
    kullanici kisisel bilgilerini girer
    kullanici hesap olustu mesajinin gorunur oldugunu dogrular
    kullanici Continue butonuna basar
    kullanici Kullanıcı adı olarak oturum açıldı ifadesinin görünür olduğunu doğrular
    kullanici  Delete Account butonuna basar
    kullanici hesap silindi yazisini görünür ve devam düğmesini tıklar
     
*/

describe('Register User',()=>{
   
    it('test 1',()=>{
        cy.visit('https://www.automationexercise.com/')

        cy.get('.active > :nth-child(1) > .test_cases_list > .btn').should('contain.text','Test Cases')
        
       
        cy.registerUser()// kullanici kayit olusturur

        cy.get('.pull-right > .btn').click()
        cy.get('b').should('have.text','Esat06')
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
        cy.get('b').should('contain.text','Account Deleted!')
        cy.get('.pull-right > .btn').click()




    })
    
   
})