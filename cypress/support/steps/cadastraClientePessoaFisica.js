/* global Given, Then, When */

import acessaHomeSteps from '../pageobjects/acessaHomePageObjects'
import cadastraClientePessoaFisica from '../pageobjects/cadastraClientePageObjects'

const acessaHome = new acessaHomeSteps
const cadastraclientePF = new cadastraClientePessoaFisica

Given("acesso o site da livraria saraiva", () => {
    acessaHome.acessaSite();
    acessaHome.acessaCadastro();
})

When("realizo o cadastro do cliente pessoa fisica com dados validos", () => {
    cadastraclientePF.cadastraClientePessoaFisica();
    cadastraclientePF.finalizarCadastro();
})

Then("eu vejo mensagem de sucesso no cadastro do cliente", () => {
    acessaHome.validaCadastroClientePF();
})