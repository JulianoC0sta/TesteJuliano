/// <reference types="cypress" />

import Logon from '../support/pages';
import ELEMENTS from '../support/pages';

describe('Testes Automatizados Livelo', () => {
    beforeEach(() => {

        Logon.acessarLogin();
        cy.wait(10000)

        cy.get('#btn-authorizeCoookies').should('be.visible').click();
        cy.get('#img-brand').should('be.visible');   
    })

    it('Deve pesquisar um item e fechar pedido', () => {
        cy.reload();
        Logon.fluxoFechaPedido();

    })

    it('Deve acionar o chat online e "bater um papo"', () => {
        Logon.batePapoChat();
        Logon.avaliacaoAtendimento();  
    })

    it('Deve realizar uma navegação pelo sistema(abas e menus)', () => {
        Logon.navegarMenusFechaMenus();
        Logon.validaUrlComprePontos();
        Logon.inicioPagina();  
    })
})
