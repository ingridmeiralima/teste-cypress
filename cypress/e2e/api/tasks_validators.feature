@api @tarefas @validator

Feature: API Tarefas Validators
     
     Validar o CRUD de tarefas

     Scenario: Obter todas as tarefas
        When eu realizo uma requisição GET para as tarefas
        Then eu recebo uma lista de area tematica

    Scenario: Crio uma tarefa já existente
        When eu crio uma tarefa já existente
        Then a API deve retornar o status 400 e a mensagem "Task already exists!"

    Scenario: Crio uma tarefa com valor inválido
        When eu crio uma tarefa com valor '' para o campo name
        Then a API deve retornar o status 400 e a mensagem de erro "name is a required field"