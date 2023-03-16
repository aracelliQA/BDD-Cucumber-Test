import {Given, When, Then} from '@cucumber/cucumber'
import loginPage from './loginPage'

Given ('I open login page', () => {
    //cy.visit ('http://zero.webappsecurity.com/login.html')
    loginPage.visitLoginPage()
})

When ('I submit login', () => {
    //cy.get('#user_login').type(username)
    loginPage.fillUserame('username')
    //cy.get('#user_password').type(password)
    loginPage.fillPassword('password')
    cy.get('#user_remember_me').click()
    //cy.contains('Sign in').click()
    loginPage.submitForm()
})

Then('I should see homepage', () => {
    cy.get('#account_sumary_tab').should('be.visible')
})