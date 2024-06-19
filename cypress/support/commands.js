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

Cypress.Commands.add("createTask", (name = '') => {
    if(name !== ''){
        cy.get('#newTask').type(name)
    }
    
    cy.contains('button', 'Create').click()
})

Cypress.Commands.add("editTask", (name) => {
    cy.contains('p', name) //acha a tarefa pelo nome
        .parent().find('button[class*=ItemToggle]') //acha o parente botao com classe contendo ItemToggle
        .click()
})

Cypress.Commands.add("removeTask", (name) => {
    cy.contains('p', name) //acha a tarefa pelo nome
        .parent().find('button[class*=ItemDelete]') //acha o parente botao de deletar
        .click()
})
