describe('Crystal Key Hotel', () =>{

it('Test 1', () =>{
    // istenen url'e gidilir
    cy.visit('https://qa-environment.koalaresorthotels.com/')
// login butonunu tiklar
//1.yol
cy.get('#navLogon > .nav-link').click()
//2.yol
//cy.contains('Log in').click() // Log in iceren kismi click'le metni text olarak bulur

//username:'maneger'
// password:'Manager2!'

// kullanici username girer
cy.get('#UserName').type('manager')


//kullanici passwordu gir
cy.get('#Password').type('Manager1!')

//kullanici login  butonunu tiklar
cy.get('#btnSubmit').click()

}) 
  



})