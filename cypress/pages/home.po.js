import {TrackCardPageObject} from "./trackCard.po";

export function HomePageObject() {
    this.go = function () {
        cy.visit('/');
    };

    this.routeTracks = function () {
        cy.server();
        cy.route('GET', '/tracks*')
            .as('getTracks');
    };

    this.waitTracks = function () {
        cy.wait('@getTracks');
    };

    this.playSong = function () {
        cy.get('[e2e-track]:nth-child(2) .e2e-play-btn')
            .click();
    };

    this.testShouldBeVisible = function () {
        cy.get('.home')
            .should('be.visible');
    };

    this.testShouldHaveUserHrefInTrack = function () {
        let trackCard = new TrackCardPageObject();
        trackCard.testShouldHaveUserHrefInTrack();
    };

    this.testShouldHaveSongs = function () {
        cy.get('[e2e-track]')
            .should('have.length.above', 0);
    };

}