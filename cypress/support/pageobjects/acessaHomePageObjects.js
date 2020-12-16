
    import home from '../elements/HomeElements'

    const elementoHome = new home;

    class acessaHomePageObjects{    
    
        acessaSite(){
            cy.visit('https://saraiva.com.br');
        }

        acessaCadastro(){
            cy.get(elementoHome.btnAcessaCadastro()).click();
            cy.get(elementoHome.btnAcessoCadastroPF()).click();
            cy.get(elementoHome.btnCadastrarCliente()).click();        
        }

        validaCadastroClientePF(){
            cy.get(elementoHome.txtNomeCliente).contains('Joao');
        }
    }

    export default acessaHomePageObjects;