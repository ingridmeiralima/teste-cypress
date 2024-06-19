@gui @tarefas @crud

Feature: GUI Tarefas CRUD

    Background: 
        Given Eu estou na página da Mark L

    Scenario: Cadastro de tarefas 
        Then Deve cadastrar uma nova tarefa

    Scenario: Cadastro de tarefa existente
        When Tento criar uma tarefa já existente
        Then Deve exibir mensagem 'Task already exists!'

    Scenario: Campo obrigatório
        When Tento criar uma tarefa com valor ''
        Then Deve exibir a mensagem 'This is a required field'

    Scenario: Editar tarefas
        When eu clico para editar tarefa
        Then a tarefa deve aparecer como concluida

    Scenario: Excluir tarefa
        When eu clico para excluir a tarefa
        Then a tarefa deve ser excluida

    Scenario: Lista de tarefas
        Then Deve exibir as tarefas cadastradas

    Scenario: Consulta de tarefa
        Then Deve exibir a tarefa consultada