describe('file uplad',()=>{

    it.skip('tek dosya yukleme',()=>{
    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
    //cy.get('#filesToUpload').attachFile('images (1).jfif')//dosya yolu phati alinir
        //veya degisken olusturarak yapilir
        const path1='images (1).jfif'
        cy.get('#filesToUpload').attachFile(path1)
        //assert
        cy.get('#fileList > li').should('include.text','images (1).jfif')
        cy.contains('images (1).jfif').should('be.visible')


    })
    
    it.skip('coklu dosya yukleme',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const path1='images (1).jfif'
        const path2='images.jfif'
        cy.get('#filesToUpload')
        .attachFile(path1)
        .wait(4000)
        .attachFile(path2)


    })
    it.skip('coklu dosya yukleme',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
       // cy.get('#filesToUpload').attachFile(['images (1).jfif', 'images.jfif'])
        
        
        
        const path1='images (1).jfif'
        const path2='images.jfif'
        cy.get('#filesToUpload')
        .attachFile([path1, path2])
        

    })
    it('override file name',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
       // cy.get('#filesToUpload').attachFile(['images (1).jfif', 'images.jfif'])
       const path1='images (1).jfif'
       cy.get('#filesToUpload').attachFile({filePath:path1, fileName:'resim1'}) // yuklene dosyanin adini degistirme
        
       cy.get('#fileList > li').should('contain.text','resim1')
       cy.contains('resim1').should('be.visible')
        

    })
})