
export function NavHeaderPageObject() {

    this.clickFeature = function () {
        cy.get('.header-nav a[href="/featured"]')
            .click();
    };

    this.clickSearch = function () {
        cy.get('.header-nav a[href="/search"]')
            .click();
    };

    this.testShouldHaveHrefForLinkedin = function () {
        cy.get('.header-nav a[href^="https://www.linkedin.com/"]')
            .should('be.visible');
    };

    this.testShouldHaveHrefForGithub = function () {
        cy.get('.header-nav a[href^="https://github.com/"]')
            .should('be.visible');
    };
}