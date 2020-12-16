
    import elementoCadastro from '../elements/FormularioCadastroElements'

    const elementocadastro = new elementoCadastro;

    class cadastraClientePageObjects{
                
        cadastraClientePessoaFisica(){
            cy.get(elementocadastro.txtPrimeiroNome()).type('Pedro');
            cy.get(elementocadastro.txtSobrenome()).type('Silva Novaes');
            cy.get(elementocadastro.txtEmail()).type('pedro.novaes@gmail.com');
            cy.get(elementocadastro.txtSenha()).type('pedro#novaes10');
            cy.get(elementocadastro.txtConfirmaSenha()).type('pedro#novaes10');
            cy.get(elementocadastro.txtCPF()).type('17641116485');
            cy.get(elementocadastro.radioMasculino()).click();
            cy.get(elementocadastro.txtDataNascimento()).type('05101979');
            cy.get(elementocadastro.txtCelular()).type('21952321495');
            cy.get(elementocadastro.txtCEP()).type('20720010');
            cy.get(elementocadastro.txtNumero()).type('413');
            cy.get(elementocadastro.txtTelefoneContato()).type('21968574123');
            
        }

        finalizarCadastro(){
            cy.get(elementocadastro.btnFinalizarCadastro()).click();
        }
        
        
        validarCadastroCliente(){
            
        }

    }

    export default cadastraClientePageObjects;