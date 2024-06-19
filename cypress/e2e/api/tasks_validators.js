import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { Tarefas } from "../models/tarefas";

let cyResponse;
let objTaskCriada;

When("eu realizo uma requisição GET para as tarefas", () => {
    cy.getAll().then((response) => {
        cyResponse = response
    })
})

Then("eu recebo uma lista de area tematica", () => {
    cy.wrap(cyResponse).its("isOkStatusCode").should("be.true")

    cy.wrap(cyResponse).its("body").should("be.an", "array").and("not.be.empty")
})

When("eu crio uma tarefa já existente", () => {
    const objTask = Tarefas.createValida();
    cy.postTask(objTask).then((response) => {
        cyResponse = response
        objTaskCriada = JSON.parse(cyResponse.requestBody)
        const objTaskExistente = Tarefas.createValida()
        objTaskExistente.name = objTaskCriada.name
        //console.log(objTaskExistente.name, objTaskCriada.name)
        cy.postTask(objTaskExistente).then((response) => {
            cyResponse = response
        })
    })
})

Then("a API deve retornar o status {int} e a mensagem {string}", (statusCode, errorMessage) => {
    //console.log(cyResponse)
    expect(cyResponse.status).to.equal(statusCode)
    let retornoErrorMessage = null;
    try {
        retornoErrorMessage = JSON.parse(new TextDecoder().decode(cyResponse.body))
    } catch (error) {
        retornoErrorMessage = cyResponse.body;
    } finally {
        cy.wrap(retornoErrorMessage)
            .its("message")
            .should("include", errorMessage);
    }
})

When("eu crio uma tarefa com valor {string} para o campo name", (valor) => {
    const objTask = Tarefas.createValida();
    objTask.name = valor
    cy.postTask(objTask).then((response) => {
        cyResponse = response
    })
})

Then("a API deve retornar o status {int} e a mensagem de erro {string}", (statusCode, errorMessage) => {
    expect(cyResponse.status).to.equal(statusCode)
    //console.log(cyResponse)
    let retornoErrorMessage = null;
    try {
        retornoErrorMessage = JSON.parse(new TextDecoder().decode(cyResponse.body))
    } catch (error) {
        retornoErrorMessage = cyResponse.body.message;
    } finally {
        cy.wrap(retornoErrorMessage)
            .its("message")
            .should("include", errorMessage);
    }
})