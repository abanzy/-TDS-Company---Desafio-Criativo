class index{

    signin(email, password){
        cy.get('#email').type(email).should('contain.value',email)
        cy.get('#passwd').type(password).should('contain.value',password)
        cy.get('#SubmitLogin > span').click()
    }
    signout(){
        cy.get('.logout').click()
        cy.get('.login').should('be.visible')
    }
    searchFor(query){
        return cy.get('#search_query_top').type(query+'{enter}')
    }
    mouseOver(identifier){
        cy.get(identifier).first().trigger('mouseover')
    }
    addToCart(){
        cy.contains('Add to cart').click()
    }
    checkAddtoCart(){
        cy.get('.layer_cart_product > h2').should('contain.text','Product successfully added to your shopping cart')
    }
    proceedToCheckout(){
        cy.get('.button-container > .button-medium > span').click()
        cy.url().should('include', 'http://automationpractice.com/index.php?controller=order',{timeout:15000})
    }
    clickProceedToCartCheckoutButton(){
        cy.get('.cart_navigation > .button > span').click()
    }
    checkCartContentFor(productName){
        cy.get('.cart_description > .product-name').first().should('contain.text',productName)
    }
    removeCartItem(position){
        cy.get('.icon-trash').then((icon)=>{
            icon[position].click()
        })
    }
    checkTheTermsOfAgreement(){
        cy.get('#cgv').click()
    }
    selectPayByBankWire(){
        cy.get('.bankwire').click()
    }
    selectPayByCheck(){
        cy.get('.bankwire').click()
    }
    confirmOrder(){
        cy.get('#cart_navigation > .button > span').click()
    }

}
export default index