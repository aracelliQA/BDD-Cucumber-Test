import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given ('I open login page', () => {
    cy.visit ('http://zero.webappsecurity.com/login.html')
})

When ('I submit login', () => {
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.get('#user_remember_me').click()
    cy.contains('Sign in').click()
})

Then('I should see homepage', () => {
    cy.get('#account_sumary_tab').should('be.visible')
})