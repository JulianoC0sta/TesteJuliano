//acoes de interacoes com a pagina



class Logon {
    acessarLogin(){
        cy.visit('https://www.livelo.com.br/')
    }

    navegarMenusFechaMenus(){
        cy.get('#div-itemTextUse').click();
        cy.get('#div-mobile-first-level-menu-1 > .menus-mobile__popup-controls-close >').click()
        cy.get('#img-brand').should('be.visible');
        cy.get('#div-itemTextPurchase').click();
        cy.get('#div-mobile-first-level-menu-2 > .menus-mobile__popup-controls-close >').click()
        cy.get('#img-brand').should('be.visible');
        cy.get('#div-itemTextTransfer').click();
        cy.get('#div-mobile-first-level-menu-3 > .menus-mobile__popup-controls-close >').click()
        cy.get('#img-brand').should('be.visible');
        cy.get('#div-itemTextMore').click();
        cy.get('#a-mobile-second-level-menu-4-1').should('be.visible').click();

    }

    validaUrlComprePontos(){
        cy.url()
        .should('be.equal', 'https://www.livelo.com.br/compra-de-pontos/produto/LIVCompraDePontos?skuId=LIVSKUCompraDePontos')
    }

    inicioPagina(){
        cy.get('#i-arrowLeftMore').click();
        cy.get('#img-brand').should('be.visible');
    }

    fluxoFechaPedido(){
        cy.get('[data-bind="text: $parent.searchBarTextLabel"]').type('talheres', { forces: true });

        cy.get('#span-searchIcon').click();
        cy.wait(4000)

        cy.get('.box-card').first().click()
        cy.wait(4000)
        cy.get('#span-productId').should('be.visible');

        cy.get('#EXT11336009 > #CC-prodDetails-addToCart > .button').click({ forces: true });

        cy.get('#ctaCheckout').should('be.visible').click();
    }

    batePapoChat(){
        cy.get('#chat-livelo-logo').should('be.visible').click();

        cy.get('#msg_to_send').type('Olá bom dia preciso de ajudar para efetuar uma comprar')
        cy.get('.lv-chatbox-sendbtn').click();
        
        cy.get('#msg_to_send').type('teste')
        cy.get('.lv-chatbox-sendbtn').click();
       
        cy.get('#msg_to_send').type('Valew até a próxima')
        cy.get('.lv-chatbox-sendbtn').click();
    }

    avaliacaoAtendimento(){
        cy.get('[src="https://www.pontoslivelo.com.br/livelo_chat/js/assets/webpack/97e1bb51a49a588b17f6a245fb3a90d8.svg"]').click()
        cy.get('[for="10"]').click();

        cy.get(':nth-child(2) > .lv-container-nps-reason-content-checklist-label-text').click()
        cy.get('#lv-tab-textarea-nps').type('Qa Testes automatizados');
        cy.get('#btn_send').click();
        cy.get('#btn_end').click();
    }
}

export default new Logon();
