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

Cypress.Commands.add('postTask', (task) => {
    cy.request({
        url:  Cypress.env('baseApiUrl') + '/tasks',
        method: 'POST',
        body: task,
        failOnStatusCode: false
    }).then(response => {
        return response
    })
})
Cypress.Commands.add('getAll', () => {
    cy.request({
        url:  Cypress.env('baseApiUrl') + '/tasks',
        method: 'GET',
    }).then(response => {
        return response
    })
})
Cypress.Commands.add('getByName', (taskname) => {
    cy.request({
        url:  Cypress.env('baseApiUrl') + '/tasks',
        method: 'GET',
        body: {name: taskname}
    }).then(response => {
        return response
    })
})
Cypress.Commands.add('editTaskByID', (taskID, task) => {
    cy.request({
        url:  Cypress.env('baseApiUrl') + `/tasks/${taskID}`,
        method: 'PUT',
        body: task,
        failOnStatusCode: false
    }).then(response => {
        return response
    })
})
Cypress.Commands.add('removeTaskByName', (taskname) => {
    cy.request({
        url:  Cypress.env('baseApiUrl') + `/helper/tasks`,
        method: 'DELETE',
        body: {name: taskname}
    }).then(response => {
        return response
    })
})

Cypress.Commands.add('removeTaskByID', (taskID, task) => {
    cy.request({
        url:  Cypress.env('baseApiUrl') + `/tasks/${taskID}`,
        method: 'DELETE',
        body: task,
        failOnStatusCode: false
    }).then(response => {
        return response
    })
})