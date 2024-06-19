@api @tarefas @crud

Feature: API Tarefas CRUD

    Desejo gerenciar as tarefas

    Scenario: Cadastro de tarefa
        When eu faço uma solicitação para criar tarefa
        Then o sistema deve retornar a tarefa criada com sucesso

    Scenario: Listar tarefas
        When eu faço uma solicitação para a consulta de tarefas
        Then o sistema deve retornar as tarefas com sucesso
        
    Scenario: Consultar tarefa por nome
        When eu faço uma solicitação para a consulta de uma tarefa pelo nome
        Then o sistema deve retornar a tarefa com sucesso

    Scenario: Edição tarefa por ID
        When eu faço uma solicitação para a conclusão de tarefa
        Then o sistema deve editar a tarefa com sucesso

    Scenario: Exclusão de tarefa pelo nome
        When eu faço uma solicitação para a exclusão de tarefa
        Then o sistema deve excluir a tarefa com sucesso

    Scenario: Exclusão de tarefa pelo ID
        When eu faço uma solicitação para a exclusão de tarefa pelo ID
        Then o sistema deve excluir a tarefa com sucesso