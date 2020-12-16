Feature: Cadastro de cliente pessoa fisica

    Scenario: Cadastrar cliente pessoa fisica inserindo dados válidos
        Given acesso o site da livraria saraiva
        When realizo o cadastro do cliente pessoa fisica com dados validos
        Then eu vejo mensagem de sucesso no cadastro do cliente