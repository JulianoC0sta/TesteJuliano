/// <reference types="cypress" />

import Logon from '../support/pages';
import ELEMENTS from '../support/pages';

describe('Testes Automatizados Livelo', () => {
    before(() => {

        Logon.acessarLogin();
          
    })

    it('Deve pesquisar um item e fechar pedido', () => {
       
        Logon.fluxoFechaPedido();

    })

    it('Deve acionar o chat online e "bater um papo"', () => {
        Logon.acessarLogin();
        Logon.batePapoChat();
        Logon.avaliacaoAtendimento();  
    })

    it('Deve realizar uma navegação pelo sistema(abas e menus)', () => {
        Logon.navegarMenusFechaMenus();
        Logon.validaUrlComprePontos();
        Logon.inicioPagina();  
    })
})
