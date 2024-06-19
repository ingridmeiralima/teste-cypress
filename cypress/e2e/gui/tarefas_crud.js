import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"
import { faker } from "@faker-js/faker"

const taskName = faker.music.songName() //para ser criada
const taskToRemove = faker.music.songName()
const task = { //para ser editada
    name: faker.music.songName(),
    is_done: false,
}

Given("Eu estou na página da Mark L", () => {
    cy.visit('/')
})

Then("Deve cadastrar uma nova tarefa", () => {
    //taskName = faker.music.songName()
    cy.createTask(taskName)

    cy.contains('[data-testid="task-item"]', taskName).should('be.visible')
    //cy.contains('main div p', taskName).should('be.visible')
})

When("Tento criar uma tarefa já existente", () => {
    cy.createTask(taskName)
})

Then("Deve exibir mensagem {string}", (mensagem) => {
    cy.get('#swal2-html-container').should('be.visible').and('have.text', mensagem)
})

When("Tento criar uma tarefa com valor ''", () => {
    cy.createTask()
})

Then("Deve exibir a mensagem {string}", (mensagem) => {
    cy.get('#newTask').invoke('prop', 'validationMessage').should((text) => {
        expect(mensagem).to.eq(text)
    })
})
When("eu clico para editar tarefa", () => {
    cy.createTask(task.name)
    cy.editTask(task.name)
})

Then("a tarefa deve aparecer como concluida", () => {
    cy.contains('p', task.name).should('have.css', 'text-decoration-line', 'line-through')
    
    //cy.contains('p', task.name).parent().find('button[class*=ItemToggleSelected]').should('exist')
})

When("eu clico para excluir a tarefa", () => {
    cy.createTask(taskToRemove)
    cy.removeTask(taskToRemove)
})

Then("a tarefa deve ser excluida", () => {
    cy.contains('p', taskToRemove).should('not.exist')
})

Then("Deve exibir as tarefas cadastradas", () => {
    //cy.wait(1000)
    cy.get('[data-testid="task-list"]').should('be.visible').and('not.be.empty')
})

Then("Deve exibir a tarefa consultada", () => {
    let taskname = faker.music.songName()
    cy.createTask(taskname)
    cy.contains('p', taskname).should('be.visible')
})