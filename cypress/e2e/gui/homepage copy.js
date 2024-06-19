import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("Eu estou na página da Mark L", () => {
    cy.visit('/')
})
Then("o título deve ser {string}", (titulo) => {
    cy.title().should('equal', titulo)
})

Then("o cabeçalho da lista deve conter {string} e {string}", (hcriada, hconcluida) => {
    cy.contains('main div', hcriada).should('be.visible')
    cy.contains('main div', hconcluida).should('be.visible')
})
Then("a página deve conter o campo Add a new task e o botão Create", () => {
    cy.get("#newTask").should('exist').and('be.visible')
    cy.contains('button', "Create").should('be.visible')
})
