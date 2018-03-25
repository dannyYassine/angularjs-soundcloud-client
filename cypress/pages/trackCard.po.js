
export function TrackCardPageObject() {

    this.clickUserDetailLink = function (childNumber = 1) {
        if (childNumber <= 0) {
            childNumber = 1;
        }
        cy.get(`[e2e-track]:nth-child(${childNumber}) .e2e-user-detail > #title`)
            .click();
    };

    this.testShouldHaveUserHrefInTrack = function () {
        cy.get('[e2e-track] .e2e-user-detail').then(($el) => {
            let regExp = RegExp('/users/[0-9]*$');
            expect(regExp.test($el.attr('href'))).to.equal(true, 'href contains user detail route');
        })
    };
}