
export function HomePage() {
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

    this.testShouldHaveUserHrefInTrack = function () {
        cy.get('[e2e-track] .e2e-user-detail').then(($el) => {
            let regExp = RegExp('/users/[0-9]*$');
            expect(regExp.test($el.attr('href'))).to.equal(true, 'href contains user detail route');
        })
    };

    this.testShouldHaveSongs = function () {
        cy.get('[e2e-track]')
            .should('have.length.above', 0);
    };

}