@gui @homepage

Feature: GUI homepage Mark L

    Webapp deve estar online

    Background: 
        Given Eu estou na página da Mark L

    Scenario:  Validar título da página
        Then o título deve ser 'Gerencie suas tarefas com Mark L'

    Scenario: Validar os cabeçalhos da lista
        Then o cabeçalho da lista deve conter 'Created Tasks' e 'Done Tasks'

    Scenario: Validar campo Add a new task e botão Create
        Then a página deve conter o campo Add a new task e o botão Create  