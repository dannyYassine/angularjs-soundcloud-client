
export function PlayerPage() {

    this.playSong = function () {
        cy.get('.player .player-play')
            .click();
    };

    this.pauseSong = function () {
        cy.get('.player .player-play')
            .click();
    };

    this.stopSong = function () {
        cy.get('.player .player-stop')
            .click();
    };

    this.shouldBeVisible = function () {
        cy.get('.player')
            .should('be.visible');
    };

    this.shouldBePlaying = function () {
        cy.get('.player .fa-pause')
            .should('be.visible');
    };

    this.shouldBePaused = function () {
        cy.get('.player .fa-play')
            .should('be.visible');
    };

    this.shouldBeHidden = function () {
        cy.get('.player')
            .should('not.be.visible');
    };
}