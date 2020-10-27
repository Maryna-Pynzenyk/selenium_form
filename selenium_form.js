// Open https://the-internet.herokuapp.com/login

// Please automate next test cases:
// 1. Login with valid creds (tomsmith/SuperSecretPassword!) and assert you successfully logged in
// 2. Login with invalid creds and check validation error
// 3. Logout from app and assert you successfully logged out

it('Login with valid creds', () =>{
    cy.visit ('https://the-internet.herokuapp.com/login'),
    cy.get('[type="text"]').type('tomsmith'),
    cy.get('[type="password"]').type('SuperSecretPassword!'),
    cy.get('.fa').click()
});

it('Login with invalid creds', () =>{
    cy.visit ('https://the-internet.herokuapp.com/login'),
    cy.get('[type="text"]').type('somecrads'),
    cy.get('[type="password"]').type('noonegetsit!'),
    cy.get('.fa').click(),

    cy.get('#flash').should('have.text', '\n            Your username is invalid!\n            ×\n          ')
});

it('Logout from app', () =>{
    cy.visit ('https://the-internet.herokuapp.com/login'),
    cy.get('[type="text"]').type('tomsmith'),
    cy.get('[type="password"]').type('SuperSecretPassword!'),
    cy.get('.fa').click()
    cy.get('.button').click()   
});