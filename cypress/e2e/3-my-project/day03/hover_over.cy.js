describe('hover over', () =>{
it('move over', () =>{
    cy.visit('https://amazon.com/')
    cy.get('.icp-nav-link-inner > .nav-line-2').trigger('mouseover') // mouse loceti alinan elemente kaydir

    // change/region degistirme

    cy.contains('Change country/region.').click()

    //cy.get('.a-dropdown-prompt').select('Canada') select tagi icermedigi icin hata verdi manual locate alindi
    
    cy.get('select#icp-dropdown')
  .select('Canada', { force: true })
}) 

})