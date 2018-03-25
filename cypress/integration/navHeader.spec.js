import {NavHeaderPageObject} from "../pages/navHeader.po";

describe('Nav Header', function () {

    let navHeader;

    beforeEach(() => {
        navHeader = new NavHeaderPageObject();
        cy.visit('/');
    });

    it('should contain href to navigate to Linkedin', function () {
        navHeader.testShouldHaveHrefForLinkedin();
    });

    it('should contain href to navigate to github', function () {
        navHeader.testShouldHaveHrefForGithub();
    });

});