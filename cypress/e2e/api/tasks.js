import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { Tarefas } from "../models/tarefas";

let tasks = Tarefas.createValida();
let cyResponse;
let objTaskCriada;
let objTaskCriadacomID;
let lengthArr;
let idTarefa;

When("eu faço uma solicitação para a consulta de tarefas", () => {
    cy.getAll().then((response) => {
        cyResponse = response
    })
})
    
Then("o sistema deve retornar as tarefas com sucesso", () => {
    expect(cyResponse.status).to.match(/^2|^3/);
    expect(cyResponse.body).to.be.an("array")
    
    //console.log('response: ', cyResponse)
    
    lengthArr =cyResponse.body.length
    //console.log('length: ', lengthArr)
    
    objTaskCriadacomID =cyResponse.body[lengthArr-1]
    //console.log(objTaskCriadacomID)

})

When("eu faço uma solicitação para criar tarefa", () => {
    cy.postTask(tasks).then((response) => {
        cyResponse = response
    })
})

Then("o sistema deve retornar a tarefa criada com sucesso", () => {
    expect(cyResponse.status).to.match(/^2|^3/);
    expect(cyResponse.body).to.not.be.null

    //console.log(cyResponse.requestBody)
    //convertendo a string do requestBody em objeto
    objTaskCriada = JSON.parse(cyResponse.requestBody)
    //console.log("objTaskcriada: ", objTaskCriada)

    cy.wrap(objTaskCriada).its("name").should('equal', tasks.name)
    cy.wrap(cyResponse.requestBody).should('contain', tasks.name)
})

When("eu faço uma solicitação para a consulta de uma tarefa pelo nome", () => {
    cy.getByName(objTaskCriada.name).then((response) => {
        cyResponse = response
    })
})

Then("o sistema deve retornar a tarefa com sucesso", () => {
    expect(cyResponse.status).to.match(/^2|^3/);
    expect(cyResponse.body).to.be.an("array")

    //console.log("tarefa", cyResponse.requestBody)
    
    cy.wrap(cyResponse.requestBody).should('contain', tasks.name)
})

When("eu faço uma solicitação para a conclusão de tarefa", () => {
    idTarefa = objTaskCriadacomID.id
    objTaskCriada.is_done = true
    //console.log(objTaskCriadacomID.id, idTarefa)
    
    cy.editTaskByID(idTarefa, objTaskCriada).then((response) => {
        cyResponse = response
    })
})

Then("o sistema deve editar a tarefa com sucesso", () => {
    expect(cyResponse.status).to.match(/^2|^3/);
    expect(cyResponse.requestBody).to.not.be.null;

    //console.log(objTaskCriada)
    cy.wrap(objTaskCriada).its("is_done").should('equal', true)
})

When("eu faço uma solicitação para a exclusão de tarefa", () => {
    cy.removeTaskByName(tasks.name).then((response) => {
        cyResponse = response
    })
})
When("eu faço uma solicitação para a exclusão de tarefa pelo ID", () => {
    cy.removeTaskByID(idTarefa, objTaskCriada).then((response) => {
        cyResponse = response
    })
})
Then("o sistema deve excluir a tarefa com sucesso", () => {
    expect(cyResponse.status).to.match(/^2|^3/);
})