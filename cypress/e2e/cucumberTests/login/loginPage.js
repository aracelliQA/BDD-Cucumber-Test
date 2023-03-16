const URL = 'http://zero.webappsecurity.com/login.html'
const USERNAME = '#user_login'
const PASSWORD ='#user_password'
const SUBMIT_BUTTON = 'input[name="submit"]'

class LoginPage{
    // Visit webpage
    static visitLoginPage () {
        cy.visit(URL)
    }

    // Fill username
    static fillUserame(name){
        cy.get(USERNAME).type(name)
    }
    // Fill password
    static fillPassword(password) {
        cy.get(PASSWORD).type(password)
    }

    // Submit form
    static submitForm() {
        cy.get(SUBMIT_BUTTON).click()
    }
}

export default LoginPage